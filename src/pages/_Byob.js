import React from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'

const _Byob = () => {

    const topcontents = {
        title : 'BYOB',
        contents : '4차 산업혁명을 말하지 않더라도 예술과 기술 융합은 오랜 기간 다양한 모습으로 이루어져왔습니\n'
                    +'다. 지금까지의 예술·기술 융합을 되짚어보고 미래의 예술·기술 융합을 생각해 보는 시간. 단순히\n'
                    +'화려한 기술 트렌드를 소개하는 것이 아닌, 예술 중심의 예술·기술 융합을 펼쳐나가기 위한 철학과\n'
                    +'인사이트를 나누는 기회가 될 것입니다.'
    }


    return (
        <Wrapper>
            <Inner>
                <PageTopArea 
                    title={topcontents.title} 
                    contents={topcontents.contents}
                />
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom : 200px;
    display : flex;
    justify-content : center;
`

const Inner = styled.div`
    width : 1200px;
`

export default _Byob