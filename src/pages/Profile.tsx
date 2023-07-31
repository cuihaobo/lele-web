import { ClockCircleOutlined } from "@ant-design/icons"
import { Timeline } from "antd"


export const Profile = () => {
    const item = {
        children: 'Lele\'s birthday.',

        dot: <ClockCircleOutlined />
    }
    const items = [
        item,
        item,
        item,
        item,
    ]
    return (
        <Timeline
            items={items}
        />
    )
}