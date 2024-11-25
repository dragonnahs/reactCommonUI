/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-11-25 11:58:28
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-11-25 15:47:21
 * @FilePath: \react-common-ui\src\components\Button\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import styled from 'styled-components';

export interface ButtonProps extends Omit<AntButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}



export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  let type: AntButtonProps['type'];
  
  switch (variant) {
    case 'secondary':
      type = 'default';
      break;
    case 'tertiary':
      type = 'text';
      break;
    default:
      type = 'primary';
  }

  return (
    <AntButton {...props} type={type}>{children}</AntButton>
  );
};