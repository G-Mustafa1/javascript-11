//Ek list of integers lein.
//Har integer ko check karein, agar woh 3 se divisible hai to 
//us integer ko replace karein "Three", agar 5 se divisible hai 
//to us integer ko replace karein "Five", agar dono se divisible hai to us integer ko replace karein "ThreeFive".
//Agar integer 3 ya 5 se divisible nahi hai to us integer ko unchanged rakhein.
//Output mei list ke modified elements ko print karein.
//Example:

//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Output: [1, 2, 'Three', 4, 'Five', 'Three', 7, 8, 'Three', 'Five']

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(`Input: [${[arr]}] <br> <br>`)
for (let i = 0; i < arr.length; i++) {
   if(arr[i] % 3 === 0){
      arr[i] = "Three"
   }
   else if(arr[i] % 5 === 0 || arr[i] % 3 === 0){
      arr[i] = "Five-Three"
   }
   else if(arr[i] % 5 === 0){
      arr[i] = "Five"
   }
   // console.log(arr[i])
   
}
document.write(`Output: [${arr}]`)
console.log(arr)