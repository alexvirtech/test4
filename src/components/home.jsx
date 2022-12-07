import React from 'react'

export default function Home({cb}) {
    return <div>
        <button className='button mr-10 btn-home' onClick={()=>cb('new')}>New Account</button>
        <button className='button mr-10 btn-home' onClick={()=>cb('created')}>Existing Account</button>
    </div>
}