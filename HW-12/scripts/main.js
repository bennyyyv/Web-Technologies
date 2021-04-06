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
    var game = new Phaser.Game(config);

//preload
    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
//create
    function create ()
    {
      //sky
      this.add.image(400, 300, 'sky');
      //platforms
      platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');
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
      //collide with platforms
      this.physics.add.collider(player, platforms);
    }
//update
    function update ()
    //player movement
     {
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

         if (cursors.up.isDown && player.body.touching.down)
         {
             player.setVelocityY(-330);
         }
     }
