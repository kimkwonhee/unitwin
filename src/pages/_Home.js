import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Home_center from '../components/organism/home/Home_center'
import Home_top from '../components/organism/home/Home_top'
import { useSelector } from 'react-redux'
import ReactGA from 'react-ga'
import { Helmet } from "react-helmet"
import { Modal } from 'antd'
import CloseImg from '../images/modal_close.png'

const _Home = () => {
    const [modalVisible, setModalVisible] = useState(true)
    const [modalWidth, setModalWidth] = useState('1200px')
    useEffect(() => {
        const gaSetting = async () => {
            await ReactGA.initialize('G-8BW0WPEKCF')
            await ReactGA.set({
                page: window.location.pathname + window.location.search
            })
            await ReactGA.pageview(window.location.pathname + window.location.search)
        }
        gaSetting()
        window.scrollTo(0,0);
        
    }, []);

    useEffect(() => {
        const width = window.innerWidth
        if (width <= 1200) {
            setModalWidth('100%')
        }
    }, [])

    const { curlang } = useSelector(state => ({
        curlang : state.changlang.curlang
    }))
    
    return (
        <>
            <Helmet title="The 4th UNESCO-UNITWIN SYMPOSIUM" />
            <Wrapper>
                <Home_top curlang={curlang} />
                <Home_center curlang={curlang} />
            </Wrapper>
            <Modal
                title={null}
                footer={null}
                centered
                bodyStyle={{backgroundColor:'transparent', padding: 0}}
                style={{backgroundColor:'transparent'}}
                visible={modalVisible}
                onCancel={()=> setModalVisible(false)}
                closable={false}
                width={modalWidth}
                maskClosable={true}>
                <ModalVideoArea>
                    <ModalButtonArea>
                        <ModalButton onClick={e=> setModalVisible(false)}>
                            <ModalButtonImage src={CloseImg} />
                        </ModalButton>
                    </ModalButtonArea>
                    <ModalVideoBox>
                        <ModalVideo src="https://www.youtube.com/embed/-RF-Zgb8XNY?autoplay=1&amp;mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </ModalVideoBox>
                </ModalVideoArea>
            </Modal>
            
        </>
        
    )
}

const Wrapper = styled.div`
    height : 100%;
`

const ModalVideoArea = styled.div`
    width: 1200px;
    height: 727px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    @media all and (max-width:1200px) {
        width: 100%;
        max-width: 395px;
        height: auto;
    }
`
const ModalVideoBox = styled.div`
    position: relative;
    width: 100%;

    @media all and (max-width:1200px) {
        width: 100%;
        height: auto;
        position: relative;

        &:before {
            content: "";
            display: block;
            padding-bottom: calc(9/16 * 100%);
        }
    }
`

const ModalVideo = styled.iframe`
    width: 100%;
    height: 675px;

    @media all and (max-width:1200px) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`

const ModalButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media all and (max-width:1200px) { 
        margin-bottom: 8px;
    }
`

const ModalButton = styled.a`
    width: 40px;
    height: 40px;
    @media all and (max-width:1200px) { 
        width: 32px;
        height: 32px;
    }
`

const ModalButtonImage = styled.img`
    width: 100%;
    height: 100%;
`

export default _Home