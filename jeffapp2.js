(function () {

  // you will also have to setup the referring domains on your marvel developer portal
  var PRIV_KEY = "2dee256aac3f0163db8093457368ac4d13f8dc72";
  var PUBLIC_KEY = "f9420321c18cd89cc9801877c864b290";

  function getMarvelResponse() {

    // you need a new ts every request
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    // the api deals a lot in ids rather than just the strings you want to use
    var characterId = '1017306';


    var url = 'https://gateway.marvel.com/v1/public/characters/' + characterId;

    console.log(url);

    $.getJSON(url, {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash,
      // characters: characterId
      })
      .done(function(data) {
        $('#jeff').find('h2').text('The Punisher');
        $('#jeff').find('img').attr('src', 'http://i.annihil.us/u/prod/marvel/i/mg/0/03/5239b5b358300/portrait_uncanny.jpg');
        // sort of a long dump you will need to sort through
        console.log(data.data.results);
      })
      .fail(function(err){
        // the error codes are listed on the dev site
        console.log(err);
      });

  };

  getMarvelResponse();


})();
