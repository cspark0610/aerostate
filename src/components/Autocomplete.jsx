import * as React from "react";
import { AutoComplete } from "antd";

const match = (search, options) => {
  // super smart patter matching process
  return options.filter((opt) => {
    return opt.value.toLowerCase().includes(search.toLowerCase());
  });
};

export default function Autocomplete({ options, placeholder, onSelect }) {
  const [value, setValue] = React.useState("");
  const [currentOptions, setCurrentOptions] = React.useState([]);

  const onSearch = (searchText) => {
    setCurrentOptions(match(searchText, options));
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={currentOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={(data) => setValue(data)}
        placeholder={placeholder}
      />
    </>
  );
}
