import React from 'react'
import styled from 'styled-components'

const Calendarbtn = ({id, title, calendar, status, onClick}) => {

    return (
        <Wrapper
            id={id}
            onClick={onClick}
            status={status}
            >
            <Title>{title}</Title>
            <Sub>{calendar}</Sub>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 282px;
    height : 62px;
    border: solid 2px var(--black);
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${(props) => (props.id == props.status) ? 'var(--black)' : 'var(--white)'};
    cursor: pointer;
    color: ${(props) => (props.id == props.status) ? 'var(--white)' : 'var(--black)'};

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right : 20px;
`

const Sub = styled.div`
    font-size: 20px;
`

export default Calendarbtn