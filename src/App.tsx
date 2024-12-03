import React from "react";
import ImageSlider from "./components/imagesSlider/ImageSlider";
import DebtChecker from "./components/debtChecker/DebtChecker";
import "./App.css";

//App
const App: React.FC = () => (
  <div className="container">
    <DebtChecker />
    <ImageSlider />
  </div>
);

export default App;
