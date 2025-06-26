import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HelperModuleBase } from "./base/helper.module.base";
import { HelperService } from "./helper.service";
import { HelperController } from "./helper.controller";
import { HelperResolver } from "./helper.resolver";

@Module({
  imports: [HelperModuleBase, forwardRef(() => AuthModule)],
  controllers: [HelperController],
  providers: [HelperService, HelperResolver],
  exports: [HelperService],
})
export class HelperModule {}
