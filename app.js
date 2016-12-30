(function () {
'use strict';

var MarvelSingleton = {
  privateKey: "2dee256aac3f0163db8093457368ac4d13f8dc72",
  publicKey: "f9420321c18cd89cc9801877c864b290",
  characterID: "1009718",
  url: 'https://gateway.marvel.com/v1/public/characters/',

  generateUrl: function() {
    return this.url + this.characterID;
  },

  generateTimeStamp: function() {
    return new Date().getTime();
  },

  generateHash: function() {
    return CryptoJS.MD5(this.generateTimeStamp() + this.privateKey + this.publicKey).toString();
  }

};

  getMarvelResponse(MarvelSingleton);

})();
