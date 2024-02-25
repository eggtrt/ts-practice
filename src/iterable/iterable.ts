let arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

for (const el of arr) {
    console.log(el);
    console.log(iterator.next());
    // console.log(iterator);

    if (el === 2) {
        console.log("push!");
        arr = [4, 5, 6, 7];
        console.log(arr[Symbol.iterator]().next());
        // arr.push(4);
    }
}
