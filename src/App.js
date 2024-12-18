import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchLandData } from "./Components/fetchApi";
import LandCard from "./Components/LandCard";
import Loading from "./Components/Loading";
import NavBar from "./Components/NavBar";

import "./App.css";

const App = () => {
  const [lands, setLands] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    const newLands = await fetchLandData(page);
    console.log(newLands);
    if (newLands.length === 0) {
      setHasMore(false);
    } else {
      setLands((prev) => [...prev, ...newLands]);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="app-container">
        <InfiniteScroll
          dataLength={lands.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<p>No more results</p>}
        >
          <div className="land-list">
            {lands.map((land, index) => (
              <LandCard key={index} land={land} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default App;
