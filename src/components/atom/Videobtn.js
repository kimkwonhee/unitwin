import React from 'react'
import styled from 'styled-components'

const Videobtn = ({className, width, videobtn, children}) => {
    return (
        <Wrapper
            className={className}
            width={width}
            videobtn={videobtn}
        >
           <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    width : ${(props) => props.width || '92px'};
    height : 36px;
    display : ${props => props.videobtn ? 'flex' : 'none'} !important;
    justify-content : center;
    align-items : center;
    background-color: var(--turtle-green);
`
const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
`

export default Videobtn