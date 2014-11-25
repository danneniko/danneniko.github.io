<!DOCTYPE html>
<html>
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <div class="uppdrag content" id="uppdrag" style="position:absolute;top:70px;">
      <div class="row">
        <div class="col-lg-8">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1>Du har valt att göra ett uppdrag inom kategorin IT/Data / Webbdesign <span>(Är det fel? <u class="andra">ändra</u>)</span></h1>
              <div id="reselect" class="hidden reselect">
                <select class="form-control">
                  <option value="">Välj kategori</option>
                  <option value="hurr">IT/Data</option>
                </select>
                <select class="form-control">
                  <option value="">Välj underkategori</option>
                  <option value="hurr">Webbdesign</option>
                </select>
                <button class="btn btn-danger pull-right" id="reselectAndra">Ändra</button>
                <button class="btn btn-link pull-right" id="reselectAvbryt">Avbryt</button>
              </div>
              <div class="col-lg-6">
                <ol>
                  <li>
                    <p>Vilka färdigheter har du?</p>
                    <input class="form-control" type="text" placeholder="Ex. Photoshop">
                  </li>
                  <li>
                    <p>Begäran:</p>
                    <input class="form-control" type="text" placeholder="Ange hur mycket guld du vill ha">
                    <span class="guldinfo">Medelpriset för denna katgori ligger i dagsläget på: 127 guld</span>
                  </li>
                  <li>
                    <p>Beräknad tid:</p>
                    <select class="form-control">
                      <option>1 dag</option>
                      <option>2 dagar</option>
                      <option>3 dagar</option>
                      <option>4 dagar</option>
                      <option>5+ dagar</option>
                    </select>
                  </li>
                </ol>
              </div>
              <div class="col-lg-6 secondcounter">
                <ol>
                  <li>
                    <p>Vad vill du utföra för uppdrag?</p>
                    <textarea class="form-control" placeholder="Beskriv det uppdrag du vill utföra" rows="8"></textarea>
                  </li>
                </ol>
              </div>
            </div>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Modifiera din annons</h4>
              <div class="boxcard">
                <div class="sellbox"></div>
                <i class="fa fa-upload"></i>
                <img class="boxcardimg uploadnewimg" src="http://placehold.it/230x230">
                <p class="boxcardtext animatedtext">
                  Beskriv kortfattat vad det är för slags tjänst du utför <span class="dividah">|</span>
                </p>
                <input type="text" class="retextit hidden" id="retextit" placeholder="Beskriv din tjänst kortfattat..">
                <p class="time" data-toggle="tooltip" data-placement="top" title="Beräknad tid innan tjänsten kan levereras"><i class="fa fa-clock-o"></i> 2 dagar</p>
                <div class="boxcardprofile">
                  <img class="boxcardavatar" src="img/humphrey.jpg">
                  <div class="rating">
                    <p class="boxcardname">Humphrey Bogart</p>
                    <img class="ratingimg" src="img/4stars.png"><span class="usersrating">(11)</span>
                  </div>
                </div>
              <a href="app.php" class="btn btn-success btn-lg publicera">Publicera</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </body>
</html>
