import { FormProps } from "antd"
import { Form as AntForm } from "antd"
import React from "react"




const Form: React.FC<FormProps> = ({children, ...props}) => {
  return (
    <AntForm {...props}>{children as React.ReactNode}</AntForm>
  )
}

export default Form;
