import Phaser from 'phaser';
import Overworld from './scenes/Overworld.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Overworld]
};

const game = new Phaser.Game(config);
window.game = game;
