import { Collapse, Input, Space } from "antd"

export const ChildComponent = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
      };
    return(
        <>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Collapse.Panel header="User" key="1">
        <Space direction="vertical">
        <Input placeholder="Username"/>
        <Input placeholder="Password"/>
        </Space>
        </Collapse.Panel>
        </Collapse>
       </>

    )
}