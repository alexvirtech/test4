import React from 'react'
import RowItemSingle from './rowItemSingle'
import RowItemCustom from './rowItemCustom'
import PageContent from './pageContent'

export default function CreateNew() {
    return <PageContent title="Create new account">
        <RowItemCustom>
            <div className="column">
                <legend>Account Name</legend>
                <input type="text" placeholder="enter account name" id="name" />
            </div>
            <div className="column">
                <legend>Password</legend>
                <input type="password" placeholder="enter the password" id="password" />
            </div>
            <div className="column">
                <legend>Repeat Password</legend>
                <input type="password" placeholder="repeat the password" id="password2" />
            </div>
        </RowItemCustom>
        <RowItemSingle cl="mt-10">
            <button className='button' href="#">Create</button>
        </RowItemSingle>
    </PageContent>   
}