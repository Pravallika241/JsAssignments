async function getData(uId) {
    let email = await new Promise ((resolve) => setTimeout(() => {
                    console.log("Fetched the data!");
                    resolve("skc@gmail.com");
                    }, 4000));
    return {
        email:email
    }
}

console.log("start");
getData("skc").then(response => console.log("Email Received is: " + response.email))
console.log("end");
