import React, { useState, useEffect } from "react";
import Phaser from "phaser";

const Phaser3 = ({ setupData }) => {
  const parentId = "phaser3Container";

  const preload = () => {};
  const create = () => {};

  const [game, setGame] = useState(
    new Phaser.Game(setupData(Phaser.AUTO, parentId, preload, create))
  );

  useEffect(() => {}, []);
  console.log(Phaser);
  return <div key={parentId} id={parentId}></div>;
};

export default Phaser3;
