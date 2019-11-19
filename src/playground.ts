
//****   1.Aplanando Arrays          ***///
console.log("*** Exercise 1: Aplanando Arrays ***");

//Apartado A & B
console.log("Apartado A & B");

const sample: any[] = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log(sample);

const flatten: any = (ary: Array<number>) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
console.log(flatten(sample));



// ****   2.Acceso en profundidad          ***///
console.log("");
console.log("*** 2.Acceso en profundidad  ***");

//Apartado A
console.log("Apartado A");

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};


const deepGet = (nestedObj, ...pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

console.log(deepGet(myObject, "x"));
console.log(deepGet(myObject, "a"));
console.log(deepGet(myObject, "b"));
console.log(deepGet(myObject, "b", "c"));
console.log(deepGet(myObject, "b", "d", "f", "g"));
console.log(deepGet(myObject));



//Apartado B
console.log("");
console.log("Apartado B");

let deepSet = (value, nestedObj, ...pathArr) => {
    let endPath = pathArr[pathArr.length - 1];
    return pathArr.reduce(function (obj, key) {
        if (endPath === key) {
            console.log("success");
            return obj[key] = value;
        }
        else if (obj && obj[key] !== 'undefined') {
            console.log("loop");
            return obj[key];
        }
    }, nestedObj);
}



deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));
deepSet(4, myObject);
console.log(JSON.stringify(myObject));






// ****   3.Arbol          ***///
console.log("");
console.log("*** 3.Arbol  ***");

type tree = {
    node: any;
    sons: tree[];
}

const tree1: tree = { node: 1, sons: [{ node: 2, sons: [] }, { node: 3, sons: [{ node: 4, sons: [] }] }] };
console.log(tree1);



// ****   5.Memoizacion          ***///
console.log("");
console.log("*** 5.Memorizacion  ***");
//Apartado A & B
console.log("Apartado A y B");

const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
}

const memoize = func => func();

const memoized = memoize(expensiveFunction);

console.log(memoized);
console.log(memoized);
console.log(memoized);


//Apartado C
console.log("");
console.log("Apartado C");


let count = 0;

const repeatText = (repetitions, text) =>
    (count++ , `${text}`.repeat(repetitions).trim());

const memoizeC = func => func;

const memoizedGreet = memoizeC(repeatText);

console.log(memoizedGreet(1, "pam"));
console.log(memoizedGreet(3, "chun"));
console.log(memoizedGreet(1, "pam"));
console.log(memoizedGreet(3, "chun"));
console.log(count);


// ****   4.Trazas por consola          ***///
console.log("");
console.log("*** 4.Trazas por consola  ***");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"])
];

async function run(triggers) {
    for (const t of triggers) {
        await t();
    }
    console.log("first");
}

run(triggers);