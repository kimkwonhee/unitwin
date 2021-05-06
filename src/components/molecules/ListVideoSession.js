import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../atom/Downloadbtn'
import color from '../../style/color'

const ListVideoSession = ({down, height, discription}) => {
    return (
        <>
            {/* PC */}
            <PWrapper>
                <PVideoArea height={height}>
                    <div>비디오영상</div>
                </PVideoArea>
                <PDescription>{discription}</PDescription>
                <PDownlodebtn down={down}>강의자료 다운로드</PDownlodebtn>
            </PWrapper>

            {/* Mobile */}
            <MWrapper>
                <MVideoArea height={height}>
                    <div>비디오영상</div>
                </MVideoArea>
            </MWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    display : block;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PVideoArea = styled.div`
    height : ${props => props.height || '450px;'};
    background-color : purple;
`
const PDescription = styled.div`
     padding : 20px 0px;
     font-size: 16px;
     font-weight: 500;
     color: ${color.black};
`
const PDownlodebtn = styled(Downloadbtn)`
`

// Movile
const MWrapper = styled.div`
    width : 375px;
    display : block;
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MVideoArea = styled.div`
    height : 211px;
    background-color : purple;
`

export default ListVideoSession