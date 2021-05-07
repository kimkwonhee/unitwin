import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Menubtn = ({className , children, id, link}) => {

    let target = null
    if(link=='http://www.arteweek.kr/2021/views/opening.php') {
        target ='_blank'
    }

    return (
        <Wrapper className={className} id={id} href={link} target={target}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.a`
    cursor:  ${props => (props.id== 4) || (props.id== 6) 
             ?  ''
             : 'pointer' };
    width : 140px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 1em;
    font-weight: bold;
    margin-right : 10px;
    color: ${props => (props.id== 4) || (props.id== 6) 
             ?  color.brown_grey 
             : color.black };
    
    &:hover {
        border-bottom : ${props =>(props.id== 4) || (props.id== 6) 
                              ? 'none'
                              : '2px solid' + color.turtle_green };
        color : ${props => (props.id== 4) || (props.id== 6) 
                ?  color.brown_grey 
                : color.turtle_green };
    }
`
export default Menubtn