function hasUniqueCharacters(str) {

    let charMap = {};

    for (let char of str) {
      if (charMap[char]) {
        return false;
      }
      charMap[char] = true;
    }
    return true;
  }
  
  console.log(hasUniqueCharacters("abcdefg"));
  console.log(hasUniqueCharacters("hello"));    
  