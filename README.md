# token-exchange

Video Demo of the Application : https://www.youtube.com/watch?v=2wY01W95pSI
(InProgress Project)

Token Exchange

Description Token exchange is a platform for exchanging token with ethers. The main goal is to provide a platform where users can exchange tokens of their choice with each other .

I have created a single type of token named it as "Example Token" .User will allocate a certain volume of token to the exchange so that exchange can make the trade on the behalf of the token owner on its platform. User can make an order, cancel an order or complete an order. On each case a event is triggered which is captured in the frontend to display some trade and order data in the start.

The following project is created as part of ConsenSys Developer Bootcamp project.

The code is deployed in Kovan Network. Addressed can be found in (deployed_address.md). 

Get it up and running locally! Setting up the code base $ git clone https://github.com/sushilbal/token-exchange 
$ cd token-exchange 
$ npm install
//Start ganache-gui
$ truffle develop
$ test
$migrate --network development --reset
$ cd client
$ npm start (To start the front end)

Setup Blockchain Development Environment

$ npm install truffle ganache-cli -g $ ganache-cli -d $ truffle migrate --reset

If all goes good, the contracts will compile and deploy successfully.

Running Truffle Tests

$ truffle test

Starting Development Server and UI

$ npm start

This will start http://localhost:3000 Unlock the Metamask by entering your password and select the localhost:8545 network and Refresh the page.
