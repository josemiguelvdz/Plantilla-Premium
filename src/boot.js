export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('assets/sprites/');
    this.load.image('platform', 'platform.png');
    this.load.image('player', 'player.png');
    this.load.image('button', 'button.png')

    // this.load.spritesheet('player','playerAnim.png',{frameWidth:64,frameHeight:64}); - SPRITESHEET
    // this.load.spritesheet('jump','jumpAnim.png',{frameWidth:64,frameHeight:64});
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('menu');
  }
}