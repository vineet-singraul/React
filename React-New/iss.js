let arr = [1, 2, 3, 99, 99, 66, 54,4];
let indexToDelete = 2; 

for (let i = indexToDelete; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
arr.pop();

}
console.log(arr);
