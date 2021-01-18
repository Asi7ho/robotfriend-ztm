import React, { /*useState, */ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";

import "./App.css";

function App() {
  // const [robots, setRobots] = useState([]);
  // const [search, setSearch] = useState("");

  const search = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  // const error = useSelector((state) => state.requestRobots.error);

  const dispatch = useDispatch();

  function onSearchChange(event) {
    // setSearch(event.target.value);
    dispatch(setSearchField(event.target.value));
  }

  function onRequestRobot() {
    dispatch(requestRobots());
  }

  useEffect(() => {
    onRequestRobot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.username.toLowerCase().includes(search.toLowerCase())
  );

  if (isPending) {
    return (
      <div className="tc">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
