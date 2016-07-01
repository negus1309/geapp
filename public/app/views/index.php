<!DOCTYPE html>
<html lang="en-US" ng-app="myApp">
    <head>
        <title>geApp</title>

        <!-- ********************** -->
        <!-- *** CSS reset      -->
        <!-- ********************** -->
        <link href="<?= asset('css/reset.css') ?>" rel="stylesheet">
        <link href="<?= asset('css/bootstrap.min.css') ?>" rel="stylesheet"  />

        <!-- ********************** -->
        <!-- *** UIkit assets       -->
        <!-- ********************** -->
        <link href="<?= asset('css/uikit.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit.almost-flat.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/components/htmleditor.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/components/htmleditor.almost-flat.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/components/accordion.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/components/datepicker.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/components/notify.min.css') ?>" rel="stylesheet"  />

        <!-- ********************** -->
        <!-- *** Fontawesome (icon) -->
        <!-- ********************** -->
        <link href="<?= asset('css/font-awesome.min.css') ?>" rel="stylesheet"  />

        <!-- ********************** -->
        <!-- *** textAngular        -->
        <!-- ********************** -->

        <!-- ********************** -->
        <!-- *** Style personnalisé -->
        <!-- ********************** -->


        <link href="<?= asset('css/style.css') ?>" rel="stylesheet"/>

    </head>

    <body ng-controller="mainController">

      <!-- ********************** -->
      <!-- *** App parts include -->
      <!-- ********************** -->
      <ng-include src="'<?= asset('app/views/menu.html')?>'"></ng-include>

      <ng-include src="'<?= asset('app/views/accueil.html')?>'"></ng-include>
      <ng-include src="'<?= asset('app/views/workflow.html')?>'"></ng-include>
      <ng-include src="'<?= asset('app/views/gestion_presence.html')?>'"></ng-include>

      <ng-include src="'<?= asset('app/views/audio.html')?>'"></ng-include>
      <a href="#"  id="toggle-audio-icon" ng-click="toggleAudio();"><i class="uk-icon-toggle-up" ></i></a>


      <!-- ********************** -->
      <!-- *** Jquery + Angular -->
      <!-- ********************** -->
        <script src="<?= asset('js/jquery.min.js') ?>"></script>
        <script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>

        <script src="<?= asset('js/uikit.min.js') ?>"></script>


        <script src="<?= asset('js/components/accordion.js') ?>"></script>
        <script src="<?= asset('js/components/datepicker.js') ?>"></script>
        <script src="<?= asset('js/components/timepicker.js') ?>"></script>
        <script src="<?= asset('js/components/autocomplete.js') ?>"></script>
        <script src="<?= asset('js/components/notify.js') ?>"></script>
        <script src="<?= asset('js/moment.js') ?>"></script>



        <!-- ********************** -->
        <!-- *** TextAngular -->
        <!-- ********************** -->
        <script src="<?= asset('js/bootstrap-colorpicker-module.js') ?>"></script>
        <script src="<?= asset('js/bootstrap.min.js') ?>"></script>

        <script src="<?= asset('js/angular-wysiwyg.js') ?>"></script>

        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
        <script src="<?= asset('app/controllers/accueil.js') ?>"></script>
        <script src="<?= asset('app/controllers/dernier_pv.js') ?>"></script>
        <script src="<?= asset('app/controllers/workflow.js') ?>"></script>
        <script src="<?= asset('app/controllers/main.js') ?>"></script>
        <script src="<?= asset('app/controllers/menu.js') ?>"></script>
        <script src="<?= asset('app/controllers/gestion_presence.js') ?>"></script>
        <script src="<?= asset('app/controllers/audio.js') ?>"></script>







    </body>
</html>
