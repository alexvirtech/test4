import * as Acc from './walletEthers.js'

const initError = { er: false, tp: '', value: '', param: '', msg: '' }

export const initState = {
    page: 'home',
    accessBy: 0, // 0 - password, 1 - private key, 2 - seed words
    name: '',
    address: '',
    privateKey: '',
    mnemonic: '',
    network: 'goerli',
    coinSymbol: 'ETH',
    coinName: 'ethereum',
    transactions: [],
    error: { ...initError }
    // temp
    /* {
        "value": "0.22",
        "from": "0x27fb2E72E4EA714a26FC32669E7DA6bb453d3060",
        "to": "0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA",
        "time": 1669915164,
        "hash": "0xac1a3d06fdf856d2144038515858592faffe42d6cfd82df4615e974cdcbe1737"
    },
    {
        "value": "0.2",
        "from": "0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA",
        "to": "0x27fb2E72E4EA714a26FC32669E7DA6bb453d3060",
        "time": 1669915008,
        "hash": "0xf6b2e201ce6f18ba67ff89e435db7e421a921dd5f70ab000ddcd20c4bf0f9ced"
    },
    {
        "value": "0.2",
        "from": "0x27fb2E72E4EA714a26FC32669E7DA6bb453d3060",
        "to": "0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA",
        "time": 1669909128,
        "hash": "0xc9649e85c942202a8a5429bdd315aadb37edc995674f56c626f2bc075b43a438"
    },
    {
        "value": "0.2",
        "from": "0x27fb2E72E4EA714a26FC32669E7DA6bb453d3060",
        "to": "0xCB1B509b59a59B9f7fEF20864d9975Aedffe74EA",
        "time": 1669907784,
        "hash": "0xed4bd877879b86bd2bb171fbe9081674169793bac1ece84805264b46c502baa2"
    }
] */

}

export const reducer = (state, action) => {
    switch (action.type) {
        case "PAGE":
            return {
                ...state,
                page: action.param
            }
        case "ACCESS":
            return {
                ...state,
                accessBy: action.param
            }
        case 'NEW_WALLET':
            const wallet = Acc.createNewWallet()
            const key = action.param.name
            const password = action.param.password
            const text = JSON.stringify({ privateKey: wallet.privateKey, address: wallet.address, name: key })
            const enc = Acc.encWallet(text, password)
            localStorage[key] = enc
            return {
                ...state,
                name: key,
                address: wallet.address,
                privateKey: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
                page: 'created'
            }
        case 'EX_WALLET':
            let ewallet, edec, etext, eenc, err
            const epassword = action.param.password
            const ekey = action.param.name
            if (state.accessBy === 0) {
                try {
                    edec = localStorage[ekey]
                    ewallet = JSON.parse(Acc.decWallet(edec, epassword))
                } catch (e) {
                    err =  { er: true, value: e, param: action.param, msg: 'access wallet by name/password error' }
                    console.log(err)
                    return {
                        ...state,
                        error: err
                    }
                }
            } else if (state.accessBy === 1) {
                try {
                    const pkwallet = Acc.restoreWalletByPrivateKey(action.param.pk)
                    ewallet = { privateKey: pkwallet.privateKey, address: pkwallet.address, name: ekey }
                    etext = JSON.stringify(ewallet)
                    eenc = Acc.encWallet(etext, epassword)
                    localStorage[ekey] = eenc
                } catch (e) {
                    err =  { er: true, value: e, param:action.param, msg: 'access wallet by private key error' }
                    console.log(err)
                    return {
                        ...state,
                        error: err
                    }
                }
            } else if (state.accessBy === 2) {
                try {
                    const mwallet = Acc.restoreWalletByMnemonic(action.param.mnemonic)
                    ewallet = { privateKey: mwallet.privateKey, address: mwallet.address, name: ekey }
                    etext = JSON.stringify(ewallet)
                    eenc = Acc.encWallet(etext, epassword)
                    localStorage[ekey] = eenc
                } catch (e) {
                    err =  { er: true, tp: 'EX_WALLET', value: e, param: action.param, msg: 'access wallet by mnemonic words error' }
                    console.log(err)
                    return {
                        ...state,
                        error: err
                    }
                }
            }
            return {
                ...state,
                name: key,
                address: ewallet.address,
                privateKey: ewallet.privateKey,
                mnemonic: '',
                page: 'dashboard'
            }
        case 'ERROR_CLEAR':
            return {
                ...state,
                error: {...initError }
            }
        default:
            return state
    }
}