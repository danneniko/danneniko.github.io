<!DOCTYPE html>
<html>
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <div class="sellerPage content" id="sellerPage">
      <div class="row">
        <div class="col-lg-8">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="koptinfo">
                <div class="sellerheader">
                  <h1 class="sellerHeaderText">Humphrey Bogart</h1>
                  <a href="app.php" class="btn btn-default btn-lg sellerback"><i class="fa fa-backward"></i>Tillbaka</a>
                </div>
                <div class="iteminfo">
                  <div class="avklarade">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="avklaradcard avklaradecardSeller">
                          <img src="img/cards/branding.png">
                          <span class="avklaradecategory">
                            Marknadsföring/Branding
                            <img class="ratingimg avklaraderating" src="img/4stars.png">
                            <blockquote>"Mer professionell logotyp kunde jag inte få" - <a href="#">Gunilla Stark</a></blockquote>
                          </span>
                        </div>
                        <div class="avklaradcard avklaradecardSeller">
                          <img src="img/cards/beach.png">
                          <span class="avklaradecategory">
                            Övrigt/Storytelling
                            <img class="ratingimg avklaraderating" src="img/4stars.png">
                            <blockquote>"Vilken otrolig story, kommer beställa igen" - <a href="#">Lisa Hansson</a></blockquote>
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="avklaradcard avklaradecardSeller">
                          <img src="img/cards/branding.png">
                          <span class="avklaradecategory">
                            Marknadsföring/Branding
                            <img class="ratingimg avklaraderating" src="img/4stars.png">
                            <blockquote>"Mer professionell logotyp kunde jag inte få" - <a href="#">Gunilla Stark</a></blockquote>
                          </span>
                        </div>
                        <div class="avklaradcard avklaradecardSeller">
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
          </div>

          <div class="row">
            <div class="col-lg-12">
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
          </div>
        </div>
        <div class="col-lg-4">
          <div class="panel panel-info">
            <div class="panel-body text-center">
            <img class="levelbadge" src="img/level25.png">
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
          <div class="panel panel-info">
            <div class="panel-body text-center">
              <div class="valgorenhet">
                <p>Humphrey Bogart har skickat totalt 2900 kronor till välgörenhet.</p>
                <h4>Skicka du också!</h4>
                <p class="givegoldMinitext">10 guld = 1 krona till välgörenhet</p>
                <input class="spinner" name="value">
                <button type="button" class="btn btn-sm btn-success valgorenhetbtn">Skicka</button>
              </div>
              <div class="delavalgorenhet hidden">
                <h4>Tack för ditt bidrag! Ditt guld har skickats till välgörenhet</h4>
                <div class="sharebox">
                  <a href="#" class="skickamerguld">Skicka mer guld</a>
                  <p>eller visa omvärlden att du har skickat pengar till välg�renhet: </p>
                  <i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-google-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php include 'includes/pick.php'; ?>
  </body>
</html>
