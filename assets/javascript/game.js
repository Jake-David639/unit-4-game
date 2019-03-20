var = champion1 {

    name: 'temp',
    healthPoints: 200,
    attackPower: 6,
    counterAttackPower: 8,

    attackEnemy: function (enemy) {
        enemy.healthPoints -= this.attackPower;
        this.healthPoints -= enemy.attackPower;

    },

    // win checker function

    // game initializer function



};