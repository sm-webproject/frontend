import { Input, Space } from "antd";
import React from "react";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Searchbar = () => {
  return (
    <Space direction="vertical">
      <Search onSearch={onSearch} placeholder="" style={{ width: 400 }} />
    </Space>
  );
};

export default Searchbar;
