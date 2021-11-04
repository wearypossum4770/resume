/** @format */

import { HostContracts } from "./HostContracts.js";
export class EmbeddedDerivative extends HostContracts {
  constructor(args) {
    super(args);
    this.derivedValue = ["price", "rate", "variable"];
    this.futureDateSettlement = true;
    this.initialInvestmentNet = false;
    // closely held
  }
  derivativeDefinition() {
    let self = {
      derivedValue: ["price", "rate", "variable"],
      futureDateSettlement: true,
      initialInvestmentNet: false,
      get definition() {
        return this.initialInvestmentNet;
      },
    };
    return { meets_definition: self.definition };
  }
  hostContractsRelationship() {
    // economic characteristics and risks
    // not leveraged or significatly leveraged
    return false;
  }
  __init__() {
    if (
      super.hasFairValue ||
      this.hostContractsRelationship() ||
      !this.derivativeDefinition().meets_definition
    ) {
      return "IAS39 No Separate Accounting";
    }
  }
}
