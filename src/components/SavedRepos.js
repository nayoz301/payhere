import React from "react";

const SavedRepos = (props) => {
  const { savedRepos, setSavedRepos, issues, setIssues } = props;

  const savedList = savedRepos.map((item) => (
    <div key={item.id}>
      <a className="link" href={item.html_url}>
        <img src={item.owner.avatar_url} width={50} height={50} alt={item.id} />
        {item.name}
      </a>
      <button
        value={item.id}
        onClick={(e) => {
          setSavedRepos(
            savedRepos.filter((item) => item.id !== parseInt(e.target.value))
          );
        }}
      >
        -
      </button>
    </div>
  ));

  return <div>{savedList}</div>;
};

export default SavedRepos;
