import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'

export default function NewCreated() {
    const { dispatch } = useContext(UserContext)
    return (
        <PageContent title="New account is created!">
            <RowItemSingle>
                <div className="float-left mr-10">Mnemonic: </div>
                <div className="float-left font-bold">banana goose kind what lounge diagram price border recipe horse enhance coach</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Address: </div>
                <div className="float-left font-bold">0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Private Key: </div>
                <div className="float-left font-bold">117712e55ec992d2dccbb7bf7f55c923bdcee9b28802b5a1de4d9b667cb66a6c</div>
            </RowItemSingle>
            <RowItemSingle>
                <div className="float-left mr-10">Private Key: </div>
                <div className="float-left font-bold">117712e55ec992d2dccbb7bf7f55c923bdcee9b28802b5a1de4d9b667cb66a6c</div>
            </RowItemSingle>

            <RowItemSingle cl="mt-10">
                <button className='button' onClick={() => dispatch({ type: 'PAGE', param: 'dashboard' })}>Dashboard</button>
                <div>Warning: <span className='text-danger'>save the mnemonic phrase before close!</span></div>
            </RowItemSingle>
        </PageContent>
    )
}