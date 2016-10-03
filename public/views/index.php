<!DOCTYPE html>
<html lang="fr" ng-app="myApp">
    <head>
        <title>geApp</title>
        <!-- ********************** -->
        <!-- *** 01 ) Styles CSS -->
        <!-- ********************** -->

        <!-- *** CSS reset *** -->
          <link href="<?= asset('css/reset.css') ?>" rel="stylesheet">

        <!-- *** CSS bootstrap *** -->
          <link href="<?= asset('css/bootstrap/bootstrap.min.css') ?>" rel="stylesheet"  />


        <!-- *** / UIkit CSS assets *** -->

          <!-- *** Bibliothèque principale *** -->
          <link href="<?= asset('css/uikit/uikit.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/uikit.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Datepicker component  *** -->
          <link href="<?= asset('css/uikit/components/datepicker.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/datepicker.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Notify component  *** -->
          <link href="<?= asset('css/uikit/components/notify.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/notify.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Tooltip component  *** -->
          <link href="<?= asset('css/uikit/components/tooltip.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/tooltip.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Autocomplete component  *** -->
          <link href="<?= asset('css/uikit/components/autocomplete.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/autocomplete.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Upload component  *** -->
          <link href="<?= asset('css/uikit/components/upload.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/upload.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Progress component  *** -->
          <link href="<?= asset('css/uikit/components/progress.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/progress.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Form-file component  *** -->
          <link href="<?= asset('css/uikit/components/form-file.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/form-file.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Placeholder component  *** -->
          <link href="<?= asset('css/uikit/components/placeholder.min.css') ?>" rel="stylesheet"  />
          <link href="<?= asset('css/uikit/components/placeholder.almost-flat.min.css') ?>" rel="stylesheet"  />

          <!-- *** Sortable component  *** -->

        <!-- *** CSS Fontawesome (icons) *** -->
          <link href="<?= asset('css/font-awesome.min.css') ?>" rel="stylesheet"  />

        <!-- *** CSS Fullcalendar *** -->
          <link href="<?= asset('css/fullcalendar.css') ?>" rel="stylesheet"  />

        <!-- *** CSS Personnalisé (générer depuis sass, style.scss)*** -->
          <link href="<?= asset('css/style.css') ?>" rel="stylesheet"/>
    </head>

    <body ng-controller="mainController">

      <!-- ********************** -->
      <!-- *** 02) Templates HTML -->
      <!-- ********************** -->
      <ng-include src="'<?= asset('views/menu.html')?>'"></ng-include>              <!-- Menu principal -->
      <ng-include src="'<?= asset('views/accueil.html')?>'"></ng-include>           <!-- Accueil -->
      <ng-include src="'<?= asset('views/workflow.html')?>'"></ng-include>          <!-- Workflow (flux d'édition) -->
      <ng-include src="'<?= asset('views/gestion_presence.html')?>'"></ng-include>  <!-- Module de gestion des présences -->
      <ng-include src="'<?= asset('views/recuperation_pv.html')?>'"></ng-include>   <!-- Module de récupération des PV -->
      <ng-include src="'<?= asset('views/word_document.html')?>'"></ng-include>     <!-- Conteneur pour l'export Word -->
      <ng-include src="'<?= asset('views/audio.html')?>'"></ng-include>             <!-- Module audio (upload/lecteur) -->


      <!-- ********************** -->
      <!-- *** 03) Scripts JS -->
      <!-- ********************** -->

      <!-- *** / Bibliothèques principales *** -->

              <!-- *** jQuery *** -->
              <script src="<?= asset('js/libs/jquery.min.js') ?>"></script>

              <!-- *** AngularJS *** -->
              <script src="<?= asset('js/libs/angular.min.js') ?>"></script>

              <!-- *** UIkit *** -->
              <script src="<?= asset('js/libs/uikit.min.js') ?>"></script>

      <!-- *** / Plugins *** -->

              <!-- *** Filesaver (Word export) *** -->
              <script src="<?= asset('js/plugins/FileSaver.min.js') ?>"></script>

              <!-- *** jQuery Word Export (Word export) *** -->
              <script src="<?= asset('js/plugins/jquery.wordexport.js') ?>"></script>

              <!-- *** Moment.js *** -->
              <script src="<?= asset('js/plugins/moment.js') ?>"></script>

              <!-- *** Fullcalendar.js *** -->
              <script src="<?= asset('js/plugins/fullcalendar.js') ?>"></script>

              <!-- *** Keymaster.js *** -->
              <script src="<?= asset('js/plugins/keymaster.js') ?>"></script>

                    <!-- *** / UIkit plugins *** -->

                      <!-- *** Datepicker component *** -->
                      <script src="<?= asset('js/plugins/uikit/datepicker.min.js') ?>"></script>

                      <!-- *** Timepicker component *** -->
                      <script src="<?= asset('js/plugins/uikit/timepicker.min.js') ?>"></script>

                      <!-- *** Autocomplete component *** -->
                      <script src="<?= asset('js/plugins/uikit/autocomplete.min.js') ?>"></script>

                      <!-- *** Tooltip component *** -->
                      <script src="<?= asset('js/plugins/uikit/tooltip.min.js') ?>"></script>

                      <!-- *** Notify component *** -->
                      <script src="<?= asset('js/plugins/uikit/notify.min.js') ?>"></script>

                      <!-- *** Upload component *** -->
                      <script src="<?= asset('js/plugins/uikit/upload.min.js') ?>"></script>


                    <!-- *** / TinyMCE plugins *** -->

                      <!-- *** TinyMCE bibliothèque principale  *** -->
                      <script src="<?= asset('js/plugins/tinymce/tinymce.min.js') ?>"></script>

                      <!-- *** TinyMCE UI  *** -->
                      <script src="<?= asset('js/plugins/tinymce/ui-tinymce.js') ?>"></script>


      <!-- *** / AngularJS Controllers *** -->

              <!-- *** app initialisation  *** -->
              <script src="<?= asset('js/app.js') ?>"></script>

              <!-- *** contrôleur principal  *** -->
              <script src="<?= asset('js/controllers/main.js') ?>"></script>

              <!-- *** contrôleur page d'accueil  *** -->
              <script src="<?= asset('js/controllers/accueil.js') ?>"></script>

              <!-- *** contrôleur pour les derniers PV  *** -->
              <script src="<?= asset('js/controllers/dernier_pv.js') ?>"></script>

              <!-- *** contrôleur pour le workflow (flux d'édition du PV)  *** -->
              <script src="<?= asset('js/controllers/workflow.js') ?>"></script>

              <!-- *** contrôleur pour le menu  *** -->
              <script src="<?= asset('js/controllers/menu.js') ?>"></script>

              <!-- *** contrôleur pour le module de gestion des présences  *** -->
              <script src="<?= asset('js/controllers/gestion_presence.js') ?>"></script>

              <!-- *** contrôleur pour le module de récupération des PV  *** -->
              <script src="<?= asset('js/controllers/recuperation_pv.js') ?>"></script>

              <!-- *** contrôleur pour le module audio (upload/lecteur)  *** -->
              <script src="<?= asset('js/controllers/audio.js') ?>"></script>

    </body>
</html>
