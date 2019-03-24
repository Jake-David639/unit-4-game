var rpgGame = {

    obiWan:
    {
        healthPoints: 120,
        attackPower: 6,
        counterAttackPower: 8,
    },

    maul:
    {
        healthPoints: 100,
        attackPower: 6,
        counterAttackPower: 8,
    },

    sideous:
    {
        healthPoints: 180,
        attackPower: 6,
        counterAttackPower: 8,
    },

    duku:
    {
        healthPoints: 150,
        attackPower: 6,
        counterAttackPower: 8,
    },
    
    gameRunning: false,
    playerCharSelected: false,
    playerCharacter: ,
    attackCount: 1,
    
    
    attackEnemy: function (player, enemy) {
        enemy.healthPoints -= (player.attackPower * this.attackCount);
        player.healthPoints -= enemy.counterAttackPower;
        this.attackCount++;
        //check hp of player for loss and enemy for win
    },
    
// win/loss checker function

// game initializer function, set all characters HP to full values restart the attack couter, set game running state to true.

    startGame: function () {
        gameRunning = true,
        this.obiWan.attackPower = 8;
        this.obiWan.hp = 150;
        this.maul.attackPower = 9;
        this.maul.hp = 120;
        this.sideous.attackPower = 6;
        this.sideous.hp = 200;
        this.duku.attackPower = 7;
        this.duku.hp = 180;
        this.attackCount = 1;

    },

    // jQuery stuff to look for user to click the desired character to play and
    // set that character as the player character move all other characters to fight selection div.

    if (this.gameRunning == false && this.playerCharSelected == false) {
    
        $('obiWan').on('click', function(){
            this.playerCharacter = this.obiWan;
            this.playerCharSelected = false;
        });
    
        $('maul').on('click', function(){
            this.playerCharacter = this.maul;
            this.playerCharSelected = false;
        });
    
        $('sideous').on('click', function(){
            this.playerCharacter = this.sideous;
            this.playerCharSelected = false;
        });
    
        $('duku').on('click', function(){
            this.playerCharacter = this.duku;
            this.playerCharSelected = false;
        });
    
    };

};


// jQuery stull looking for clicks on enemy icons to start the battle

// clicked enemy is moved to the lower div (defender region)
