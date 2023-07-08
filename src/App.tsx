import React from "react";
import "./styles/styles.css";
import MainScreen from "./screens/MainScreen";
import TeamScreen from "./screens/TeamScreen";
import CompetitionScreen from "./screens/CompetitionScreen";

const App = () => {
  return (
    <div>
      <MainScreen />
      <TeamScreen />
      <CompetitionScreen />
    </div>
  );
};

export default App;
