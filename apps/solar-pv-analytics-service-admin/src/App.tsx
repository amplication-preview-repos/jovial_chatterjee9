import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InverterList } from "./inverter/InverterList";
import { InverterCreate } from "./inverter/InverterCreate";
import { InverterEdit } from "./inverter/InverterEdit";
import { InverterShow } from "./inverter/InverterShow";
import { SolarInstallationList } from "./solarInstallation/SolarInstallationList";
import { SolarInstallationCreate } from "./solarInstallation/SolarInstallationCreate";
import { SolarInstallationEdit } from "./solarInstallation/SolarInstallationEdit";
import { SolarInstallationShow } from "./solarInstallation/SolarInstallationShow";
import { TimeSeriesDataList } from "./timeSeriesData/TimeSeriesDataList";
import { TimeSeriesDataCreate } from "./timeSeriesData/TimeSeriesDataCreate";
import { TimeSeriesDataEdit } from "./timeSeriesData/TimeSeriesDataEdit";
import { TimeSeriesDataShow } from "./timeSeriesData/TimeSeriesDataShow";
import { StringModelList } from "./stringModel/StringModelList";
import { StringModelCreate } from "./stringModel/StringModelCreate";
import { StringModelEdit } from "./stringModel/StringModelEdit";
import { StringModelShow } from "./stringModel/StringModelShow";
import { AnomalyList } from "./anomaly/AnomalyList";
import { AnomalyCreate } from "./anomaly/AnomalyCreate";
import { AnomalyEdit } from "./anomaly/AnomalyEdit";
import { AnomalyShow } from "./anomaly/AnomalyShow";
import { McpContextList } from "./mcpContext/McpContextList";
import { McpContextCreate } from "./mcpContext/McpContextCreate";
import { McpContextEdit } from "./mcpContext/McpContextEdit";
import { McpContextShow } from "./mcpContext/McpContextShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Solar PV Analytics Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Inverter"
          list={InverterList}
          edit={InverterEdit}
          create={InverterCreate}
          show={InverterShow}
        />
        <Resource
          name="SolarInstallation"
          list={SolarInstallationList}
          edit={SolarInstallationEdit}
          create={SolarInstallationCreate}
          show={SolarInstallationShow}
        />
        <Resource
          name="TimeSeriesData"
          list={TimeSeriesDataList}
          edit={TimeSeriesDataEdit}
          create={TimeSeriesDataCreate}
          show={TimeSeriesDataShow}
        />
        <Resource
          name="StringModel"
          list={StringModelList}
          edit={StringModelEdit}
          create={StringModelCreate}
          show={StringModelShow}
        />
        <Resource
          name="Anomaly"
          list={AnomalyList}
          edit={AnomalyEdit}
          create={AnomalyCreate}
          show={AnomalyShow}
        />
        <Resource
          name="McpContext"
          list={McpContextList}
          edit={McpContextEdit}
          create={McpContextCreate}
          show={McpContextShow}
        />
      </Admin>
    </div>
  );
};

export default App;
