import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SolarInstallationTitle } from "../solarInstallation/SolarInstallationTitle";
import { StringModelTitle } from "../stringModel/StringModelTitle";

export const InverterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="model" source="model" />
        <TextInput label="serialNumber" source="serialNumber" />
        <ReferenceInput
          source="solarInstallation.id"
          reference="SolarInstallation"
          label="SolarInstallation"
        >
          <SelectInput optionText={SolarInstallationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="strings" reference="StringModel">
          <SelectArrayInput
            optionText={StringModelTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
