function findVowels(string) {

  let vowels = ["a", "o", "e", "u", "i"];
  let deconstruct = string.toLowerCase().split("");
  let counter = {};

  for (let i = 0; i < vowels.length; i++) {
    let currentVowel = vowels[i];
    for (let i = 0; i < deconstruct.length; i++) {
      let currentLetter = deconstruct[i];
      if (currentVowel === currentLetter) {
        if (counter[currentVowel]) {
          counter[currentVowel]++
        } else {
          counter[currentVowel] = 1;
        }
      }
    }
  }
  if (Object.keys(counter).length === 0) {
    console.log("I didn't find any vowels.")
  } else {
    console.log(counter);
  }
  
};

findVowels("Hello");
