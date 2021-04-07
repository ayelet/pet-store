import React from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons";

const SearchBar = () => {
  //   const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <InputGroup className="mx-1 text-center outline-0">
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <FaSearch className="search-icon" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
