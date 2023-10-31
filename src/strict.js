// En el modo estricto no se permite el hoisting

"use strict";
/* pi = 3.1416; no se podría
console.log(pi); */

function myFunction() {
    "use strict";
    /* return pi = 3.1416; no se podría */
    const pi = 3.1416;
    return pi;
}

/* console.log(myFunction()); No se podría*/