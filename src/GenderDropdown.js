import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const GenderDropdown = ({ value, onChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            onChange("Men");
          }}
        >
          Men
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            onChange("Women");
          }}
        >
          Women
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GenderDropdown;
