import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import SavedRepos from "./SavedRepos";

const SearchBar = (props) => {
  const { savedRepos, setSavedRepos, issues, setIssues } = props;
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    try {
      const result = await axios(
        `https://api.github.com/search/repositories?q=${searchInput}`
      );

      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
      <Results
        repos={repos}
        savedRepos={savedRepos}
        setSavedRepos={setSavedRepos}
        issues={issues}
        setIssues={setIssues}
      />
      <SavedRepos
        savedRepos={savedRepos}
        setSavedRepos={setSavedRepos}
        issues={issues}
        setIssues={setIssues}
      />
    </>
  );
};

export default SearchBar;
