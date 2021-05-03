import React from 'react'
import styled from 'styled-components'

const Unitwinbtn = ({className, homebtn}) => {
    return (
        <Wrapper className={className} homebtn={homebtn}>
            <Text>유니트윈 홈페이지 바로가기</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    width: 192px;
    height: 36px;
    display : ${props => props.homebtn ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: var(--white);
`
const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--turtle-green);
`

export default Unitwinbtn