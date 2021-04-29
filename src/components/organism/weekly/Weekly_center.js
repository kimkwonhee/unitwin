import React, {useState } from 'react'
import styled from 'styled-components'
import Calendarbtn from '../../atom/Calendarbtn'
import Weekly_all from './Weekly_all'
import Weekly_day1 from './Weekly_day1'
import Weekly_day2 from './Weekly_day2'
import Weekly_day3 from './Weekly_day3'

const Weekly_center = () => {
    
    const [cal, setCal] = useState(<Weekly_all />);
    
    return (
        <Wrapper>
            <Section1>
                <CalendarText>
                    <Text>일정</Text>
                </CalendarText>
            </Section1>
            <Section2>
                <Calendarbtn 
                    title="All" 
                    calendar="05.24 ~ 05.26"
                    onClick={(e)=> setCal(<Weekly_all />)} />
                <Calendarbtn 
                    title="Day 1" 
                    calendar="05.24 Mon"
                    onClick={(e)=> setCal(<Weekly_day1 />)} />
                <Calendarbtn 
                    title="Day 2" 
                    calendar="05.25 Tue"
                    onClick={(e)=> setCal(<Weekly_day2 />)} />
                <Calendarbtn 
                    title="Day 3" 
                    calendar="05.26 Wed"
                    onClick={(e)=> setCal(<Weekly_day3 />)} />
            </Section2>
            <Section3>
                {cal}
            </Section3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* background : red; */
`

const Section1 = styled.div`
    width : 1200px;
    height : 51px;
    margin-top : 100px;
    /* background : blue; */
`

const CalendarText = styled.div`
    width : 248px;
    text-align : bottom;
    border-top : 4px solid #222222;
`
const Text = styled.div`
    margin-top : 16px;
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    color: #222222;
`

const Section2 = styled.div`
    width : 1200px;
    height : auto;
    margin-top : 100px;
    display : flex;
    justify-content : space-between;
    /* background : blue; */
`

const Section3 = styled.div`
    width : 1200px;
    margin-top : 60px;
    /* background : blue; */
`

export default Weekly_center