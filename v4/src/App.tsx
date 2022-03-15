// Packages
import { ReactElement } from "react";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate, PostShow } from "./resources/Posts";
import { UserList } from "./resources/Users";
import Dashboard from "./components/Dashbord";
import authProvider from "./authProvider";

const App = (): ReactElement=> (
  <Admin
    dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource name="users" icon={UserIcon} list={UserList} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);
export default App;
