import { ethers } from "ethers"
import encryptpwd from "encrypt-with-password"

// create new account
export const createNewWallet = () => {
    return ethers.Wallet.createRandom()
}

// restore account
export const restoreWalletByMnemonic = (mnemonic, path) => {
    return path ? ethers.Wallet.fromMnemonic(mnemonic, path) : ethers.Wallet.fromMnemonic(mnemonic)
}

export const restoreWalletByPrivateKey = (privateKey) => {
    return new ethers.Wallet(privateKey)
}

// encrypt/decrypt
export const encWallet = (text, password) => {
    return encryptpwd.encrypt(text, password)
    //return await wallet.encrypt(password)
}

export const decWallet = (text, password) => {
    return encryptpwd.decrypt(text, password)
    //return await ethers.Wallet.fromEncryptedJson(json, password)
}

// set provider
export const getProvider = (network) => {
    return new ethers.providers.InfuraProvider(network, process.env.REACT_APP_INFURA_API_KEY)
}

// get balance
export const getBalance = async (address, network) => {
    const provider = getProvider(network)
    const balance = await provider.getBalance(address)
    // convert a currency unit from wei to ether
    return ethers.utils.formatEther(balance) // wee to ether
}

// sign and send signed transaction
export const sendTransaction = async (network, privatekey, recepient, value) => {
    //let privatekey = process.env.REACT_APP_PK  
    const wallet = new ethers.Wallet(privatekey)
    const provider = getProvider(network)
    const feeData = await provider.getFeeData()

    //console.log('Using wallet address ' + wallet.address)
    // nonce
    const n = await provider.getTransactionCount(wallet.address)
    //console.log('nonce', n)

    let transaction = {
        to: recepient,
        value: ethers.utils.parseEther(value), // ether to wee
        gasLimit: ethers.utils.hexValue(21000),
        gasPrice: feeData.gasPrice,
        nonce: n
    }

    // sign and serialize the transaction 
    let rawTransaction = await wallet.signTransaction(transaction).then(ethers.utils.serializeTransaction(transaction))
    // print the raw transaction hash
    //console.log('Raw txhash string ' + rawTransaction)

    const trh = await provider.sendTransaction(rawTransaction)
    return trh
}

export const getLastTransactions = async (network, address) => {
    let provider = new ethers.providers.EtherscanProvider(network,process.env.REACT_APP_ETHERSCAN_API_KEY)
    let history = await provider.getHistory(address)
    //return history
    // prepare to the link list
    const transactions = history.slice(0,4).map(h=>{
        return {
            value: ethers.utils.formatEther(h.value),
            from: h.from,
            to: h.to,
            time: h.timestamp,
            hash: h.hash
        }
    }).sort((a,b)=>b.time-a.time)
    return transactions    
}

export const getPrice = async (coin='ethereum') => {
    //console.log('started')
    //return 1
    //https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    const response = await fetch(url)
    console.log(response)
    const d = await response.json()
    console.log(JSON.stringify(d))
    return d[coin].usd 
}