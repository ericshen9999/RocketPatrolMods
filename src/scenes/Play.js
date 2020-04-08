class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        //loads images
        this.load.image('rocket','./assets/rocket.png');
        this.load.image('spaceship','./assets/spaceship.png');
        this.load.image('starfield','./assets/starfield.png');
    }

    create(){
        //place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);
        //white rectangle
        this.add.rectangle(5,5,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,443,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,5,32,455,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(603,5,32,455,0xFFFFFF).setOrigin(0,0);
        //green ui
        this.add.rectangle(37,42,566,64,0x00FF00).setOrigin(0,0);
    }

    update(){
        //scroll
        this.starfield.tilePositionX -= 4
    }
}