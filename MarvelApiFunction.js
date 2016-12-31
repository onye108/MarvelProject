function getMarvelResponse(ApiSingleton) {

  $.getJSON(ApiSingleton.generateUrl(), {

    ts: ApiSingleton.generateTimeStamp(),

    apikey: ApiSingleton.getPublicKey(),

    hash: ApiSingleton.generateHash()

    })
    .done(function(data) {

      var div = $(ApiSingleton.getDivID());

      var charName = data.data.results[0].name;
      var picPath = data.data.results[0].thumbnail.path;
      var picUrl = picPath + '/portrait_uncanny.jpg';


      // attach info to div in html
      div.find('h2').text(charName);
      div.find('img').attr('src', picUrl);

    })
    .fail(function(err) {

    });
}
