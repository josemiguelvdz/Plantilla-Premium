export default class Button extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor de la Plataforma
   * @param {Phaser.Scene} scene Escena a la que pertenece la plataforma
   * @param {number} x Coordenada x
   * @param {number} y Coordenada y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'button');
    this.scene.add.existing(this);

    // boton interactivo
    this.setInteractive();
  }

}
