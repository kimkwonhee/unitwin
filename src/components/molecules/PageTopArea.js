import React from 'react'
import styled from 'styled-components'

const PageTopArea = ({className, title, contents, subfontsize, top}) => {
    return (
        <TopArea 
            className={className} 
            top={top}
        >
            <TopTitleArea >
                <TopTitle>{title}</TopTitle>
            </TopTitleArea>
            <TopContents 
                subfontsize={subfontsize}
            >
                {contents}
            </TopContents>
        </TopArea>
    )
}

// Top
const TopArea = styled.div`
    display : flex;
    
    /* background-color : red; */
    @media all and (max-width:1199px) {
        display : block;
    }
`
const TopTitleArea = styled.div`
    width : 248px;
    padding-top : 12px;
    border-top : 4px solid var(--black);
    margin-right : 62px;

    @media all and (max-width:1199px) {
        padding-top : 8px;
        border-top : 2px solid var(--black);
        width : 80px;
        margin-right : 0;
    }
`
const TopTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
    
    @media all and (max-width:1199px) {
        font-size: 16px;
        margin-bottom : 12;
    }
`
const TopContents = styled.div`
    width : 890px;
    font-size: ${props=> props.subfontsize || '16px'};
    font-weight: 500;
    white-space: pre-line;
    color: var(--black);
    /* background-color : red; */

    @media all and (max-width:1199px) {
        width : 100%;
        margin-top : 12px;
        font-size: 12px;
        font-weight: 400;
    }
`

export default PageTopArea


