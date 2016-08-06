app.controller('audioController', function($scope, $http, API_URL, $rootScope) {

  $(function(){
          key('alt+s', function(){
              var audioContent = $('.audio-file');

              if(audioContent[0].paused){
                audioContent.trigger('play');
              }else{
                audioContent.trigger('pause');
              }

           });

          var progressbar = $("#progressbar"),
              bar         = progressbar.find('.uk-progress-bar'),
              settings    = {

              action: API_URL+'audio/upload', // upload url

              allow : '*.(mp3)', // allow only images
              param: 'audio',
              before: function(settings){
                settings.params = {'token':$rootScope.pv.token}

              },
              loadstart: function() {
                  bar.css("width", "0%").text("0%");
                  progressbar.removeClass("uk-hidden");
              },

              progress: function(percent) {
                  percent = Math.ceil(percent);
                  bar.css("width", percent+"%").text(percent+"%");
              },

              allcomplete: function(response) {

                  bar.css("width", "100%").text("100%");

                  setTimeout(function(){
                      progressbar.addClass("uk-hidden");
                  }, 250);

                  alert("Upload Completed")
                  $('#audio-submit').hide()
                  $('#audio-player').show()
                  $('#audio-player').append('<audio class="audio-file" controls><source src="'+API_URL+'audio/file/'+$rootScope.pv.token+'" type="audio/mpeg">Your browser does not support the audio element.</audio>');
              }
          };

          var select = UIkit.uploadSelect($("#upload-select"), settings),
              drop   = UIkit.uploadDrop($("#upload-drop"), settings);
      });




  $scope.toggleAudio = function(){

    $('#audio-panel').toggle();
    $('#toggle-audio-icon').toggle();

  }


});
