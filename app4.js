(function () {
  var PRIV_KEY = '2dee256aac3f0163db8093457368ac4d13f8dc72';
  var PUBLIC_KEY = 'f9420321c18cd89cc9801877c864b290';
  var Marvel = {
    characterIDs: [],
    characterNames: []
  };


  console.log('hey');
  function getMarvelResponse() {

    // you need a new ts every request
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    // the api deals a lot in ids rather than just the strings you want to use
    // var characterId = '1009718'; // wolverine


    var url = 'https://gateway.marvel.com/v1/public/characters';

    console.log(url);

    for(var i = 0; i < 20; i++){
      var num = i * 100;

      $.getJSON(url, {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash,
        offset: num,
        limit: 100,
      })

      .done(function(data) {
        // sort of a long dump you will need to sort through
        // console.log(data);
        // console.log(data.data.results.name);
        for(var j = 0; j < 100; j++){
          if(data.data.results[j].id){
            Marvel.characterIDs.push(data.data.results[j].id);
            Marvel.characterNames.push(data.data.results[j].name);
          }
        }
        console.log(Marvel);
      })
      .fail(function(err){
        // the error codes are listed on the dev site
        console.log(err);
      });
    }
  }

  getMarvelResponse();

})();
