import React, {useState} from 'react'
import styled from 'styled-components'
import PageTopArea from '../components/molecules/PageTopArea'
import { Link, withRouter } from 'react-router-dom';
import color from '../style/color'

const _PreShowcase = () => {
    const p_topcontents = {
        title : '기획세션',
        contents : '과학기술을 접목한 기술융합예술 활성화를 위해 디지털과 동시대 기술을 활용한\n예술작품 창작과 향유, 기초예술의 온라인 확장 등 미래예술 발전을 위해 다양한 추진하고 있습니다.',
    }

    const enterprise = [
        { img : '로고1', contents : '가나다', link : '/2021/unitwin2021/presession-showcase/a' },
        { img : '로고2', contents : '라마바', link : '/2021/unitwin2021/presession-showcase/b' }
    ]
    
    const [detailData, setDetailData] = useState(enterprise[0]);

    console.log(enterprise[0]);

    const onClick = (num) => {
        setDetailData(enterprise[num]);
    }

    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents 
                            title={p_topcontents.title} 
                            contents={p_topcontents.contents}
                        />
                    <PSectionArea>
                        <PLogoArea>
                            <Loga onClick={()=>onClick(0)}>로고 1</Loga>
                            <Loga onClick={()=>onClick(1)}>로고 2</Loga>
                            <Loga>로고 3</Loga>
                            <Loga>로고 4</Loga>
                            <Loga>로고 5</Loga>
                            <Loga>로고 6</Loga>
                            <Loga>로고 7</Loga>
                            <Loga>로고 8</Loga>
                            <Loga>로고 9</Loga>
                        </PLogoArea>
                        <PDetailArea>
                            <PLogoImg>{detailData.img}</PLogoImg>
                            <PDetailData>{detailData.contents}</PDetailData>
                            <PLink to={detailData.link}>
                                <PMoreArea>                                
                                    <PMorebtn>More &#62;</PMorebtn>
                                </PMoreArea>
                            </PLink>
                        </PDetailArea>
                    </PSectionArea>
                </PInner>
            </PWrapper>
        </>        
    )
}

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
`
const PSectionArea = styled.div`
    margin-top : 80px;
    display : flex;
    width : 100%;
    height : 500px;
    background : red;
`
const PLogoArea = styled.div`
    width : 600px;
    height : 100%;
    background : gray;
`
const Loga = styled.button`
    width : 100px;
    height : 50px;
    background : blue;
`
const PDetailArea = styled.div`
    width : 420px;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background : green;
`
const PLogoImg = styled.div`
    width : 80px;
    height : 24px;
    background: blue;
`
const PDetailData = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.black};
`
const PMoreArea = styled.div`
    margin-top : 28px;
    width :158px;
    height : 32px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 20px;
    background-color: ${color.turtle_green};
`
const PMorebtn = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${color.white};
`
const PLink = styled(Link)`
    text-decoration : none;
`

export default _PreShowcase