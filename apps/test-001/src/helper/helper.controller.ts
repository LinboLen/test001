import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HelperService } from "./helper.service";
import { HelperControllerBase } from "./base/helper.controller.base";

@swagger.ApiTags("helpers")
@common.Controller("helpers")
export class HelperController extends HelperControllerBase {
  constructor(
    protected readonly service: HelperService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
