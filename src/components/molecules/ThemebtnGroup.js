import React from 'react'
import styled from 'styled-components'
import Themebtn from '../atom/Themebtn'
import { useSelector } from 'react-redux'

const ThemebtnGroup = ({onSelctCatagry, selectedcatagory}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    let p_detaildata = curlang.p_data.session[1];
    let m_detaildata = curlang.m_data.session[1];

    let pcatagotys  = curlang.p_data.session[1].catagory1;
    let mcatagotys  = curlang.m_data.session[1].catagory1;


   return (
        <Wrapper>
            <PThemBtnWrap>
                <Themebtn padding="35px" value={pcatagotys.text1} onClick={(e) => onSelctCatagry(pcatagotys.text1)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text1}</Themebtn>
                <Themebtn value={pcatagotys.text2} onClick={(e) => onSelctCatagry(pcatagotys.text2)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text2}</Themebtn>
                <Themebtn value={pcatagotys.text3} onClick={(e) => onSelctCatagry(pcatagotys.text3)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text3}</Themebtn>
                <Themebtn value={pcatagotys.text4} onClick={(e) => onSelctCatagry(pcatagotys.text4)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text4}</Themebtn>
                <Themebtn value={pcatagotys.text5} onClick={(e) => onSelctCatagry(pcatagotys.text5)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text5}</Themebtn>
                <Themebtn value={pcatagotys.text6} onClick={(e) => onSelctCatagry(pcatagotys.text6)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text6}</Themebtn>
                <Themebtn value={pcatagotys.text7} onClick={(e) => onSelctCatagry(pcatagotys.text7)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text7}</Themebtn>
                <Themebtn value={pcatagotys.text8} onClick={(e) => onSelctCatagry(pcatagotys.text8)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text8}</Themebtn>
                <Themebtn value={pcatagotys.text9} onClick={(e) => onSelctCatagry(pcatagotys.text9)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text9}</Themebtn>
            </PThemBtnWrap>
            
            <MThemBtnWrap>
                <Themebtn padding="26px" value={mcatagotys.text1} onClick={(e) => onSelctCatagry(mcatagotys.text1)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text1}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text2} onClick={(e) => onSelctCatagry(mcatagotys.text2)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text2}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text3} onClick={(e) => onSelctCatagry(mcatagotys.text3)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text3}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text4} onClick={(e) => onSelctCatagry(mcatagotys.text4)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text4}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text5} onClick={(e) => onSelctCatagry(mcatagotys.text5)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text5}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text6} onClick={(e) => onSelctCatagry(mcatagotys.text6)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text6}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text7} onClick={(e) => onSelctCatagry(mcatagotys.text7)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text7}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text8} onClick={(e) => onSelctCatagry(mcatagotys.text8)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text8}</Themebtn>
                <Themebtn padding="14px" value={mcatagotys.text9} onClick={(e) => onSelctCatagry(mcatagotys.text9)} selectedcatagory={selectedcatagory}>{m_detaildata.catagory2.text9}</Themebtn>
            </MThemBtnWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
const PThemBtnWrap = styled.div`
    width : 892px;
    display : flex;
    flex-wrap : wrap;

    @media all and (max-width:1199px) {
        display : none;
    }
`
const MThemBtnWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    
    @media all and (min-width:1200px) {
        display : none;
    }
`

export default ThemebtnGroup