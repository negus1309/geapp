<!DOCTYPE html>
<html lang="en-US" ng-app="myApp">
    <head>
        <title>geApp</title>

        <!-- Load Bootstrap CSS -->
        <link href="<?= asset('css/reset.css') ?>" rel="stylesheet">


        <link href="<?= asset('css/uikit.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/style.css') ?>" rel="stylesheet">
        <link href="<?= asset('css/components/accordion.min.css') ?>" rel="stylesheet"  />
    </head>
    <body>
      <h1>geApp</h1>

    <div id="liste" class="uk-grid" ng-controller="seancesController">

          <div id="mes-pv" class="uk-width-1-3 ">
                  <div class="uk-panel uk-panel-box">
                    <h3 class="uk-panel-title">Mes PV</h3>

<!--- ///////////////   ITEM SEANCE ///////////__-->
                    <div class="uk-accordion" data-uk-accordion ng-repeat="commission in commissions">

                            <h4 class="uk-accordion-title" data-commission-id="{{commission.id}}">{{commission.nom}}</h4>

                            <div class="uk-accordion-content">
                              <ul class="pv-list-item">
                                <!--<div >-->
                                  mmh
                                <!--</div>-->
                              </ul>
                            </div>
                            
                    </div>

    <!--- ///////////////   ITEM SEANCE FIN///////////__-->
                  </div>
          </div>






          <div id="dernier-pv" class="uk-width-1-3 ">
                  <div class="uk-panel uk-panel-box">
                    <h3 class="uk-panel-title">Derniers PV</h3>
                    <p>blafd</p>
                  </div>
          </div>
          <div id="calendrier" class="uk-width-1-3 ">
                  <div class="uk-panel uk-panel-box">
                    <h3 class="uk-panel-title">Calendrier</h3>
                    <p>cal</p>

                  </div>
          </div>
    </div>

    <div id="workflow"></div>




            <!-- Table-to-load-the-data Part -->


        <!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
        <script src="<?= asset('js/jquery.min.js') ?>"></script>
        <script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>

        <script src="<?= asset('js/uikit.min.js') ?>"></script>
        <script src="<?= asset('js/components/accordion.js') ?>"></script>

        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
        <script src="<?= asset('app/controllers/seances.js') ?>"></script>
    </body>
</html>
