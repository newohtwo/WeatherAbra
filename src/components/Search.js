import { createRef, useRef, useState } from "react";
import { searchData } from "../demoData/data";
const Search = (props) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const inputRefrence = useRef();

  const handleInputChange = (event) => {
    let value = event.target.value;

    //should check for special cherecters and such
    if (value !== "") {
      const arr = searchData.map((x) => {
        return (
          <li
            key={x.Key}
            onClick={() => handleDropdownItemClick(x.Key, x.LocalizedName)}
          >
            <span style={{ width: "100%" }}>
              {x.LocalizedName + ", " + x.Country.LocalizedName}
            </span>
          </li>
        );
      });

      setDropDownOptions(arr);
    } else {
      setDropDownOptions([]);
    }

    setShowDropdown(true);
  };

  const handleDropdownItemClick = (key, name) => {
    // Add your logic for handling dropdown item click

    setShowDropdown(false);
    props.getWeatherKey(key, name);
    if (inputRefrence !== undefined) {
      // @ts-ignore
      inputRefrence.current.value = "";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search"
        style={{ marginRight: "5px", padding: "5px" }}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
        ref={inputRefrence}
      />
      {showDropdown && (
        <ul
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            listStyle: "none",
            padding: 0,
            margin: 0,
            zIndex: 1,
            backgroundColor: "green",
          }}
        >
          {dropDownOptions}
        </ul>
      )}
    </div>
  );
};
export default Search;
