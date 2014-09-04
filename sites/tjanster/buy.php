<!DOCTYPE html>
<html>
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <div class="koptpage" id="koptpage">
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="koptinfo">
              <h3 class="koptprice pull-right"><i class="fa fa-clock-o"></i><strong> 48h</strong></h3>
              <p class="duharkopt">Du har köpt:</p>
              <h1 class="koptitem">Logo design</h1>
              <div class="sellerinfo">
                Av: <a href="#"><strong>Humphrey Bogart</strong></a> | <img class="coinimg" src="img/goldcoin.png"><strong> 200</strong> | Ordernr: 324141 | 2014-05-25
              </div>
              <div class="iteminfo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus et nisi pretium gravida. Nam orci tortor, tempus at pretium vitae, tincidunt ac ipsum. Donec ac tempor purus, nec consequat lectus. In vitae mattis arcu, in feugiat sem. Suspendisse ultrices nunc ac tortor consequat suscipit et ut libero</p>
              </div>
              <hr>
              <div class="angra pull-right">
                <p class="angratxt">Vill du begära att få avbryta din order?</p>
                <button type="button" class="btn btn-warning pull-right">Ångra köp</button>
              </div>
            </div>
          </div>
        </div>

        <div class="chat panel panel-default">
          <div class="panel-heading"><h4>Meddelanden</h4></div>
          <div class="panel-body">
            <div class="row">
              <div class="bubble bubbleleft">
                <img class="chatavatar" src="img/humphrey.jpg">
                <div class="chattext">
                  <h4>Humphrey Bogart:</h4>
                  <p>Hej, vänligen förklara vilken slags logo du vill att jag ska designa åt dig</p>
                </div>
                <span class="bubbletime">
                  2014-05-25 | <i class="fa fa-clock-o"></i> 16:11
                </span>
              </div>
            </div>
            <div class="row">
              <div class="bubble bubbleright">
                <img class="chatavatar" src="img/shark.png">
                <div class="chattext">
                  <h4>Jag:</h4>
                  <p>Hej Humphrey, jag behöver en logo till mitt företag. Jag bifogar snart en bild på hur jag vill det ska se ut ungefär</p>
                </div>
                <span class="bubbletime">
                  2014-05-25 | <i class="fa fa-clock-o"></i> 16:56
                </span>
              </div>
            </div>
            <div class="sneakit hidden" id="sneakit">
              <div class="row">
                <div class="bubble bubbleleft">
                  <img class="chatavatar" src="img/humphrey.jpg">
                  <div class="chattext">
                    <h4>Humphrey Bogart:</h4>
                    <p>Din logotyp är färdig. Ladda ner den <a href="#">här</a></p>
                  </div>
                  <span class="bubbletime">
                    2014-05-26 | <i class="fa fa-clock-o"></i> 09:11
                  </span>
                </div>
              </div>
              <div class="row review">
                <div class="bubble bubbleleft">
                  <h4>Betygsätt din order</h4>
                  <p>Är du nöjd eller missnöjd? Betygsätt säljaren från 1-5 stjärnor eller begär en modifikation</p>
                  Betygsätt <img src="img/0stars.png" class="ratestars" id="ratestars"> eller
                  <button type="button" class="btn btn-default">Begär modifikation</button>
                  <div id="upplevelsen" class="hidden">
                    <textarea class="beskrivupplevelse form-control" rows="4" placeholder="Beskriv din upplevelse med säljaren"></textarea>
                    <button type="button" class="btn btn-default" id="publicerabetyg" data-toggle="modal" data-target="#sharebetyg">Publicera betyg</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="ordercompleted hidden" id="ordercompleted">
                <div class="bubble bubbleleft text-center">
                  <h4 class="deliverywhite">Din order är levererad!</h4>
                  <div class="sharebox">
                    Dela och få XP: <i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-google-plus"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="panel-footer">
            <span class="panelnote">Skicka meddelande till <a href="humphrey.php">Humphrey Bogart</a></span>
            <textarea class="form-control" rows="7"></textarea>
            <div class="well">
              <button type="button" class="btn btn-default"><i class="fa fa-upload"></i> Bifoga filer</button>
              <button type="button" class="btn btn-success pull-right"><i class="fa fa-envelope-o"></i> Skicka</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="panel panel-info">
          <div class="panel-heading"><h4>Status</h4></div>
          <div class="panel-body">
            <ul class="status">
              <li>Väntar på beskrivning</li>
              <li>Väntar på att du ska ange dina deadlines</li>
              <li class="inactive">Uppnått första deadline</li>
              <li class="inactive">Uppnått andra deadline</li>
              <li class="inactive">Arbete levererat, vänligen betygsätt</li>
            </ul>
          </div>
        </div>
        <div class="panel panel-info">
          <div class="panel-heading"><h4>Dina uppgifter</h4></div>
          <div class="panel-body">
            <ul class="uppgifter">
              <li class="done">
                Beskriv vad du behöver.
                <button type="button" class="btn btn-inactive btn-xs btn-fardig pull-right">Färdig</button>
              </li>
              <li>
                Vill du dela upp arbetet i flera deadlines?
                <button type="button" class="btn btn-xs btn-primary pull-right">Ange deadlines</button>
              </li>
              <li class="inactive">
                Betygsätt din order
                <button type="button" class="btn btn-xs btn-primary pull-right">Betygsätt nu</button>
              </li>
            </ul>
            <hr>
            <button type="button" class="fardigstall btn btn-lg btn-success pull-right">Färdigställ uppgifter</button>
          </div>
        </div>
        <button id="sneakbutton" class="btn btn-lg btn-danger">Spola fram till leverans <i class="fa fa-forward"></i></button>
      </div>
    </div>
    <?php include 'includes/pick.php'; ?>
</body>
</html>
