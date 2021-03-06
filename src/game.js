import Boot from './boot.js';
import Level from './level.js';
import Menu from './menu.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.CANVAS,
    canvas: document.getElementById('myCanvas'),
    width:  1000,
    height: 600,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Level],
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 400 }, 
            debug: true 
        } 
    }
};

new Phaser.Game(config);