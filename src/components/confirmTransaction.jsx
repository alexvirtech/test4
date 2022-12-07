import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'


export default function ConfirmTransaction() {
    const { dispatch } = useContext(UserContext)
    return (
        <PageContent title="Confirm new transaction">           
            <RowItemSingle>
                <div className="float-left mr-10">Recepient: </div>
                <div className="float-left font-bold">0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Amount: </div>
                <div className="float-left font-bold">0.15 ETH</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Gas Limit: </div>
                <div className="float-left font-bold">21000 Wei</div>
                <div className="float-left mr-10">Gas Price: </div>
                <div className="float-left font-bold">1 GWei</div>
            </RowItemSingle>
            <RowItemSingle cl="mt-10">
                <button className='button mr-10' onClick={() => dispatch({ type: 'PAGE', param: 'dashboard' })}>Confirm</button>                
                <button className='button mr-10' onClick={() => dispatch({ type: 'PAGE', param: 'transaction' })}>Edit</button>                
                <button className='button' onClick={() => dispatch({ type: 'PAGE', param: 'dashboard' })}>Cancel</button>                
            </RowItemSingle>
        </PageContent>
    )
}