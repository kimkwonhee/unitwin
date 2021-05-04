import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../atom/Downloadbtn'

const ListVideoSession = ({down, height, discription}) => {
    return (
        <Wrapper>
            <VideoArea height={height}>
                <div>비디오영상</div>
            </VideoArea>
            <Description>{discription}</Description>
            <PDownlodebtn down={down}>강의자료 다운로드</PDownlodebtn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
`

const VideoArea = styled.div`
    height : ${props => props.height || '450px;'};
    background-color : purple;
`
const Description = styled.div`
     padding : 20px 0px;
     font-size: 16px;
     font-weight: 500;
     color: var(--black);
`
const PDownlodebtn = styled(Downloadbtn)`
`

export default ListVideoSession