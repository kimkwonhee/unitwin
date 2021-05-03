import React from 'react'
import styled from 'styled-components'
import ListSession from '../components/molecules/ListSession'
import ListSessionTop from '../components/molecules/ListSessionTop'
import ListVideoSession from '../components/molecules/ListVideoSession'

const _Closing = () => {

    return (
        <Wrapper>
            <Inner>
                <ListSessionTop />
                <CenterArea>
                    <LeftArea>
                        <ListVideoSession/>
                        <ContentsArea>
                            <ListSession />
                        </ContentsArea>
                    </LeftArea>
                    <RightArea>
                        <div>채팅 영상</div>
                    </RightArea>
                </CenterArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    margin-bottom : 200px;
`
const Inner = styled.div`
    width : 1200px;
`

const CenterArea = styled.div`
    display : flex;
    justify-content : space-between;
`

const LeftArea = styled.div`
    width : 800px;
`

const RightArea = styled.div`
    width : 380px;
    height : 450px;
    background-color : purple;
`

const ContentsArea = styled.div`
    padding-top : 20px;
`



export default _Closing