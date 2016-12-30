function getMarvelResponse(ApiSingleton) {

  $.getJSON(ApiSingleton.generateUrl(), {

    ts: ApiSingleton.generateTimeStamp(),

    apikey: ApiSingleton.publicKey,

    hash: ApiSingleton.generateHash()

    })
    .done(function(data) {

    })
    .fail(function(err) {
    
    });
}
