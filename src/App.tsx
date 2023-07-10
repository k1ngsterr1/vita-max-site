import React from "react";
import "./styles/styles.css";
import MainScreen from "./screens/MainScreen";
import TeamScreen from "./screens/TeamScreen";
import CompetitionScreen from "./screens/CompetitionScreen";
import ConsultingScreen from "./screens/ConsultingScreen";
import PartnersScreen from "./screens/PartnersScreen";
import DocumentsScreen from "./screens/DocumentsScreen";
import PolicyScreen from "./screens/PolicyScreen";
import ContactsScreen from "./screens/ContactsScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <MainScreen />
      <TeamScreen />
      <CompetitionScreen />
      <ConsultingScreen />
      <PartnersScreen />
      <DocumentsScreen />
      <PolicyScreen />
      <ContactsScreen />
      <Footer />
    </div>
  );
};

export default App;
