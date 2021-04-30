import React, {useState } from 'react'
import styled from 'styled-components'
import Calendarbtn from '../../atom/Calendarbtn'
import Home_all from './Home_all'
import Home_day1 from './Home_day1'
import Home_day2 from './Home_day2'
import Home_day3 from './Home_day3'

const Home_center = () => {
    
    const [cal, setCal] = useState(<Home_all />);
    const [status, setStatus] = useState(1);

    const onClick = (site, number) => {
        setCal(site);
        setStatus(number);
    }   

    return (
        <Wrapper>
            <Section1>
                <CalendarText>
                    <Text>일정</Text>
                </CalendarText>
            </Section1>
            <Section2>
                <Calendarbtn 
                    id="1"
                    title="All" 
                    calendar="05.24 ~ 05.26"
                    status={status}
                    onClick={(e)=> onClick(<Home_all />, 1)} />
                <Calendarbtn
                    id="2"
                    title="Day 1" 
                    calendar="05.24 Mon"
                    status={status}
                    onClick={(e)=> onClick(<Home_day1 />, 2)} />
                <Calendarbtn
                    id="3"
                    title="Day 2" 
                    calendar="05.25 Tue"
                    status={status}
                    onClick={(e)=> onClick(<Home_day2 />, 3)} />
                <Calendarbtn
                    id="4" 
                    title="Day 3" 
                    calendar="05.26 Wed"
                    status={status}
                    onClick={(e)=> onClick(<Home_day3 />, 4)} />
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
`

const Section1 = styled.div`
    width : 1200px;
    height : 51px;
    margin-top : 100px;
`

const CalendarText = styled.div`
    width : 248px;
    padding-top : 16px;
    border-top : 4px solid var(--black);
`
const Text = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--black);
`

const Section2 = styled.div`
    width : 1200px;
    margin-top : 100px;
    display : flex;
    justify-content : space-between;
`

const Section3 = styled.div`
    width : 1200px;
    margin-top : 60px;
`

export default Home_center