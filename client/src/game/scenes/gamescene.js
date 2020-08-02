import Phaser from 'phaser';
import io from 'socket.io-client';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        
    }

    create() {
        this.socket = io('http://localhost:3000');
        this.headerText = this.add.text(300, 30, ['GAME']).setFontSize(35).setFontFamily('Trebuchet MS').setColor('#00ffff');
        this.socket.on('struct', () => {
            this.headerText.text = "Struct!";
        });
        this.socket.on('struct create', (width, height) => {
            let card = this.add.rectangle(300, 300, width, height, 0x00ffff).setInteractive();
            this.input.setDraggable(card);
        })
        this.socket.on('struct multi', (width, height, number) => {
            for (let i = 0; i < number; i++) {
                let card = this.add.rectangle(300 + (i * 50), 300, width, height, 0x00ffff).setInteractive();
                this.input.setDraggable(card);
            }
        });
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

    }

    update() {

    }
}