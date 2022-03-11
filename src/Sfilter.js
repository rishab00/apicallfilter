import React from "react";

const Sfilter = ({ searchVal }) => {
  const [initialDataList, setInitialDataList] = React.useState([]);
  const [displayData, setDisplayData] = React.useState([]);
  const [clickedData, setClickedData] = React.useState(null);
  const requestUrl = "https://jsonplaceholder.typicode.com/users/";

  React.useEffect(() => {
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => {
        setInitialDataList(data);
      });
  }, []);

  React.useEffect(() => {
    if (searchVal) {
      setDisplayData(
        initialDataList.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0
        )
      );
    } else {
      setDisplayData([]);
      setClickedData(null);
    }
  }, [searchVal]);

  const onItemClick = (item) => {
    setClickedData(item);
  };
  return (
    <React.Fragment>
      <table>
        {displayData.length ? (
          displayData.map((item) => (
            <tr>
              <td>
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => onItemClick(item)}
                >
                  {item.name}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>{searchVal ? "No result found" : "Search to see result"}</tr>
        )}
      </table>
      {clickedData && (
        <React.Fragment>
          <div>Name:&nbsp; {clickedData.name}</div>
          <div>Username:&nbsp; {clickedData.username}</div>
          <div>Email:&nbsp; {clickedData.email}</div>
          <div>id:&nbsp; {clickedData.id}</div>
          <br />
          <button onClick={() => setClickedData(null)}>Clear Details</button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Sfilter;
