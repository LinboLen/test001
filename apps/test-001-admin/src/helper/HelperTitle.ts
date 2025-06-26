import { Helper as THelper } from "../api/helper/Helper";

export const HELPER_TITLE_FIELD = "name";

export const HelperTitle = (record: THelper): string => {
  return record.name?.toString() || String(record.id);
};
