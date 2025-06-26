import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HelperWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
