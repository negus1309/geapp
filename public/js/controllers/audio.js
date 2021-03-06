app.controller('audioController', function($scope, $http, API_URL, $rootScope) {

  //*******************************************//
  // 01 ) INITIALISATION
  //*******************************************//

    /**
     * 1.1 Initialisation de l'uploader de fichier audio et des raccourcis sur le lecteur audio
     *
     * @param aucun paramètre
     */
    $(function(){


          // initilsation de l'uploader de fichier audio
          var progressbar = $("#progressbar"),
              bar         = progressbar.find('.uk-progress-bar'),
              settings    = {

              action: API_URL+'audio/upload', // upload url

              allow : '*.(mp3)', // types permis
              param: 'audio', // nom du champ pour récupérer le fichier
              before: function(settings){ // avant le submit
                settings.params = {'token':$rootScope.pv.token}
              },
              loadstart: function() { // progressbar
                  bar.css("width", "0%").text("0%");
                  progressbar.removeClass("uk-hidden");
              },

              progress: function(percent) { // progressbar
                  percent = Math.ceil(percent);
                  bar.css("width", percent+"%").text(percent+"%");
              },

              allcomplete: function(response) { // quand l'upload est terminé, affichage du lecteur audio

                  bar.css("width", "100%").text("100%");

                  setTimeout(function(){
                      progressbar.addClass("uk-hidden");
                  }, 250);
                  // affichage du lecteur audio
                  $('#audio-submit').hide()
                  $('#audio-player').show()
                  $('#audio-player').append('<audio class="audio-file" controls><source src="'+API_URL+'audio/file/'+$rootScope.pv.token+'" type="audio/mpeg">Your browser does not support the audio element.</audio>');
              }
          };

          var select = UIkit.uploadSelect($("#upload-select"), settings),
              drop   = UIkit.uploadDrop($("#upload-drop"), settings);


          // Attribution des raccourcis audio (toggle play/pause)
          key('alt+s', function(){
              var audioContent = $('.audio-file');
              if(audioContent[0].paused){
                audioContent.trigger('play');
              }else{
                audioContent.trigger('pause');
              }

           });
      });


//*******************************************//
// 02 ) EVENEMENTS
//*******************************************//

  /**
   * 2.1 Permet d'afficher / masquer le conteneur de l'uploader / lecteur audio
   *
   * @param aucun paramètre
   */
  $scope.toggleAudio = function(){

    $('#audio-panel').toggle();
    $('#toggle-audio-icon').toggle();

  }


});
