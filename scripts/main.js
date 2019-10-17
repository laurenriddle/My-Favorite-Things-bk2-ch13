// Some starter code
const container = document.querySelector("#container")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thingName = document.querySelector("#name").value
    const vendor = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${thingName}</h1>
            <div>${vendor}</div>
        </section>
    `

})