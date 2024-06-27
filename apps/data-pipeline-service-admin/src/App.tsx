import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DatasourceList } from "./datasource/DatasourceList";
import { DatasourceCreate } from "./datasource/DatasourceCreate";
import { DatasourceEdit } from "./datasource/DatasourceEdit";
import { DatasourceShow } from "./datasource/DatasourceShow";
import { RuleList } from "./rule/RuleList";
import { RuleCreate } from "./rule/RuleCreate";
import { RuleEdit } from "./rule/RuleEdit";
import { RuleShow } from "./rule/RuleShow";
import { RuleConditionList } from "./ruleCondition/RuleConditionList";
import { RuleConditionCreate } from "./ruleCondition/RuleConditionCreate";
import { RuleConditionEdit } from "./ruleCondition/RuleConditionEdit";
import { RuleConditionShow } from "./ruleCondition/RuleConditionShow";
import { RuleActionList } from "./ruleAction/RuleActionList";
import { RuleActionCreate } from "./ruleAction/RuleActionCreate";
import { RuleActionEdit } from "./ruleAction/RuleActionEdit";
import { RuleActionShow } from "./ruleAction/RuleActionShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DataPipelineService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Datasource"
          list={DatasourceList}
          edit={DatasourceEdit}
          create={DatasourceCreate}
          show={DatasourceShow}
        />
        <Resource
          name="Rule"
          list={RuleList}
          edit={RuleEdit}
          create={RuleCreate}
          show={RuleShow}
        />
        <Resource
          name="RuleCondition"
          list={RuleConditionList}
          edit={RuleConditionEdit}
          create={RuleConditionCreate}
          show={RuleConditionShow}
        />
        <Resource
          name="RuleAction"
          list={RuleActionList}
          edit={RuleActionEdit}
          create={RuleActionCreate}
          show={RuleActionShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
