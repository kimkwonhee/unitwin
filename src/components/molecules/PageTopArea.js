import React from 'react'
import styled from 'styled-components'

const PageTopArea = ({className, title, contents}) => {
    return (
        <TopArea>
            <TopTitleArea>
                <TopTitle>{title}</TopTitle>
            </TopTitleArea>
            <TopContents>
                {contents}
            </TopContents>
        </TopArea>
    )
}

// Top
const TopArea = styled.div`
    margin-top : 180px;
    display : flex;
    /* background-color : blue; */
`
const TopTitleArea = styled.div`
    width : 248px;
    padding-top : 12px;
    border-top : 4px solid var(--black);
    margin-right : 60px;
`
const TopTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
`
const TopContents = styled.div`
    font-size: 16px;
    font-weight: 500;
    white-space: pre-line;
    color: var(--black);
`

export default PageTopArea


