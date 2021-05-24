import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Preregistrationbtn2 = ({className, children, link}) => {
    return (
        <>
            <PWrapper className={className} href={link} target='_blank' download>
            {children}
            </PWrapper>

            <MWrapper className={className} href={link} target='_blank' download>
            {children}
            </MWrapper>
        </>
    )
}

const PWrapper = styled.a`
    width : 320px;
    height : 62px;
    border: solid 2px ${color.black};
    display : flex;
    justify-content : center;
    align-items : center;
    text-decoration : none;
    transition: .6s;
    font-size: 20px;
    font-weight: bold;
    text-decoration : none;
    color: ${color.black};

    &:hover {
        border: solid 2px ${color.black};
        background-color: black;
        color: ${color.white};
    }

    @media all and (max-width:1199px) {
        display : none;
    }
`

const MWrapper = styled.a`
    width : 168px;
    height : 48px;
    border: solid 2px ${color.black};
    display : flex;
    justify-content : center;
    align-items : center;
    text-decoration : none;
    transition: .6s;
    font-size: 14px;
    font-weight: bold;
    text-decoration : none;
    color: ${color.black};
    text-align : center;
    line-height : 1.3;

    &:hover {
        border: solid 2px ${color.black};
        background-color: black;
        color: ${color.white};
    }

    @media all and (min-width:1200px) {
        display : none;
    }
`

export default Preregistrationbtn2