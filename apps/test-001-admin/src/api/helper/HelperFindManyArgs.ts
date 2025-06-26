import { HelperWhereInput } from "./HelperWhereInput";
import { HelperOrderByInput } from "./HelperOrderByInput";

export type HelperFindManyArgs = {
  where?: HelperWhereInput;
  orderBy?: Array<HelperOrderByInput>;
  skip?: number;
  take?: number;
};
