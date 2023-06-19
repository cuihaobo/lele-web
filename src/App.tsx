import { Layout } from "antd";
import "./App.css";
import { TextMenu } from "./components/TopNavigation";
import { RouterMap } from "./RouterMap";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function App() {
  return (
    <>
      <TextMenu />
      <Layout style={{ height: "100vh" }}>
        <Sider></Sider>
        <Content>
        <Layout>
          <Content style={{ padding: '20px' }}>
              <RouterMap />
          </Content>
        </Layout>
        </Content>
      </Layout>
    </>
  );
}

export default App;