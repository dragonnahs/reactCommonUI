/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-11-25 15:48:25
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-11-25 15:49:42
 * @FilePath: \react-common-ui\src\components\Table\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TableProps } from "antd";
import React from "react";
import { Table as AntTable } from "antd";

const Table: React.FC<TableProps> = ({children, ...props}) => {
  return <AntTable {...props}>{children as React.ReactNode}</AntTable>;
};


export default Table;