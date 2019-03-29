
//its generate random words for keyboard training app
let aar = ['for', 'in', 'var', 'main', "%", ',', '<', '>', '$', '&', '[]', '()', '~', '`', ':', ';', 'index', 'store', 'export', 'console.log()', 'const', 'let', 'class', 'import', 'reducer', 'redux', '()', 'from', 'import', 'createStore', '{}', 'testName', 'state', 'return', 'default', 'setState', 'render', '<div>', true, false, 'this' ]

const arrCreater = arr => {
    const arr2 = [];
    let count = 0;
    while (count < 400) {
        count ++;
        arr2.push(arr[Math.floor(Math.random()*arr.length)])
    }
    return arr2.join(' ')
}
console.log(arrCreater(aar));