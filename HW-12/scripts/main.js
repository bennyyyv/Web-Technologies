//var
var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: {y:300},
            debug: false
          }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    var platforms;
    var player;
    var cursors;
    var stars;
    var score = 0;
    var scoreText;
    var bombs;
    var diamond;
    let spaceBar;
    var spikes;
    //var hitBomb;
    var gameOver = false;
    var game = new Phaser.Game(config);

//preload
    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('diamond', 'assets/diamond.png');
        this.load.image('spikes', 'assets/spikes.png')
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
//create
    function create ()
    {
      //spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.32);

      //sky
      this.add.image(400, 300, 'sky');
      //platforms
      platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');
      spikes.create(600, 220, 'spikes');
      spikes.create(500, 568, 'spikes');
      //player
      player = this.physics.add.sprite(100, 450, 'dude');
      player.setBounce(0.3);
      player.setCollideWorldBounds(true);
      //animations
      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });
      this.anims.create({
          key: 'turn',
          frames: [ { key: 'dude', frame: 4 } ],
          frameRate: 20
      });
      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });
      //define cursors
      cursors = this.input.keyboard.createCursorKeys();
      //diamond collectable
      stars = this.physics.add.group({
            key: 'diamond',
            repeat: 2,
            setXY: { x: 20, y: 0, stepX: 300 }
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
        });
      //stars collectable
      stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.4));
        });
        bombs = this.physics.add.group();

        //scoreText
        scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'})
        //collisions
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, spikes);
         this.physics.add.collider(stars, platforms);
         this.physics.add.collider(diamond, platforms);
         this.physics.add.collider(bombs, platforms);
         this.physics.add.overlap(player, stars, collectStar, null, this);
         this.physics.add.overlap(player, diamond, collectDiamond, null, this);
         this.physics.add.collider(player, bombs, hitBomb, null, this);
    }
//update
    function update ()
     {
       //gameOver
       if (gameOver)
       {
         return;
       }
       //player movement
         if (cursors.left.isDown)
         {
             player.setVelocityX(-160);

             player.anims.play('left', true);
         }
         else if (cursors.right.isDown)
         {
             player.setVelocityX(160);

             player.anims.play('right', true);
         }
         else
         {
             player.setVelocityX(0);

             player.anims.play('turn');
         }

         if (cursors.spaceBar.isDown && player.body.touching.down)
         {
             player.setVelocityY(-330);
         }
     }
     //collectStar function
     function collectStar (player, star)
     {
       star.disableBody(true, true);
       score += 10;
       scoreText.setText('Score: ' + score);
       if (stars.countActive(true) === 0)
       {
         stars.children.iterate(function (child) {
           child.enableBody(true, child.x, 0, true, true);
         })
         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
         //create Bombs
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
       }
     }
     //collectDiamond
     function collectDiamond (player, diamond)
     {
       star.disableBody(true, true);
       score += 20;
       scoreText.setText('Score: ' + score);
       if (diamond.countActive(true) === 0)
       {
         stars.children.iterate(function (child) {
           child.enableBody(true, child.x, 0, true, true);
         })
         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
     }
   }
       //hitBomb function
     function hitBomb (player, bomb, spikes)
       {
         this.physics.pause();
         player.setTint(0xff0000);
         player.anims.play('turn');
         gameOver = true;
       }
