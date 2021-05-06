import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

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
    border: solid 2px ${color.black};
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: ${(props) => (props.id === props.status) ? color.black : color.white};
    cursor: pointer;
    color: ${(props) => (props.id === props.status) ? color.white : color.black};

    &:hover {
        background-color: ${color.black};
        color: ${color.white};
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
    border: solid 1px ${color.black};
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
<<<<<<< HEAD
    background-color: ${(props) => (props.id === props.status) ? color.black : color.white};
    cursor: pointer;
    color: ${(props) => (props.id === props.status) ? color.white : color.black};
=======
    background-color: ${(props) => (props.id == props.status) ? 'var(--black)' : 'var(--white)'};
    cursor: pointer;
    color: ${(props) => (props.id == props.status) ? 'var(--white)' : 'var(--black)'};
>>>>>>> dev

    &:hover {
        background-color: ${color.black};
        color: ${color.white};
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