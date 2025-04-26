import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnomalyTitle } from "../anomaly/AnomalyTitle";
import { InverterTitle } from "../inverter/InverterTitle";
import { TimeSeriesDataTitle } from "../timeSeriesData/TimeSeriesDataTitle";

export const StringModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="anomalies" reference="Anomaly">
          <SelectArrayInput
            optionText={AnomalyTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="identifier" source="identifier" />
        <ReferenceInput
          source="inverter.id"
          reference="Inverter"
          label="Inverter"
        >
          <SelectInput optionText={InverterTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="timeSeriesDataItems"
          reference="TimeSeriesData"
        >
          <SelectArrayInput
            optionText={TimeSeriesDataTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
