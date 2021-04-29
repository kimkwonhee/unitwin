import React from 'react'
import styled from 'styled-components'
import weekly_img from '../../../images/weekly_all.png'

const Weekly_all = () => {
    return (
        <Wrapper>
          <img src={weekly_img} alt="calendar All" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    margin-bottom : 200px;
`

export default Weekly_all