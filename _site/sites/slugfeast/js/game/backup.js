var game = new Phaser.Game(1024, 540, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var bullets;
var bulletTime = 0;
var slott;
var aliens;
var explosions;
var cursors;
var fireButton;
var score = 0;
var scoreString = '';
var scoreText;
var lives;
var firingTimer = 0;
var stateText;
var livingEnemies = [];
var needs_reloop = false;


function preload() {
    game.load.atlasXML('sprites', 'assets/atlas/sprites_starling.png', 'assets/atlas/sprites.xml');
    game.load.image('bakgrund', 'assets/bgslott/bakgrund.jpg');
    game.load.image('grass', 'assets/bgslott/grass.png');
    game.load.image('slott', 'assets/bgslott/slottcut.png');	
    game.load.image('life', 'assets/life.png');		
    game.load.spritesheet('bullet', 'assets/skott/skott.png', 127, 128);
	game.load.spritesheet('kaboom', 'assets/explosion/explosion.png', 300, 345);
}

function create() {
	//Woods background
	game.add.sprite(0, 0, 'bakgrund');
		
	//Create Aliens
    aliens = game.add.group();	
	createAliens();
	

    //  The score
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { fontSize: '34px', fill: '#fff' });

    //  Lives
    lives = game.add.group();
    game.add.text(game.world.width - 100, 10, 'Lives : ', { fontSize: '34px', fill: '#fff' });
	
    //  Text
    stateText = game.add.text(game.world.centerX,game.world.centerY,'', { fontSize: '84px', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;

    for (var i = 0; i < 3; i++) 
    {
        var life = lives.create(game.world.width - 95 + (33 * i), 65, 'life');
        life.anchor.setTo(0.5, 0.5);
        life.alpha = 0.9;
    }
	
	//Images on top of bg
	slott = game.add.sprite(0, 0, 'slott');
	slott.anchor.setTo(0, 0);
	game.add.sprite(0, 0, 'grass');

	//Skott group
	bullets = game.add.group();
	bullets.createMultiple(5, 'bullet');
    bullets.setAll('outOfBoundsKill', true);
	bullets.forEach(setupBullet, this);	
	
    //  An explosion pool
    explosions = game.add.group();
    explosions.createMultiple(20, 'kaboom');
    explosions.forEach(setupMinion, this);

    //  And some controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);	
}
	
function createAliens() {
    for (var i = 0; i < 6; i++)
    {
    	var alien = aliens.create(250 * i, game.world.height-190, 'sprites', 'zombie00');
		alien.anchor.setTo(0, 0);
		var frameNames = Phaser.Animation.generateFrameNames('zombie', 0, 3, '', 2);
		
		aliens.callAll('animations.add', 'animations', 'run', frameNames, 4, true, false);
		aliens.callAll('play', null, 'run');
    }
    aliens.x = 1000;
	
	//Make minions loop from right to left
    var tween = game.add.tween(aliens).to({ x: -800 }, 10000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);
}

function setupMinion (minion) {
    minion.anchor.x = 0.5;
    minion.anchor.y = 0.5;
    minion.animations.add('kaboom');
}

function setupBullet (bullet) {
	bullet.anchor.x = 0;
	bullet.anchor.y = 0;
	bullet.animations.add('bullet');
}

function collisionHandler (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    bullet.kill();
    alien.kill();
	
    //  Increase the score
    score += 1;
    scoreText.content = scoreString + score;
	
    //  And create an explosion :)
    var explosion = explosions.getFirstDead();
    explosion.reset(alien.body.x, alien.body.y);
    explosion.play('kaboom', 30, false, true);
}

function enemyHitsSlott (slott,alien) {
	if (!alien.alive) return;
    alien.kill();
    live = lives.getFirstAlive();

    needs_reloop = true;

    if (live)
    {
        live.kill();
    }

    //  And create an explosion :)
    var explosion = explosions.getFirstDead();
    explosion.reset(slott.body.x+100, game.world.height-100);
    explosion.play('kaboom', 30, false, true);

    // When the player dies
    if (lives.countLiving() < 1)
    {
        slott.kill();
        aliens.callAll('kill');

        stateText.content=" GAME OVER \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }
}

function update() {
    //  Run collision
    game.physics.overlap(bullets, aliens, collisionHandler, null, this);
    game.physics.overlap(aliens, slott, enemyHitsSlott, null, this);
	
    //  Firing?
    if (fireButton.isDown)
    {
        fireBullet();
    }	
	
	//Reloop anything that needs to be relooped
    if (needs_reloop) reloop();	
}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstDead();
        if (bullet)
        {
            //  And fire it
			bullet.play('bullet', 8, true, true);			
			bullet.reset(90, 340);
            bullet.body.velocity.x = 350;
            bulletTime = game.time.now + 200;
			bullet.play('bullet', 30, false, true);			
        }
    }

}


function restart () {
    //  A new level starts
    
    //resets the life count
    lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    aliens.removeAll();
    createAliens();

    //revives the player
    slott.revive();
    //hides the text
    stateText.visible = false;
}

function reloop () {
    aliens.removeAll();
    createAliens();

    stateText.visible = false;
}

function resetBullet (bullet) {
    //  Called if the bullet goes out of the screen
    bullet.kill();
}
