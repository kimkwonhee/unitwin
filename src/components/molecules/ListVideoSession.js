import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'

const ListVideoSession = ({down, height, discription}) => {
    return (
        <Wrapper>
            <VideoArea height={height}>
                <div>비디오영상</div>
            </VideoArea>
            {/* <Description>우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데, 예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한 자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을 불러 일으킬 것입니다.</Description> */}
            {/* <Downlodebtn down={down} width="146px" >강의자료 다운로드</Downlodebtn> */}
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

const Downlodebtn = styled(Videobtn)`
    display : ${(props) => props.down == 'disabled' ? 'none' : null};
`

export default ListVideoSession