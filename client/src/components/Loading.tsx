import React from "react";

function Loading() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>{!data ? "Loading..." : data}</div>
  );
}

export default Loading;
