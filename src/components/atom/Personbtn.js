import React from 'react'
import styled from 'styled-components'

const Personbtn = ({src, name}) => {
    return (
        <Wrapper>
            <PrsImg src={src} alt={name}/>
            <Name>{name}</Name>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items: center;
`

const PrsImg = styled.div`
    cursor: pointer;
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background : url(${props => props.src});
    border: solid 3px var(--white);

    &:hover {
        border: solid 3px var(--turtle-green);
    }

`
const Name = styled.div`
    margin-top : 20px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`

export default Personbtn