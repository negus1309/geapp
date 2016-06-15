<!DOCTYPE html>
<html lang="en-US" ng-app="myApp">
    <head>
        <title>geApp</title>

        <!-- Load Bootstrap CSS -->
        <link href="<?= asset('css/reset.css') ?>" rel="stylesheet">


        <link href="<?= asset('css/uikit.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/uikit.almost-flat.min.css') ?>" rel="stylesheet"  />
        <link href="<?= asset('css/style.css') ?>" rel="stylesheet">
        <link href="<?= asset('css/components/accordion.min.css') ?>" rel="stylesheet"  />
    </head>
    <body>
    <ng-include src="'<?= asset('app/views/menu.html')?>'"></ng-include>
    <ng-include src="'<?= asset('app/views/accueil.html')?>'"></ng-include>



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
        <script src="<?= asset('app/controllers/menu.js') ?>"></script>
    </body>
</html>
