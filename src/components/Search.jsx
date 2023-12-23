import { useRef, useState } from "react";
import { searchData } from "../demoData/DemoData";
const Search = ({ getWeatherKey }) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const inputReference = useRef();

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

  const handleDropdownItemClick = (item, name) => {
    setShowDropdown(false);
    if (inputReference !== undefined) {
      // @ts-ignore
      inputReference.current.value = "";
    }
    getWeatherKey(item, name);
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
        ref={inputReference}
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