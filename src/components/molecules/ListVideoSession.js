import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../atom/Downloadbtn'
import color from '../../style/color'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import Test from './Test'
import { useSelector } from 'react-redux'

const ListVideoSession = ({down, height, discription, youtube}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    return (
        <>
            {/* PC */}
            <PWrapper>
                <PVideoArea height={height}>
                    <iframe 
                       width="100%" height="100%" 
                       src={youtube} frameBorder="0"
                       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen>      
                    </iframe>
                </PVideoArea>
                <PDescription>{discription}</PDescription>
                <PDFDownloadLink 
                    document={<Test />} 
                    fileName="somename.pdf"
                    >
                    <PDownlodebtn down={down}>{curlang.p_data.classdownload}</PDownlodebtn>
                </PDFDownloadLink>
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
`
const PDownlodebtn = styled(Downloadbtn)`
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

const MVideoArea = styled.div`
    width: 100%;
    max-width : 375px;
    padding-top: 56.26%;
`

export default ListVideoSession