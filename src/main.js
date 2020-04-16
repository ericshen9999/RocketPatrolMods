let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu,Play],
};

let game = new Phaser.Game(config);
game.settings = {
    spaceshipSpeed: 2,
    gameTimer: 60000,
}

let scoreConfig = {
    fontFamily: 'Courier',
    fontSize: '28px',
    backgroundColor: '#F3B141',
    color: '#843605',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0,
};

let speedGlobal = 0;
let keyF, keyLEFT, keyRIGHT;