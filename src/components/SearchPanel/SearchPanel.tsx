import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler } from "react";

import InputWithButton from "../InputWithButton";

export interface SearchPanelProps {
  filter: string;
  onChangeFilter: ChangeEventHandler<HTMLInputElement>;
}

const SearchPanel = ({ filter, onChangeFilter }: SearchPanelProps) => (
  <div className="flex flex-col justify-center items-center w-full p-4 outline outline-2 gap-4 ">
    <div className="flex flex-col outline-slate-200 bg-slate-600 p-6 rounded-lg">
      <label>Search for a film</label>
      <InputWithButton
        placeholder="e.g. Avengers"
        text={filter}
        setText={onChangeFilter}
        id="input"
        icon={faMagnifyingGlass}
      />
    </div>
  </div>
);
export default SearchPanel;
