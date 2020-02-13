export const phaser3ArcadeData = (context, parent, preload, create) => {
  return {
    type: context,
    parent,
    width: 1024,
    height: 768,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload,
      create
    }
  };
};
