/** @format */

const unit_reducer = "";
export default function StraightLine({
  cost,
  residual_value,
  useful_life,
  units,
}) {
  return (cost - residual_value) / useful_life;
}
