import React from 'react'
import styled from 'styled-components'
import Videobtn from '../components/atom/Videobtn'
import character1 from '../images/plense_img01.png'
import character2 from '../images/plense_img02.png'

const _PlenarySession = () => {
    return (
        <Wrapper>
            <ContentsArea>
                <TopArea>
                    <TopTitleArea>
                        <TopTitle>기조발제</TopTitle>
                    </TopTitleArea>
                    <TopContents>
                    우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데,<br />
                    예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한<br />
                    자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을<br />
                    불러 일으킬 것입니다.
                    </TopContents>
                </TopArea>
                <MiddleArea>
                    <Section>
                        <Inner>
                            <Imgblock>
                                <img src={character1} alt="벤야민 요리슨" />
                            </Imgblock>
                            <Textblock>
                                <LeftArea>
                                <Title>예술교육 2.0의 다양성</Title>
                                <Time>05.25(화) 13:00-13:40</Time>
                                <Name>벤야민 요리슨 <EnName>(Benjamin Jorissen)</EnName></Name>
                                <Jop>- 뮌헨 미술원 선임연구원</Jop>
                                </LeftArea>
                                <Videobtn>영상보기</Videobtn>
                            </Textblock>
                        </Inner>
                    </Section>
                    <Section>
                        <Inner>
                            <Imgblock>
                                <img src={character2} alt="벤야민 요리슨" />
                            </Imgblock>
                            <Textblock>
                                <LeftArea>
                                    <Title>예술 교육의 과제로서의 “문화적 회복력”과 ”미적 회복력”:<br />
                                    문화적 지속가능성 교육학을 위한 회복 컨셉에 대한 범위와 한계</Title>
                                    <Time>05.26(수) 13:00 - 13:40</Time>
                                    <Name>벤야민 요리슨 <EnName>(Benjamin Jorissen)</EnName></Name>
                                    <Jop>- 세계문화예술 발제자</Jop>
                                </LeftArea>
                                <Videobtn>영상보기</Videobtn>
                            </Textblock>
                        </Inner>
                    </Section>
                </MiddleArea>
            </ContentsArea>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width : 100%;
    height : 1200px;
    display : flex;
    justify-content : center;
`
const ContentsArea = styled.div`
    width : 1200px;
`

// Top
const TopArea = styled.div`
    width : 100%;
    margin-top : 180px;
    display : flex;
`
const TopTitleArea = styled.div`
    width : 248px;
    padding-top : 12px;
    border-top : 4px solid var(--black);
    margin-right : 60px;
`
const TopTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    color: var(--black);
`
const TopContents = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--black);
`

// Middle
const MiddleArea = styled.div`
    width : 1200px;
    height : auto;
    margin-top : 160px;
    border-top : 4px solid var(--turtle-green);
`
const Section = styled.div`
    height : 315px;
    padding : 0 20px 0 20px;
    border-bottom : 1px solid var(--turtle-green);
    display : flex;
    align-items : center;
`
const Inner = styled.div`
    width : 100%;
    height : 235px;
    display : flex;
`
const Imgblock = styled.div`
    width : 235px;
    height : 235px;
    margin-right : 40px;
`
const Textblock = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
`
const LeftArea = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom : 8px;
    color: var(--black);
`
const Time = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom : 40px;
    color: var(--black);
`
const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom : 8px;
    color: var(--black);
`
const EnName = styled.span`
    font-size: 14px;
    font-weight: normal;
    line-height: 1.57;
    color: var(--brown-grey);
`
const Jop = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.57;
    color: var(--black);
`

export default _PlenarySession