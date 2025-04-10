let userInputEl = document.getElementById('userInput');
let factEl = document.getElementById('fact');
let spinnerEl = document.getElementById('spinner');

function knowFacts(event){
    if (event.key === "Enter"){
        let userInputVal = userInputEl.value;
        if (userInputVal === ""){
            alert("Enter a Number");
            return;
        }
        
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };
        spinnerEl.classList.remove("hidden");
        factEl.textContent = "";
        
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            spinnerEl.classList.add("hidden");
            let {fact} = jsonData;
            factEl.textContent = fact;
        });
    }
}
userInputEl.addEventListener("keydown",knowFacts);