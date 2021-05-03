import React from 'react'
import styled from 'styled-components'
import Videobtn from '../components/atom/Videobtn'
import character1 from '../images/plense_img01.png'
import character2 from '../images/plense_img02.png'
import PageTopArea from '../components/molecules/PageTopArea'

const _PlenarySession = () => {
    
    const topcontents = {
        title : '기조발제',
        contents : '우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데,\n'
                   +'예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한\n'
                   +'자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을\n'
                   +'불러 일으킬 것입니다.'
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={topcontents.title} 
                            contents={topcontents.contents}
                        />
                    <MiddleArea>
                        <Section>
                            <SectionArea>
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
                            </SectionArea>
                        </Section>
                        <Section>
                            <SectionArea>
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
                            </SectionArea>
                        </Section>
                    </MiddleArea>
                </PInner>
            </PWrapper>
        </>
    )
}


const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 210px;
    display : flex;
    justify-content : center;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PContents = styled(PageTopArea)`
    margin-top : 180px;
`
// Middle
const MiddleArea = styled.div`
    /* height : auto; */
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
const SectionArea = styled.div`
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