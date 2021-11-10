import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import React, { useState } from "react";
import Archive from "./components/Archive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [savedRepos, setSavedRepos] = useState([]);
  const [issues, setIssues] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchBar
              savedRepos={savedRepos}
              setSavedRepos={setSavedRepos}
              issues={issues}
              setIssues={setIssues}
            />
          }
        />

        <Route path="/issues" element={<Archive issues={issues} />} />
      </Routes>
    </Router>
  );
}

export default App;
