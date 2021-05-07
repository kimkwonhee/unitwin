import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'

const Menubtn = ({className , children, id}) => {
    return (
        <Wrapper className={className} id={id}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor:  ${props => (props.id== 1) || (props.id== 4) || (props.id== 6) 
             ?  ''
             : 'pointer' };
    width : 138px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 1em;
    font-weight: bold;
    color: ${props => (props.id== 1) || (props.id== 4) || (props.id== 6) 
             ?  color.brown_grey 
             : color.black };
    
    &:hover {
        border-bottom : ${props => (props.id== 1) || (props.id== 4) || (props.id== 6) 
                              ? 'none'
                              : '2px solid' + color.turtle_green };
        color : ${props => (props.id== 1) || (props.id== 4) || (props.id== 6) 
                ?  color.brown_grey 
                : color.turtle_green };
    }
`
export default Menubtn