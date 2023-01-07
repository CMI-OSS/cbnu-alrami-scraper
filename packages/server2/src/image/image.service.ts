import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Article } from "src/article/entities/article.entity";
import { AwsService } from "src/aws/aws.service";
import { In, Repository } from "typeorm";

import { Image } from "./entities/image.entity";

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    private awsService: AwsService,
  ) {}

  async upload(images: Express.Multer.File[]): Promise<Image[]> {
    const imageUrls = this.awsService.uploadImages(images);

    const response = await this.imageRepository.save(
      (await imageUrls).map((image) => ({ url: image })),
    );

    return response;
  }

  async updateArticleImages(
    article: Article,
    imageIds: number[],
  ): Promise<Image[]> {
    const images = await this.imageRepository.find({
      where: { id: In(imageIds) },
    });

    return this.imageRepository.save(
      images.map((image) => ({ ...image, article })),
    );
  }
}
