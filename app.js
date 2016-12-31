(function () {
'use strict';

var arrayOfCalls = [
  {
    divTag: '#chika',
    characterID: '1009175',
    publicKey: 'f9420321c18cd89cc9801877c864b290',
    privateKey: '2dee256aac3f0163db8093457368ac4d13f8dc72',
    url: 'https://gateway.marvel.com/v1/public/characters/',
  },

  {
    divTag: '#collin',
    characterID: '1017306',
    publicKey: 'f9420321c18cd89cc9801877c864b290',
    privateKey: '2dee256aac3f0163db8093457368ac4d13f8dc72',
    url: 'https://gateway.marvel.com/v1/public/characters/',
  },

  {
    divTag: '#jeff',
    characterID: '1009218',
    publicKey: 'f9420321c18cd89cc9801877c864b290',
    privateKey: '2dee256aac3f0163db8093457368ac4d13f8dc72',
    url: 'https://gateway.marvel.com/v1/public/characters/',
  },

  {
    divTag: '#juan',
    characterID: '1010945',
    publicKey: 'f9420321c18cd89cc9801877c864b290',
    privateKey: '2dee256aac3f0163db8093457368ac4d13f8dc72',
    url: 'https://gateway.marvel.com/v1/public/characters/',
  }
];

// Go through each array and call marvel api
arrayOfCalls.forEach(function(info) {
  var x = SingletonMaker(info);
  getMarvelResponse(x);
});

})();
