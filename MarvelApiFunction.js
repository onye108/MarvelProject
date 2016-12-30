function getMarvelResponse(ApiSingleton) {

  $.getJSON(ApiSingleton.generateUrl(), {

    ts: ApiSingleton.generateTimeStamp(),

    apikey: ApiSingleton.publicKey,

    hash: ApiSingleton.generateHash()

    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data.data);
        
    })
    .fail(function(err) {
      // the error codes are listed on the dev site
      console.log(err);
    });
}
