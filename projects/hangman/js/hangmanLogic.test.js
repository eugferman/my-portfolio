var hangmanLogic = require('./hangmanLogic.js');

describe('RPS FORMAT TEST', function(){
    test('should be true', function(){
      var result = hangmanLogic.testChooseWord('marcelo');
      expect(result).toBe(true);
    });
    test('should be false', function(){
        var result = hangmanLogic.testChooseWord(13456);
        expect(result).toBe(false);
    });
    test('should be true', function(){
        var result = hangmanLogic.testHideWord('_');
        expect(result).toBe(true);
    });
    test('should be true', function(){
        var result = hangmanLogic.testHideWord('marcelo');
        expect(result).toBe(false);
    })
  })

  