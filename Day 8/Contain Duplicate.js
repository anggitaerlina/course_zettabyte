 function containsDuplicate(nums) {

    let numMap = {};
 
    for (let num of nums) {
      if (numMap[num]) {
        return true;
      }
      numMap[num] = true;
    }
    return false;
  }

  console.log(containsDuplicate([1, 2, 3, 1])); 
  console.log(containsDuplicate([1, 2, 3, 4]));
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
  