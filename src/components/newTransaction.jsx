import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import RowItemCustom from './rowItemCustom'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'

export default function NewTransaction() {
    const { dispatch } = useContext(UserContext)
    return <PageContent title="Create new transaction">
        <RowItemCustom>
            <div className="column column-50">
                <legend>Recepient</legend>
                <input type="text" placeholder="enter recepient address" id="recepient" />
            </div>
            <div className="column">
                <legend>Amount (ETH)</legend>
                <input type="number" placeholder="amount to send" id="amount" />
            </div>
            <div className="column">
                <legend>Password</legend>
                <input type="password" placeholder="enter the password" id="password" />
            </div>
        </RowItemCustom>
        <RowItemSingle cl="mt-10">
            <button className='button mr-10' onClick={() => dispatch({ type: 'PAGE', param: 'confirm' })}>Create Transaction</button>
            <button className='button' onClick={() => dispatch({ type: 'PAGE', param: 'dashboard' })}>Cancel</button>
        </RowItemSingle>
    </PageContent>   
}