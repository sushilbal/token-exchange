# token-exchange

### [Video Demo of the Application](https://www.youtube.com/watch?v=2wY01W95pSI).
(InProgress Project)

## Token Exchange

Description Token exchange is a platform for exchanging token with ethers. The main goal is to provide a platform where users can exchange tokens of their choice with each other .

I have created a single type of token named it as "Example Token" .User will allocate a certain volume of token to the exchange so that exchange can make the trade on the behalf of the token owner on its platform. User can make an order, cancel an order or complete an order. On each case a event is triggered which is captured in the frontend to display some trade and order data in the start.

##### USE CASE (User : Deployer Account):
1. Can Transfer Token to an address by clicking on >"I need 100 tokens"
2. Can Pause the exchange by clicking on button  > Pause
3. Can Unpause the exchange which is paused by clicking on > Unpause
4. Approve Tokens for exchange to complete the trade on behalf of the user.
5. Deposit the tokens in the exchange for the trade (ensure that the deposit amount doesn't exceed approve amount. first approve then deposit.)
6. Deposit ether in the exchange for exchange to complete the trade.
6. Make an order for the desired amount of token in exchange of ether amount. 
7. Can Submit already placed orders by providing the orderid. 

##### USE CASE (User : User Account):
1. Approve Tokens for exchange to complete the trade on behalf of the user.
2. Deposit the tokens in the exchange for the trade (ensure that the deposit amount doesn't exceed approve amount. first approve then deposit.)
3. Deposit ether in the exchange for exchange to complete the trade.
4. Make an order for the desired amount of token in exchange of ether amount. 
5. Can Submit already placed orders by providing the orderid. 

The following project is created as part of ConsenSys Developer Bootcamp project.

##### The code is deployed in Kovan Network. Addressed can be found in (deployed_address.md). 

Get it up and running locally! Setting up the code base $ git clone https://github.com/sushilbal/token-exchange 
##### IMP : Below Versions User
- Truffle v5.1.11 (core: 5.1.11)
- Solidity v0.5.16 (solc-js)
- Node v10.13.0
- Web3.js v1.2.1

##### Clone the project.
- $ cd token-exchange 
- $ npm install
- $ truffle develop
- $ test
- $migrate --network development --reset
##### Connect your metamask with the local node and import the accounts.
- $ cd client
- $ npm install
- $ npm start (To start the front end)
This will start http://localhost:3000 Unlock the Metamask by entering your password and select the localhost:8545 network and Refresh the page.

Setup Blockchain Development Environment

- $ npm install truffle ganache-cli -g 
- $ ganache-cli 
- $ truffle migrate --reset

If all goes good, the contracts will compile and deploy successfully.
