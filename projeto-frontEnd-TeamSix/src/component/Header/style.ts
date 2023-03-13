import styled from 'styled-components'

interface IStyledBackground{
    background: string
}

export const StyledHeader = styled.header<IStyledBackground>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${props=>props.background};
    align-items: center;
    height: 100px;
    h1{
        color: rgb(255, 255, 255);
        font-family: 'Inter', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 33px;
        padding: 0.5rem;
    }
    `
export const StyledDivProfile = styled.div`
    display: flex;
    padding: 0.5rem;
    gap: 10px;
    `

export const StyledDivImg = styled.div`
    height: 45px;
    border-radius: 50px;
    background: white;
    width: 45px;
    `

export const StyledButtonProfile = styled.button`
    border: none;
    background: transparent;
    color: white;
`
