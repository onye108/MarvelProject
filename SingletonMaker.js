function SingletonMaker(infoObject) {

  var divTag = infoObject.divTag;
  var characterID = infoObject.characterID;
  var publicKey = infoObject.publicKey;
  var privateKey = infoObject.privateKey;
  var url = infoObject.url;

  return {

    getDivID: function() {
      return divTag;
    },

    generateUrl: function() {
      return url + characterID;
    },

    generateTimeStamp: function() {
      return new Date().getTime();
    },

    getPublicKey: function() {
      return publicKey;
    },

    generateHash: function() {
      return CryptoJS.MD5(this.generateTimeStamp() + privateKey + publicKey).toString();
    }

  };
}
