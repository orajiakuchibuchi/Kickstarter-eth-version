# CrowdCoin

CrowdCoin is a campaign fund raising project built with react on the ethereum network.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the necessary node packages to run this program.

```bash
npm install
```

## Folder Structure
```python

# This is a core folder belonging to the next-routes package 
.next 

# This folder contains various shared components used across the view 
components 

# This folder contains all ethereum related files & folder
ethereum

# This folder contains all the built files of the project.
ethereum/build

# This folder contains all our smart contracts written in solidity deployable to the eth network.
ethereum/contracts

# This folder contains all node modules needed to run this project.
node_modules

# This folder contains all the pages rendered in our view
pages

# This folder contains all our test scripts
test

```


## Usage

```python
you will need to have metamask installed on your browser

select the rinkby network for testing purpose


#STEP
update the SECRET_KEY and NETWORK_PROVIDER in the ethereum/deploy.js
update the NETWORK_PROVIDER in the ethereum/web3.js

#Run
cd ethereum
node deploy.js

copy the contract address displayed on the terminal/cmd/bash
update the CONTRACT_ADDRESS variable in ethereum/factory.js with the copied contract address

run the *npn run dev* command to start the server.

you will be prompted to allow connection from the local server

allow conenction to enjoy application.

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)