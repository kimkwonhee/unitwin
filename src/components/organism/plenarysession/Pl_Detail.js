import React from 'react'
import styled from 'styled-components'
import ListSession from '../../molecules/ListSession'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import { withRouter } from 'react-router-dom'
import imga from '../../../images/plense_img01.png'
import imgb from '../../../images/session_01.png'


const Pl_Detail = ({match}) => {
    const p_topcontents_a = {
        title : '문화예술교육 2.0의 다양성',
        time : '05.25(화) 13:00~13:40',
        video_text : '우리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데, 예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한 자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을 불러 일으킬 것입니다.',
        download : true,
        list : [
            {
                img : imga,
                moder : '',
                name : '언더스 바그너',
                en_name : '(Ernst Wagner)',
                li_title : '- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원 / 뮌헨 미술원 선임연구원, 독일',
                li_contents : '서울 어젠다 채택 이후로 10년이 넘는 기간 동안, 전 세계의 예술 교육에 대한 가장 중요한 문서를 다시 살펴볼 때다.\n'
                              +'서울 어젠다는 큰 성공을 거뒀고 그 이후로 많은 것이 성취되었다. 서울 어젠다가 유니트윈(UNITWIN)같은 네트워크에 국제적으로 집중된 협력을 촉발시킨 것을 예로 들 수 있다. 그러나, 2017년에 벤 볼든과 다른 사람들이 함께 발간한 전 세계 예술교육의 이해도에 대한 비교 연구(국제예술교육연보, V5, 2017)에선 서울 어젠다의 목표에 대한 세계적인 공감 하에 현저하게 다르고, 또 다양한 형태가 존재하고 있음을 보여준다.'
                              +'언스트 바그너의 강의는 이러한 다양성이 새롭게 보여질 필요가 있다는 것을 보여주기 위해 "시각적 문화의 탐구"를 예시로 사용할 것이다. 바그너는 이견에 대해서 추가적인 심사 숙고가 절대적으로 필요하다는 것을 보여줄 것이다.  그래야만 서울 어젠다의 3번째 목표인, "문화 다양성 증진과 문화적 대화"가 실행될 수 있다. 전 세계적으로 정치적, 그리고 문화적 긴장감이 고조되는 시대에, 오로지 예술 교육만이 문화적 다양성을 심각하게 받아들이고, 전세계의 이해당사자들을 진정한 대화에 끌어들임으로써 "문화적 문제의 해결"에 도움이 될 수 있다. 이 프레젠테이션에서는 이 방법이 어떻게 작용되는지에 대한 원칙이 제시될 것이다.'
            },
            {
                img : imgb,
                moder : '[모더레이터]',
                name : '치후 룸',
                en_name : '(Ernst Wagner)',
                li_title : '- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원 / 뮌헨 미술원 선임연구원, 독일',
                li_contents : '서울 어젠다 채택 이후로 10년이 넘는 기간 동안, 전 세계의 예술 교육에 대한 가장 중요한 문서를 다시 살펴볼 때다.\n'
                              +'서울 어젠다는 큰 성공을 거뒀고 그 이후로 많은 것이 성취되었다. 서울 어젠다가 유니트윈(UNITWIN)같은 네트워크에 국제적으로 집중된 협력을 촉발시킨 것을 예로 들 수 있다. 그러나, 2017년에 벤 볼든과 다른 사람들이 함께 발간한 전 세계 예술교육의 이해도에 대한 비교 연구(국제예술교육연보, V5, 2017)에선 서울 어젠다의 목표에 대한 세계적인 공감 하에 현저하게 다르고, 또 다양한 형태가 존재하고 있음을 보여준다.'
                              +'언스트 바그너의 강의는 이러한 다양성이 새롭게 보여질 필요가 있다는 것을 보여주기 위해 "시각적 문화의 탐구"를 예시로 사용할 것이다. 바그너는 이견에 대해서 추가적인 심사 숙고가 절대적으로 필요하다는 것을 보여줄 것이다.  그래야만 서울 어젠다의 3번째 목표인, "문화 다양성 증진과 문화적 대화"가 실행될 수 있다. 전 세계적으로 정치적, 그리고 문화적 긴장감이 고조되는 시대에, 오로지 예술 교육만이 문화적 다양성을 심각하게 받아들이고, 전세계의 이해당사자들을 진정한 대화에 끌어들임으로써 "문화적 문제의 해결"에 도움이 될 수 있다. 이 프레젠테이션에서는 이 방법이 어떻게 작용되는지에 대한 원칙이 제시될 것이다.'
            }
        ]
    }

    const p_topcontents_b = {
        title : '유니트윈-문화다양성과 지속발전가능한 예술교육 연구 프로그램',
        time : '05.26(수) 13:40 ~ 15:10',
        video_text : '가리는 지금 다양성·평등·팬데믹·기후위기와 관련된 전지구적 위기가 보편화 되고 있는 가운데, 예술교육을 통해 예술이 지닌 회복과 창조의 역할을 이야기하려 합니다. 예술교육은 우리가 속한 자연을 회복시킬 수 있으며, 또한 미래에 대해 창의적이고 포용적인 생각을 하기 위한 성찰의 힘을 불러 일으킬 것입니다.',
        download : true,
        list : [
            {
                img : imga,
                moder : '',
                name : '치후 룸 ',
                en_name : '(Ernst Wagner)',
                li_title : '- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원 / 뮌헨 미술원 선임연구원, 독일',
                li_contents : '서울 어젠다 채택 이후로 10년이 넘는 기간 동안, 전 세계의 예술 교육에 대한 가장 중요한 문서를 다시 살펴볼 때다.\n'
                              +'서울 어젠다는 큰 성공을 거뒀고 그 이후로 많은 것이 성취되었다. 서울 어젠다가 유니트윈(UNITWIN)같은 네트워크에 국제적으로 집중된 협력을 촉발시킨 것을 예로 들 수 있다. 그러나, 2017년에 벤 볼든과 다른 사람들이 함께 발간한 전 세계 예술교육의 이해도에 대한 비교 연구(국제예술교육연보, V5, 2017)에선 서울 어젠다의 목표에 대한 세계적인 공감 하에 현저하게 다르고, 또 다양한 형태가 존재하고 있음을 보여준다.'
                              +'언스트 바그너의 강의는 이러한 다양성이 새롭게 보여질 필요가 있다는 것을 보여주기 위해 "시각적 문화의 탐구"를 예시로 사용할 것이다. 바그너는 이견에 대해서 추가적인 심사 숙고가 절대적으로 필요하다는 것을 보여줄 것이다.  그래야만 서울 어젠다의 3번째 목표인, "문화 다양성 증진과 문화적 대화"가 실행될 수 있다. 전 세계적으로 정치적, 그리고 문화적 긴장감이 고조되는 시대에, 오로지 예술 교육만이 문화적 다양성을 심각하게 받아들이고, 전세계의 이해당사자들을 진정한 대화에 끌어들임으로써 "문화적 문제의 해결"에 도움이 될 수 있다. 이 프레젠테이션에서는 이 방법이 어떻게 작용되는지에 대한 원칙이 제시될 것이다.'
            },
            {
                img : imgb,
                moder : '[모더레이터]',
                name : '언더 ',
                en_name : '(Ernst Wagner)',
                li_title : '- 유니트윈-문화다양성과 지속가능발전을 위한 예술교육 연구회 명예회원 / 뮌헨 미술원 선임연구원, 독일',
                li_contents : '서울 어젠다 채택 이후로 10년이 넘는 기간 동안, 전 세계의 예술 교육에 대한 가장 중요한 문서를 다시 살펴볼 때다.\n'
                              +'서울 어젠다는 큰 성공을 거뒀고 그 이후로 많은 것이 성취되었다. 서울 어젠다가 유니트윈(UNITWIN)같은 네트워크에 국제적으로 집중된 협력을 촉발시킨 것을 예로 들 수 있다. 그러나, 2017년에 벤 볼든과 다른 사람들이 함께 발간한 전 세계 예술교육의 이해도에 대한 비교 연구(국제예술교육연보, V5, 2017)에선 서울 어젠다의 목표에 대한 세계적인 공감 하에 현저하게 다르고, 또 다양한 형태가 존재하고 있음을 보여준다.'
                              +'언스트 바그너의 강의는 이러한 다양성이 새롭게 보여질 필요가 있다는 것을 보여주기 위해 "시각적 문화의 탐구"를 예시로 사용할 것이다. 바그너는 이견에 대해서 추가적인 심사 숙고가 절대적으로 필요하다는 것을 보여줄 것이다.  그래야만 서울 어젠다의 3번째 목표인, "문화 다양성 증진과 문화적 대화"가 실행될 수 있다. 전 세계적으로 정치적, 그리고 문화적 긴장감이 고조되는 시대에, 오로지 예술 교육만이 문화적 다양성을 심각하게 받아들이고, 전세계의 이해당사자들을 진정한 대화에 끌어들임으로써 "문화적 문제의 해결"에 도움이 될 수 있다. 이 프레젠테이션에서는 이 방법이 어떻게 작용되는지에 대한 원칙이 제시될 것이다.'
            }
        ]
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    {match.params.detail == 'a' 
                    ? <PTop title={p_topcontents_a.title} time={p_topcontents_a.time} /> 
                    : <PTop title={p_topcontents_b.title} time={p_topcontents_b.time}
                    />}
                    <PCenterArea>
                        <PLeftArea>
                        {match.params.detail == 'a' 
                        ? <PVideo discription={p_topcontents_a.video_text} down={p_topcontents_a.download} /> 
                        : <PVideo discription={p_topcontents_b.video_text} down={p_topcontents_b.download}
                        />}
                            <PContentsArea>
                            {match.params.detail == 'a' 
                            ? <PSection data={p_topcontents_a.list} /> 
                            : <PSection data={p_topcontents_b.list}
                            />}
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


export default withRouter(Pl_Detail)