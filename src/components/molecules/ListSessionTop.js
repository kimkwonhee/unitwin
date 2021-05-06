import React from 'react'
import styled from 'styled-components'

const ListSessionTop = ({className, title, subject, time}) => {
    
    return (
        <>
            {/* PC */}
            <PWrapper className={className}>
                <PLine />
                <PTitle>{title}</PTitle>
                <PSubject>{subject}</PSubject>
                <PTime>{time}</PTime>
            </PWrapper>

            {/* Mobile */}
            <MWrapper>
                <MLine />
                <MTitle>{title}</MTitle>
                <MSubject>{subject}</MSubject>
                <MTime>{time}</MTime>
            </MWrapper>
        </>
        
    )
}
// PC
const PWrapper = styled.div`
    margin-top : 180px;
    display : block;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PLine = styled.div`
    width : 300px;
    height : 4px;
    background-color : var(--black);
`
const PTitle = styled.div`
    margin-top : 12px;
    margin-bottom : 12px;
    font-size: 28px;
    font-weight: 900;
    white-space: pre-line;
    color: var(--black);
`
const PSubject = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: var(--turtle-green);
`
const PTime = styled.div`
    margin-top : 4px;
    margin-bottom : 40px;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`

const MWrapper = styled.div`
    margin-top : 100px;
    display :block;
    
    @media all and (min-width:1200px) {
        display : none;
    }
`
const MLine = styled.div`
    width : 80px;
    height : 2px;
    background-color : var(--black);
`
const MTitle = styled.div`
    margin-top : 8px;
    margin-bottom : 8px;
    white-space: pre-line;
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
`
const MSubject = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--turtle-green);
`

const MTime = styled.div`
    margin-top : 2px;
    font-size: 12px;
    font-weight: 500;
    color: var(--black);
`

export default ListSessionTop