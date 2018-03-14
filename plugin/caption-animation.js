videojs.registerPlugin('captionAnimation', function() {
    var myPlayer = this;

    // Optional muting of the player for testing
    myPlayer.muted(true);

    // Wait till player metadata has loaded
    myPlayer.on("loadedmetadata", function () {
      var lang="en";
      // Open the English version captions
      for (var i = 0; i < (myPlayer.textTracks().length); i++) {
        if (myPlayer.textTracks()[i].language == lang) {
          // console.log(lang);
          // console.log(myPlayer.textTracks()[i].language);
          myPlayer.textTracks()[i].mode = "showing";
        }
      }
    });

});
