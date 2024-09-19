//00.EXO
//---------------------------------------------------------


const fizzBuzz = (num) => {
    for (let i=1; i <= num; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log("Fizzbuzz");
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    } 
}
fizzBuzz(20);


/*Result for fizzBuzz(20)
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz*/
//01.EXO
//----------------------------------------------------
const ransomNote = (noteText, magazineText) => {
    //both strings are splitted into arrays of words (elements)
    let noteArray = noteText.split(" ");
    let magazineArray = magazineText.split(" ") ;
    //we are looping into noteArray for every element
    for (let element of noteArray){
        //we are finding the indexes of the elements in the magazineArray
        let elementIndex = magazineArray.indexOf(element);

         // If the word isn't found in the magazineArray, return false
        if (elementIndex === -1){
            return false
            //console.log(false)
        }
        //splice, remove the element if found to avoid reusing it
            magazineArray.splice(elementIndex, 1)
    } 
    // If we successfully find and remove all words, return true
    return true
    //console.log(true)
}

noteText = "this is a secret note to you from a secret admirer"
magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
noteText_2 = "this is a note to you from a secret admirer"
console.log(ransomNote(noteText, magazineText))
console.log(ransomNote(noteText_2, magazineText))

/* Side notes for the indexof === -1 
-------------------------------------
 - indexOf() goes through the magazineArray from the beginning to the end
to find the word you're searching for.

 - If it finds the word, it returns the index (position) of that word.

 - If it doesn't find the word, it returns -1,
which indicates that the word doesn't exist in the array.
This is why if (wordIndex === -1) checks
for the absence of the word and returns false if it's missing.
*/

//02.EXO
//----------------------------------------------------------------------------
//.filter(element => [a-z]) i think 
const isPalindrome = (word) => {
    let cleanWord = word.toLowerCase().split("").filter((element) => {
        return element >= 'a' && element <= 'z'; // Keep only alphabetic characters
    }).join(""); // Rejoin the array back into a string
  //console.log(cleanWord)
        let reversedWord = cleanWord.split("").reverse().join('')
        return reversedWord === cleanWord
}

console.log(isPalindrome("kayak")); //---> true
console.log(isPalindrome("race car")); //---> true
console.log(isPalindrome("hello world")); //---> false
console.log(isPalindrome("Madam, I'm Adam")); //---> true

//03.EXO
//-----------------------------------------------------------------------------
const caesarCipher = (mystery, num) => {
    const mysteryArray = mystery.toLowerCase().split('')
    let mysterySolution = []
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"

//const alphabet = lowerAlphabet.split("")
// i want to index + num (taking into account the - also) and % 26 to replace in the alphabet
//console.log(alphabet)
//console.log(mysteryArray);

    // Loop through each character in the mystery array
    for (let i = 0 ; i < mysteryArray.length; i ++) {
        let char = mysteryArray[i];

        // Check if the character is a letter
        if (lowerAlphabet.includes(char)) {

            // Find the current index of the character in the alphabet
            let currentIndex = lowerAlphabet.indexOf(char);

            // Calculate the new index, wrapping around if necessary
            // Easy to do "z" (26) + num % 26 = remainder at index
            let newIndex = (currentIndex + num) % lowerAlphabet.length;
            //for negative values, if the num is -3 for example and we want to replace "a"
            if (newIndex < 0) newIndex += lowerAlphabet.length;
            
        // Add the shifted letter to the solution array
        mysterySolution.push(lowerAlphabet[newIndex])
    } else {
        // If it's not a letter (space, special chars...), keep it as is
        mysterySolution.push(char)
    }
    //Finally join everything into a string that gives the Caesar code
  } console.log(mysterySolution.join(""))
}
caesarCipher("zoo keeper", 2) //----> "bqq mggrgt"

caesarCipher("bqq mggrgt", -2) //----> "zoo keeper"

caesarCipher("My name is Henrique", 3) //----> "pb qdph lv khqultxh "


//04.EXO
//--------------------------------------------------------------------------
const wordsReversed = (sentence) => {
    wordsArray = sentence.split(' ')
    //console.log(wordsArray);
    //go through the array
    for (let i=0; i < wordsArray.length ; i++) {
        //array at index i, the words get splitted, reversed and i wanted to join them but didn't work
        wordsArray[i] = wordsArray[i].split('').reverse()//.join(" ")
        }
        //well nevermind i join it here then
        console.log(wordsArray.join(" "))
}
wordsReversed("This is a string of words") //----> "siht si a gnirts fo sdrow"

//05.EXO
//---------------------------------------------------------------------------
/*
Create a function that takes an array and reverses it.

Notes
Don't use reverse()
Don't create a new array and push elements to it.
*/
const hockeyPlayers = ["Gretzky", "Lemieux", "Kariya", "Fedorov", "Selanne", "Jagr", "McDavid"];
/* too easy...
let hockeyReversed = hockeyPlayers.toReversed();
console.log(hockeyReversed)*/
const ReverseArray = (initialArray) => {
    //create the left/beginning af the array here i.e. "Gretzky" cause it will be used to access index 0
    let begin = 0;
    //create the right/end index
    let end = initialArray.length -1;
    //As long as left(here the array index 1 on 7) is smaller than the end index ...
    while (begin < end) {
        //create the "taxi" that is moving the indexes around... at index 0
        let move = initialArray[begin];
        //then whatever is at index 0 goes to the end [end, x, y, z, a, c, beginning]
        initialArray[begin] = initialArray[end]
        //whatever is at the end hops on the taxi, first occurence goes to index 0
        initialArray[end] = move;
        //then left/beginning index ++ to jump to next one WHILE the right/end one goes down the array
        begin ++;
        end --;
    }
    //added after checking the line 195!!!
    console.log(initialArray)    
}

//console.log(ReverseArray(hockeyPlayers)); ? undefined
ReverseArray(hockeyPlayers);
//console.log(hockeyPlayers);
//console.log(ReverseArray(hockeyPlayers));
//06.EXO
//-----------------------------------------------------------------------------------------
const sumNumArray = (numArray, sum) => {
    const result = [];
    for (let i=0; i<numArray.length; i++) {
        //took me a while ... to not check the number twice in the second loop => changed j=0 for j = i + 1 
        //always gonna check the other nums without checking the one indexed being the same
        for (let j= i + 1; j<numArray.length; j++) {
            if (numArray[i] + numArray[j] === sum){
                result.push([numArray[i], numArray[j]]);
            } 
        }
    }
    console.log(result)
}

// For "sum" = 7
sumNumArray([1, 6, 4, 5, 3, 3], 7) //---> [[6,1], [3,4], [3,4]],
sumNumArray([4, 9, 11, 5, 6, 7, 7, 8, 3, 2, 0, 12], 11)

//07.EXO
//----------------------------------------------------------------------------------------
const fibonacci = (numArrayLength) => {
    //went to check this out... so we put the beginning of the Fibonacci array
    const result = [1, 1]
    //Since we are adding the two previous numbers in the array let's begin at index 2 so we can add index0 to index1 and then iterate till its the numArrayLength given
    for (i = 2; i < numArrayLength ; i++) {
        //calculate the (index 1 position before i) + (index 2 position before i)
        const next = result[i - 1] + result[i - 2]
        result.push(next)
        }
    console.log(result)
}
fibonacci(4) //----> [1, 1, 2, 3]
fibonacci(9) //----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(6) //----> [1, 1, 2, 3, 5, 8]
