import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../atom/Downloadbtn'
import Downloadbtn2 from '../atom/Downloadbtn2'
import color from '../../style/color'
import { useSelector } from 'react-redux'


const ListVideoSession = ({down, abdown, height, discription, youtube, downlink, abdownlink}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    return (
        <>
            {/* PC */}
            <PWrapper>
                <PVideoArea height={height}>
                    <PIfram 
                       width="100%" height="100%" 
                       src={youtube} frameBorder="0"
                       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen>      
                    </PIfram>
                </PVideoArea>
                <PDescription>{discription}</PDescription>
                <PDownloadArea>
                    <PDownlodebtn downlink={downlink} down={down}>{curlang.p_data.classdownload}</PDownlodebtn>
                    <PDownlodebtn2 downlink={abdownlink} down={abdown}>{curlang.p_data.abdownload}</PDownlodebtn2>
                </PDownloadArea>
            </PWrapper>

            {/* Mobile */}
            <MWrapper>
                    <iframe 
                       width="100%" height="100%" 
                       src={youtube} frameBorder="0"
                       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen>      
                    </iframe>
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
     word-break : keep-all;
`
const PDownlodebtn = styled(Downloadbtn)`
    margin-right : 16px;
`
const PDownlodebtn2 = styled(Downloadbtn2)`
`
const PIfram = styled.iframe`
`
const PDownloadArea = styled.div`
    display : flex;
`

// Movile
const MWrapper = styled.div`
    height : ${props => props.height || '211px;'};
    width : 375px;
    display : block;
    @media all and (min-width:1200px) {
        display : none;
    }
`

export default ListVideoSession