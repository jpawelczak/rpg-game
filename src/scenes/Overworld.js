import Phaser from 'phaser';
import { companies } from '../dialogue/companies.js';
import DialogueManager from '../ui/DialogueManager.js';

export default class Overworld extends Phaser.Scene {
    constructor() {
        super('Overworld');
        this.dialogueManager = new DialogueManager(this);
        this.isDialogueActive = false;
    }

    preload() {
        // Generate placeholder graphics locally
        this.generatePlaceholderAssets();
    }

    create() {
        // Create grass background
        this.add.tileSprite(400, 300, 1600, 1200, 'grass');
        
        // Setup world bounds
        this.physics.world.setBounds(0, 0, 1600, 1200);
        this.cameras.main.setBounds(0, 0, 1600, 1200);

        // Buildings Group
        this.buildings = this.physics.add.staticGroup();
        this.interactionZones = this.physics.add.staticGroup();

        // Create 10 buildings
        const buildingPositions = [
            {x: 200, y: 200, id: 0}, {x: 500, y: 200, id: 1}, {x: 800, y: 200, id: 2}, {x: 1100, y: 200, id: 3}, {x: 1400, y: 200, id: 4},
            {x: 200, y: 800, id: 5}, {x: 500, y: 800, id: 6}, {x: 800, y: 800, id: 7}, {x: 1100, y: 800, id: 8}, {x: 1400, y: 800, id: 9}
        ];

        buildingPositions.forEach(pos => {
            const b = this.buildings.create(pos.x, pos.y, 'building');
            b.companyId = pos.id;
            b.body.setSize(120, 100);
            b.body.setOffset(20, 30);

            // Add interaction zone (doorway)
            const zone = this.interactionZones.create(pos.x, pos.y + 70, 'zone');
            zone.companyId = pos.id;
            zone.visible = false;
            
            // Add company name above building
            this.add.text(pos.x, pos.y - 100, companies[pos.id]?.name || `Building ${pos.id}`, {
                fontFamily: 'Courier New',
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#000000',
                padding: {x: 4, y: 4}
            }).setOrigin(0.5);
        });

        // Player (Jacob)
        this.player = this.physics.add.sprite(800, 600, 'player');
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

        // Collisions
        this.physics.add.collider(this.player, this.buildings);
        
        // Interaction overlap
        this.physics.add.overlap(this.player, this.interactionZones, this.handleInteraction, null, this);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // Action Key
        this.actionKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // Instruction Text
        this.add.text(10, 10, 'Arrow Keys to Move\nSpace to Interact at doors\n(Jacob - Acme Security PM)', {
            fontFamily: 'Courier New',
            fontSize: '18px',
            color: '#ffff00',
            backgroundColor: '#000000',
            padding: {x: 8, y: 8}
        }).setScrollFactor(0).setDepth(100);
    }

    update() {
        if (this.isDialogueActive) {
            this.player.setVelocity(0, 0);
            return;
        }

        const speed = 250;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
        }
    }

    handleInteraction(player, zone) {
        if (Phaser.Input.Keyboard.JustDown(this.actionKey) && !this.isDialogueActive) {
            this.startDialogue(zone.companyId);
        }
    }

    startDialogue(companyId) {
        this.isDialogueActive = true;
        this.player.setVelocity(0, 0);
        const companyData = companies[companyId];
        this.dialogueManager.startConversation(companyData, () => {
            setTimeout(() => {
                this.isDialogueActive = false;
            }, 500); 
        });
    }

    generatePlaceholderAssets() {
        const graphics = this.make.graphics({x: 0, y: 0, add: false});
        
        // Grass
        graphics.fillStyle(0x387c2c);
        graphics.fillRect(0, 0, 64, 64);
        graphics.lineStyle(2, 0x2e6b22);
        graphics.strokeRect(0, 0, 64, 64);
        graphics.generateTexture('grass', 64, 64);
        graphics.clear();

        // Building
        graphics.fillStyle(0x888888);
        graphics.fillRect(0, 0, 160, 160);
        graphics.fillStyle(0x444444);
        graphics.fillRect(64, 120, 32, 40); // door
        graphics.fillStyle(0xadd8e6);
        graphics.fillRect(20, 40, 40, 40); // window 1
        graphics.fillRect(100, 40, 40, 40); // window 2
        graphics.generateTexture('building', 160, 160);
        graphics.clear();

        // Player (Jacob)
        graphics.fillStyle(0xff6600); // Shirt
        graphics.fillRect(8, 16, 16, 20);
        graphics.fillStyle(0xffccaa); // Head
        graphics.fillRect(4, 0, 24, 16);
        graphics.fillStyle(0x0000ff); // Pants
        graphics.fillRect(8, 36, 16, 12);
        graphics.generateTexture('player', 32, 48);
        graphics.clear();

        // Interaction Zone
        graphics.fillStyle(0xff0000, 0.5);
        graphics.fillRect(0, 0, 64, 32);
        graphics.generateTexture('zone', 64, 32);
        graphics.clear();
    }
}
