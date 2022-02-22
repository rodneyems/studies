import React from "react";
import { TextInputProps } from 'react-native'
import { Container } from "./style";

export function Input({...rest} : TextInputProps){
  return(
    <Container {...rest}/>
  )
}