import React from 'react'
import RowItemSingle from './rowItemSingle'
import PageContent from './pageContent'

export default function Dashboard() {
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
                <button className='button' href="#">New Transaction</button>
            </RowItemSingle>
        </PageContent>
    )
}