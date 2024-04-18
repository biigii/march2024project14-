function changeHeadingStyling() {
  //   document.querySelector("h1").style.color = "#f33";
  //   document.querySelector("h1").style.textAlign = "center";
  var h1 = document.querySelector("h1");
  h1.style.color = "#f33";
  h1.style.textAlign = "center";
}

// document.querySelector("button").addEventListener("click", changeTheme);

function anything() {
    document.body.style.backgroundColor = "#000"
    document.body.style.color = "#fff"
}


function addToList() {

    var input = document.querySelector("#input")
    var myValue = input.value

    var listItem = document.createElement('li') 
    listItem.textContent = myValue
    document.querySelector('ul').appendChild(listItem)
}