import React from "react";

import { phaser3ArcadeData } from "./config/engine/phaser3Setup";

import Phaser3 from "./components/Phaser3";

const App = () => {
  return (
    <>
      <Phaser3 setupData={phaser3ArcadeData} />
    </>
  );
};

export default App;
