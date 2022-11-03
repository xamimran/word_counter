const textArea = document.getElementById('word_text_area');
textArea.addEventListener('input', () => {
    var str =  textArea.value;
    document.getElementById('countText').innerHTML='Total words: '+getWordCount(str);
    document.getElementById('countCharacter').innerHTML='Total character: '+getCharCount(str);
    document.getElementById('countSpaces').innerHTML='Total Spaces: '+getSpaceCount(str);
    document.getElementById('countSpecialCount').innerHTML='Special Count: '+getSpecialCount(str);
    document.getElementById('countLines').innerHTML='Lines count: '+getLinesCount(str);
});

function getWordCount(str) {
  function removeEmptyStr(val) {
    return val !== ''
  }
  var arr = str.trim().split(/[\s]/g)
  var temp  = arr.length===0 ? 0 : arr.filter(removeEmptyStr).length
  debugger
  return temp
}

function getCharCount(str) {
  return str.length;
}

function getSpaceCount(str) {
  return str.trim().split(" ")== '' ? 0 : str.match(/([\s]+)/g).length
}

function getSpecialCount(str) {
  var specialChars  = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
  return str.match(specialChars) === null ? 0 : str.match(specialChars).length

}

function getLinesCount(str) {
  return str.split("\n")[0]===str ? 0 : str.split("\n").length-1
}




