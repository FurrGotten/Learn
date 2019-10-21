`
function findRetries(arr, el) {
    let retries = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === el) retries++
    }
    return retries
}
`
function findRetries(arr) {
    const result = {};
    for (let i=0; i < arr.length; i++ ) {
        if (arr[i] in result) result[arr[i]]++
        else result[arr[i]] = 1;
    }
    return result
}
const arrA = [1, 1, 2, 2, 3, 3];
const arrB = [1, 3, 2, 1, 3];
const arrC = [1, 1, 1, 1, 1, 3,];
const arrD = [1, 5, 6, 2, 3, 2, 4, 6];
console.log(findRetries(arrA));
console.log(findRetries(arrB));
console.log(findRetries(arrC));
console.log(findRetries(arrD));


function groupByUserId(orders) {
    const result = {}

    for (let i = 0; i < orders.length; i++) {
        const curOrder = orders[i]
        if (curOrder.userId in result) result[curOrder.userId].push(curOrder.orderId)
        else result[curOrder.userId] = [curOrder.orderId]
    }

    return result
}

console.log(
    groupByUserId([
        { userId: 1, orderId: 235 },
        { userId: 5, orderId: 117 },
        { userId: 3, orderId: 200 },
        { userId: 1, orderId: 25 },
    ]),
)
