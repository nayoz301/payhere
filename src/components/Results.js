import React from "react";
import axios from "axios";

const Results = (props) => {
  const { repos, savedRepos, setSavedRepos, issues, setIssues } = props;

  const handleState = (one) => {
    setSavedRepos([...savedRepos, one]);
    axios(`https://api.github.com/repos/${one.full_name}/issues`)
      .then((res) => setIssues([...issues, res.data]))
      .catch((err) => console.log(err));
  };

  const listRepos =
    repos.length !== 0 ? (
      repos.data.items.map((item) => (
        <div key={item.id}>
          <a className="link" href={item.html_url}>
            <img
              src={item.owner.avatar_url}
              width={50}
              height={50}
              alt={item.id}
            />
            {item.name}
          </a>
          <button
            value={item.id}
            onClick={(e) => {
              savedRepos.length >= 4
                ? alert("4개 이상 등록할 수 없습니다.")
                : savedRepos.find(
                    (item) => parseInt(item.id) === parseInt(e.target.value)
                  )
                ? alert("이미 추가된 항목입니다")
                : handleState(item);
            }}
          >
            +
          </button>
        </div>
      ))
    ) : (
      <div>검색된 Repository가 없습니다.</div>
    );

  return (
    <>
      {repos.length !== 0 ? <div>Repository 검색 결과입니다.</div> : ""}

      <ul>{listRepos}</ul>
    </>
  );
};

export default Results;
