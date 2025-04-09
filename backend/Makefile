# Makefile for deploying EtherWallet

# Default Sepolia RPC URL (you can override it via command line or env)
RPC_URL ?= sepolia

# Account index or alias (you must have it in your cast wallet or mnemonic path)
ACCOUNT = SEPOLIA_KEY

# Script path
SCRIPT = script/DeployEtherWallet.s.sol

# Deploy to Sepolia
deploy:
	forge script $(SCRIPT) --rpc-url $(RPC_URL) --account $(ACCOUNT) --broadcast

# Deploy and verify on Sepolia
deploy-verify:
	forge script $(SCRIPT) --rpc-url $(RPC_URL) --account $(ACCOUNT) --broadcast --verify
