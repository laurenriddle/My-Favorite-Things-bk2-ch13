// Some starter code
const container = document.querySelector("#container")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */

    if (document.querySelector("#name").value === '' || document.querySelector("#location").value === '') {
    alert("Please fill out all fields.")
    } else {
    // Once you have collected all the values, update the DOM
    // with some HTML
    const thingName = document.querySelector("#name").value
    const vendor = document.querySelector("#location").value
    
    container.innerHTML += `
        <section>
            <h1>${thingName}</h1>
            <div>${vendor}</div>
        </section>
    `
    document.querySelector("#name").value = ''
    document.querySelector("#location").value = ''
    document.querySelector("#name").focus()

    }
})