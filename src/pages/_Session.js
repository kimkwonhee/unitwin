import React, {useState} from 'react'
import styled from 'styled-components'
import Personbtn from '../components/atom/Personbtn'
import PageTopArea from '../components/molecules/PageTopArea'
import ThemebtnGroup from '../components/molecules/ThemebtnGroup'
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'

const _Session = () => {
    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    const p_detaildata = curlang.p_data.session;
    const m_detaildata = curlang.m_data.session;

    const [selectCatagory, setSelectCatagory] = useState('all');
    

    const [selList , setSelList ] = useState(p_detaildata[2].item);

    const onSelctCatagry = async (c_name) => {
        await setSelectCatagory(c_name);
        if (c_name === 'all') {
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
    return (
        <>
            <PWrapper>
                <PInner>
                    <PContents1 
                        title={p_detaildata[0].title} 
                        contents={p_detaildata[0].contents}
                    />
                    <PContents2 
                        title={p_detaildata[1].title} 
                        contents={<ThemebtnGroup onSelctCatagry={onSelctCatagry} selectedcatagory={selectCatagory}/>}
                    />
                    <PSection>
                        {selList.map((list, index) => {
                            return <PLink to={list.link}>
                                     <PList 
                                        key={list.id} 
                                        src={list.img} 
                                        name={list.name}
                                        title={list.title}
                                    />
                            </PLink>
                        })}
                    </PSection>
                </PInner>
            </PWrapper>
        </>
    )
}

const PWrapper = styled.div`
    width : 100%;
    margin-bottom : 200px;
    display : flex;
    justify-content : center;

    @media all and (max-width:1199px) {
        display : none;
    }
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
    /* background : red; */
`
const PLink = styled(Link)`
    text-decoration : none;
`

const PList = styled(Personbtn)`
`

export default _Session