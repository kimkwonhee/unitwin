import React, {useState } from 'react'
import styled from 'styled-components'
import Calendarbtn from '../../atom/Calendarbtn'
import PageTopArea from '../../molecules/PageTopArea'
import Home_all from './Home_all'
import Home_day1 from './Home_day1'
import Home_day2 from './Home_day2'
import Home_day3 from './Home_day3'

const Home_center = () => {
    const topcontents = {
        title : '일정',
        contents : ''
    } 
    const [cal, setCal] = useState(<Home_all />);
    const [status, setStatus] = useState(1);

    const onClick = (site, number) => {
        setCal(site);
        setStatus(number);
    }   
    
    return (
        <Wrapper>
            <Inner>
                <TopContents 
                    title={topcontents.title} 
                    contents={topcontents.contents}
                    subfontsize="20px"
                    top="100px"
                />
                <Section1>
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
                </Section1>
                <Section2>
                    {cal}
                </Section2>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : auto;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* background-color : red; */

    @media all and (max-width:1199px) {
        padding-bottom : 50px;
    }
`
const Inner = styled.div`
    width : 1200px;
    
    @media all and (max-width:1199px) {
        position : relative;
        width : 375px;
    }
`

const TopContents = styled(PageTopArea)`
    margin-top : 100px;

    @media all and (max-width:1199px) {
        padding-left : 16px;
        padding-right : 16px;
        margin-top : 40px;
    }
`

const Section1 = styled.div`
    margin-top : 100px;
    display : flex;
    justify-content : space-between;

    /* background-color : red; */
    @media all and (max-width:1199px) {
        margin-top : 20px;
        justify-content : center;;
    }
`

const Section2 = styled.div`
    width : 1200px;
    margin-top : 60px;
`

export default Home_center