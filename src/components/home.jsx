import React, { useContext } from 'react'
import UserContext from '../utils/walletContext.js'

export default function Home() {
    const { dispatch } = useContext(UserContext)
    return <>
        <button className='button mr-10 btn-home' onClick={() => dispatch({ type: 'PAGE', param: 'new' })}>New Account</button>
        <button className='button mr-10 btn-home' onClick={() => dispatch({ type: 'PAGE', param: 'password' })}>Existing Account</button>
    </>
}