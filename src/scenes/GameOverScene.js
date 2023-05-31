import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }

  init(data){
    this.replayButton = undefined;
    this.score = data.score;
  }

  preload(){
    this.load.image('background', 'images/bg_layer1.png');
    this.load.image('gameover', 'images/gameover.png');
    this.load.image('replay-button', 'images/replay.png');
  }

  create(){
    // add background
    this.add.image(240, 320, 'background');
    // add game over image
    this.add.image(240, 200, 'gameover');

    this.add.text(120, 300, 'Score: ' + this.score, { fontSize: '32px', color: '#000' });
    this.replayButton = this.add.image(240, 400, 'replay-button').setInteractive().setScale(0.5);
    this.replayButton.once('pointerup', () => {
      this.scene.start('math-fighter-scene');
    }, this)
  }
}