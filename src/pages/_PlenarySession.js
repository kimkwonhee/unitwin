import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom';
import character1 from '../images/plense_img01.png'
import character2 from '../images/plense_img02.png'
import PageTopArea from '../components/molecules/PageTopArea'
import Pl_SectionData from '../components/organism/plenarysession/Pl_SectionData'

const _PlenarySession = () => {
        const p_topcontents = {
        title : '행사소개',
        contents : '우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데,\n'
                   +'예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한\n'
                   +'자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을\n'
                   +'불러 일으킬 것입니다.',
        data : [
            {
                imgs : character1,
                title : "예술교육 2.0의 다양성",
                time : "05.25(화) 13:00-13:40",
                name : "벤야민 요리슨 ",
                enname : "(Benjamin Jorissen)",
                jop : "- 뮌헨 미술원 선임연구원",
                link : '/unitwin/plenary-session/a'
            },
            {
                imgs : character2,
                title : '예술 교육의 과제로서의 "문화적 회복력"과 "미적 회복력"\n'
                       +': 문화적 지속가능성 교육학을 위한 회복컨셉에 대한 범위와 한계',
                time : "05.26(수) 13:00~13:40",
                name : "벤야민 요리슨 ",
                enname : "(Benjamin Jorissen)",
                jop : "- 유니트윈-문화다양성과 지속발전가능한 예술교육 연구 프로그램 정회원, 독일",
                link : '/unitwin/plenary-session/b'
            }
        ]
    }

    const m_topcontents = {
        title : '행사소개',
        contents : '우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데, 예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한 자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한성찰의 힘을 불러 일으킬 것입니다.',
        data : [
            {
                imgs : character1,
                title : "예술교육 2.0의 다양성", 
                time : "05.25(화) 13:00-13:40",
                name : "닐 매코넌",
                enname : "(Neil McConnon)",
                jop : "뮌헨 미술원 선임연구원",
                link : '/unitwin/plenary-session/a'
            },
            {
                imgs : character2,
                title : '예술 교육의 과제로서의\n“문화적 회복력”과 ”미적 회복력”:\n문화적 지속가능성 교육학을 위한\n회복 컨셉에 대한 범위와 한계',
                time : "05.25(화) 13:00~13:40",
                name : "벤야민 요리슨",
                enname : "(Benjamin Jorissen)",
                jop : "세계문화예술 발제자",
                link : '/unitwin/plenary-session/b'
            }
        ]
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_topcontents.title} 
                            contents={p_topcontents.contents}
                        />
                    <PMiddleArea>
                        <P_Data 
                            imgs={p_topcontents.data[0].imgs}
                            title={p_topcontents.data[0].title}
                            time={p_topcontents.data[0].time}
                            name={p_topcontents.data[0].name}
                            enname={p_topcontents.data[0].enname}
                            jop={p_topcontents.data[0].jop}
                            link={p_topcontents.data[0].link}
                        />
                        <P_Data 
                             imgs={p_topcontents.data[1].imgs}
                             title={p_topcontents.data[1].title}
                             time={p_topcontents.data[1].time}
                             name={p_topcontents.data[1].name}
                             enname={p_topcontents.data[1].enname}
                             jop={p_topcontents.data[1].jop}
                             link={p_topcontents.data[1].link}
                        />
                    </PMiddleArea>
                </PInner>
            </PWrapper>
            {/* Mobile */}
            
            <MWrapper>
                <MInner>
                    <MContents 
                            title={m_topcontents.title} 
                            contents={m_topcontents.contents}
                        />
                    <MMiddleArea>
                        <M_Data 
                             imgs={m_topcontents.data[0].imgs}
                             title={m_topcontents.data[0].title}
                             time={m_topcontents.data[0].time}
                             name={m_topcontents.data[0].name}
                             enname={m_topcontents.data[0].enname}
                             jop={m_topcontents.data[0].jop}
                        />
                        <M_Data 
                             imgs={m_topcontents.data[1].imgs}
                             title={m_topcontents.data[1].title}
                             time={m_topcontents.data[1].time}
                             name={m_topcontents.data[1].name}
                             enname={m_topcontents.data[1].enname}
                             jop={m_topcontents.data[1].jop}
                        />
                    </MMiddleArea>
                </MInner>
            </MWrapper>
        </>
    )
}
// PC
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
    /* background-color :red; */
`
const PMiddleArea = styled.div`
    margin-top : 120px;
    border-top : 4px solid var(--turtle-green);
    /* background-color : red; */
`
const P_Data = styled(Pl_SectionData)`
`


// Mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 50px 16px;
    display : flex;
    justify-content : center;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`
const MContents = styled(PageTopArea)`
    margin-top : 100px;
`
const MMiddleArea = styled.div`
    margin-top : 40px;
    border-top : 2px solid var(--turtle-green);
`
const M_Data = styled(Pl_SectionData)`
`

export default _PlenarySession