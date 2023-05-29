import { Card, Space } from 'antd';
import React from 'react';
import { ChildComponent } from './ChildComponents';

export const ParentComponent = () => {
    return(
        <Card title="Register" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <Space direction='vertical'>
        <ChildComponent/>
        <ChildComponent/>
        </Space>
        </Card>
    )
}