<!DOCTYPE html>
<html lang="fr" ng-app="myApp">
    <head>
        <title>geApp</title>

        <!-- ********************** -->
        <!-- *** CSS reset      -->
        <!-- ********************** -->
        <link href="<?= asset('css/reset.css') ?>" rel="stylesheet">

        <!-- ********************** -->
        <!-- *** CSS bootstrap      -->
        <!-- ********************** -->
        <link href="<?= asset('css/bootstrap/bootstrap.min.css') ?>" rel="stylesheet"  />

        <!-- ********************** -->
        <!-- *** UIkit assets       -->
        <!-- ********************** -->
        <link href="<?= asset('css/uikit/uikit.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/uikit.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/datepicker.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/datepicker.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/notify.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/notify.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/tooltip.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/tooltip.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/autocomplete.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/autocomplete.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/upload.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/upload.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/progress.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/progress.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/form-file.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/form-file.almost-flat.min.css') ?>" rel="stylesheet"  />

        <link href="<?= asset('css/uikit/components/placeholder.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit/components/placeholder.almost-flat.min.css') ?>" rel="stylesheet"  />
        
        <!-- ********************** -->
        <!-- *** Fontawesome (icon) -->
        <!-- ********************** -->
        <link href="<?= asset('css/font-awesome.min.css') ?>" rel="stylesheet"  />


        <link href="<?= asset('css/fullcalendar.css') ?>" rel="stylesheet"  />

        <!--link href=" asset('css/froala/froala_editor.min.css') " rel="stylesheet"  />
        <link href=" asset('css/froala/froala_style.min.css') " rel="stylesheet"  /-->


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
      <ng-include src="'<?= asset('views/menu.html')?>'"></ng-include>

      <ng-include src="'<?= asset('views/accueil.html')?>'"></ng-include>

      <ng-include src="'<?= asset('views/workflow.html')?>'"></ng-include>

      <ng-include src="'<?= asset('views/gestion_presence.html')?>'"></ng-include>
      <ng-include src="'<?= asset('views/recuperation_pv.html')?>'"></ng-include>

      <ng-include src="'<?= asset('views/word_document.html')?>'"></ng-include>

      <ng-include src="'<?= asset('views/audio.html')?>'"></ng-include>
      <a href="#" id="toggle-audio-icon" ng-click="toggleAudio();"><i class="uk-icon-toggle-up" ></i></a>




        <!-- ********************** -->
        <!-- *** Jquery + Angular + Bootstrp + Uikit librairies -->
        <!-- ********************** -->
        <script src="<?= asset('js/libs/jquery.min.js') ?>"></script>
        <script src="<?= asset('js/libs/angular.min.js') ?>"></script>
        <!--'js/libs/bootstrap.min.js' -->

        <script src="<?= asset('js/libs/uikit.min.js') ?>"></script>


        <!-- ********************** -->
        <!-- *** Plugins -->
        <!-- ********************** -->
        <script src="<?= asset('js/plugins/FileSaver.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/jquery.wordexport.js') ?>"></script>
        <script src="<?= asset('js/plugins/moment.js') ?>"></script>
        <script src="<?= asset('js/plugins/fullcalendar.js') ?>"></script>

        <script src="<?= asset('js/plugins/uikit/datepicker.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/uikit/timepicker.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/uikit/autocomplete.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/uikit/tooltip.min.js') ?>"></script>

        <script src="<?= asset('js/plugins/uikit/notify.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/uikit/upload.min.js') ?>"></script>


        <script src="<?= asset('js/plugins/tinymce/tinymce.min.js') ?>"></script>
        <script src="<?= asset('js/plugins/tinymce/ui-tinymce.js') ?>"></script>
        <script src="<?= asset('js/plugins/keymaster.js') ?>"></script>


        <!-- ********************** -->
        <!-- *** Angular controllers -->
        <!-- ********************** -->
        <script src="<?= asset('js/app.js') ?>"></script>
        <script src="<?= asset('js/controllers/accueil.js') ?>"></script>
        <script src="<?= asset('js/controllers/dernier_pv.js') ?>"></script>
        <script src="<?= asset('js/controllers/workflow.js') ?>"></script>
        <script src="<?= asset('js/controllers/main.js') ?>"></script>
        <script src="<?= asset('js/controllers/menu.js') ?>"></script>
        <script src="<?= asset('js/controllers/gestion_presence.js') ?>"></script>
        <script src="<?= asset('js/controllers/recuperation_pv.js') ?>"></script>
        <script src="<?= asset('js/controllers/audio.js') ?>"></script>







    </body>
</html>
