import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Preregistrationbtn2 = ({className, children, link}) => {
    return (
        <Wrapper className={className} href={link} target='_blank' download>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.a`
    width : 248px;
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
`

export default Preregistrationbtn2