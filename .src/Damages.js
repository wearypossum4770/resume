/** @format */

import { throws } from "assert";

export default class Damage {
  constructor(object) {
    this.damageType = object.damage_type;
  }
}
export class PersonalInjury extends Damage {
  constructor({ physical_injury, previously_deducted, ...object }) {
    super({ ...object });
    this.__docs__ = "";
    this.physicalDamage = physical_injury;
    this.previouslyDeducted = previously_deducted;
  }
  compensatoryDamages() {
    if (this.physicalDamage && !this.previouslyDeducted) {
      return { is_taxable: false, taxable_damage: null, taxation_rule: null };
    }
    if (this.physicalDamage && this.previouslyDeducted) {
      return {
        is_taxable: true,
        taxable_damage: 0,
        taxation_rule: "previously_deducted",
      };
    }
  }
  punitiveDamages() {
    return { is_taxable: true, taxable_damage: 0, taxation_rule: "ALL" };
  }
}
export class ContractBreach {
  constructor() {
    this.__docs__ = "";
  }
  taxation() {
    return { is_taxable: true };
  }
}
export class PropertyDamage {
  constructor() {
    this.__docs__ = "";
  }
}
export class IncomeLoss {}
export class ExpenseIncurred {}
