#!/usr/bin/env bash
rm -rf src/flats/*
./node_modules/.bin/truffle-flattener contracts/HongikBNPLToken.sol > flats/HongikBNPLToken_flat.sol
