import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../../components/atom/Downloadbtn'
import Downloadbtn2 from '../../components/atom/Downloadbtn2'
import color from '../../style/color'
import { useSelector } from 'react-redux'

const ListSession_Se = ({className, data}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    return (
        <>
            <PWrapper className={className}>
            {data.map(list => {
                return (
                <>
                    <PSection>
                        <PModer>{list.moder}</PModer>
                        <PTitle>{list.li_title}</PTitle>
                        <PInner>
                            {list.li_data.map((data, i) => {
                                return <Pdiv isTop={i === 0} id={data.hashtag}>
                                        <PItemInner >
                                            <PImgblock >
                                                <PImg src={data.imgs} alt={data.name} />     
                                            </PImgblock>
                                            <PTextblock>
                                                <PName>{data.name}<PEnName>{data.enname}</PEnName></PName>
                                                <PListtitle>{data.job}</PListtitle>
                                                <PContents dangerouslySetInnerHTML={ {__html: data.contents} } />
                                                <PDownloadArea>
                                                    <PDownlodebtn 
                                                        downlink={data.downlink} 
                                                        down={data.download} 
                                                    >
                                                        {curlang.p_data.classdownload}
                                                    </PDownlodebtn>
                                                    <PDownlodebtn2 
                                                        downlink={data.abdownlink} 
                                                        down={data.abdownload} 
                                                    >
                                                        {curlang.p_data.abdownload}
                                                    </PDownlodebtn2>
                                                </PDownloadArea>
                                            </PTextblock>
                                        </PItemInner>
                                    </Pdiv>
                            })}   
                        </PInner>
                    </PSection>
                </>
                )
            })}
            </PWrapper>

            <MWrapper>
                {data.map(list => {
                    return (
                    <>
                        <MSection>
                            <MModer>{list.moder}</MModer>
                            <MTitle>{list.li_title}</MTitle>
                            <MInner>
                                {list.li_data.map((data, i )=> {
                                    return <>
                                            <MTextblock>
                                                <MImg src={data.imgs} alt={data.name} />     
                                            </MTextblock>
                                            <MName>{data.name}</MName>
                                            <MEnName>{data.enname}</MEnName>
                                            <MListtitle>{data.job}</MListtitle>
                                            <MContents dangerouslySetInnerHTML={ {__html: data.contents} } />
                                            <MDownloadArea>
                                                <MDownlodebtn 
                                                    downlink={data.downlink}
                                                    down={data.download} 
                                                >
                                                    {curlang.m_data.classdownload}
                                                </MDownlodebtn>
                                                <MDownlodebtn2 
                                                    downlink={data.abdownlink} 
                                                    down={data.abdownload}  
                                                >
                                                    {curlang.m_data.abdownload}
                                                </MDownlodebtn2>
                                            </MDownloadArea>   
                                    </>
                                })}
                            </MInner>
                        </MSection>
                    </>
                    )
                })}
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection = styled.div`
    padding-top : 60px;
`
const PInner = styled.div`
    width : 100%;
    padding-top : 20px;
    border-top : 1px solid ${color.turtle_green};
`
const Pdiv = styled.div`
    padding-bottom : 40px;
    
    &:last-child {
        padding-bottom : 0px;
    }
    &:before {
        display: block; 
        content: " "; 
        margin-top:${props => props.isTop ? '-190px' : '-110px'}; 
        height: ${props => props.isTop ? '190px' : '110px'};
        visibility: hidden; 
        pointer-events: none;
    }
`

const PDownloadArea = styled.div`
    display : flex;
`
const PItemInner = styled.div`
    display : flex;
    
`
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    white-space: pre-line;
    color: ${color.black};
    margin-bottom : 20px;
    word-break : keep-all;
`
const PImgblock = styled.div`
    margin-right : 40px;
`
const PImg = styled.img`
    width : 120px;
    height : 120px;
    border-radius : 150px;
`
const PTextblock = styled.div`
    width : 100%;
`
const PModer = styled.div`
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const PName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${color.black};
`
const PEnName = styled.span`
    font-size: 16px;
    font-weight: normal;
    color: ${color.brown_grey};
`
const PListtitle = styled.div`
    padding-top : 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${color.black};
`
const PContents = styled.div`
    padding : 20px 0 20px 0;
    font-size: 12px;
    white-space: pre-line;
    color: ${color.black};
    word-break : keep-all;
`
const PDownlodebtn = styled(Downloadbtn)`
    margin-right : 8px;
`
const PDownlodebtn2 = styled(Downloadbtn2)`
`

const MWrapper = styled.div`
    width : auto;
    margin-bottom : 80px;
    @media all and (min-width:1200px) {
        display : none;
    }
`

const MSection = styled.div`

    &:first-child {
        margin-top : 0px;
    }
`
const MModer = styled.div`
    margin-bottom : 8px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${color.turtle_green};
`
const MTitle = styled.div`
    margin-bottom : 8px;
    white-space: pre-line;
    font-size: 14px;
    font-weight: bold;
    text-align : center;
    color: ${color.black};
`
const MInner = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding-top : 20px;
    padding-right : 12px;
    padding-left : 12px;
    border-top : 1px solid ${color.turtle_green};
`
const MDownloadArea = styled.div`
    display : flex;
    margin-bottom : 60px;
`
const MTextblock = styled.div`
    /* padding-top  : 60px; */
    /* &:first-child {
        padding-top  : 0px;
    } */
`
const MImg = styled.img`
    width : 180px;
    height : 180px;
    border-radius : 150px;
    margin-top  : 0px;
`
const MName = styled.div`
    margin-top : 28px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.black};
`
const MEnName = styled.div`
    margin-top : 2px;
    font-size: 14px;
    font-weight: normal;
    color: ${color.brown_grey};
`
const MListtitle = styled.div`
    margin-top : 14px;
    font-size: 14px;
    text-align : center;
    word-break : keep-all;
    color: ${color.black};
`
const MContents = styled.div`   
    margin-top : 18px;
    font-size: 12px;
    color: ${color.black};
    text-align : center;
    white-space : pre-line;
    word-break : keep-all;
`
const MDownlodebtn = styled(Downloadbtn)`
    margin-top : 28px;
    margin-right : 8px;
`
const MDownlodebtn2 = styled(Downloadbtn2)`
    margin-top : 28px;
`

export default ListSession_Se