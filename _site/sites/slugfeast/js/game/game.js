var game = new Phaser.Game(1140, 601, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

var bullets;
var bulletTime = 0;
var alienTime = 0;
var slott;
var aliens;
var explosions;
var cursors;
var fireButton;
var score = 0;
var scoreString = '';
var scoreString = '';
var scoreText;
var lives;
var firingTimer = 0;
var stateText;
var livingEnemies = [];
var needs_reloop = false;
var angle = -15;
var music;
var magical;
var killed;
var cannon;
var splat;

function preload() {
    game.load.image('bakgrund', 'assets/bgslott/bg.png');
    game.load.image('grass', 'assets/bgslott/graz.png');
    game.load.image('slott', 'assets/bgslott/slottz.png');	
    game.load.image('life', 'assets/life.png');		
	game.load.image('muteicon', 'assets/volume-mute.png');
	game.load.image('unmuteicon', 'assets/volume-unmute.png');	
    game.load.spritesheet('minionz', 'assets/minions/minionsblue.png', 126.5, 156);	
    game.load.spritesheet('bullet', 'assets/skott/skott.png', 127, 128);
	game.load.spritesheet('kaboom', 'assets/explosion/explosion.png', 300, 345);
    game.load.audio('music', ['assets/audio/soundtrakk.mp3']);		
    game.load.audio('magical', ['assets/audio/SFX/magical/magical.mp3']);	
    game.load.audio('killed', ['assets/audio/SFX/enemysounds/kill.mp3']);		
    game.load.audio('cannon', ['assets/audio/SFX/shoot/cannon.mp3']);		
    game.load.audio('gameover', ['assets/audio/gameover.mp3']);		
    game.load.audio('explode', ['assets/audio/explode.mp3']);				
    game.load.audio('splat', ['assets/audio/SFX/splat/splat.mp3']);			
}

function create() {
	//Add the soundtrack
	music = game.add.audio('music');	
	magical = game.add.audio('magical');
	killed = game.add.audio('killed');
	gameover = game.add.audio('gameover');	
	cannon = game.add.audio('cannon');
	explode = game.add.audio('explode');
	music.play('');
	
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
	aliens.createMultiple(200, 'minionz');
    aliens.setAll('outOfBoundsKill', true);
	aliens.forEach(setupAlien, this);
}

function setupMinion (minion) {
    minion.anchor.x = 0.5;
    minion.anchor.y = 0.5;
    minion.animations.add('kaboom');
}

function setupAlien (alienz) {
	alienz.scale.setTo(0.60,0.60);
    alienz.anchor.x = 0;
    alienz.anchor.y = -1.3;
    alienz.animations.add('minionz');
}

function setupBullet (bullet) {
	bullet.scale.setTo(0.60,0.60);
	bullet.anchor.x = -0.7;
	bullet.anchor.y = -1;
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
	killed.play('');
}

function enemyHitsSlott (slott,alien) {
	if (!alien.alive) return;
    alien.kill();
    live = lives.getFirstAlive();

    if (live)
    {
        live.kill();
		explode.play('');
		needs_reloop = true;		
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
		music.pause();
		gameover.play('');
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
	alienTime += game.time.elapsed;

    if (needs_reloop) reloop();
	
	if (alienTime > 1000) {
		alien = aliens.getFirstDead();
		alien.reset(game.rnd.integerInRange(1200,2000), 368);
		alien.body.velocity.x = -300;
		alien.play('minionz', 7, true);
		alienTime = 0;
	}
	
	//  Firing?
    if (cursors.up.isDown)
    {
		if (angle > -60) angle -= 1;
    }
    if (cursors.down.isDown)
    {
		if (angle < 10) angle += 1;
    }
    if (fireButton.isDown)
    {
        fireBullet();
    }
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
			cannon.play('');
			bullet.reset(90, 340);
			bullet.body.velocity.x = 900 * Math.cos(angle * (Math.PI / 180));
			bullet.body.velocity.y = 900 * Math.sin(angle * (Math.PI / 180));
			bullet.body.gravity.setTo(1.5, 20);
			bullet.body.linearDamping = 1;
            bulletTime = game.time.now + 200;
			bullet.play('bullet', 8, true);	
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
	music.resume();
    //hides the text
    stateText.visible = false;
}

function reloop () {
    aliens.removeAll();
    createAliens();
	needs_reloop = false;
}

function resetBullet (bullet) {
    //  Called if the bullet goes out of the screen
    bullet.kill();
}