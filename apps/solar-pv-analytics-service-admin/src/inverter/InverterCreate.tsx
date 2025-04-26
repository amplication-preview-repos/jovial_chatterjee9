import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SolarInstallationTitle } from "../solarInstallation/SolarInstallationTitle";
import { StringModelTitle } from "../stringModel/StringModelTitle";

export const InverterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
