//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string,names){
    output = [];
    for (let i =0; i<names.length; i++)
        if (string.includes(names[i])){
            output.push(names[i]);
        }
    if (output){
        return output
    }
    else{
        return console.log("No matches")  
    }
   
    
}

console.log(findWords(dog_string,dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i =0; i<arr.length; i++)
        if (i % 2 === 0){
            arr[i] = "even index"
        }
    return arr
    }


console.log(replaceEvens(arr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// codewars problems

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!


function cookie(x){
    let culprit
    if (typeof (x) === "string"){
      culprit = "Zach"
    }
    else if (typeof (x) === "number"){
      culprit = "Monica"
    }
    else{
      culprit = "the dog"
    }
    return `Who ate the last cookie? It was ${culprit}!`
  }

//   Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

//   Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"


  function whoIsPaying(name){
    if (name.length <=2){
      return [name]
    }
    else{
      return [name, name.slice(0,2)]
      }
    }