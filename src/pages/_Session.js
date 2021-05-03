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
        { id : 1, img : person1, name : '저용성' },
        { id : 2, img : person2, name : '이은수' },
        { id : 3, img : person2, name : '김소원' },
        { id : 4, img : person2, name : '김수연' },
        { id : 5, img : person2, name : '이보람' },
        { id : 6, img : person2, name : '티나 쿠코' },
        { id : 7, img : person2, name : '산자 크르스마노비츠 타식' },
        { id : 8, img : person2, name : '엠시 베트만' },
        { id : 9, img : person2, name : '김채연' },
        { id : 10, img : person2, name : '글로리아 자파타' },
        { id : 11, img : person2, name : '김태희' },
        { id : 12, img : person2, name : '샤를린 라헨드란' },
        { id : 13, img : person2, name : '난장' },
        { id : 14, img : person2, name : '야라 도크랏' },
        { id : 15, img : person2, name : '벤자민 볼든' },
        { id : 16, img : person2, name : '네릴 제너렛' },
        { id : 17, img : person2, name : '차후 룸' },
        { id : 18, img : person2, name : '젠 터' },
        { id : 19, img : person2, name : '캐서린 콜만' },
        { id : 20, img : person2, name : '마크 셀크릭' },
        { id : 21, img : person2, name : '에비 맥도날드' },
        { id : 22, img : person2, name : '마리클레어 키덴다' },
        { id : 23, img : person2, name : '에밀리 맥밀런' },
        { id : 24, img : person2, name : '홍지혜' },
        { id : 25, img : person2, name : '에밀리 윌슨' },
        { id : 26, img : person2, name : '네릴 제너렛' },
        { id : 27, img : person2, name : '젠 터' },
        { id : 28, img : person2, name : '캐서린 콜만' },
        { id : 29, img : person2, name : '마크 셀크릭' },
        { id : 30, img : person2, name : '에비 맥도날드' },
        { id : 31, img : person2, name : '제환정' },
        { id : 32, img : person2, name : '정혜연' },
        { id : 33, img : person2, name : '성효진' },
        { id : 34, img : person2, name : '레베칸 칸' },
        { id : 35, img : person2, name : '푸 세이밍' },
        { id : 36, img : person2, name : '탄정수안' },
        { id : 37, img : person2, name : '제프 풀린' },
        { id : 38, img : person2, name : '루스 렌슬러' },
        { id : 39, img : person2, name : '심지영' },
        { id : 40, img : person2, name : '김유리' },
        { id : 41, img : person2, name : '박소정' },
        { id : 42, img : person2, name : '션 코코란' },
        { id : 43, img : person2, name : '벤자민 볼든' },
        { id : 44, img : person2, name : '장수혜' },
        { id : 45, img : person2, name : '공윤지' },
        { id : 46, img : person2, name : '이현정' },
        { id : 47, img : person2, name : '배성종' },
        { id : 48, img : person2, name : '최영희' },
    ]

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents1 
                        title={topcontents[0].title} 
                        contents={topcontents[0].contents}
                    />
                    <PContents2 
                        title={topcontents[1].title} 
                        contents={topcontents[1].contents}
                    />
                    <PSection>
                        {personlist.map((list, index) => {
                            return <Personbtn 
                                        key={list.id} 
                                        src={list.img} 
                                        name={list.name}
                                    />
                        })}
                    </PSection>
                </PInner>
            </PWrapper>
        </>
    )
}

const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 200px;
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
const PContents1 = styled(PageTopArea)`
    margin-top : 180px;
`
const PContents2 = styled(PageTopArea)`
    margin-top : 120px;
`
const PSection = styled.div`
    margin-top : 48px;
    display : flex;
    justify-content : space-between;
    padding : 0 20px 0 20px;
    flex-wrap : wrap;
`

export default _Session