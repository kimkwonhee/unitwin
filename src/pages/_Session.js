import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Personbtn from '../components/atom/Personbtn'
import PageTopArea from '../components/molecules/PageTopArea'
import ThemebtnGroup from '../components/molecules/ThemebtnGroup'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import SessionBg from '../images/session_bg_pc.png';
import ReactGA from 'react-ga'
const _Session = () => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.session;
    const m_detaildata = curlang.m_data.session;

    const [selectCatagory, setSelectCatagory] = useState(p_detaildata[1].catagory1.text1);
    const [selectMCatagory, setMSelectCatagory] = useState(m_detaildata[1].catagory1.text1);
    

    const [selList , setSelList ] = useState(p_detaildata[2].item);
    const [m_selList , m_setSelList ] = useState(m_detaildata[2].item);

    useEffect(() => {
        setSelList(p_detaildata[2].item);
        m_setSelList(m_detaildata[2].item);
        setSelectCatagory(p_detaildata[1].catagory1.text1);
        setMSelectCatagory(m_detaildata[1].catagory1.text1);
    }, [curlang]);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        console.log(window.location.pathname + window.location.search)
        window.scrollTo(0,0);
    }, []);

    const onSelctCatagry = async (c_name) => {
        await setSelectCatagory(c_name);
        if (c_name === curlang.p_data.session[1].catagory1.text1) {
            await setSelList(p_detaildata[2].item)
            return
        }
        let newArray = [];
        await p_detaildata[2].item.forEach(async sel => {
            if (sel.catagory == c_name) {
                await newArray.push(sel)
            }
        })
        await setSelList(newArray);
    }

    
    const onMSelectCatagory = async (c_name) => {
        await setMSelectCatagory(c_name);
        if (c_name === curlang.m_data.session[1].catagory1.text1) {
            await setSelList(m_detaildata[2].item)
            await m_setSelList(m_detaildata[2].item)
            return
        }
        let newArray = [];
        await m_detaildata[2].item.forEach(async sel => {
            if (sel.catagory == c_name) {
                await newArray.push(sel)
            }
        })
        await m_setSelList(newArray);
    }

    
    return (
        <>
            {/* Pc */}
            <PWrapper>
                <PBg bg={SessionBg}></PBg>
                <PInner>
                    <PContents1 
                        title={p_detaildata[0].title} 
                        contents={p_detaildata[0].contents}
                    />
                    <PContents2 
                        title={p_detaildata[1].title} 
                        contents={<ThemebtnGroup 
                                    onSelctCatagry={onSelctCatagry} 
                                    selectedcatagory={selectCatagory}/>}
                    />
                    <PSection>
                        {selList.map((list, index) => {
                            return <PLink to={list.link} key={list.id}>
                                     <PList  
                                        src={list.img} 
                                        name={list.name}
                                        title={list.title}
                                    />
                                </PLink>
                        })}
                    </PSection>
                </PInner>
                
            </PWrapper>
            
            {/* mobile */}
            <MWrapper>
                <MInner>
                    <MContents1 
                        title={m_detaildata[0].title} 
                        keyword={false}
                        contents={m_detaildata[0].contents}
                    />
                    <MContents2 
                        title={m_detaildata[1].title} 
                        keyword={m_detaildata[1].keyword}
                        contents={<ThemebtnGroup 
                                    onSelctCatagry={onMSelectCatagory} 
                                    selectedcatagory={selectMCatagory}/>}
                    />
                    <MSection>
                        {m_selList.map((list, index) => {
                            return <MLink to={list.link} key={list.id} >
                                     <MList 
                                        src={list.img} 
                                        name={list.name}
                                        title={list.title}
                                    />
                                </MLink>
                        })}
                    </MSection>
                </MInner>
            </MWrapper>
        </>
    )
}

// PC
const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 200px;
    display : flex;
    justify-content : center;
    @media all and (max-width:1199px) {
        display : none;
    }
`
const PBg = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
    background-image: url('${props => props.bg}');
    position: fixed;
`
const PInner = styled.div`
    position : relative;
    width : 1200px;
`
const PContents1 = styled(PageTopArea)`
    margin-top : 180px;
`
const PContents2 = styled(PageTopArea)`
    margin-top : 120px;
`
const PSection = styled.div`
    margin-top : 48px;
    display : flex;
    justify-content : flex-start;
    padding : 0 20px 0 20px;
    flex-wrap : wrap;
`
const PLink = styled(Link)`
    text-decoration : none;
`
const PList = styled(Personbtn)`
`

// mobile
const MWrapper = styled.div`
    width : auto;
    padding : 0 16px 80px 16px;
    display : flex;
    justify-content : center;

    @media all and (min-width:1200px) {
        display : none;
    }
`
const MInner = styled.div`
    position : relative;
    width : 375px;
`

const MContents1 = styled(PageTopArea)`
    margin-top : 100px;
`

const MContents2 = styled(PageTopArea)`
    margin-top : 40px;
    
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        margin-bottom: 28px;
        background-color: #83b949;
    }
`
const MSection = styled.div`
    padding : 0 20px 0 20px;

`
const MLink = styled(Link)`
    display: inline-block;
    width: calc(50% - 20px);
    text-decoration : none;

    &:nth-child(2n-1) {
        margin-right: 40px;
    }
`
const MList = styled(Personbtn)`
`

export default _Session