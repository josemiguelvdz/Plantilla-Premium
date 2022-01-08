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
  * Initialize variables
  * @param {*} data - 
  */
   init(data) 
   {
     
   }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {

    // Tamaño del juego
    const width = this.scale.width;
    const height = this.scale.height;

    // CUSTOM BOUNDS
    this.physics.world.setBounds(0, 0, width, height);

    // Crea al jugador
    this.player = new Player(this, width/2, height/2);


    // Crea los elementos del escenario
    new Platform(this, this.player, 600, 500);

    // Config de la cámara
    // this.cameras.main.setBounds(0, 0, totalWidth, height);
    // this.cameras.main.startFollow(this.player);


  }


  // Tema Colliders
  handleColliders()
  {
    //GROUNDZONE->PLAYER
    this.physics.add.collider(this.groundZone, this.player);

    //BUBBLE->PLAYER
    this.physics.add.overlap(this.player,this.bubble,(o1,o2)=>{
    o2.handleCollision();
    });

  }

}