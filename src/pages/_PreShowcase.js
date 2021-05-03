import React from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'

const _PreShowcase = () => {

    const topcontents = {
        title : '기획세션',
        contents : '과학기술을 접목한 기술융합예술 활성화를 위해 디지털과 동시대 기술을 활용한\n'
                    +'예술작품 창작과 향유, 기초예술의 온라인 확장 등 미래예술 발전을 위해 다양한 추진하고 있습니다.'
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

export default _PreShowcase