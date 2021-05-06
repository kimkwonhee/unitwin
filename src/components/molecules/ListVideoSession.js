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
                    <iframe 
                       width="100%" height="100%" 
                    src="https://www.youtube.com/embed/PdX_kOdePVY" frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>      
                    </iframe>
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
    width: 375px;
    display : block;
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MVideoArea = styled.div`
    width: 100%;
    max-width : 375px;
    padding-top: 56.26%;
    background-color : purple;
`

export default ListVideoSession