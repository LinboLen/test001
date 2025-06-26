import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelperServiceBase } from "./base/helper.service.base";

@Injectable()
export class HelperService extends HelperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
