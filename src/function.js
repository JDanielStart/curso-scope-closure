function greeting() {
    let userName = "Ana"; // function scope o variable local
    console.log(userName);

    if (userName === "Ana") {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);