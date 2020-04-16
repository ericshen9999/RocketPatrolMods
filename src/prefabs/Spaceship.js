//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame,pointValue,speedValue){
        super(scene,x,y,texture,frame);
        //Add objects
        scene.add.existing(this);
        this.points = pointValue;
        this.speed = speedValue;
    }

    update(){
        if(keyLEFT.isDown){
            this.x -= 1;
        } else if (keyRIGHT.isDown) {
            this.x += 1;
        }
        //Move Left
        this.x -= this.speed + speedGlobal;
        //Wraparound
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }
}