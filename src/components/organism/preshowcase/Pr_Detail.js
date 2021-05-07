import React from 'react'
import styled from 'styled-components'
import ListSessionTop from '../../molecules/ListSessionTop'
import ListVideoSession from '../../molecules/ListVideoSession'
import PlanSesionbtn from '../../atom/PlanSesionbtn'
import { withRouter } from 'react-router-dom'
import img_1 from '../../../images/session_10.png'
import color from '../../../style/color'

const Pr_Detail = ({match}) => {

    const p_topcontents_a = {
        title : '세션 1',
        discription : '인공지능과 빅데이터 기술의 발달로 대규모 데이터 분석능력을 넘어 문화예술 창작 분야까지 확장되고 있습니다. 또한, 5G와 같은 네트워크의 발달로 인해 초연결, 초대용량의 서비스가 가능해지면서 가상현실(VR)과 같이 기존의 네트워크 환경에서는 구현할 수 없는 것들이 가능해지면서 예술 창작의 경계가 점차 확대되고 있습니다. 예술과 기술의 융합을 통한 동반성장을 도모하고, 다양한 관점에서 살펴볼 수 있습니다.',
        local : '광명 업사이클 아트센터',
        site : 'WWW.ADCE.CO.KR',
        list : [
            {
                id : 1,
                img : img_1,
                name : 'b',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법',
                link : '/2021/unitwin2021/presession-showcase/b'
            },
            {
                id : 2,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 3,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 4,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 5,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 6,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 7,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 8,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            }

        ]
    }


    const p_topcontents_b = {
        title : '세션 2',
        discription : '인공지능과 빅데이터 기술의 발달로 대규모 데이터 분석능력을 넘어 문화예술 창작 분야까지 확장되고 있습니다. 또한, 5G와 같은 네트워크의 발달로 인해 초연결, 초대용량의 서비스가 가능해지면서 가상현실(VR)과 같이 기존의 네트워크 환경에서는 구현할 수 없는 것들이 가능해지면서 예술 창작의 경계가 점차 확대되고 있습니다. 예술과 기술의 융합을 통한 동반성장을 도모하고, 다양한 관점에서 살펴볼 수 있습니다.',
        local : ' 업사이클 아트센터',
        site : 'WWW.ADCE.CO.KR',
        list : [
            {
                id : 1,
                img : img_1,
                name : 'a',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법',
                link : '/2021/unitwin2021/presession-showcase/a'
            },
            {
                id : 2,
                img : img_1,
                name : '그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 3,
                img : img_1,
                name : '그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 4,
                img : img_1,
                name : '그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 5,
                img : img_1,
                name : '그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 6,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 7,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            },
            {
                id : 8,
                img : img_1,
                name : '군포그림책박물관',
                discription : '국내 최초 업사이클\n특화예술공간임을 강조하는 방법'
            }

        ]
    }
    let pathname = match.params.pr_detail
    let topsection = null
    let sectionlist = null

    if(pathname=='a') {
        topsection = <PTop title={p_topcontents_a.title}/>;
        sectionlist = p_topcontents_a.list;
    }
    if(pathname=='b') {
        topsection = <PTop title={p_topcontents_b.title}/>;
        sectionlist = p_topcontents_b.list;
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    {topsection}
                    <PVideo height="675px"/>
                    <PContentsArea>
                        <PLogoArea>
                            <PLogoImg src={img_1} alt="logo"/>
                        </PLogoArea>
                        <PTextArea>
                            <PDiscription>{p_topcontents_a.discription}</PDiscription>
                            <PLocal>{p_topcontents_a.local}</PLocal>
                            <PSite>{p_topcontents_a.site}</PSite>
                        </PTextArea>
                    </PContentsArea>
                    <PListArea>
                        <PSection>
                            {sectionlist.map((list,index) => {
                                return <PlanSesionbtn 
                                            key={list.id}
                                            src={list.img} 
                                            name={list.name}
                                            discription={list.discription}
                                            link={list.link}/>
                            })}
                        </PSection>
                    </PListArea>
                </PInner>
            </PWrapper>
        </>
    )
}

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
const PVideo = styled(ListVideoSession)`
`
const PContentsArea = styled.div`
    padding: 60px 20px;
    margin-bottom : 40px;
    border-bottom : 1px solid ${color.turtle_green};
    display : flex;
`
const PLogoArea = styled.div`
    margin-right : 46px;
`
const PLogoImg = styled.img`
    width : 200px;
    height : 200px;
`
const PTextArea = styled.div`
    padding : 31px 0 31px 0;
`
const PDiscription = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.black};
`
const PLocal = styled.div`
    margin : 20px 0 8px 0;
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PSite = styled.a`
    cursor: pointer;
`
const PListArea = styled.div`
    padding : 0px 25px;
`
const PSection = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
`

export default withRouter(Pr_Detail)