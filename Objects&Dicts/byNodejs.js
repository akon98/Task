

function createObject(list1, list2) {
    let obj = new Object();
    for (let i = 0; i < list1.length; i++) {
        if (list2[i] != undefined && list2[i] != null) {
            obj[list1[i]] = list2[i];
        } else {
            obj[list1[i]] = null;
        }
    }
    return obj;
}

let a = ["id", "value", "param1", "param2", "param3", "param4", "param5"];
let b = [];
let n = 5;
for (let i = 0; i < n; i++) {
    b[i] = Math.floor(Math.random() * 100);
}

console.log(createObject(a, b));