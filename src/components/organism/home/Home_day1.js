import React from 'react'
import styled from 'styled-components'
import Cal_TopArea from '../../molecules/Cal_TopArea'
import color from '../../../style/color'
import { useSelector } from 'react-redux'

const Home_day1 = () => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.home_day1;
    const m_detaildata = curlang.m_data.home_day1;


    return (
        <>
            <PWrapper>
               <PCal_TopArea 
                    title={p_detaildata.title}
                    videobtn={p_detaildata.video}
                    width="120px"
                    time={p_detaildata.time}
                    link={p_detaildata.link}
                    videotext={p_detaildata.video_text}
               />
               <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session1.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session1.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session1.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session1.text4}</PRightName>
                                <PRightJop>{p_detaildata.session1.text5}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session2.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session2.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightName>{p_detaildata.session2.text3}</PRightName>
                                <PRightJop>{p_detaildata.session2.text4}</PRightJop>
                                <PRightName>{p_detaildata.session2.text5}</PRightName>
                                <PRightJop>{p_detaildata.session2.text6}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session3.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session3.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightName>{p_detaildata.session3.text6}<PRightEnName>{p_detaildata.session3.text7}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text8}</PRightJop>
                                <PRightName>{p_detaildata.session3.text3}<PRightEnName>{p_detaildata.session3.text4}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text5}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session4.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session4.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session4.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session4.text4}<PRightEnName>{p_detaildata.session4.text5}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session4.text6}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session5.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session5.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text4}<PRightEnName>{p_detaildata.session5.text5}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session5.text6}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session6.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session6.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session6.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session6.text4}</PRightName>
                                <PRightJop>{p_detaildata.session6.text6}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session7.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session7.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session7.text3}</PRightTitle>
                                <PRightSubText>{p_detaildata.session7.text4}</PRightSubText>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session8.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session8.text2}</PLeftTime>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session8.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session8.text6}</PRightName>
                                <PRightJop>{p_detaildata.session8.text7}</PRightJop>
                                <PRightName>{p_detaildata.session8.text8}</PRightName>
                                <PRightJop>{p_detaildata.session8.text9}</PRightJop>
                                <PRightName>{p_detaildata.session8.text10}</PRightName>
                                <PRightJop>{p_detaildata.session8.text11}</PRightJop>
                                <PRightName>{p_detaildata.session8.text12}</PRightName>
                                <PRightJop>{p_detaildata.session8.text13}</PRightJop>
                                <PRightName>{p_detaildata.session8.text14}</PRightName>
                                <PRightJop>{p_detaildata.session8.text15}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session8.text16}</PRightModer>
                                <PRightName>{p_detaildata.session8.text4}</PRightName>
                                <PRightJop>{p_detaildata.session8.text5}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
            </PWrapper>
            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MCal_TopArea 
                        title={m_detaildata.title}
                        videobtn={m_detaildata.video}
                        width="97px"
                        time={m_detaildata.time}
                        link={m_detaildata.link}
                        videotext={m_detaildata.video_text}
                    />
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session1.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session1.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session1.text3}</MRightTitle>
                                        <MRightName>{m_detaildata.session1.text4}</MRightName>
                                        <MRightJop>{m_detaildata.session1.text5}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session2.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session2.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightName>{m_detaildata.session2.text3}</MRightName>
                                        <MRightJop>{m_detaildata.session2.text4}</MRightJop>
                                        <MRightName>{m_detaildata.session2.text5}</MRightName>
                                        <MRightJop>{m_detaildata.session2.text6}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session3.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session3.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightName>{m_detaildata.session3.text6}<MRightEnName>{m_detaildata.session3.text7}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text8}</MRightJop>
                                        <MRightName>{m_detaildata.session3.text3}<MRightEnName>{m_detaildata.session3.text4}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text5}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session4.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session4.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session4.text3}</MRightTitle>
                                        <MRightName>{m_detaildata.session4.text4}<MRightEnName>{m_detaildata.session4.text5}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session4.text6}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session5.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session5.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text3}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text4}<MRightEnName>{m_detaildata.session5.text5}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session5.text6}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session6.text1}</MLeftTitle>
                                <MLeftTime>{m_detaildata.session6.text2}</MLeftTime>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        {/* <MRightTitle>{m_detaildata.session6.text3}</MRightTitle> */}
                                        <MRightName>{m_detaildata.session6.text4}<MRightEnName>{m_detaildata.session6.text5}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session6.text6}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                        <MLeftInner>
                            <MLeftTitle>{m_detaildata.session7.text1}</MLeftTitle>
                            <MLeftTime>{m_detaildata.session7.text2}</MLeftTime>
                        </MLeftInner>
                        <MRight>
                            <MRightInner>
                                <MRightSection>
                                    <MRightTitle>{m_detaildata.session7.text3}</MRightTitle>
                                    <MRightTitle>{m_detaildata.session7.text4}</MRightTitle>
                                </MRightSection>
                            </MRightInner>
                        </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                    <MmiddleArea>
                        <MLeftInner>
                            <MLeftTitle>{m_detaildata.session8.text1}</MLeftTitle>
                            <MLeftTime>{m_detaildata.session8.text2}</MLeftTime>
                        </MLeftInner>
                        <MRight>
                            <MRightInner>
                                <MRightSection>
                                    <MRightTitle>{m_detaildata.session8.text3}</MRightTitle>
                                    <MRightName>{m_detaildata.session8.text6}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text7}</MRightJop>
                                    <MRightName>{m_detaildata.session8.text8}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text9}</MRightJop>
                                    <MRightName>{m_detaildata.session8.text10}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text11}</MRightJop>
                                    <MRightName>{m_detaildata.session8.text12}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text13}</MRightJop>
                                    <MRightName>{m_detaildata.session8.text14}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text15}</MRightJop>
                                </MRightSection>
                                <MRightSection>
                                    <MRightModer>{m_detaildata.session8.text16}</MRightModer>
                                    <MRightName>{m_detaildata.session8.text4}</MRightName>
                                    <MRightJop>{m_detaildata.session8.text5}</MRightJop>
                                </MRightSection>
                            </MRightInner>
                        </MRight>
                        </MmiddleArea>
                    </MSection>
                </MInner>
            </MWrapper> 
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    height : auto;
    display : block;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PCal_TopArea = styled(Cal_TopArea)`
`
const PSection = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    border-bottom : 1px solid ${color.turtle_green};
    padding : 40px 0;
    &:last-child {
        margin-bottom : 200px;
        border-bottom : none;
    }
`
// left
const PLeftInner = styled.div`
    width : 282px;
    height : auto;
    margin-right : 24px;
    padding-left : 40px;
`
const PLeftTitle = styled.div`
    font-size: 28px;
    font-weight: 900;
    white-space : pre-line;
    color: ${color.black};
`
const PLeftTime = styled.div`
    margin-top : 4px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
// Right
const PRight = styled.div`
    width : 894px;
    margin-left : 18px;
    display : block;
`
const PRightInner = styled.div`
    border-bottom : 1px solid ${color.very_light_pink};
    &:last-child {
        border-bottom : none;
    }
`
const PRightSection = styled.div`
    margin-bottom : 40px;
    border-bottom : 1px solid #d0d0d0;
    padding-bottom: 40px;
    &:last-child {
        margin-bottom : 0px;
        border-bottom : none;
        padding-bottom: 0;
    }
`
const PRightTitle = styled.div`
     font-size: 20px;
     font-weight: bold;
     color: ${color.black};
     margin-bottom : 40px;
     word-break : keep-all;
`
const PRightSubText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PRightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 8px;
    
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(8),
    &:nth-child(10) {
        margin-top : 40px;
    }
`
const PRightEnName = styled.span`
    font-size: 14px;
    color: #aaaaaa;
    font-weight: normal;
`
const PRightJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${color.black};
`

const PRightModer = styled.div`
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
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
    width : 100%;
`
const MCal_TopArea = styled(Cal_TopArea)`
    margin-top : 28px;
`
const MSection = styled.div`
    width : 100%;
    height : auto;
    /* display : flex; */
    border-bottom : 1px solid ${color.turtle_green};
    padding : 12px 0;
    &:last-child {
        border-bottom : none;
    }
`
const MmiddleArea = styled.div`
    display : flex;
    width : 100%;
`

const MLeftInner = styled.div`
    width : 182px;
    height : auto;
    padding-left : 12px;
`
const MLeftTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    white-space : pre-line;
    word-break : keep-all;
    color: ${color.black};
`
const MLeftTime = styled.div`
    margin-top : 2px;
    font-size: 12px;
    font-weight: bold;
    color: ${color.black};
`
const MRightTitle = styled.div`
    margin-bottom : 12px;
    font-size: 14px;
    font-weight: bold;
    white-space : pre-line;
    word-break : keep-all;
    color: ${color.black};
`
const MRight = styled.div`
    width : 100%;
    display : block;
`
const MRightInner = styled.div`
    border-bottom : 1px solid ${color.very_light_pink};
    &:last-child {
        border-bottom : none;
    }
`
const MRightSection = styled.div`
    margin-bottom : 12px;
    border-bottom : 1px solid #d0d0d0;
    padding-bottom: 12px;
    
    &:last-child {
        margin-bottom : 0px;
        border-bottom : none;
        padding-bottom: 0;
    }
`
const MRightName = styled.div`
    font-size: 14px;
    font-weight : 500;
    margin-bottom : 2px;
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(6),
    &:nth-child(8),
    &:nth-child(10),
    &:nth-child(12) {
        margin-top : 13px;
    }
`
const MRightEnName = styled.span`
    font-size: 12px;
    color: ${color.brownish_grey};
`
const MRightJop = styled.div`
    font-size: 12px;
    white-space : pre-line;
    word-break : keep-all;
    color: ${color.black};
`
const MRightModer = styled.div`
    /* margin-top : 40px; */
    margin-bottom : 12px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.turtle_green};
`


export default Home_day1