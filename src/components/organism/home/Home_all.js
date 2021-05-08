import React from 'react'
import styled from 'styled-components'
import color from '../../../style/color'
import { useSelector } from 'react-redux'

const Home_all = () => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    // PC
    const p_mon1 = curlang.p_data.home_all.session1.mon1;
    const p_tue1 = curlang.p_data.home_all.session2.tue1;
    const p_tue2 = curlang.p_data.home_all.session2.tue2;
    const p_tue3 = curlang.p_data.home_all.session2.tue3;
    const p_tue4 = curlang.p_data.home_all.session2.tue4;
    const p_tue5 = curlang.p_data.home_all.session2.tue5;
    const p_tue6 = curlang.p_data.home_all.session2.tue6;
    const p_wed1 = curlang.p_data.home_all.session3.wed1;
    const p_wed2 = curlang.p_data.home_all.session3.wed2;
    const p_wed3 = curlang.p_data.home_all.session3.wed3;
    const p_wed4 = curlang.p_data.home_all.session3.wed4;
    const p_wed5 = curlang.p_data.home_all.session3.wed5;
    const p_wed6 = curlang.p_data.home_all.session3.wed6;
    // const m_detaildata = curlang.m_data.home_all;

    // mobile
    const m_mon = curlang.m_data.home_all.session1;
    const m_tue = curlang.m_data.home_all.session2;
    const m_wed = curlang.m_data.home_all.session3;

    return (
        <>
            <PWrapper>
                <PSection1>
                    <PDayBlock>
                        <PDayText>{curlang.p_data.home_all.session1.day}</PDayText>
                    </PDayBlock>
                    <PMonSection1>
                            <PTime>{p_mon1.time1}</PTime>
                            <PTitle>{p_mon1.title1}</PTitle>
                            <PTime>{p_mon1.time2}</PTime>
                            <PTitle>{p_mon1.title2}</PTitle>
                            <PTime>{p_mon1.time3}</PTime>
                            <PTitle>{p_mon1.title3}</PTitle>
                            <PTime>{p_mon1.time4}</PTime>
                            <PTitle>{p_mon1.title4}</PTitle>
                            <PTime>{p_mon1.time5}</PTime>
                            <PTitle>{p_mon1.title5}</PTitle>
                            <PTime>{p_mon1.time5}</PTime>
                            <PTitle>{p_mon1.title6}</PTitle>
                            <PTime>{p_mon1.time5}</PTime>
                            <PTitle>{p_mon1.title7}</PTitle>
                            <PSubTitle>{p_mon1.title8}</PSubTitle>
                            <PTime>{p_mon1.time5}</PTime>
                            <PTitle>{p_mon1.title9}</PTitle>
                            {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PMonSection1>
                    <PMonSection2 />
                </PSection1>
                <PSection2>
                    <PDayBlock>
                        <PDayText>{curlang.p_data.home_all.session2.day}</PDayText>
                    </PDayBlock>
                    <PTueSection1>
                            <PTime>{p_tue1.text1}</PTime>
                            <PTitle>{p_tue1.text2}</PTitle>
                            <PSubTitle>{p_tue1.text3}</PSubTitle>
                            <PTueCharacter1>{p_tue1.text4}</PTueCharacter1>
                            <PPhasis1>{p_tue1.text5}</PPhasis1>
                            <PTueCharacter2>{p_tue1.text6}</PTueCharacter2>
                            {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PTueSection1>
                    <PTueSection2>
                            <PTime>{p_tue2.text1}</PTime>
                            <PTitle>{p_tue2.text2}</PTitle>
                            <PSubTitle>{p_tue2.text3}</PSubTitle>
                            <PPhasis1>{p_tue2.text4}</PPhasis1>
                            <PTueCharacter2>{p_tue2.text5}</PTueCharacter2>
                            <PPhasis2>{p_tue2.text6}</PPhasis2>
                            <PTueCharacter2>{p_tue2.text7}</PTueCharacter2>
                            {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PTueSection2>
                    <PTueSection3>
                            <PLeftArea>
                                <PTime>{p_tue3.text1}</PTime>
                                <PTitle>{p_tue3.text2}</PTitle>
                                <PSubTitle>{p_tue3.text3}</PSubTitle>
                                <PPhasis1>{p_tue3.text4}</PPhasis1>
                                <PTueCharacter2>{p_tue3.text5}</PTueCharacter2>
                                <PPhasis2>{p_tue3.text6}</PPhasis2>
                                <PTueCharacter2>{p_tue3.text7}</PTueCharacter2>
                                {/* <PMove>{curlang.p_data.move}</PMove> */}
                            </PLeftArea>
                            <PRightArea>
                                <PTime>{p_tue4.text1}</PTime>
                                <PTitle>{p_tue4.text2}</PTitle>
                                <PSubTitle>{p_tue4.text3}</PSubTitle>
                                <PPhasis1>{p_tue4.text4}</PPhasis1>
                                <PTueCharacter2>{p_tue4.text5}</PTueCharacter2>
                                <PPhasis2>{p_tue4.text6}</PPhasis2>
                                <PTueCharacter2>{p_tue4.text7}</PTueCharacter2>
                                {/* <PMove>{curlang.p_data.move}</PMove> */}
                            </PRightArea>
                    </PTueSection3>
                    <PTueSection4>
                        <PTime>{p_tue5.text1}</PTime>
                        <PTitle>{p_tue5.text2}</PTitle>
                        <PSubTitle>{p_tue5.text3}</PSubTitle>
                        <PPhasis1 top="40px">{p_tue5.text4}</PPhasis1>
                        <PTueCharacter2>{p_tue5.text5}</PTueCharacter2>
                        <PPhasis2 top="40px">{p_tue5.text6}</PPhasis2>
                        <PTueCharacter2>{p_tue5.text7}</PTueCharacter2>
                        {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PTueSection4>
                    <PTueSection5>
                        <PTime>{p_tue6.text1}</PTime>
                        <PTitle>{p_tue6.text2}</PTitle>
                        <PSubTitle>{p_tue6.text3}</PSubTitle>
                        {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PTueSection5>
                </PSection2>
                <PSection3>
                    <PDayBlock>
                        <PDayText>{curlang.p_data.home_all.session3.day}</PDayText>
                    </PDayBlock>
                    <PWedSection1>
                            <PTime>{p_wed1.text1}</PTime>
                            <PTitle>{p_wed1.text2}</PTitle>
                            <PSubTitle>{p_wed1.text3}</PSubTitle>
                            <PTueCharacter1>{p_wed1.text4}</PTueCharacter1>
                            <PPhasis1>{p_wed1.text5}</PPhasis1>
                            <PTueCharacter2>{p_wed1.text6}</PTueCharacter2>
                            {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PWedSection1>
                    <PWedSection2>
                            <PTime>{p_wed2.text1}</PTime>
                            <PTitle>{p_wed2.text2}</PTitle>
                            <PSubTitle>{p_wed2.text3}</PSubTitle>
                            <PPhasis1>{p_wed2.text4}</PPhasis1>
                            <PTueCharacter2>{p_wed2.text5}</PTueCharacter2>
                            <PPhasis2>{p_wed2.text6}</PPhasis2>
                            <PTueCharacter2>{p_wed2.text7}</PTueCharacter2>
                            {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PWedSection2>
                    <PWedSection3>
                            <PLeftArea>
                                <PTime>{p_wed3.text1}</PTime>
                                <PTitle>{p_wed3.text2}</PTitle>
                                <PSubTitle>{p_wed3.text3}</PSubTitle>
                                <PPhasis1>{p_wed3.text4}</PPhasis1>
                                <PTueCharacter2>{p_wed3.text5}</PTueCharacter2>
                                <PPhasis2>{p_wed3.text6}</PPhasis2>
                                <PTueCharacter2>{p_wed3.text7}</PTueCharacter2>
                                {/* <PMove>{curlang.p_data.move}</PMove> */}
                            </PLeftArea>
                            <PRightArea>
                                <PTime>{p_wed4.text1}</PTime>
                                <PTitle>{p_wed4.text2}</PTitle>
                                <PSubTitle>{p_wed4.text3}</PSubTitle>
                                <PPhasis1>{p_wed4.text4}</PPhasis1>
                                <PTueCharacter2>{p_wed4.text5}</PTueCharacter2>
                                <PPhasis2>{p_wed4.text6}</PPhasis2>
                                <PTueCharacter2>{p_wed4.text7}</PTueCharacter2>
                                {/* <PMove>{curlang.p_data.move}</PMove> */}
                            </PRightArea>
                    </PWedSection3>
                    <PWedSection4>
                        <PTime>{p_wed5.text1}</PTime>
                        <PTitle>{p_wed5.text2}</PTitle>
                        <PSubTitle>{p_wed5.text3}</PSubTitle>
                        <PPhasis1>{p_wed5.text4}</PPhasis1>
                        <PTueCharacter2>{p_wed5.text5}</PTueCharacter2>
                        <PPhasis2>{p_wed5.text6}</PPhasis2>
                        <PTueCharacter2>{p_wed5.text7}</PTueCharacter2>
                        {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PWedSection4>
                    <PWedSection5>
                        <PTime>{p_wed6.text1}</PTime>
                        <PTitle>{p_wed6.text2}</PTitle>
                        {/* <PMove>{curlang.p_data.move}</PMove> */}
                    </PWedSection5>
                </PSection3>
            </PWrapper>


            <MWrapper>
                <MInner>
                    <MSection>
                        <MDayBlock>
                            <MDayText>{m_mon.text1}</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>{m_mon.text2}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text3}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text4}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text5}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text6}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text7}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text8}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text9}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text10}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text11}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text12}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text13}</MTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text14}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text15}</MTitle>
                                <MSubTitle>{m_mon.text16}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_mon.text17}</MTime>
                            <MTextArea>
                                <MTitle>{m_mon.text18}</MTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                    <MSection>
                        <MDayBlock>
                            <MDayText>{m_tue.text1}</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>{m_tue.text2}</MTime>
                            <MTextArea>
                                <MTitle>{m_tue.text3}</MTitle>
                                <MSubTitle>{m_tue.text4}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_tue.text5}</MTime>
                            <MTextArea>
                                <MTitle>{m_tue.text6}</MTitle>
                                <MSubTitle>{m_tue.text7}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_tue.text8}</MTime>
                            <MTextArea>
                                <MTitle>{m_tue.text9}</MTitle>
                                <MSubTitle>{m_tue.text10}</MSubTitle>
                                <MTitle top="16px">{m_tue.text11}</MTitle>
                                <MSubTitle>{m_tue.text12}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_tue.text13}</MTime>
                            <MTextArea>
                                <MTitle>{m_tue.text14}</MTitle>
                                <MSubTitle>{m_tue.text15}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_tue.text16}</MTime>
                            <MTextArea>
                                <MTitle>{m_tue.text17}</MTitle>
                                <MSubTitle>{m_tue.text18}</MSubTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                    <MSection>
                        <MDayBlock>
                            <MDayText>{m_wed.text1}</MDayText>
                        </MDayBlock>
                        <MContents>
                            <MTime>{m_wed.text2}</MTime>
                            <MTextArea>
                                <MTitle>{m_wed.text3}</MTitle>
                                <MSubTitle>{m_wed.text4}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_wed.text5}</MTime>
                            <MTextArea>
                                <MTitle>{m_wed.text6}</MTitle>
                                <MSubTitle>{m_wed.text7}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_wed.text8}</MTime>
                            <MTextArea>
                                <MTitle>{m_wed.text9}</MTitle>
                                <MSubTitle>{m_wed.text10}</MSubTitle>
                                <MTitle top="16px">{m_wed.text11}</MTitle>
                                <MSubTitle>{m_wed.text12}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_wed.text13}</MTime>
                            <MTextArea>
                                <MTitle>{m_wed.text14}</MTitle>
                                <MSubTitle>{m_wed.text15}</MSubTitle>
                            </MTextArea>
                        </MContents>
                        <MContents>
                            <MTime>{m_wed.text16}</MTime>
                            <MTextArea>
                                <MTitle>{m_wed.text17}</MTitle>
                            </MTextArea>
                        </MContents>
                    </MSection>
                </MInner>
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    border : 1px solid ${color.turtle_green};
    margin-bottom : 200px;
    display : flex;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection1 = styled.div`
    width : 400px;
    height : 2190px;
    border-right : 1px solid ${color.turtle_green};
`
const PSection2 = styled.div`
    width : 400px;
    height : 2190px;
    border-right : 1px solid ${color.turtle_green};
`
const PSection3 = styled.div`
    width : 400px;
    height : 2190px;
`
const PMonSection1 = styled.div`
    height : 890px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-top : 1px solid ${color.turtle_green};
`
const PMonSection2 = styled.div`
    height : 1232px;
    background-color: #f9fff4;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection1 = styled.div`
    height : 380px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection2 = styled.div`
    height : 510px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection3 = styled.div`
    height : 454px;
    display : flex;
    border-top : 1px solid ${color.turtle_green};
`
const PLeftArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    border-right : 1px solid ${color.turtle_green};
`
const PRightArea = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const PTueSection4 = styled.div`
    height : 558px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PTueSection5 = styled.div`
    height : 220px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection1 = styled.div`
    height : 380px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection2 = styled.div`
    height : 510px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection3 = styled.div`
    height : 454px;
    display : flex;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection4 = styled.div`
    height : 558px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PWedSection5 = styled.div`
    height : 220px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content  : center;
    border-top : 1px solid ${color.turtle_green};
`
const PDayBlock = styled.div`
    width : 100%;
    height : 68px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #f9fff4;
`
const PDayText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const PPhasis1 = styled.div`
    margin-top : ${props => props.top || '20px;'};
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const PPhasis2 = styled.div`
    margin-top : ${props => props.top || '20px;'};
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const PTueCharacter1 = styled.div`
    margin-top : 30px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PTueCharacter2 = styled.div`
    margin-top : 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    white-space: pre-line;
    text-align : center;
`
const PTime = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.brown_grey};
    margin-top : none;
    
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7),
    &:nth-child(9),
    &:nth-child(11),
    &:nth-child(13),
    &:nth-child(16) {
        margin-top : 30px;
    }
`
const PSubTitle = styled.div`
    font-size: 18px;
    text-align : center;
    white-space : pre-line;
    color: ${color.black};
`
const PMove = styled.div`
    cursor: pointer;
    margin-top : ${props => props.top || '40px'};
    font-size: 16px;
    font-weight: 500;
    color: ${color.turtle_green};
`
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    white-space: pre-line;
    margin-top : 4px;
    text-align : center;
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    display : flex;
    justify-content : center;
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    /* display : flex; */
    /* flex-direction : column; */
    width : 100%;
`
const MSection  = styled.div`
    margin-top : 28px;
    border: solid 0.5px ${color.turtle_green};
`
const MDayBlock = styled.div`
    height : 40px;
    padding : 0px 12px;
    display : flex;
    align-items : center;
    background-color: #f9fff4;
`
const MDayText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const MContents = styled.div`
    width : 100%;
    display : flex;
    padding : 8px 12px;
    border-top: solid 0.5px ${color.turtle_green};
`
const MTime = styled.div`
    font-size: 14px;
    color: ${color.brownish_grey};
    margin-right: 35px;
`
const MTextArea = styled.div`
    width: 100%;
`
const MmiddleArea = styled.div`
    display : flex;
    width : 100%;
`
const MTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
    white-space : pre-line;
    margin-top : ${props => props.top || '0px'};
`
const MSubTitle = styled.div`
    margin-top : 4px;
    font-size: 14px;
    font-weight: 500;
    white-space : pre-line;
    color: ${color.turtle_green};
`

export default Home_all