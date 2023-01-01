import { Icon } from "@mui/material";

export function ProTip({ tip }) {
  return (
    <div className="flex bg-orange-100 border border-orange-300 p-3 rounded-2xl items-center gap-5">
      <Icon className="text-orange-500">lightbulb</Icon>
      <h5 className="text-orange-600 text-md font-[400] my-0">{tip}</h5>
    </div>
  );
}
