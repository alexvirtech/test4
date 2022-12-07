import * as Acc from './walletEthers.js'

export const initState = {
    page: 'home',
    accessBy: 0, // 0 - password, 1 - private key, 2 - seed words
    address: '',
    privateKey: '',
    mnemonic: '',
    network: 'goerli',
    coinSymbol: 'ETH',
    coinName: 'ethereum',
    transactions: [] // temp
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
                address: wallet.address,
                privateKey: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
                page: 'created'
            }
        default:
            return state
    }
}