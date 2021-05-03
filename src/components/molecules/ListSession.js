import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'

const ListSession = ({down}) => {
    return (
        <Wrapper>
            <Title>COVID-19 대유행 기간 동안 케냐 대학 학생들의<br />석방, 구호, 성찰 및 복원을 촉진하기 위한 미술 치료 사용</Title>
            <Section>
                <Inner>
                    <Imgblock>         
                    </Imgblock>
                    <Textblock>
                        <Name>마리 클레어 키덴다 <EnName>(Mary Clare Kidenda)</EnName></Name>
                        <Jop>- 세계문화예술 발제자</Jop>
                        <Contents>
                        전세계적으로 정치적, 문화적 긴장이 고조되는 시대에 예술교육은 문화적 다양성을 심각하게 받아들이고 전세계의 이해당사자들을 진정한 대화에 끌어들여야만 “문화적 난제 해결”을 도울 수 있습니다.“예술교육 2.0의 다양성” 이라는 주제를 통해 이것이 어떻게 작용할 수 있는가에 대한 원칙을 제시할 것입니다.
                        </Contents>
                        <Downlodebtn down={down} width="146px" >강의자료 다운로드</Downlodebtn>
                    </Textblock>
                </Inner>
            </Section>
            <Title>COVID-19 대유행 기간 동안 케냐 대학 학생들의<br />석방, 구호, 성찰 및 복원을 촉진하기 위한 미술 치료 사용</Title>
            <Section>
                <Inner>
                    <Imgblock>         
                    </Imgblock>
                    <Textblock>
                        <Name>마리 클레어 키덴다 <EnName>(Mary Clare Kidenda)</EnName></Name>
                        <Jop>- 세계문화예술 발제자</Jop>
                        <Contents>
                        전세계적으로 정치적, 문화적 긴장이 고조되는 시대에 예술교육은 문화적 다양성을 심각하게 받아들이고 전세계의 이해당사자들을 진정한 대화에 끌어들여야만 “문화적 난제 해결”을 도울 수 있습니다.“예술교육 2.0의 다양성” 이라는 주제를 통해 이것이 어떻게 작용할 수 있는가에 대한 원칙을 제시할 것입니다.
                        </Contents>
                        <Downlodebtn down={down} width="146px" >강의자료 다운로드</Downlodebtn>
                    </Textblock>
                </Inner>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
`
const Title = styled.div`
    margin-top : 60px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`
const Section = styled.div`
    margin : 20px 0 20px 0;
    border-top : 1px solid var(--turtle-green);
`
const Inner = styled.div`
    width : 100%;
    padding-top : 20px;
    display : flex;
    /* background-color : red; */
`
const Imgblock = styled.div`
    width : 120px;
    height : 120px;
    margin-right : 40px;
    background-color : gray;
`
const Textblock = styled.div`
    width : 100%;
    /* background-color : purple; */
`
const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const EnName = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const Jop = styled.div`
    padding-top : 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
`
const Contents = styled.div`
    padding : 20px 0 20px 0;
    font-size: 12px;
    color: var(--black);
`

const Downlodebtn = styled(Videobtn)`
    display : ${(props) => props.down == 'disabled' ? 'none' : null};
`

export default ListSession