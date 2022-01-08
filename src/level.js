import Platform from './platform.js';
import Player from './player.js';

/**
 * Escena principal del juego
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {

    // Crea al jugador
    this.player = new Player(this, 200, 300);


    // Crea los elementos del escenario
    new Platform(this, this.player, 600, 350);


  }

}