import React, { useContext } from 'react'
import RowItemSingle from './rowItemSingle'
import RowItemCustom from './rowItemCustom'
import PageContent from './pageContent'
import UserContext from '../utils/walletContext.js'

export default function CreateNew() {
    const { dispatch } = useContext(UserContext)
    const validateAndExecute = (e) => {
        // onClick={() => dispatch({ type: 'PAGE', param: 'created' })}
        e.preventDefault()
        console.log(e.target.name.value)
        const p =  {name:e.target.name.value, password: e.target.password.value }
        dispatch({ type: 'NEW_WALLET', param: p })
    }
    return <PageContent title="Create new account">
        <form onSubmit={e => validateAndExecute(e)}>
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
                <button type='submit' className='button mr-10'>Create</button>
                <button type='button' className='button' onClick={() => dispatch({ type: 'PAGE', param: 'home' })}>Cancel</button>
            </RowItemSingle>
        </form>
    </PageContent>
}