import React from 'react'
import styled from 'styled-components'
import Downloadbtn from '../../components/atom/Downloadbtn'

const ListSession_Se = ({className, data}) => {
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
                            {list.li_data.map(data => {
                                return <PItemInner>
                                    <PImgblock>
                                        <PImg src={data.imgs} alt={data.name} />     
                                    </PImgblock>
                                    <PTextblock>
                                        <PName>{data.name}<PEnName>{data.enname}</PEnName></PName>
                                        <PListtitle>{data.job}</PListtitle>
                                        <PContents>{data.contents}</PContents>
                                        <PDownlodebtn down={data.download} >강의자료 다운로드</PDownlodebtn>
                                    </PTextblock>
                                </PItemInner>
                            })}   
                        </PInner>
                    </PSection>
                </>
                )
            })}
            </PWrapper>
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
    /* background : red; */
`
const PInner = styled.div`
    width : 100%;
    padding-top : 20px;
    border-top : 1px solid var(--turtle-green);
`
const PItemInner = styled.div`
    display : flex;
    padding-bottom : 40px;
    &:last-child {
        padding-bottom : 0px;
    }
`
const PTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    white-space: pre-line;
    color: var(--black);
    margin-bottom : 20px;
`
const PImgblock = styled.div`
    margin-right : 40px;
`
const PImg = styled.img`
    width : 120px;
    height : 120px;
`
const PTextblock = styled.div`
    width : 100%;
`
const PModer = styled.div`
    margin-bottom : 8px;
    font-size: 16px;
    font-weight: bold;
    color: var(--turtle-green);
`
const PName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const PEnName = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const PListtitle = styled.div`
    padding-top : 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
`
const PContents = styled.div`
    padding : 20px 0 20px 0;
    font-size: 12px;
    white-space: pre-line;
    color: var(--black);
`
const PDownlodebtn = styled(Downloadbtn)`
`

export default ListSession_Se