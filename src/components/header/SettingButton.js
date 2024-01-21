import React from 'react'
import { SettingOutlined } from "@ant-design/icons";
import { Button, Dropdown } from 'antd';



const items = [
  {
    label : "1st",
    key : "0"
  },
  {
    label : "2st",
    key : "1"
  },
  {
    label : "3st",
    key : "2"
  }
]

const SettingButton = () => {

  return (
    <Dropdown menu={{items}} trigger={["click"]}placement="bottomRight">
      <Button type="primary" size="large" icon={ <SettingOutlined /> }/>
    </Dropdown>
  )
}

export default SettingButton