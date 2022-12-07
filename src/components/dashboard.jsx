import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'

export default function Dashboard() {
    const { dispatch } = useContext(UserContext)
    return (
        <PageContent title="My account">
            <RowItemSingle>
                <div className="float-left mr-10">Address: </div>
                <div className="float-left font-bold text-primary">0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA</div>
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
        </PageContent>
    )
}