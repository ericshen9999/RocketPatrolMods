//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);
        //Add objects
        scene.add.existing(this);
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update(){
        //Fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            if(!this.isFiring){
                this.sfxRocket.play();
            }
            this.isFiring= true;
        }
        //If fired
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }
        //Reset
        if(this.y <= 108){
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset(){
        this.isFiring = false;
        this.y = 431;
    }
}