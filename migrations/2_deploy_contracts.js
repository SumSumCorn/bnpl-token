const HongikBNPLToken = artifacts.require("HongikBNPLToken");

module.exports = function(deployer) {
  deployer.deploy(HongikBNPLToken);
};
