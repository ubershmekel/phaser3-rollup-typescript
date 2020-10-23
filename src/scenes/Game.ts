// src/scenes/Game.ts:23 Uncaught TypeError: Cannot read property 'Scene' of undefined
//import Phaser from 'phaser';
import 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
    const logo = this.add.image(400, 70, 'logo');

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}

// src/scenes/Game.ts:28 Uncaught TypeError: Howl is not a constructor
// `Howl` is undefined
import {Howl, Howler} from 'howler';
 
// Setup the new Howl.
const sound = new Howl({
  src: ['sound.webm', 'sound.mp3']
});
 
// Play the sound.
sound.play();
 
// Change global volume.
Howler.volume(0.5);
