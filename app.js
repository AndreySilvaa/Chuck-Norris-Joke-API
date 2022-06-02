const img = document.getElementById("img")
const btjoke = document.getElementById("btjoke").addEventListener("click", () =>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => displayJoke(data))

    function displayJoke(data){
        document.getElementById("joke").innerText = data.value
        //shake img
        img.classList.add("shake")
        setTimeout(() => {
            img.classList.remove("shake")
        }, 2000)
    }
})