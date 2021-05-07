import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'
import { useSelector } from 'react-redux'

const Unitwinbtn = ({className, homebtn}) => {
    
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    let langstatus = curlang.status

    return (
        <>
            <PWrapper 
                className={className} 
                homebtn={homebtn} 
                href="https://www.unitwin-arts.phil.fau.de/" 
                target='_blank'
                status={langstatus}
            >
                <PText>{curlang.p_data.unithomebtn}</PText>
            </PWrapper>

            <MWrapper 
                className={className} 
                homebtn={homebtn} 
                href="https://www.unitwin-arts.phil.fau.de/" 
                target='_blank'
                status={langstatus}
            >
                <MText>{curlang.m_data.unithomebtn}</MText>
            </MWrapper>
        </>
       
    )
}


const PWrapper = styled.a`
    cursor: pointer;
    padding : 8px 16px;
    width : ${props => props.status == 'kr' ? '200px' : '265px' };
    height : 36px;
    display : ${props => props.homebtn ? 'flex' : 'none'};
    justify-content : center;
    align-items : center;
    background-color: ${color.white};
    border: 1px solid transparent;
    
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PText = styled.div`
    color: ${color.turtle_green};
    font-size: 14px;
    font-weight: bold;
`

const MWrapper = styled.a`
    cursor: pointer;
    width: auto;
    height: 17px;
    display : ${props => props.homebtn ? 'flex' : 'none'};

    @media all and (min-width:1200px) {
        display : none;
    }
`

const MText = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${color.white};
`

export default Unitwinbtn