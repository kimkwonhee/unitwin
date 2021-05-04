import React from 'react'
import styled from 'styled-components'
import Videobtn from '../atom/Videobtn'

const ListSession = ({className, data}) => {
    return (
        <>
            <PWrapper className={className}>
            {data.map(list => {
                return (
                <>
                    <PSection>
                        <PInner>
                            <PImgblock>
                                <PImg src={list.img} alt={list.name} />     
                            </PImgblock>
                            <PTextblock>
                                <PModer>{list.moder}</PModer>
                                <PName>{list.name}<PEnName>{list.en_name}</PEnName></PName>
                                <PListtitle>{list.li_title}</PListtitle>
                                <PContents>{list.li_contents}</PContents>
                            </PTextblock>
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
    color: var(--black);
`

export default ListSession