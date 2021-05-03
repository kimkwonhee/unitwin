import React from 'react'
import styled from 'styled-components'

const PlanSesionbtn = ({src, name,discription}) => {
    return (
        <Wrapper>
            <PlImg src={src} alt={name}/>
            <Name>{name}</Name>
            <Discription>{discription}</Discription>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
    margin-bottom : 40px;
`

const PlImg = styled.div`
    cursor: pointer;
    width : 180px;
    height : 180px;
    border-radius : 50%;
    background : url(${props => props.src});
    border: solid 3px var(--white);

    &:hover {
        border: solid 3px var(--turtle-green);
    }

`
const Name = styled.div`
    margin-top : 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`

const Discription = styled.div`
    margin-top : 8px;
    font-size: 12px;
    color: var(--black);
`

export default PlanSesionbtn