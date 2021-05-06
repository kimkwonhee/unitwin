import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Unitwinbtn = ({className, homebtn}) => {
    return (
        <>
            <PWrapper className={className} homebtn={homebtn} href='https://www.naver.com/'>
                <PText>유니트윈 홈페이지 바로가기</PText>
            </PWrapper>

            <MWrapper className={className} homebtn={homebtn} href='https://www.naver.com/'>
                <MText>유니트윈 홈페이지 바로가기 &nbsp; &#62;</MText>
            </MWrapper>
        </>
       
    )
}


const PWrapper = styled.a`
    cursor: pointer;
    width: 192px;
    height: 36px;
    display : ${props => props.homebtn ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.white};
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.turtle_green};
`

const MWrapper = styled.a`
    cursor: pointer;
    width: auto;
    height: 17px;
    display : ${props => props.homebtn ? 'flex' : 'none'};

    @media all and (min-width:1200px) {
        display : none;
    }
`

const MText = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${color.white};
`

export default Unitwinbtn