import Button from "./button.js";
/**
 * Escena principal del juego
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'menu' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    // crear los botones
    this.button1 = new Button(this, this.game.config.width/2, this.game.config.height/2); // botón centrado clean

    // evitar bugs
    this.down = false;

    this.button1.on('pointerdown', () => {
      if(!this.down){
        this.down = true;
        this.scene.start('level',  {});
      }
    });
  }

}