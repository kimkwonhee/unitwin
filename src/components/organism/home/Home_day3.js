import React from 'react'
import styled from 'styled-components'
import Cal_TopArea from '../../molecules/Cal_TopArea'
import color from '../../../style/color'
import { useSelector } from 'react-redux'
import Videobtn from '../../atom/Videobtn'
import { Link } from 'react-router-dom'

const Home_day3 = () => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.home_day3;
    const m_detaildata = curlang.m_data.home_day3;

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
                        <PLink to={p_detaildata.session1.link}>
                            <PVideobtn videotext={p_detaildata.video_text1} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session1.text3}</PRightTitle>
                                <PRightName>{p_detaildata.session1.text4}<PRightEnName>{p_detaildata.session1.text5}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session1.text6}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session1.text7}</PRightModer>
                                <PRightName>{p_detaildata.session1.text8}<PRightEnName>{p_detaildata.session1.text9}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session1.text10}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session2.text1}</PLeftTitle>
                        <PLeftSub>{p_detaildata.session2.text2}</PLeftSub>
                        <PLeftTime>{p_detaildata.session2.text3}</PLeftTime>
                        <PLink to={p_detaildata.session2.link}>
                            <PVideobtn videotext={p_detaildata.video_text1} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session2.text4}</PRightTitle>
                                <PRightName>{p_detaildata.session2.text5}<PRightEnName>{p_detaildata.session2.text6}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session2.text7}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session2.text8}</PRightTitle>
                                <PRightName>{p_detaildata.session2.text9}<PRightEnName>{p_detaildata.session2.text10}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session2.text11}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session2.text12}</PRightTitle>
                                <PRightName>{p_detaildata.session2.text13}</PRightName>
                                <PRightJop>{p_detaildata.session2.text14}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session2.text15}</PRightTitle>
                                <PRightName>{p_detaildata.session2.text16}<PRightEnName>{p_detaildata.session2.text17}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session2.text18}</PRightJop>
                                <PRightName>{p_detaildata.session2.text19}<PRightEnName>{p_detaildata.session2.text20}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session2.text21}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session2.text22}</PRightModer>
                                <PRightName>{p_detaildata.session2.text23}<PRightEnName>{p_detaildata.session2.text24}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session2.text25}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session3.text1}</PLeftTitle>
                        <PLeftSub>{p_detaildata.session3.text2}</PLeftSub>
                        <PLeftTime>{p_detaildata.session3.text3}</PLeftTime>
                        <PLink to={p_detaildata.session3.link}>
                            <PVideobtn videotext={p_detaildata.video_text1} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session3.text4}</PRightTitle>
                                <PRightName>{p_detaildata.session3.text5}</PRightName>
                                <PRightJop>{p_detaildata.session3.text6}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session3.text7}</PRightTitle>
                                <PRightName>{p_detaildata.session3.text8}</PRightName>
                                <PRightJop>{p_detaildata.session3.text9}</PRightJop>
                                <PRightName>{p_detaildata.session3.text10}</PRightName>
                                <PRightJop>{p_detaildata.session3.text11}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session3.text12}</PRightTitle>
                                <PRightName>{p_detaildata.session3.text13}<PRightEnName>{p_detaildata.session3.text14}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text15}</PRightJop>
                                <PRightName>{p_detaildata.session3.text16}<PRightEnName>{p_detaildata.session3.text17}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text18}</PRightJop>
                                <PRightName>{p_detaildata.session3.text19}<PRightEnName>{p_detaildata.session3.text20}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text21}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session3.text22}</PRightTitle>
                                <PRightName>{p_detaildata.session3.text23}<PRightEnName>{p_detaildata.session3.text24}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session3.text25}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session3.text26}</PRightModer>
                                <PRightName>{p_detaildata.session3.text27}</PRightName>
                                <PRightJop>{p_detaildata.session3.text28}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session4.text1}</PLeftTitle>
                        <PLeftSub>{p_detaildata.session4.text2}</PLeftSub>
                        <PLeftTime>{p_detaildata.session4.text3}</PLeftTime>
                        <PLink to={p_detaildata.session4.link}>
                            <PVideobtn videotext={p_detaildata.video_text1} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session4.text4}</PRightTitle>
                                <PRightName>{p_detaildata.session4.text5}<PRightEnName>{p_detaildata.session4.text6}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session4.text7}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session4.text8}</PRightTitle>
                                <PRightName>{p_detaildata.session4.text9}</PRightName>
                                <PRightJop>{p_detaildata.session4.text10}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session4.text11}</PRightTitle>
                                <PRightName>{p_detaildata.session4.text12}</PRightName>
                                <PRightJop>{p_detaildata.session4.text13}</PRightJop>
                                <PRightName>{p_detaildata.session4.text14}</PRightName>
                                <PRightJop>{p_detaildata.session4.text15}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session4.text16}</PRightTitle>
                                <PRightName>{p_detaildata.session4.text17}<PRightEnName>{p_detaildata.session4.text18}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session4.text19}</PRightJop>
                                <PRightName>{p_detaildata.session4.text20}<PRightEnName>{p_detaildata.session4.text21}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session4.text22}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session4.text23}</PRightModer>
                                <PRightName>{p_detaildata.session4.text24}<PRightEnName>{p_detaildata.session4.text25}</PRightEnName></PRightName>
                                <PRightJop>{p_detaildata.session4.text26}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session5.text1}</PLeftTitle>
                        <PLeftSub>{p_detaildata.session5.text2}</PLeftSub>
                        <PLeftTime>{p_detaildata.session5.text3}</PLeftTime>
                        <PLink to={p_detaildata.session5.link}>
                            <PVideobtn videotext={p_detaildata.video_text1} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text4}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text5}</PRightName>
                                <PRightJop>{p_detaildata.session5.text6}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text7}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text8}</PRightName>
                                <PRightJop>{p_detaildata.session5.text9}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text10}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text11}</PRightName>
                                <PRightJop>{p_detaildata.session5.text12}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text13}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text14}</PRightName>
                                <PRightJop>{p_detaildata.session5.text15}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session5.text16}</PRightTitle>
                                <PRightName>{p_detaildata.session5.text17}</PRightName>
                                <PRightJop>{p_detaildata.session5.text18}</PRightJop>
                            </PRightSection>
                            <PRightSection>
                                <PRightModer>{p_detaildata.session5.text19}</PRightModer>
                                <PRightName>{p_detaildata.session5.text20}</PRightName>
                                <PRightJop>{p_detaildata.session5.text21}</PRightJop>
                            </PRightSection>
                        </PRightInner>
                    </PRight>
                </PSection>
                <PSection>
                    <PLeftInner>
                        <PLeftTitle>{p_detaildata.session6.text1}</PLeftTitle>
                        <PLeftTime>{p_detaildata.session6.text2}</PLeftTime>
                        <PLink to={p_detaildata.session6.link}>
                            <PVideobtn width="120px" videotext={p_detaildata.video_text2} videobtn="true"/>
                        </PLink>
                    </PLeftInner>
                    <PRight>
                        <PRightInner>
                            <PRightSection>
                                <PRightTitle>{p_detaildata.session6.text3}</PRightTitle>
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
                                <MLink to={m_detaildata.session1.link}>
                                    <MVideobtn videotext={m_detaildata.video_text1} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session1.text3}</MRightTitle>
                                        <MRightName>{m_detaildata.session1.text4}<MRightEnName>{m_detaildata.session1.text5}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session1.text6}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightModer>{m_detaildata.session1.text7}</MRightModer>
                                        <MRightName>{m_detaildata.session1.text8}<MRightEnName>{m_detaildata.session1.text9}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session1.text10}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session2.text1}</MLeftTitle>
                                <MLeftSub>{m_detaildata.session2.text2}</MLeftSub>
                                <MLeftTime>{m_detaildata.session2.text3}</MLeftTime>
                                <MLink to={m_detaildata.session2.link}>
                                    <MVideobtn videotext={m_detaildata.video_text1} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session2.text4}</MRightTitle>
                                        <MRightName>{m_detaildata.session2.text5}<MRightEnName>{m_detaildata.session2.text6}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session2.text7}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session2.text8}</MRightTitle>
                                        <MRightName>{m_detaildata.session2.text9}<MRightEnName>{m_detaildata.session2.text10}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session2.text11}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session2.text12}</MRightTitle>
                                        <MRightName>{m_detaildata.session2.text13}</MRightName>
                                        <MRightJop>{m_detaildata.session2.text14}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session2.text15}</MRightTitle>
                                        <MRightName>{m_detaildata.session2.text16}<MRightEnName>{m_detaildata.session2.text17}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session2.text18}</MRightJop>
                                        <MRightName>{m_detaildata.session2.text19}<MRightEnName>{m_detaildata.session2.text20}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session2.text21}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightModer>{m_detaildata.session2.text22}</MRightModer>
                                        <MRightName>{m_detaildata.session2.text23}<MRightEnName>{m_detaildata.session2.text24}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session2.text25}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session3.text1}</MLeftTitle>
                                <MLeftSub>{m_detaildata.session3.text2}</MLeftSub>
                                <MLeftTime>{m_detaildata.session3.text3}</MLeftTime>
                                <MLink to={m_detaildata.session3.link}>
                                    <MVideobtn videotext={m_detaildata.video_text1} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session3.text4}</MRightTitle>
                                        <MRightName>{m_detaildata.session3.text5}</MRightName>
                                        <MRightJop>{m_detaildata.session3.text6}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session3.text7}</MRightTitle>
                                        <MRightName>{m_detaildata.session3.text8}</MRightName>
                                        <MRightJop>{m_detaildata.session3.text9}</MRightJop>
                                        <MRightName>{m_detaildata.session3.text10}</MRightName>
                                        <MRightJop>{m_detaildata.session3.text11}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session3.text12}</MRightTitle>
                                        <MRightName>{m_detaildata.session3.text13}<MRightEnName>{m_detaildata.session3.text14}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text15}</MRightJop>
                                        <MRightName>{m_detaildata.session3.text16}<MRightEnName>{m_detaildata.session3.text17}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text18}</MRightJop>
                                        <MRightName>{m_detaildata.session3.text19}<MRightEnName>{m_detaildata.session3.text20}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text21}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session3.text22}</MRightTitle>
                                        <MRightName>{m_detaildata.session3.text23}<MRightEnName>{m_detaildata.session3.text24}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session3.text25}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightModer>{m_detaildata.session3.text26}</MRightModer>
                                        <MRightName>{m_detaildata.session3.text27}</MRightName>
                                        <MRightJop>{m_detaildata.session3.text28}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session4.text1}</MLeftTitle>
                                <MLeftSub>{m_detaildata.session4.text2}</MLeftSub>
                                <MLeftTime>{m_detaildata.session4.text3}</MLeftTime>
                                <MLink to={m_detaildata.session4.link}>
                                    <MVideobtn videotext={m_detaildata.video_text1} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session4.text4}</MRightTitle>
                                        <MRightName>{m_detaildata.session4.text5}<MRightEnName>{m_detaildata.session4.text6}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session4.text7}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session4.text8}</MRightTitle>
                                        <MRightName>{m_detaildata.session4.text9}</MRightName>
                                        <MRightJop>{m_detaildata.session4.text10}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session4.text11}</MRightTitle>
                                        <MRightName>{m_detaildata.session4.text12}</MRightName>
                                        <MRightJop>{m_detaildata.session4.text13}</MRightJop>
                                        <MRightName>{m_detaildata.session4.text14}</MRightName>
                                        <MRightJop>{m_detaildata.session4.text15}</MRightJop>  
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session4.text16}</MRightTitle>
                                        <MRightName>{m_detaildata.session4.text17}<MRightEnName>{m_detaildata.session4.text18}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session4.text19}</MRightJop>
                                        <MRightName>{m_detaildata.session4.text20}<MRightEnName>{m_detaildata.session4.text21}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session4.text22}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightModer>{m_detaildata.session4.text23}</MRightModer>
                                        <MRightName>{m_detaildata.session4.text24}<MRightEnName>{m_detaildata.session4.text25}</MRightEnName></MRightName>
                                        <MRightJop>{m_detaildata.session4.text26}</MRightJop>
                                    </MRightSection>
                                </MRightInner>
                            </MRight>
                        </MmiddleArea>
                    </MSection>
                    <MSection>
                        <MmiddleArea>
                            <MLeftInner>
                                <MLeftTitle>{m_detaildata.session5.text1}</MLeftTitle>
                                <MLeftSub>{m_detaildata.session5.text2}</MLeftSub>
                                <MLeftTime>{m_detaildata.session5.text3}</MLeftTime>
                                <MLink to={m_detaildata.session5.link}>
                                    <MVideobtn videotext={m_detaildata.video_text1} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text4}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text5}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text6}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text7}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text8}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text9}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text10}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text11}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text12}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text13}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text14}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text15}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session5.text16}</MRightTitle>
                                        <MRightName>{m_detaildata.session5.text17}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text18}</MRightJop>
                                    </MRightSection>
                                    <MRightSection>
                                        <MRightModer>{m_detaildata.session5.text19}</MRightModer>
                                        <MRightName>{m_detaildata.session5.text20}</MRightName>
                                        <MRightJop>{m_detaildata.session5.text21}</MRightJop>
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
                                <MLink to={m_detaildata.session6.link}>
                                    <MVideobtn width="90px" videotext={m_detaildata.video_text2} videobtn="true"/>
                                </MLink>
                            </MLeftInner>
                            <MRight>
                                <MRightInner>
                                    <MRightSection>
                                        <MRightTitle>{m_detaildata.session6.text3}</MRightTitle>
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
const PLeftSub = styled.div`
    margin-top : 40px;
    font-size: 20px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.turtle_green};
`
const PLeftTime = styled.div`
    margin-top : 4px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PVideobtn = styled(Videobtn)`
    margin-top : 40px;
`
const PLink = styled(Link)`
    text-decoration : none;
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
     white-space : pre-line;
     color: ${color.black};
     margin-bottom : 40px;
`
const PRightName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
    margin-bottom : 8px;
    white-space : pre-line;

    &:nth-child(4),
    &:nth-child(6) {
        margin-top : 40px;
    }
`
const PRightEnName = styled.span`
    font-size: 14px;
    font-weight : normal;
    color: #aaaaaa;
`
const PRightJop = styled.div`
    font-size: 14px;
    font-weight: 500;
    white-space : pre-line;
    color: ${color.black};
`
const PRightModer = styled.div`
    margin-top : 40px;
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
    border-bottom : 1px solid ${color.turtle_green};
    padding : 12px 0;
    &:last-child {
        border-bottom : none;
    }
`
const MLeftInner = styled.div`
    width : 182px;
    height : auto;
    padding-left : 12px;
`
const MmiddleArea = styled.div`
    display : flex;
    width : 100%;
`
const MLeftTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.black};
    word-break : keep-all;
`
const MLeftSub = styled.div`
    margin-top : 12px;
    font-size: 14px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.turtle_green};
    word-break : keep-all;
`
const MLeftTime = styled.div`
    margin-top : 2px;
    font-size: 12px;
    font-weight: bold;
    color: ${color.black};
`
const MRightModer = styled.div`
    /* margin-top : 40px; */
    margin-bottom : 12px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.turtle_green};
`

const MRightTitle = styled.div`
    margin-bottom : 12px;
    font-size: 14px;
    font-weight: bold;
    white-space : pre-line;
    color: ${color.black};
    word-break : keep-all;
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
    color: ${color.black};
    margin-bottom : 2px;

    &:nth-child(4),
    &:nth-child(6) {
        margin-top : 12px;
    }
`
const MRightEnName = styled.span`
    font-size: 12px;
    color: ${color.brownish_grey};
`
const MRightJop = styled.div`
    font-size: 12px;
    white-space : pre-line;
    color: ${color.black};
    word-break : keep-all;
`

const MLink = styled(Link)`
    text-decoration : none;
`
const MVideobtn = styled(Videobtn)`
    margin-top : 19px;
`


export default Home_day3