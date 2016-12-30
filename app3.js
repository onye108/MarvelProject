// 'use strict'

(function () {

  // you will also have to setup the referring domains on your marvel developer portal
  var PRIV_KEY = "2dee256aac3f0163db8093457368ac4d13f8dc72";
  var PUBLIC_KEY = "f9420321c18cd89cc9801877c864b290";

  function getMarvelResponse() {

    // you need a new ts every request
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    // the api deals a lot in ids rather than just the strings you want to use
    var characterId = '1009218'; // wolverine

    var url = 'https://gateway.marvel.com/v1/public/characters/' + characterId;

    console.log(url);
    $.getJSON(url, {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash
    })
      .done(function(data) {
        // sort of a long dump you will need to sort through
        console.log(data.data.results[0].name);
        var charName = data.data.results[0].name;
        console.log(data.data.results[0].thumbnail.path);
        var picPath = data.data.results[0].thumbnail.path;
        var picUrl = picPath + '/portrait_uncanny.jpg';
        $('#juan').find('h2').text(charName);
        $('#juan').find('img').attr('src', picUrl);
      })
      .fail(function(err){
        // the error codes are listed on the dev site
        console.log(err);
      });
  }

  getMarvelResponse();
})();
