import React from 'react'
import styled from 'styled-components'
import color from '../../style/color'
import {withRouter} from 'react-router-dom'
import env from '../../modules/env'

const Menubtn = ({className , children, id, movelink, location }) => {

    const pathname = location.pathname;

    let target = ''

    if(movelink==='http://www.arteweek.kr/2021/views/opening.php') 
    {
        target = '_blank'
    }

    let cur_status = 0;
    if(pathname === env.path+'/home/') 
    {
        cur_status = 0
    } else if (pathname == env.path+'/plenary-session' 
                || pathname == env.path+'/plenary-session/1' 
                || pathname == env.path+'/plenary-session/2') 
    {
        cur_status = 2
    } else if (pathname === env.path+'/session') 
    {
        cur_status = 3
    }else if (pathname === env.path+'/presession-showcase') 
    {
        cur_status = 4
    } else if (pathname === env.path+'/byob') 
    {
        cur_status = 5
    }else if (pathname === env.path+'/closing-ceremony') 
    {
        cur_status = 6
    }


    return (
        <Wrapper 
            className={className} 
            id={id} 
            href={movelink} 
            target={target}
            path={cur_status}
        >
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
    color: ${props =>  (props.path==props.id) ? color.turtle_green : color.black};
    border-bottom : 2px solid transparent;
    transition: .3s;
    &:hover {
        border-bottom : 2px solid ${color.turtle_green};
        color :  ${color.turtle_green};
    }
`
export default withRouter(Menubtn)