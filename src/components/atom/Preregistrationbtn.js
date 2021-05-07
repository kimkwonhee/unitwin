import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Preregistrationbtn = ({className, children, link}) => {
    return (
        <Wrapper className={className} href={link} target='_blank'>
            <Text>{children}</Text>
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
`
const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-decoration : none;
    color: ${color.black};
    &:hover {
        color: ${color.black};
    }
`

export default Preregistrationbtn