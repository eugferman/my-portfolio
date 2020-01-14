function testChooseWord(wordToChoose){
    if(typeof wordToChoose === 'string'){
        return true;
    } else {
        return false;
    }
}

function testHideWord(wordToHide){
    if(wordToHide.includes('_')){
        return true;
    } else {
        return false;
    }
}

const gameLogic = {
    testChooseWord,
    testHideWord
  };
  module.exports = gameLogic;