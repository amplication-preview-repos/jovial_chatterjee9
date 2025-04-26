import { StringModelWhereInput } from "./StringModelWhereInput";
import { StringModelOrderByInput } from "./StringModelOrderByInput";

export type StringModelFindManyArgs = {
  where?: StringModelWhereInput;
  orderBy?: Array<StringModelOrderByInput>;
  skip?: number;
  take?: number;
};
