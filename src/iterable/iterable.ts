let arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

for (const el of arr) {
    console.log(arr);
    console.log(el);
    console.log(JSON.stringify(iterator));
    // console.log(iterator);

    if (el === 2) {
        console.log("push!");
        arr.push(4);
        arr[3] = 5;
        arr = new Array(4);
        // console.log(arr[Symbol.iterator]().);
    }
}

// 배열을 순환할 때 한번 돌기 시작한 배열의 값에 다른 배열을 할당해도 iterator가 참조하는 배열의 메모리 값은 바뀌지 않았기 때문에 그대로 for 문이 진행됨
// 그러나 배열에 값을 추가하거나 직접 변경할경우 iterator가 참조하는 배열의 값이 바뀌었기 때문에 for문에도 영향을 주게 됨
