Avoiding Common Attacks
The Smart Contracts have developed with Security First in mind.

Integer Overflow and Underflows
We have used the Safe Math Library by the OpenZeppelin to potentially remove any kind of airthmwetic flow based attacks.


Reentrancy Bug Avoidance
We have used the .transfer() method to transfer ether in and out from the contract and making the subraction first . We have also used Pull Withdrawal Scheme to make it much more robust and secure. We have also implied the Check-Effect-Interaction Scheme.

Avoiding Loops - DOS Attacks
We have embraced techniques to avoid loop as much as we can and make the contract less vulnerable to DOS Attacks

Circuit Breaker Pattern
We have used Open Zeppelin Pausable Contract theory to ensure the Pausability in our contract. Mitigating the impact during an attack on the Smart Contract.


