Deployed Addresses

The contract is currently deployed to private network. I have a lot of work to do before I can deploy to test net for testing. I have deployed in a personal private chanin in cloud Kaleido (azure).

The contract is deployed in Kovan netwrok too. 

Below is the Transavction Hash

Starting migrations...
======================
> Network name:    'kovan'
> Network id:      42
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa6d6fdc685fb0a055cf7360f06bdc041cab9cd1dc013fc4f7f2e5548dccd5f56
   > Blocks: 1            Seconds: 4
   > contract address:    0x645b80cA206b7F02305aBe9370c85b9f5d8e1423
   > block number:        16626280
   > block timestamp:     1581122128
   > account:             0x779637e4EC8a794364109F3E9D6aA88A85a15E50
   > balance:             2.995895625
   > gas used:            164175
   > gas price:           25 gwei
   > value sent:          0 ETH
   > total cost:          0.004104375 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004104375 ETH


2_deploy_contracts.js
=====================

   Deploying 'Token'
   -----------------
   > transaction hash:    0xbde44c801f55aa81d60b9e2ba27cca548b86b55aeecc14470275a7c48ae4b5f7
   > Blocks: 0            Seconds: 0
   > contract address:    0x46cA0ac1f93F1D8891cC17117Fd421485c0DDdc6
   > block number:        16626283
   > block timestamp:     1581122140
   > account:             0x779637e4EC8a794364109F3E9D6aA88A85a15E50
   > balance:             2.97332185
   > gas used:            860610
   > gas price:           25 gwei
   > value sent:          0 ETH
   > total cost:          0.02151525 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02151525 ETH


3_exchange_migration.js
=======================

   Deploying 'Exchange'
   --------------------
   > transaction hash:    0xde8f8c20c9697515dbebde69079dd802778fff2ab8bbcfe1da1aace4c562f4f6
   > Blocks: 1            Seconds: 4
   > contract address:    0xf12f5B82515A688e32bE0ad14b4d915465Ec55f2
   > block number:        16626286
   > block timestamp:     1581122152
   > account:             0x779637e4EC8a794364109F3E9D6aA88A85a15E50
   > balance:             2.909229275
   > gas used:            2536362
   > gas price:           25 gwei
   > value sent:          0 ETH
   > total cost:          0.06340905 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06340905 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.089028675 ETH