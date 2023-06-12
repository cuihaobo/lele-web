import { Layout } from "antd";
import "./App.css";
import { TopNavigation } from "./components/TopNavigation";
import { RouterMap } from "./RouterMap";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function App() {
  return (
    <>
      <TopNavigation />
      <Layout style={{ height: "100vh" }}>
        <Sider></Sider>
        <Content>
          <RouterMap />
        </Content>
      </Layout>
    </>
  );
}

export default App;
