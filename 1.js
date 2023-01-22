let arr = [
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]

// function deepSum(arr) {
//   // write your code here
// if(arr.length === 0){
//     return `No Number`
// }
// else{
// let hasil = 0
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//         hasil+=arr[i][j][k]
//     }

//    }

// }

// return hasil
// }
// }

// // ========================================================

// // Instructor solution
// function deepSum(arr) {
//   // write your code here
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       for (let k = 0; k < arr[i][j].length; k++) {
//         result += arr[i][j][k];
//       }
//     }
//   }

//   if (!result) {
//       result = 'No Number';
//   }
//   return result;
// }

// // ================================================================

// function deepSum(arr) {
//   let result = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       for (let k = 0; k < arr[i][j][k].length; k++) {
//         result += arr[i][j][k]
//       } 
//     }
//   }
//   if(!result){
//     result = "No Number";
//   }
// return result
// }

// ====================================================================
function deepSum(arr) {
let result = 0  // MENAMBAHKAN HASIL / OUTPUT
for (let i = 0; i < arr.length; i++) {  // MEMBUKA SIKU PERTAMA
  for (let j = 0; j < arr[i].length; j++) { // MEMBUKA SIKU KE DUA
    for (let k = 0; k < arr[i][j].length; k++) {  // MEMBUKA SIKU KE TIGA
      result += arr[i][j][k]; // MENAMBAHKAN DATA ARR SIKU KETIGA KE RESULT
    }
  }
}
if (!result) {  // JIKA TIDAK SAMA DENGAN RESULT
  result = "No Number" // MAKA RESULT SAMA DENGAN 'NO Number'
}
return result
}
