import React, {useEffect} from 'react'
import styled from 'styled-components'
import Themebtn from '../atom/Themebtn'
import { useSelector } from 'react-redux'

const ThemebtnGroup = ({onSelctCatagry, selectedcatagory}) => {

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))

    let p_detaildata = curlang.p_data.session[1];

    useEffect(() => {
        p_detaildata = curlang.p_data.session[1];
    }, [curlang]);

    let catagotys  = curlang.p_data.session[1].catagory1;

   return (
        <Wrapper>
            <PThemBtnWrap>
                <Themebtn padding="35px" value={catagotys.text1} onClick={(e) => onSelctCatagry(catagotys.text1)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text1}</Themebtn>
                <Themebtn value={catagotys.text2} onClick={(e) => onSelctCatagry(catagotys.text2)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text2}</Themebtn>
                <Themebtn value={catagotys.text3} onClick={(e) => onSelctCatagry(catagotys.text3)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text3}</Themebtn>
                <Themebtn value={catagotys.text4} onClick={(e) => onSelctCatagry(catagotys.text4)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text4}</Themebtn>
                <Themebtn value={catagotys.text5} onClick={(e) => onSelctCatagry(catagotys.text5)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text5}</Themebtn>
                <Themebtn value={catagotys.text6} onClick={(e) => onSelctCatagry(catagotys.text6)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text6}</Themebtn>
                <Themebtn value={catagotys.text7} onClick={(e) => onSelctCatagry(catagotys.text7)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text7}</Themebtn>
                <Themebtn value={catagotys.text8} onClick={(e) => onSelctCatagry(catagotys.text8)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text8}</Themebtn>
                <Themebtn value={catagotys.text9} onClick={(e) => onSelctCatagry(catagotys.text9)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text9}</Themebtn>
            </PThemBtnWrap>
            
            <MThemBtnWrap>
                <Themebtn padding="26px" value={catagotys.text1} onClick={(e) => onSelctCatagry(catagotys.text1)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text1}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text2} onClick={(e) => onSelctCatagry(catagotys.text2)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text2}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text3} onClick={(e) => onSelctCatagry(catagotys.text3)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text3}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text4} onClick={(e) => onSelctCatagry(catagotys.text4)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text4}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text5} onClick={(e) => onSelctCatagry(catagotys.text5)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text5}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text6} onClick={(e) => onSelctCatagry(catagotys.text6)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text6}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text7} onClick={(e) => onSelctCatagry(catagotys.text7)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text7}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text8} onClick={(e) => onSelctCatagry(catagotys.text8)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text8}</Themebtn>
                <Themebtn padding="14px" value={catagotys.text9} onClick={(e) => onSelctCatagry(catagotys.text9)} selectedcatagory={selectedcatagory}>{p_detaildata.catagory2.text9}</Themebtn>
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