import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'
import RowItemCustom from './rowItemCustom'

export default function Password() {
    const { dispatch } = useContext(UserContext)
    return <PageContent title="Enter your account password">
        <RowItemCustom>
            <div className="column column-50"><input type="password" placeholder="enter a valid password" id="password" /></div>
        </RowItemCustom>        
        <RowItemSingle cl="mt-10">
            <button className='button mr-10' onClick={() => dispatch({ type: 'PAGE', param: 'dashboard' })}>Enter Account</button>
            <button className='button' onClick={() => dispatch({ type: 'PAGE', param: 'home' })}>Cancel</button>
        </RowItemSingle>
    </PageContent>
}