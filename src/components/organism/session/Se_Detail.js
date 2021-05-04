import React from 'react'
import styled from 'styled-components'
import ListSession from '../../molecules/ListSession'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import ListSession_Se from '../../molecules/ListSession_Se'
import img_01 from '../../../images/session_01.png'


const Se_Detail = ({match}) => {
    const p_topcontents_a = {
        title : '세션 1',
        subject : '현장사례연구 1',
        time : '05.25(화) 13:40~15:00',
        video_text : '한국 문화예술교육 실천가‧교육가‧기관별 사례를 통해 예술교육의 위기를 창조적으로 돌파하는 방법과 사회 위기 해결에 대안을 제시할 수 있는 방법을 모색합니다.',
        download : false,
        list : [
            {
                moder : '[모더레이터]',
                li_title : "",
                li_data : [
                    {
                        imgs : img_01,
                        name : '루스 렌슬러 ',
                        enname : '(Ruth Rentschler)',
                        job : '- 사우스오스트레일리아대학교 교수, 호주',
                        contents : '바이오 미정',
                        download : true,
                    }
                ]
                
            },
            {
                moder : '',
                li_title : "극장은 '작은 지구'입니다",
                li_data : [
                    {
                        imgs : img_01,
                        name : '루스 렌슬러 ',
                        enname : '(Ruth Rentschler)',
                        job : '- 사우스오스트레일리아대학교 교수, 호주',
                        contents : '바이오 미정',
                        download : true,
                    },
                    {
                        imgs : img_01,
                        name : '루스 렌슬러 ',
                        enname : '(Ruth Rentschler)',
                        job : '- 사우스오스트레일리아대학교 교수, 호주',
                        contents : '바이오 미정',
                        download : true,
                    }
                ]
                
            },
        ]
    }

    const p_topcontents_b = {
        title : '세션 2',
        subject : '예술 치유',
        time : '05.25(화) 15:00~16:30',
        video_text : '현대 사회가 유발하고 있는 많은 심리적‧정신적 질병에 대하여, 자아를 새롭게 발견하고, 사회와 건강하게 관계를 맺을 수 있는 치유를 예술적 개입을 통하여 모색합니다.',
        download : false,
        list : []
    }

    const p_topcontents_c = {
        title : '세션 3',
        subject : '사회적 & 문화적 포용',
        time : '05.25(화) 15:00~16:30',
        video_text : '전세계적으로 발행하고 있는 평등‧다문화‧고립 등 사회적 도전 과제에 대해 예술교육이 창조적으로 개입할 수 있는 방법을 모색하고, 이를 통해 더욱 포용적인 사회와 문화를 건설할 수 있도록 기여합니다.',
        download : false,
        list : []
    }

    const p_topcontents_d = {
        title : '세션 4',
        subject : '서울 어젠다',
        time : '05.25(화) 16:30~17:50',
        video_text : '“서울 어젠다: 예술교육 발전목표”가 천명하고 있는 것처럼, 예술교육의 중요성과 가치가 오늘날 현대 사회에 어떤 영향력을 발휘할 수 있는지에 대해 모색합니다.',
        download : false,
        list : []
    }

    const p_topcontents_e = {
        title : '세션 5',
        subject : '교실 속의 예술',
        time : '05.26(수) 13:40~15:15',
        video_text : '판데믹 상황 속에서 위기에 놓인 학교 및 학생들이 예술교육을 통해 회복되고, 다양한 예술 분과 교육들이 학생들을 지속적으로 지지하고 지원할 수 있는 방법을 모색합니다.',
        download : false,
        list : []
    }
    const p_topcontents_f = {
        title : '세션 6',
        subject : '예술 참여',
        time : '05.26(수) 15:15~17:05',
        video_text : '예술교육이 오늘날의 위기에 대항하여 지역 사회가 창조적으로 대응하고 역량을 강화할 수 있도록 도울 수 있는 방법을 모색합니다.',
        download : false,
        list : []
    }

    const p_topcontents_g = {
        title : '세션 7',
        subject : '다양성 & 문화적 묘사',
        time : '05.26(수) 15:15~16:55',
        video_text : '예술교육을 통해 사회에서 소외된 주체들을 드러내고 이들의 목소리를 발굴하며, 이 과정을 통해 사회를 더욱 다양하고 포용적인 공동체로 이루는 과정을 모색합니다.',
        download : false,
        list : []
    }

    const p_topcontents_h = {
        title : '세션 8',
        subject : '현장사례연구 2',
        time : '05.26(수) 17:05~18:25',
        video_text : '한국 문화예술교육 실천가‧교육가‧기관별 사례를 통해 예술교육의 위기를 창조적으로 돌파하는 방법과 사회 위기 해결에 대안을 제시할 수 있는 방법을 모색합니다.',
        download : false,
        list : []
    }



    let pathname = match.params.se_detail
    let topsection = null
    let videosection = null
    if(pathname == 'a') {
        topsection = <PTop title={p_topcontents_a.title} subject={p_topcontents_a.subject} time={p_topcontents_a.time} />;
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'b') {
        topsection = <PTop title={p_topcontents_b.title} subject={p_topcontents_b.subject} time={p_topcontents_b.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'c') {
        topsection = <PTop title={p_topcontents_c.title} subject={p_topcontents_c.subject} time={p_topcontents_c.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'd') {
        topsection = <PTop title={p_topcontents_d.title} subject={p_topcontents_d.subject} time={p_topcontents_d.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'e') {
        topsection = <PTop title={p_topcontents_e.title} subject={p_topcontents_e.subject} time={p_topcontents_e.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'f') {
        topsection = <PTop title={p_topcontents_f.title} subject={p_topcontents_f.subject} time={p_topcontents_f.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'g') {
        topsection = <PTop title={p_topcontents_g.title} subject={p_topcontents_g.subject} time={p_topcontents_g.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }
    else if (pathname == 'h') {
        topsection = <PTop title={p_topcontents_h.title} subject={p_topcontents_h.subject} time={p_topcontents_h.time}/>
        videosection = <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} />
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    {topsection}
                    <PCenterArea>
                        <PLeftArea>
                        {videosection}
                            <PContentsArea>
                                <PSection data={p_topcontents_a.list} />
                            </PContentsArea>
                        </PLeftArea>
                        <PRightArea>
                            <div>채팅 영상 1</div>
                        </PRightArea>
                    </PCenterArea>
                </PInner>
            </PWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    margin-bottom : 200px;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PInner = styled.div`
    width : 1200px;
`
const PTop = styled(ListSessionTop)`
`
const PCenterArea = styled.div`
    display : flex;
    justify-content : space-between;
`
const PLeftArea = styled.div`
    width : 800px;
`
const PRightArea = styled.div`
    width : 380px;
    height : 450px;
    background-color : purple;
`
const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
`
const PSection = styled(ListSession_Se)`
    /* margin-top : 60px; */
`


export default withRouter(Se_Detail)