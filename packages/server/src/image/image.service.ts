import { Injectable } from "@nestjs/common";

import { AwsService } from "./aws.service";

@Injectable()
export class ImageService {
  constructor(private readonly awsService: AwsService) {}

  async uploadImages(images: Express.Multer.File[]): Promise<string[]> {
    return this.awsService.uploadImagesToS3(images);
  }
}