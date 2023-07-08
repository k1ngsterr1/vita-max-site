import React from "react";
import "./styles/styles.css";
import MainScreen from "./screens/MainScreen";
import TeamScreen from "./screens/TeamScreen";
import CompetitionScreen from "./screens/CompetitionScreen";
import ConsultingScreen from "./screens/ConsultingScreen";
import PartnersScreen from "./screens/PartnersScreen";

const App = () => {
  return (
    <div>
      <MainScreen />
      <TeamScreen />
      <CompetitionScreen />
      <ConsultingScreen />
      <PartnersScreen />
    </div>
  );
};

export default App;
