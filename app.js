'use strict';
(function () {
'use strict';

<<<<<<< HEAD
  // you will also have to setup the referring domains on your marvel developer portal
  var PRIV_KEY = '2dee256aac3f0163db8093457368ac4d13f8dc72';
  var PUBLIC_KEY = 'f9420321c18cd89cc9801877c864b290';
  var imgaeOfBeast = 'https://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3';
  function getMarvelResponse() {
=======
var MarvelSingleton = {
  privateKey: "2dee256aac3f0163db8093457368ac4d13f8dc72",
  publicKey: "f9420321c18cd89cc9801877c864b290",
  characterID: "1009718",
  url: 'https://gateway.marvel.com/v1/public/characters/',

  generateUrl: function() {
    return this.url + this.characterID;
  },
>>>>>>> ee11fdf929a95eeb40b088b7d5f89280505ba214

  generateTimeStamp: function() {
    return new Date().getTime();
  },

<<<<<<< HEAD
    // the api deals a lot in ids rather than just the strings you want to use
    var characterId = '1009175'; // wolverine
    //

    var url = 'https://gateway.marvel.com/v1/public/characters';

    $.getJSON(url, {
      ts: ts,
      apikey: PUBLIC_KEY,
      limit:100,
      hash: hash

      })
      .done(function(data) {
        // sort of a long dump you will need to sort through
        console.log(data.data.results[92].thumbnail);
      })
      .fail(function(err) {
        // the error codes are listed on the dev site
        console.log(err);
      });
  };

  getMarvelResponse();


})();
