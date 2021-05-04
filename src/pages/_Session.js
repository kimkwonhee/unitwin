import React, {useState} from 'react'
import styled from 'styled-components'
import Personbtn from '../components/atom/Personbtn'
import PageTopArea from '../components/molecules/PageTopArea'
import ThemebtnGroup from '../components/molecules/ThemebtnGroup'
import { Link, withRouter } from 'react-router-dom';
import img_01 from '../images/session_01.png'
import img_02 from '../images/session_02.png'
import img_03 from '../images/session_03.png'
import img_04 from '../images/session_04.png'
import img_05 from '../images/session_05.png'
import img_06 from '../images/session_06.png'
import img_07 from '../images/session_07.png'
import img_08 from '../images/session_08.png'
import img_09 from '../images/session_09.png'
import img_10 from '../images/session_10.png'
import img_11 from '../images/session_11.png'
import img_12 from '../images/session_10.png'
import img_13 from '../images/session_13.png'
import img_14 from '../images/session_14.png'
import img_15 from '../images/session_15.png'
import img_16 from '../images/session_16.png'
import img_17 from '../images/session_17.png'
import img_18 from '../images/session_18.png'
import img_19 from '../images/session_19.png'
import img_20 from '../images/session_20.png'
import img_21 from '../images/session_21.png'
import img_22 from '../images/session_22.png'
import img_23 from '../images/session_23.png'
import img_24 from '../images/session_24.png'
import img_25 from '../images/session_25.png'
import img_26 from '../images/session_12.png'
import img_27 from '../images/session_34.png'
import img_28 from '../images/session_35.png'
import img_29 from '../images/session_36.png'
import img_30 from '../images/session_37.png'
import img_38 from '../images/session_38.png'
import img_39 from '../images/session_39.png'
import img_40 from '../images/session_40.png'
import img_41 from '../images/session_41.png'
import img_42 from '../images/session_42.png'
import img_43 from '../images/session_43.png'
import img_44 from '../images/session_44.png'
import img_45 from '../images/session_45.png'
import img_46 from '../images/session_46.png'
import img_47 from '../images/session_47.png'


const _Session = () => {
    const [selectCatagory, setSelectCatagory] = useState('all');
    

    const personlist = [
        { id : 1, img : img_01, name : '정용성' , title : "현장사례연구 1", link : "/unitwin/session/a", catagory : '팬데믹'},
        { id : 2, img : img_02, name : '이은수' , title : "현장사례연구 1", link : "/unitwin/session/a", catagory : '팬데믹'},
        { id : 3, img : img_03, name : '김소원' , title : "현장사례연구 1", link : "/unitwin/session/a", catagory : '팬데믹'},
        { id : 4, img : img_04, name : '김수연' , title : "현장사례연구 1", link : "/unitwin/session/a", catagory : '팬데믹'},
        { id : 5, img : img_05, name : '이보람' , title : "현장사례연구 1", link : "/unitwin/session/a", catagory : '팬데믹'},
        { id : 6, img : img_06, name : '티나 쿠코' , title : "예술 치유" , link : "/unitwin/session/b", catagory : '청소년정신건강'},
        { id : 7, img : img_07, name : '산자 크르스마노비츠 타식' , title : "예술 치유", link : "/unitwin/session/b", catagory : '청소년정신건강'},
        { id : 8, img : img_08, name : '엠시 베트만' , title : "예술 치유", link : "/unitwin/session/b", catagory : '청소년정신건강'},
        { id : 9, img : img_09, name : '김채연' , title : "예술 치유", link : "/unitwin/session/b", catagory : '청소년정신건강'},
        { id : 10, img : img_11, name : '김태희' , title : "사회적 & 문화적 포용", link : "/unitwin/session/c", catagory : '글로벌'},
        { id : 11, img : img_12, name : '샤를린 라헨드란' , title : "사회적 & 문화적 포용", link : "/unitwin/session/c", catagory : '글로벌'},
        { id : 12, img : img_13, name : '난장' , title : "사회적 & 문화적 포용", link : "/unitwin/session/c", catagory : '글로벌'},
        { id : 13, img : img_14, name : '야라 도크랏' , title : "사회적 & 문화적 포용", link : "/unitwin/session/c", catagory : '글로벌'},
        { id : 14, img : img_15, name : '벤자민 볼든' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 15, img : img_16, name : '네릴 제너렛' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 16, img : img_17, name : '차후 룸' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 17, img : img_18, name : '젠 터' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 18, img : img_19, name : '캐서린 콜만' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 19, img : img_20, name : '마크 셀크릭' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 20, img : img_21, name : '에비 맥도날드' , title : "서울 어젠다", link : "/unitwin/session/d", catagory : '지속가능성'},
        { id : 21, img : img_22, name : '마리클레어 키덴다' , title : "교실 속의 예술", link : "/unitwin/session/e", catagory : '다양성포용'},
        { id : 22, img : img_23, name : '에밀리 맥밀런' , title : "교실 속의 예술", link : "/unitwin/session/d", catagory : '다양성포용'},
        { id : 23, img : img_24, name : '홍지혜' , title : "교실 속의 예술", link : "/unitwin/session/d", catagory : '다양성포용'},
        { id : 24, img : img_25, name : '에밀리 윌슨' , title : "교실 속의 예술", link : "/unitwin/session/d", catagory : '다양성포용'},
        { id : 25, img : img_16, name : '네릴 제너렛' , title : "교실 속의 예술", link : "/unitwin/session/d", catagory : '다양성포용'},
        { id : 26, img : img_26, name : '제환정' , title : "예술 참여", link : "/unitwin/session/f", catagory : '다양성포용'},
        { id : 27, img : img_27, name : '정혜연' , title : "예술 참여", link : "/unitwin/session/f", catagory : '다양성포용'},
        { id : 28, img : img_28, name : '성효진' , title : "예술 참여", link : "/unitwin/session/f", catagory : '다양성포용'},
        { id : 29, img : img_10, name : '레베칸 칸' , title : "예술 참여", link : "/unitwin/session/f", catagory : '다양성포용'},
        { id : 30, img : img_29, name : '푸 세이밍' , title : "예술 참여", link : "/unitwin/session/f", catagory : '예술교육가'},
        { id : 31, img : img_30, name : '탄정수안' , title : "예술 참여", link : "/unitwin/session/f", catagory : '예술교육가'},
        { id : 32, img : img_10, name : '제프 풀린' , title : "예술 참여", link : "/unitwin/session/f", catagory : '예술교육가'},
        { id : 33, img : img_38, name : '루스 렌슬러' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 34, img : img_39, name : '심지영' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 35, img : img_40, name : '김유리' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 36, img : img_41, name : '박소정' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 37, img : img_42, name : '션 코코란' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 38, img : img_15, name : '벤자민 볼든' , title : "다양성 & 문화적 묘사", link : "/unitwin/session/g", catagory : '예술교육가'},
        { id : 39, img : img_43, name : '장수혜' , title : "현장사례연구 2", link : "/unitwin/session/h", catagory : '사회적예술'},
        { id : 40, img : img_44, name : '공윤지' , title : "현장사례연구 2", link : "/unitwin/session/h", catagory : '사회적예술'},
        { id : 41, img : img_45, name : '이현정' , title : "현장사례연구 2", link : "/unitwin/session/h", catagory : '사회적예술'},
        { id : 42, img : img_46, name : '배성종' , title : "현장사례연구 2", link : "/unitwin/session/h", catagory : '평등'},
        { id : 43, img : img_47, name : '최영희' , title : "현장사례연구 2", link : "/unitwin/session/h", catagory : '평등'},
    ]
    const [selList , setSelList ] = useState(personlist);

    const onSelctCatagry = async (c_name) => {
        await setSelectCatagory(c_name);
        if (c_name === 'all') {
            await setSelList(personlist)
            return
        }
        let newArray = [];
        await personlist.forEach(async sel => {
            if (sel.catagory == c_name) {
                await newArray.push(sel)
            }
        })
        await setSelList(newArray);
    }

    const topcontents = [
        {
            title : '주제세션',
            contents : '과학기술을 접목한 기술융합예술 활성화를 위해 디지털과 동시대 기술을 활용한\n'
                    +'예술작품 창작과 향유, 기초예술의 온라인 확장 등 미래예술 발전을 위해 다양한 추진하고 있습니다.'
        },
        {
            title : '강연자 소개',
            contents : <ThemebtnGroup onSelctCatagry={onSelctCatagry} selectedcatagory={selectCatagory}/>
        }
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
                        {selList.map((list, index) => {
                            return <PLink to={list.link}>
                                     <Personbtn 
                                        key={list.id} 
                                        src={list.img} 
                                        name={list.name}
                                        title={list.title}
                                    />
                            </PLink>
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
    justify-content : flex-start;
    padding : 0 20px 0 20px;
    flex-wrap : wrap;
    background : red;
`
const PLink = styled(Link)`
    text-decoration : none;
`

export default _Session