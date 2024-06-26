class Character {
    constructor(scene, x, y, key) {
        this.scene = scene;
        this.sprite = this.scene.physics.add.sprite(x, y, key);

        // Empêcher le personnage de sortir des limites du monde du jeu
        this.sprite.setCollideWorldBounds(true);
    }

    moveLeft(speed) {
        this.sprite.setVelocityX(-speed);
    }

    moveRight(speed) {
        this.sprite.setVelocityX(speed);
    }

    moveUp(speed) {
        this.sprite.setVelocityY(-speed);
    }

    moveDown(speed) {
        this.sprite.setVelocityY(speed);
    }

    stop() {
        this.sprite.setVelocityX(0);
        this.sprite.setVelocityY(0);
    }
}