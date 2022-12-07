import React, { useContext, useEffect } from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'
import Transactions from './transactions'
import * as Lib from '../utils/lib'

export default function Dashboard() {
    const { state, dispatch } = useContext(UserContext)
    return (
        <PageContent title="My account">
            <RowItemSingle>
                <div className="float-left mr-10">Address: </div>
                <div className="float-left font-bold text-primary">{state.address}</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Balance: </div>
                <div className="float-left font-bold text-primary mr-10">0</div>
                <div className="float-left">Goerli ETH</div>
            </RowItemSingle>
            <RowItemSingle cl="mt-10">
                <button className='button mr-10' onClick={() => dispatch({ type: 'PAGE', param: 'transaction' })}>New Transaction</button>
                <button className='button' onClick={() => dispatch({ type: 'PAGE', param: 'home' })}>Exit Wallet</button>
            </RowItemSingle>
            <RowItemSingle>
                <legend>Last transactions</legend>
                <Transactions />
            </RowItemSingle>
            <RowItemSingle>
                <div><a href={Lib.etherscanUrlAcc(state.network, state.address)}
                    rel="noopener noreferrer" target='_blank'>See the account in block explorer</a></div>
            </RowItemSingle>
        </PageContent>
    )
}