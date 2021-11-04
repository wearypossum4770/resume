/** @format */

const test_cases = {
  case_1: {
    physical_injury: true,
    previously_deducted: false,
    damage_type: "personal_injury",
    result: "not taxed",
  },
  case_2: {
    physical_injury: true,
    previously_deducted: true,
    damage_type: "personal_injury",
    result: "should be",
  },
  case_3: {
    physical_injury: true,
    previously_deducted: false,
    damage_type: "personal_injury",
  },
  case_4: {
    physical_injury: true,
    previously_deducted: false,
    damage_type: "personal_injury",
  },
};

export default test_cases;
