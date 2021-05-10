import React, { useEffect } from 'react'
import env from '../modules/env'

const _Root = () => {
    useEffect(() => {
        window.location.href = env.path+'/home'
    }, [])

    return (
        <div></div>
    )
}

export default _Root