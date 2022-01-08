/**
 * Clase que representa el jugador del juego.
 */
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();

    // Parámetros player
    this.speed = 300;
    this.jumpSpeed = -400;

    // Esta label es la UI en la que pondremos la puntuación del jugador
    this.label = this.scene.add.text(10, 10, "");

    // this.updateScore();

    // Movimiento
    this.left=this.scene.input.keyboard.addKey('A');
    this.jump=this.scene.input.keyboard.addKey('W');
    this.right=this.scene.input.keyboard.addKey('D');

    // this.cursors = this.scene.input.keyboard.createCursorKeys(); POR SI QUIERES MOVERTE CON EL CURSOR
  }

  /**
   * El jugador ha recogido una estrella por lo que este método añade un punto y
   * actualiza la UI con la puntuación actual.
   */
  point() {
    this.score++;
    this.updateScore();
  }
  
  /**
   * Actualiza la UI con la puntuación actual
   */
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }

  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);

    // Movimiento del personaje
    if(this.jump.isDown && this.body.onFloor()){
      this.body.setVelocityY(this.jumpSpeed);
    }
    if (this.left.isDown) {
      this.body.setVelocityX(-this.speed);
    }
    else if (this.right.isDown) {
      this.body.setVelocityX(this.speed);
    }
    else this.body.setVelocityX(0);


    // POR SI QUIERES MOVERTE CON EL CURSOR
    // if (this.cursors.up.isDown && this.body.onFloor()) {
    //   this.body.setVelocityY(this.jumpSpeed);
    // }
    // if (this.cursors.left.isDown) {
    //   this.body.setVelocityX(-this.speed);
    // }
    // else if (this.cursors.right.isDown) {
    //   this.body.setVelocityX(this.speed);
    // }
    // else {
    //   this.body.setVelocityX(0);
    // }
  }
  
}
