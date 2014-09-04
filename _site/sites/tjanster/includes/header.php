<?php
  $current_page = basename($_SERVER['PHP_SELF']);
?>
<header>
  <div class="brand">
    <a href="#" onClick="window.location.reload()">
      <img id="logo" src="img/logo.svg">
      <img id="logobrown" class="hidden" src="img/logobrown.svg">
    </a>
  </div>
  <nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="brand" href="app.php" onClick="window.location.reload()">
        <img id="logo" src="img/logo.svg">
        <img id="logobrown" class="hidden" src="img/logobrown.svg">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav menu">
    <li><a class="<?php if ($current_page == "app.php"){ echo "current "; }?> item" href="app.php">Hem</a></li>
    <a href="#" id="uppgifter" class="visible-xs">
      Uppgifter
    </a></li>
    <li><a class="<?php if ($current_page == "treasures.php"){ echo "current "; }?> item" href="treasures.php">Skatter</a></li>
    <li><a class="<?php if ($current_page == "new.php"){ echo "current "; }?> item" href="#" id="nytjanst">Skapa tjänst</a></li>
    <li>
    <li class="dropdown butik">
      <a href="#" id="butik" role="button" data-toggle="dropdown" data-target="#">
        Butik <span class="caret"></span>
      </a>
      <div class="dropdown-menu butikmenu" aria-labelledby="butik">
        <div class="btn-group">
          <button type="button" class="btn btn-default">Power-ups</button>
          <button type="button" class="btn btn-default">Utrustning</button>
          <button type="button" class="btn btn-default">Övrigt</button>
        </div>
        <div class="right-inner-addon">
          <i class="fa fa-search"></i>
          <input type="search" class="form-control search" placeholder="Sök..">
        </div>
        <div class="well">
          <div class="minicard">
            <div class="featuredminicard"></div>
            <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="right" title="Coolers från redbull gör att du får gratissnurr var 30:e minut istället för var 60:e. De varar i 24h"></i>
            <img src="img/butik/coolers.png" class="coolers">
            <p class="itemname">Redbull coolers</p>
            <p class="itemprice">10 Guld</p>
            <button type="button" class="btn btn-danger">Köp</button>
          </div>
          <div class="minicard">
            <div class="featuredminicard"></div>
            <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="right" title="Dessa skorna gör att du får dubbelt så många steg i spelet. Varar i 5h"></i>
            <img src="img/butik/nike.jpg">
            <p class="itemname">Nike supersneaks</p>
            <p class="itemprice">20 Guld</p>
            <button type="button" class="btn btn-danger">Köp</button>
          </div>
          <div class="minicard">
            <div class="featuredminicard"></div>
            <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="right" title="Denna skölden skyddar mot 10 slag utan att du tar någon skada alls"></i>
            <img src="img/butik/shield.png">
            <p class="itemname">G4S Sköld</p>
            <p class="itemprice">30 Guld</p>
            <button type="button" class="btn btn-danger">Köp</button>
          </div>
        </div>
        <button type="button" class="btn btn-lg btn-primary pull-right sehela">Se hela utbudet</button>
      </div>
    </li>
    <li><a class="<?php if ($current_page == "game.php"){ echo "current "; }?> item" href="game.php">Spela</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">

      <a href="#" id="notifications" class="notifications hidden">
        <i class="fa fa-bell-o"></i>
      </a>

      <div class="profile">
        <div class="avatarinfo">
          <div class="miniprofileimg">
            <i class="fa fa-user"></i>
          </div>
          <div class="statistik">
            <div class="statistikmeter"></div>
          </div>

          <h3 class="miniprofilename">Sara Larsson</h3>
          <div class="goldholder dropdown">
            <span class="goldnumber" data-toggle="dropdown" id="givegold">340 G</span>
            <div class="dropdown-menu" role="menu" aria-labelledby="givegold">
              <div class="valgorenhetheader">
                <p class="givegoldText">Välj hur mycket guld du vill skicka till välgörenhet</p>
                <span class="givegoldMinitext">10 guld = 1 krona till välgörenhet</span>
                <input class="spinner" name="value">
                <button type="button" class="btn btn-sm btn-success valgorenhetbtnheader">Skicka</button>
              </div>
              <div class="delavalgorenhetheader hidden">
                <h4>Tack för ditt bidrag! Ditt guld har skickats till välgörenhet</h4>
                <div class="sharebox">
                  <a href="#" class="skickamerguldheader">Skicka mer guld</a>
                  <p>eller visa omvärlden att du har skickat pengar till välgörenhet: </p>
                  <i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-google-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</header>