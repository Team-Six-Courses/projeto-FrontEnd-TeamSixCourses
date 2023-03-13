import React from 'react'
import { StyledButtonProfile, StyledDivImg, StyledDivProfile, StyledHeader } from './style'
import {AiOutlineDown} from 'react-icons/ai'


interface IHeaderProps{
  background: string
}
export const Header = ({background}:IHeaderProps) => {
  const token = localStorage.getItem('@TOKEN')
  return (
    <StyledHeader background={background}>
        <h1>Team Six Films</h1>
        {token?<StyledDivProfile>
          <StyledDivImg></StyledDivImg>
         <StyledButtonProfile><AiOutlineDown/></StyledButtonProfile>
        </StyledDivProfile>: null}
        
    </StyledHeader>
  )
}
