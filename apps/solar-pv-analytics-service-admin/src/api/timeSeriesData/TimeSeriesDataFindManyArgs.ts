import { TimeSeriesDataWhereInput } from "./TimeSeriesDataWhereInput";
import { TimeSeriesDataOrderByInput } from "./TimeSeriesDataOrderByInput";

export type TimeSeriesDataFindManyArgs = {
  where?: TimeSeriesDataWhereInput;
  orderBy?: Array<TimeSeriesDataOrderByInput>;
  skip?: number;
  take?: number;
};
