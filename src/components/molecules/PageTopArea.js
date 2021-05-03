import React from 'react'
import styled from 'styled-components'

const PageTopArea = ({className, title, contents, subfontsize, top}) => {
    return (
        <>
            <PTopArea 
                className={className} 
                top={top}
            >
                <PTopTitleArea >
                    <PTopTitle>{title}</PTopTitle>
                </PTopTitleArea>
                <PTopContents 
                    subfontsize={subfontsize}
                >
                    {contents}
                </PTopContents>
            </PTopArea>
            <MTopArea 
                className={className} 
                top={top}
            >
                <MTopTitleArea >
                    <MTopTitle>{title}</MTopTitle>
                </MTopTitleArea>
                <MTopContents 
                    subfontsize={subfontsize}
                >
                    {contents}
                </MTopContents>
            </MTopArea>
        </>
    )
}
// PC
const PTopArea = styled.div`
    display : flex;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const PTopTitleArea = styled.div`
    width : 248px;
    padding-top : 12px;
    border-top : 4px solid var(--black);
    margin-right : 62px;
`
const PTopTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
`
const PTopContents = styled.div`
    width : 890px;
    font-size: ${props=> props.subfontsize || '16px'};
    font-weight: 500;
    white-space: pre-line;
    color: var(--black);
`


// Mobile
const MTopArea = styled.div`
    display : block;
    /* background-color : red; */
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MTopTitleArea = styled.div`
    width : 80px;
    padding-top : 8px;
    border-top : 2px solid var(--black);
    margin-right : 0px;
`
const MTopTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    margin-bottom : 12;
`

const MTopContents = styled.div`
    width : 100%;
    font-size: 12px;
    font-weight: 400;
    white-space: pre-line;
    color: var(--black);
    margin-top : 12px;
`

export default PageTopArea


