import React from 'react'
import styled from 'styled-components'
import Personbtn from '../components/atom/Personbtn'
import PageTopArea from '../components/molecules/PageTopArea'
import ThemebtnGroup from '../components/molecules/ThemebtnGroup'
import person1 from '../images/session_01.png'
import person2 from '../images/session_02.png'
import person3 from '../images/session_03.png'
import person4 from '../images/session_04.png'
import person5 from '../images/session_05.png'
import person6 from '../images/session_06.png'
import person7 from '../images/session_07.png'
import person8 from '../images/session_08.png'
import person9 from '../images/session_09.png'

const _Session = () => {
    const topcontents = [
        {
            title : '주제세션',
            contents : '과학기술을 접목한 기술융합예술 활성화를 위해 디지털과 동시대 기술을 활용한\n'
                    +'예술작품 창작과 향유, 기초예술의 온라인 확장 등 미래예술 발전을 위해 다양한 추진하고 있습니다.'
        },
        {
            title : '강연자 소개',
            contents : <ThemebtnGroup />
        }
    ]
    const personlist = [
        {
            id : 1,
            img : person1,
            name : '마리 클레어 키덴다'
        },
        {
            id : 2,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 3,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 4,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 5,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 6,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 7,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 8,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 9,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 10,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 11,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 12,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 13,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 14,
            img : person2,
            name : '마리 클레어 키덴다'
        },
        {
            id : 15,
            img : person2,
            name : '마리 클레어 키덴다'
        }
    ]

    return (
        <Wrapper>
            <Inner>
                <TopArea1 
                    title={topcontents[0].title} 
                    contents={topcontents[0].contents}
                />
                <TopArea2 
                    title={topcontents[1].title} 
                    contents={topcontents[1].contents}
                />
                <Section>
                    {personlist.map((list, index) => {
                        return <Personbtn 
                                    key={list.id} 
                                    src={list.img} 
                                    name={list.name}
                                />
                    })}
                </Section>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom : 200px;
    display : flex;
    justify-content : center;
`
const Inner = styled.div`
    width : 1200px;
`
const TopArea1 = styled(PageTopArea)`
    margin-bottom : 120px;
`
const TopArea2 = styled(PageTopArea)`
    margin-bottom : 60px;
`

const Section = styled.div`
    margin-top : 48px;
    display : flex;
    justify-content : space-between;
    padding : 0 20px 0 20px;
    flex-wrap : wrap;
    /* background-color : blue; */
`

export default _Session