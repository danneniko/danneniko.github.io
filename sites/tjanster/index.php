<!DOCTYPE html>
<html>
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
    <body>
      <div class="landingpage">
        <h2>Välj din avatar och utför uppdrag för att rädda världen</h2>
        <div class="landingAvatarsWrap">
          <img class="landingarrowz" src="img/landingarrowz.png">
          <img class="arrow" src="img/arrow.png">
          <div class="firstWrapper" data-toggle="tooltip" data-placement="top" title="Välj Captain America">
            <img class="firstAvatar" src="img/shark.png">
          </div>
          <div class="firstAvatarPopover hidden">
              <div class="form-group">
              <label class="control-label col-sm-3" for="inputSuccess3">Namn</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" placeholder="Ditt namn">
              </div>
              <label class="control-label col-sm-3" for="inputSuccess3">E-post</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" placeholder="Din e-postadress">
              </div>
              <button class="btn btn-success pull-right" id="landingVidare">Gå vidare</button>
              <button class="btn btn-link pull-right" id="landingAvbryt">Avbryt</button>
              </div>
          </div>
          <div class="firstAvatarPopover hidden">
              <div class="well firstavatarlogin">
              <a href="app.php" class="btn btn-lg btn-default socialbtn"><i class="fa fa-facebook"></i> Logga in med Facebook</a>
              <a href="app.php" class="btn btn-lg btn-default socialbtn"><i class="fa fa-twitter"></i> Logga in med Twitter</a>
              <a href="app.php" class="btn btn-lg btn-default socialbtn"><i class="fa fa-google-plus"></i> Logga in med Google+</a>
              </div>
              <button class="btn btn-default" id="landingAvbryt">Avbryt</button>
          </div>
          <img class="landingAvatars" src="img/avatars.png">
        </div>
      </div>
    </body>
</html>
