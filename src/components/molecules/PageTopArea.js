import React from 'react'
import styled from 'styled-components'
import Unitwinbtn from '../atom/Unitwinbtn'

const PageTopArea = ({ 
    className, 
    title, 
    contents, 
    subcontents, 
    subfontsize, 
    homebtn, 
    top,
    keyword
    }) => {
    return (
        <>
            {/* PC */}
            <PTopArea 
                className={className} 
                top={top}
            >
                <PTopTitleArea >
                    <PTopTitle>{title}</PTopTitle>
                </PTopTitleArea>
                <PContentsArea>
                    <PTopContents 
                        subfontsize={subfontsize}
                    >
                        {contents}
                    </PTopContents>
                    <PSubContents>
                        {subcontents}
                    </PSubContents>
                    <PUnitwinbtn homebtn={homebtn}/>
                </PContentsArea>
            </PTopArea>

            {/* mobile */}
            <MTopArea className={className} top={top} >
                <MTopTitleArea>
                    <MTopTitle>{title}</MTopTitle>
                    <MTopKeyword keyword={keyword}>{keyword}</MTopKeyword>
                </MTopTitleArea>
                <MTopContents subfontsize={subfontsize}>
                    {contents}
                </MTopContents>
                <MSubContents>
                        {subcontents}
                </MSubContents>
                <MUnitwinbtn homebtn={homebtn}/>
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
    white-space: pre-line;
`
const PContentsArea = styled.div`
    width : 890px;
    display : block;
`
const PTopContents = styled.div`
    font-size: ${props=> props.subfontsize || '16px'};
    font-weight: 500;
    white-space: pre-line;
    color: var(--black);
`
const PSubContents = styled.div`
    margin-top : 40px;
    font-size: 16px;
    color: var(--black);
`
const PUnitwinbtn = styled(Unitwinbtn)`
    margin-top : 40px;
`


// Mobile
const MTopArea = styled.div`
    display : block;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MTopTitleArea = styled.div`
    margin-right : 0px;

    &:before {
        content: '';
        display: block;
        width: 80px;
        height: 2px;
        margin-bottom : 8px;
        background-color: var(--black);
    }
`
const MTopTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--black);
    white-space: pre-line;
`
const MTopKeyword = styled.div`
    display: ${props => props.keyword? "flex" : "none"};
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    color: #83b949;
    font-weight: bold;

    &:before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #83b949;
        margin-right: 6px; 
        border-radius: 50%;
    }
`
const MTopContents = styled.div`
    width : 100%;
    font-size: 12px;
    font-weight: 400;
    white-space: pre-line;
    color: var(--black);
    margin-top : 12px;
`
const MSubContents = styled.div`
    margin-top : 16px;
    font-size: 10px;
    color: var(--black);
    white-space: pre-line;
`
const MUnitwinbtn = styled(Unitwinbtn)`
    margin-top : 16px;
`

export default PageTopArea


