Design Pattern Decisions
The development strategy followed was Test Driven Development. Hence, you can observe so many tests in the test files.

Modifiers and Requires (Fail Early Fail Loud)
Each modifier is carefully created and tested to stop invalid authentication to a function or storage. The owner, hall and event owner have their respective functions and no one can execute each other. There is also main contract Ownable Owner that governs Pausable Rules. We have also specified the require statements at necessary positions.


Loops
We have minimized the usage of loops a lot and used the Events, Mapping and Counters to compensate for it and make the entire contract higly gas efficient.

Standard Contract Structure
We have followed the Standard Contract Structure taught during the Bootcamp. Making all the contracts looks similar and increasing the redability of the contract.

Storage Friendly
I am using a lot of Events and Mapping to make the contract storage friendly and only querying Blockchain if there could be an update. Mostly everything is governed by the Events emitted.

Circuit Lifecycle Control Pattern
We have used Open Zeppelin Pausable Contract theory to ensure the Pausability in our contract. Mitigating the impact during an attack on the Smart Contract.