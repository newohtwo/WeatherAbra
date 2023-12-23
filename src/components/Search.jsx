import { useRef, useState } from "react";
import { searchData } from "../demoData/DemoData";
import { getLocationsUsingAutocomplete } from "../services/AccuWeather";
const Search = ({ getWeatherKey }) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const inputReference = useRef();

  const handleInputChange = async (event) => {
    let value = event.target.value;

    //should check for special cherecters and such
    if (value !== "" && value.length >= 7) {
      // check for list of locations every 7 characters to not flood the API for now
      // const listOfLocations = await getLocationsUsingAutocomplete(value);
      const data = await getLocationsUsingAutocomplete(value);
      console.log(data);
      const listOfLocations = data.map((location) => {
        return (
          <li
            key={location.Key}
            onClick={() =>
              handleDropdownItemClick(location.Key, location.LocalizedName)
            }
          >
            <span style={{ width: "100%" }}>
              {location.LocalizedName + ", " + location.Country.LocalizedName}
            </span>
          </li>
        );
      });

      setDropDownOptions(listOfLocations);
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
