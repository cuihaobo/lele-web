import { Layout } from "antd";
import "./App.css";
import { TextMenu, TopNavigation } from "./components/TopNavigation";
import { RouterMap } from "./RouterMap";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function App() {
  return (
    <>
      <TopNavigation />
      <Layout style={{ height: "100vh" }}>
        <Sider>
          <TextMenu />
        </Sider>
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