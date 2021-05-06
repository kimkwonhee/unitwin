import React from 'react'
import styled from 'styled-components'

const Calendarbtn = ({id, title, calendar, status, onClick}) => {

    return (
        <>
            <PWrapper
                id={id}
                onClick={onClick}
                status={status}
                >
                <PTitle>{title}</PTitle>
                <PSub>{calendar}</PSub>
            </PWrapper>
            <MWrapper
                id={id}
                onClick={onClick}
                status={status}
                >
                <MTitle>{title}</MTitle>
                <MSub>{calendar}</MSub>
            </MWrapper>
        </>
        
    )
}

// PC
const PWrapper = styled.div`
    width : 282px;
    height : 62px;
    border: solid 2px var(--black);
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${(props) => (props.id === props.status) ? 'var(--black)' : 'var(--white)'};
    cursor: pointer;
    color: ${(props) => (props.id === props.status) ? 'var(--white)' : 'var(--black)'};

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right : 20px;
`
const PSub = styled.div`
    font-size: 20px;
`

// Mobile
const MWrapper = styled.div`
    width : 100%;
    height : 63px;
    border: solid 1px var(--black);
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-color: ${(props) => (props.id === props.status) ? 'var(--black)' : 'var(--white)'};
    cursor: pointer;
    color: ${(props) => (props.id === props.status) ? 'var(--white)' : 'var(--black)'};

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`

const MSub = styled.div`
    font-size: 10px;
`

export default Calendarbtn