const HongikBNPLToken = artifacts.require("HongikBNPLToken.sol");

module.exports = async (callback) => {
  try {
    const contract = await HongikBNPLToken.deployed()
    //const tokenURI = process.env.TOKEN_URI
    const tokenURI = "https://hongikbnpl.s3.ap-northeast-2.amazonaws.com/blockchain-mastery-university-metadata.json"



    // Token Holder accounts
    const accounts = [
      '0x0d5EC602860618fa39182289259a9c6c854fc657',
      '0x797536ADf43708b10575bAB4d42338A497d53b27',
      '0x7Bcc577828e9D3415218348b9609c6B34415B19E',
      '0x00364810684704a05159e2cd0BE3b82F2EE7960b'
    ]

    // address
    // '0x8AD72F70F4bb7e452a650E0A1fBF66457F63F7CA',
    // '0x0d5EC602860618fa39182289259a9c6c854fc657',
    // '0x797536ADf43708b10575bAB4d42338A497d53b27',
    // '0x7Bcc577828e9D3415218348b9609c6B34415B19E',
    // '0x00364810684704a05159e2cd0BE3b82F2EE7960b'

    // private
    // '91183b195d6d4ce5cdc9f66b8719cd5f1cfceb878db8e2b670ab3c93eaa5659b',
    // '7a6d906ef9bb9f47bd54fb87685d9506cff57e24cc84cdae2612b3971ad9875c',
    // '0db3aec66d17ee03f6d6af5fd3916b156ed1949906a3fb26ea9dbb27fb1e516d',
    // 'c88f35a4d145e57210e0e36a4050cb6b09aaa8e5bed38bbfb49d053348c2814f',
    // 'e231188385d95435c1d4a60a4f70421010fce9891356e9b7cf98f1d03e950cd3'


    for (const account of accounts) {
      try {
        console.log("=================================================")
        console.log("MINTING TOKEN:\n")
        console.log(account)
        console.log(tokenURI)
        console.log("\n")

        const result = await contract.mint(
          account,
          tokenURI
        )

        console.log(`SUCCESS:\n`)
        console.log(`https://etherscan.io/tx/${result.tx}`)
        console.log("\n\n")
      }
      catch(error) {
        console.log(error)
      }
    }
  }
  catch(error) {
    console.log(error)
  }

  callback()
}
