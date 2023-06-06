const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        // mode: Phaser.Scale.ScaleModes.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [
        debug_scene,
        firstFloorLevel0,
        firstFloorLevel1,
        firstFloorLevel2,
        firstFloorLevel3,
        firstFloorLevel4,
        firstFloorLevel5,
        reborn,
        credit
    ],
    backgroundColor: 0x000000,
    title: "Game",
});

