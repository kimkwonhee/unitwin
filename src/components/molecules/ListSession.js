import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const ListSession = ({className, data}) => {
    return (
        <>
            <PWrapper className={className}>
            {data.map((list, idx) => {
                return (
                    <PSection key={idx}>
                        <PInner>
                            <PImgblock>
                                <PImg src={list.img} alt={list.name} />     
                            </PImgblock>
                            <PTextblock>
                                <PModer>{list.moder}</PModer>
                                <PName>{list.name}<PEnName>{list.en_name}</PEnName></PName>
                                <PJob>{list.li_title}</PJob>
                                <PDiscription>{list.li_contents}</PDiscription>
                            </PTextblock>
                        </PInner>
                    </PSection>
                )
            })}
            </PWrapper>

            <MWrapper>
                {data.map((list, idx) => {
                    return (
                        <MInner key={idx}>
                            <MTextblock>
                                <MImg src={list.img} alt={list.name} />     
                            </MTextblock>
                            <MModer>{list.moder}</MModer>
                            <MName>{list.name}</MName>
                            <MEnName>{list.en_name}</MEnName>
                            <MListtitle>{list.li_title}</MListtitle>
                            <MContents>{list.li_contents}</MContents>   
                        </MInner>
                    )
                })}
            </MWrapper>
        </>
    )
}
// PC
const PWrapper = styled.div`
    width : 100%;
    display : block;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PSection = styled.div`
`
const PInner = styled.div`
    width : 100%;
    padding-top : 60px;
    display : flex;
`
const PImgblock = styled.div`
    margin-right : 40px;
    
`
const PImg = styled.img`
    width : 120px;
    height : 120px;
    border-radius: 60px;
    overflow: hidden;
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
    font-weight: 400;
    color: ${color.brown_grey};
`
const PJob = styled.div`
    padding-top : 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${color.black};
`
const PDiscription = styled.div`
    padding : 20px 0 20px 0;
    font-size: 12px;
    white-space: pre-line;
    color: ${color.black};
`

// mobile
const MWrapper = styled.div`
    width : auto;
    display : block;
    margin-bottom : 80px;
    border-top: 2px solid ${color.turtle_green};

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 40px 10px 40px 10px;
`
const MTextblock = styled.div`
`
const MImg = styled.img`
    width : 180px;
    height : 180px;
`
const MModer = styled.div`
    margin-top : 28px;
    font-size: 14px;
    font-weight: bold;
    color: ${color.turtle_green};
`
const MName = styled.div`
    margin-top : 14px;
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
    color: ${color.black};
`
const MContents = styled.div`
    margin-top : 18px;
    font-size: 12px;
    color: ${color.black};
    text-align : center;
`

export default ListSession