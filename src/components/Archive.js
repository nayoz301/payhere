import React, { useEffect } from "react";

const Archive = (props) => {
  const { issues } = props;

  useEffect(() => {});

  const issueList = issues.map((item) =>
    item.map((one) => (
      <div key={one.id}>
        <a href={one.html_url}>{one.title}</a>
        <div onClick={() => {}}>{`${one.body}`.slice(0, 100)}...</div>
      </div>
    ))
  );
  let isEmpty = issueList.flat();
  return (
    <div>
      {`${isEmpty}`.length !== 0 ? (
        <div>{issueList}</div>
      ) : (
        "Issue가 존재하지 않습니다."
      )}
    </div>
  );
};

export default Archive;
