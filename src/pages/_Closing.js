import React from 'react'
import styled from 'styled-components'
import ListSession from '..//components/molecules/ListSession'
import ListSessionTop from '..//components/molecules/ListSessionTop'
import ListVideoSession from '../components/molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import img_01 from '../images/session_26.png'
import img_02 from '../images/session_27.png'
import img_03 from '../images/session_28.png'
import img_04 from '../images/session_29.png'
import img_05 from '../images/session_15.png'
import img_06 from '../images/session_16.png'
import img_07 from '../images/session_10.png'
import img_08 from '../images/session_17.png'
import img_09 from '../images/session_10.png'
import img_10 from '../images/session_30.png'
import img_11 from '../images/session_31.png'
import img_12 from '../images/session_32.png'
import img_13 from '../images/session_33.png'


const _Closing = () => {
    const p_topcontents_a = {
        title : '폐회세션',
        time : '05.26(수) 18:25~19:25',
        video_text : '국내 예술교육 연구자 및 유니트윈 회원들이 모여 학술대회 세션에 대해 리뷰하고, 예술교육의 방향성을 탐색합니다.',
        download : true,
        list : [
            {
                img : img_01,
                moder : '',
                name : '박신의',
                en_name : '',
                li_title : '- 제4회 유네스코 유니트윈 국제 학술대회 조직위원회 위원장 / 경희대학교 교수, 한국',
                li_contents : "박신의는 경희대학교 경영대학원 문화예술경영학과 교수이고, 한국문화예술교육진흥원 이사장이다. 주요 연구 주제는 '예술의 사회적 영향', '예술치유', '예술기업가정신', '박물관 경영', '문화정책' 등이다."
            },
            {
                img : img_02,
                moder : '',
                name : '홍유진',
                en_name : '',
                li_title : '- 한국문화예술교육진흥원 교육기반본부 본부장, 한국',
                li_contents : '홍유진은 문화체육관광부 산하 한국문화예술교육진흥원(KACES)에서 문화예술교육 정책 연구 및 조사분석, 정책 및 기관 전략 수립 등의 업무를 추진해왔다. 이화여자대학교에서 사회학(문화사회학)을 전공하고 박사학위를 받았고, 한국콘텐츠진흥원(KOCCA)에서 문화콘텐츠산업 정책에 관한 다양한 프로젝트를 진행했다. 현재 KACES의 교육기반본부장으로 문화예술교육 관련 연구, 연수, 국제협력 등을 총괄하며, 온라인 문화예술교육 추진단TF 팀장을 겸하고 있다.'
            },
            {
                img : img_03,
                moder : '',
                name : '김인설',
                en_name : '',
                li_title : '- 가톨릭대학교 부교수, 한국',
                li_contents : '가톨릭대학교 공연예술문화학과 교수. 예술을 통해 사회 문제를 새롭게 해석하고 이를 통해 사회가 긍정적인 방향으로 발전될 수 있는 주제들을 연구한다. 문화정책과 거버넌스, 예술경영, 예술교육, 예술치유, 문화기술, 문화 복지 등 예술을 통해 창출할 수 있는 사회자본 및 예술의 사회적 역할과 가치가 주요 관심사이다. 문화정책과 예술경영, 문화예술교육분야 등 다수의 국내외 학술지에서 편집위원으로 활동하고 있으며 한국연구재단, 한국문화예술위원회, 한국문화예술교육진흥원, 문화체육관광부 등에서 국책연구와 자문을 수행해 왔다.'
            },
            {
                img : img_04,
                moder : '',
                name : '신혜선',
                en_name : '',
                li_title : '- 위컬쳐 리서치&컨설팅 대표, 한국',
                li_contents : '현재 위컬처 리서치 앤 컨설팅의 대표이자 경희대학교 경영대학원 문화예술경영학과 강사로 활동 중이다. 문화예술교육, 국제문화교류, 문화정책, 예술경영을 중심으로 연구 및 강의하고 있다. 미국 오하이오주립대학교 문화정책·예술경영 전공으로 박사학위를 취득한 후, 숙명여자대학교 다문화통합연구소 책임연구원으로 재직하였다. 우리 삶 속의 예술과 예술활동에 참여하는 것이 인간 사이에 그리고 사회 간 관계에 어떠한 기여와 영향을 가지고 오는지에 대해 관심을 가지고 탐색하고 있다. ⸢문화예술교육 자원과 협력관계⸥를 공동저술하였으며, Journal of Arts Management, Law, and Society, 문화정책논총, 예술경영연구 등에 논문을 게재하였다.'
            },
            {
                img : img_05,
                moder : '',
                name : '벤자민 볼든 ',
                en_name : '(Benjamin Bolden)',
                li_title : '- 퀸즈대학교 부교수, 캐나다',
                li_contents : '음악 교육자이자 작곡가인 벤자민 볼든 박사는 캐나다 퀸즈 대학교 교육학부의 부교수이자 유네스코 예술 및 학습 위원장이다. 벤자민의 연구 관심사는 예술 교육, 음악 교육, 작곡의 교육과 학습, 창의성, 예술 기반 연구, 사범교육, 교사 지식, 교사의 전문 학습이다. 그의 연구는 Review of Education, Teaching and Teacher Education, Music Education Research, Music Educators Journal을 포함한 저널에 발간되었다. 벤은 교사로서 캐나다, 영국, 대만의 중등학생, 대학생들과 함께 일해왔다. 벤은 캐나다 음악 센터(CMC)의 부 작곡가이며, 그가 작품들은 다양한 프로와 아마추어 공연 앙상블에 의해 연주되었다.'          
            },
            {
                img : img_06,
                moder : '',
                name : '네릴 제너렛 ',
                en_name : '(Neryl Jeanneret)',
                li_title : '- 멜버른 교육대학원, 유네스코 예술연구소 부교수, 호주',
                li_contents : '네릴 제네렛(Neryl Jenneret)은 UNITWIN 문화 다양성 및 지속 가능한 발전을 위한 교육 연구 네트워크 코디네이터이자 MGSE의 유네스코 예술 연구소 공동 책임자이다.'
            },
            {
                img : img_07,
                moder : '',
                name : '시프라 스콘만 ',
                en_name : '(Shifra Schonmann)',
                li_title : '- 하이파대학교 명예교수, 이스라엘',
                li_contents : '시프라 스콘만은 이스라엘 하이파 대학교에서 바-넷저 의장의 청년들을 위한 극장, 사회, 교육의 소유주이자 명예교수이다'
            },
            {
                img : img_08,
                moder : '',
                name : '치후 룸 ',
                en_name : '(Chee-Hoo Lum)',
                li_title : '- 국립교육원 부교수, 싱가포르',
                li_contents : '치후 룸은 싱가포르 난양공대 국립교육원 영상공연학그룹(NIE)의 음악교육학과 부교수이다. 그는 NIE(National Institute of Education, Singapore) 교육 예술 연구 센터(CARE)의 코디네이터이자 유네스코 유니트윈: 문화적 다양성과 지속가능한 발전을 위한 예술 교육 연구소의 회원이다. 치후의 연구 관심사는 정체성, 문화적 다양성 및 다문화주의, 음악 교육에서의 기술과 세계화, 아이들의 음악 문화, 창의성과 즉흥성, 그리고 초등 음악 방법 등이다. 그는 현재 음악교육연구 저널(JRME), 음악교육 연구조사(RSME), 영유아를 위한 국제 음악 저널(IJMEC)의 편집위원이다. 치후는 네 권의 편집된 책을 출판했는데 이는 다음과 같다: (1)『문맥화된 예술 교육 실천: 싱가포르에 관한 국제적 대화』, (2) 『아시아와 태평양의 음악 유년기』, (3) 『예술 교육 및 문화적 다양성: 정책, 연구, 실천 및 비판적 관점』, (4) 『예술 환경: 예술과 놀이 체험에 참여하는 어린이들』. (4)의 책은 총 세 권으로 공동 저술된 학술서적이며 이는 다음과 같다. (1) 『살아있는 전설 가르치기: 21세기 음악 교육자를 위한 전문적 발전과 수업』, (2) 『전통의 세미오너트: 싱가포르의 음악, 문화 및 정체성』 (3) 『세계 음악 교육학: 학교-지역 사회 교차로』. 그는 학술 서적의 챕터, 기사의 글을 편집하고 국내외에서 수많은 컨퍼런스 프레젠테이션을 했다.'
            },
            {
                img : img_09,
                moder : '',
                name : '보와 렁 ',
                en_name : '(Bo-Wah Leung)',
                li_title : '- 홍콩 교육 대학교 교수, 홍콩',
                li_contents : '보와 렁 교수는 현재 홍콩 교육대학교(EdUHK)에서 문화창조예술학과 교수이자 광동오페라방송연구센터장을 맡고 있다. 그는 "초등 및 중등 학교에서 광둥 오페라 교육에 관한 공동 프로젝트"라는 제목의 연구 프로젝트를 주도한 공로로 2011년 국제음악위원회(International Music Council)에서 유명한 음악적 권리상(Musical Rights Award)을 수상했으며, 2012년 홍콩 교육대학원(HKIEd)로부터 지식전수상(Knowledge Transfer Award)을 받았다. 렁 교수는 현재 국제음악교육학회(ISME) 회장 당선자이자 아시아-태평양 음악교육연구회(APSMER)의 의장, 중국 동북사범대학, 광저우 대학교, 화남 사범대학의 음악학과 겸임교수이며  아시아-태평양 예술교육저널의 편집장을 맡고있다.'
            },
            {
                img : img_10,
                moder : '',
                name : '메이-춘 린 ',
                en_name : '(Mei-Chun Lin)',
                li_title : '- 미정',
                li_contents : '미정'
            },
            {
                img : img_11,
                moder : '',
                name : '에밀리 어챙 아쿠노 ',
                en_name : '(Emily Achieng’ Akuno)',
                li_title : '- 케냐 대학교 음악과 교수, 케냐',
                li_contents : '케냐 출신의 에밀리 어챙 아쿠노 교수는 음악 연주자이자 교육자로 케냐, 미국, 영국에서 교육받았다. 그녀는 케냐와 남아프리카에서 음악 교육을 통해 문화적 관련성에 중점을 둔 연구를 수행했다. 현재 진행 중인 그녀의 연구는 케냐의 국립연구기금이 후원하는 프로젝트인 지역사회 발전을 위한 청년들에게 힘을 실어주기 위한 수단으로서의 창의성에 대한 연구다. 에밀리는 국제 음악 위원회(IMC)의 회장을 역임했으며, 현재 국제 음악 교육 협회(ISME)의 회장을 맡고 있다. 그녀가 집필한 책 중 하나는 『아프리카의 음악교육: 개념, 연습, 과정(2019)』이며, 이는 아프리카 학자들이 집필하고 라우트리지(Routlege) 출판사가 출판한 아프리카의 음악 교육에 관한 편집본이다.'
            },
            {
                img : img_12,
                moder : '',
                name : '랄프 벅 ',
                en_name : '(Ralph Buck)',
                li_title : '- 부교수, 뉴질랜드',
                li_contents : '랄프 벅(박사) 부교수는 뉴질랜드 오클랜드 대학교의 무용학부 학과장이다. 그의 연구와 교육은 무용교육 커리큘럼, 무용 교육학, 그리고 생활무용에 초점을 맞추고 있다. 랄프는 유네스코 무용 및 사회 포용(Dance and Social Inclusion)의장직을 맡고 있으며, 현재 세계예술교육연합(WAAE)과 같은 몇몇 국제무용연구 및 서비스 기관에서 활동하고 있다.\n\n'
                            + '랄프의 교육과 리더십은 오클랜드 대학교 특별 교육 시상식에서 2008년 오클랜드 대학교 우수 교수상, 2010년 리더십상, 2006년 기회균등 우수상, 2016년 창의적인 예술 및 산업 연구 우수상 등을 수상하면서 인정받았다. 랄프는 노스웨스트사범대학 객원교수직과 베이징무용아카데미를 포함한 여러 국제 학술에 활동을 하고 있다. 그의 무용 교육 연구는 국제 학술지에 게재되었으며 중국, 호주, 콜롬비아, 스웨덴, 핀란드, 싱가포르, 덴마크, 뉴질랜드, 피지에서 초청 기조 연설과 마스터 클래스를 진행했다.'
            },
            {
                img : img_13,
                moder : '[사회자]',
                name : '장웅조',
                en_name : '',
                li_title : '- 홍익대학교 부교수, 한국',
                li_contents : '장웅조는 예술경영과 문화정책 연구를 해오며, 최근에는 예술리더십과 앙트러프러너십에 관련한 주제에 집중하고 있다. 서울대에서 중문학 학사와 공연예술학 석사를 마치고, 미국 오하이오 주립대학에서 예술정책 및 경영 전공으로 박사학위를 받았다. 이후 미국 시애틀대학교의 예술리더십 학과 교수를 거쳐 홍익대학교 문화예술경영학과 교수로 재직 중이다. 현재 Journal of Arts Management, Law, and Society, 예술경영연구, 문화경제, 문화정책논총 등의 편집위원이며 한국 문화예술경영학회의 학술위원장으로 활동하고 있다.'
            }
        ]
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PTop title={p_topcontents_a.title} time={p_topcontents_a.time} /> 
                    <PCenterArea>
                        <PLeftArea>
                            <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} /> 
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
    padding-top : 20px;
`
const PSection = styled(ListSession)`
    border-top : 1px solid var(--turtle-green);
    margin-top : 60px;
`


export default withRouter(_Closing)