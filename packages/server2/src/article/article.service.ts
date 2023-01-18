import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardService } from "src/board/board.service";
import { ImageService } from "src/image/image.service";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";

import {
  DuplicatedArticleException,
  NotFoundArticleException,
} from "./article.exception";
import { CreateArticleDto } from "./dto/create-article.dto";
import {
  ResponseArticleDetailDto,
  ResponseArticleDto,
} from "./dto/response-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { Article } from "./entities/article.entity";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    private imageService: ImageService,
    private boardService: BoardService,
  ) {}

  async create({ imageIds, ...createArticleDto }: CreateArticleDto) {
    const board = await this.boardService.findOne(createArticleDto.boardId);

    if (createArticleDto.url) {
      const article = await this.findOneByUrl(createArticleDto.url);
      if (article) {
        throw new DuplicatedArticleException();
      }
    }

    const images = await this.imageService.findImages(imageIds ?? []);

    const article = await this.articleRepository.save({
      ...createArticleDto,
      board,
      images,
    });

    return article;
  }

  findAll() {
    return this.articleRepository.find();
  }

  async findBookmarkArticle(user: User) {
    const articles: Article[] = await this.articleRepository.find({
      where: {
        bookmarkUsers: {
          id: user.id,
        },
      },
      relations: {
        board: { parent: true },
        images: true,
        viewUsers: true,
        bookmarkUsers: true,
      },
      order: {
        dateTime: "DESC",
      },
    });
    return articles.map<ResponseArticleDto>(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ viewUsers, bookmarkUsers, content, author, ...article }) =>
        ({
          ...article,
          bookmarkCount: bookmarkUsers.length,
          viewCount: viewUsers.length,
        } as ResponseArticleDto),
    );
  }

  async findArticlePage(
    boardId: number,
    page: number,
    count: number,
  ): Promise<ResponseArticleDto[]> {
    const articles: Article[] = await this.articleRepository.find({
      where: {
        board: {
          id: boardId,
        },
      },
      relations: {
        board: { parent: true },
        images: true,
        viewUsers: true,
        bookmarkUsers: true,
      },
      order: {
        dateTime: "DESC",
      },
      take: count,
      skip: (page - 1) * count,
    });
    return articles.map<ResponseArticleDto>(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ viewUsers, bookmarkUsers, content, author, ...article }) =>
        ({
          ...article,
          bookmarkCount: bookmarkUsers.length,
          viewCount: viewUsers.length,
        } as ResponseArticleDto),
    );
  }

  async findOne(id: number, user?: User): Promise<ResponseArticleDetailDto> {
    const article = await this.articleRepository.findOne({
      where: { id },
      relations: {
        board: { parent: true },
        images: true,
        viewUsers: true,
        bookmarkUsers: true,
      },
    });

    if (!article) throw new NotFoundArticleException();

    const { bookmarkUsers, viewUsers, ..._ariticle } = article;

    return {
      ..._ariticle,
      isView: !!viewUsers.find((_user) => _user.id === user?.id),
      isBookmark: !!bookmarkUsers.find((_user) => _user.id === user?.id),
      bookmarkCount: bookmarkUsers.length,
      viewCount: viewUsers.length,
    } as ResponseArticleDetailDto;
  }

  findOneByUrl(url: string) {
    return this.articleRepository.findOne({ where: { url } });
  }

  async update(
    id: number,
    { boardId, imageIds, ...updateArticleDto }: UpdateArticleDto,
  ) {
    const target = await this.findOne(id);

    const board = boardId && (await this.boardService.findOne(boardId));

    const article = {
      ...updateArticleDto,
      ...(board && { board }),
    };

    if (imageIds) {
      const images = await this.imageService.findImages(imageIds);
      target.images = images;
      target.save();
    }

    return this.articleRepository.update(target.id, article);
  }

  async remove(id: number) {
    const article = await this.findOne(id);

    return this.articleRepository.remove(article);
  }

  async bookmark(id: number, user: User) {
    const article = await this.articleRepository.findOne({
      where: { id },
      relations: { bookmarkUsers: true },
    });

    if (!article) throw new NotFoundArticleException();

    article.bookmarkUsers = article.bookmarkUsers
      ? [ user, ...article.bookmarkUsers ]
      : [ user ];

    return article.save();
  }

  async unbookmark(id: number, user: User) {
    const article = await this.articleRepository.findOne({
      where: { id },
      relations: { bookmarkUsers: true },
    });

    if (!article) throw new NotFoundArticleException();

    article.bookmarkUsers = article.bookmarkUsers.filter(
      (_user) => _user.id !== user.id,
    );

    return article.save();
  }

  async view(id: number, user?: User) {
    if (!user) return false;

    const article = await this.articleRepository.findOne({
      where: { id },
      relations: { viewUsers: true },
    });

    if (!article) throw new NotFoundArticleException();

    article.viewUsers = article.viewUsers
      ? [ user, ...article.viewUsers ]
      : [ user ];

    return article.save();
  }
}