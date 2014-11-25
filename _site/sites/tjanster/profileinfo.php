<!DOCTYPE html>
<html>
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <div class="profileInfoPage content" id="profileInfoPage">
      <div class="row">
        <div class="col-lg-7">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="koptinfo">
                <h1 class="koptitem">Logo design</h1>
                <div class="goldholder pull-right">
                  <span class="goldnumber">
                    200 G
                  </span>
                </div>
                <div class="iteminfo">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus et nisi pretium gravida. Nam orci tortor, tempus at pretium vitae, tincidunt ac ipsum. Donec ac tempor purus, nec consequat lectus. In vitae mattis arcu, in feugiat sem. Suspendisse ultrices nunc ac tortor consequat suscipit et ut libero</p>
                </div>
                <hr>
                <div class="angra pull-right">
                  <button type="button" class="btn btn-lg btn-danger pull-right" data-toggle="modal" data-target="#buyModal">Köp tjänst</button>
                  <a href="app.php" class="btn btn-default btn-lg pull-right kopinte"><i class="fa fa-backward"></i>Tillbaka</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="panel panel-default">
                <div class="panel-heading"><h4>Omdömen</h4></div>
                <div class="panel-body">
                  <div class="omdomerow">
                      <a href="#"><h4>Gunilla Stark:</h4></a>
                      <img class="ratingimg avklaraderating omdomenstars" src="img/4stars.png">
                      Mer professionell logotyp kunde jag inte få
                  </div>
                  <hr>
                  <div class="omdomerow">
                      <a href="#"><h4>Lisa Hansson:</h4></a>
                      <img class="ratingimg avklaraderating omdomenstars" src="img/4stars.png">
                      Vilken otrolig story, kommer beställa igen
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="panel panel-default">
                <div class="panel-heading"><h4>Senaste uppdrag</h4></div>
                <div class="panel-body">
                  <div class="avklarade">
                    <div class="avklaradcard">
                      <img src="img/cards/branding.png">
                      <span class="avklaradecategory">
                        Marknadsföring/Branding
                        <img class="ratingimg avklaraderating" src="img/4stars.png">
                        <blockquote>"Mer professionell logotyp kunde jag inte få" - <a href="#">Gunilla Stark</a></blockquote>
                      </span>
                    </div>
                    <div class="avklaradcard">
                      <img src="img/cards/beach.png">
                      <span class="avklaradecategory">
                        Övrigt/Storytelling
                        <img class="ratingimg avklaraderating" src="img/4stars.png">
                        <blockquote>"Vilken otrolig story, kommer beställa igen" - <a href="#">Lisa Hansson</a></blockquote>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="col-lg-5">
            <div class="panel panel-info">
              <div class="panel-body text-center">
              <h3 class="koptprice text-center"><i class="fa fa-clock-o bigclock"></i><strong> 2 dagar</strong></h3>
                <hr>
                <div class="infoprofilemini">
                  <img class="infopageavatar pull-left" src="img/humphrey.jpg">
                  <span class="bywho pull-left">Av: <a href="humphrey.php"><strong>Humphrey Bogart</strong></a></span>
                  <span class="membersince pull-left">Blev medlem för ca 6 månader sen</span>
                  <div class="badgeandrating">
                    <img class="smallerlevelbadge" src="img/level25.png">
                    <img class="ratingimg inforating" src="img/4stars.png">
                    <span class="clearfix">80% nöjda kunder av 11</span>
                  </div>
                </div>
                <hr>
                <div class="infobedrifter">
                  <h4>Trofeér</h4>
                  <img class="sidebarAchievementImg" src="img/achievementblitz.png">
                  <img class="sidebarAchievementImg" src="img/achievementking.png">
                  <img class="sidebarAchievementImg" src="img/achievementhat.png">
                  <img class="sidebarAchievementImg" src="img/achievementmedalion.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="buyModal" tabindex="-1" role="dialog" aria-labelledby="buyModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title" id="buyModalLabel">Logo Design</h4>
            </div>
            <div class="modal-body">
            Är du säker på att du vill köpa denna tjänst för 200 guld?
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Avbryt</button>
            <a href="buy.php" class="btn btn-success" id="bekraftaKop">Köp</a>
            </div>
          </div>
        </div>
      </div>
      <?php include 'includes/pick.php'; ?>
  </body>
</html>
