import { AnomalyWhereInput } from "./AnomalyWhereInput";
import { AnomalyOrderByInput } from "./AnomalyOrderByInput";

export type AnomalyFindManyArgs = {
  where?: AnomalyWhereInput;
  orderBy?: Array<AnomalyOrderByInput>;
  skip?: number;
  take?: number;
};
