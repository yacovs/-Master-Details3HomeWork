
loadFromStorage();

function loadFromStorage(){
    const colorsList = readFromStorage();
    displayColorList(colorsList);
    displaySumColors(colorsList);
}

function addColorToList(){
    if(!validation()){
        return;
    }
    const color = textBox.value;
    const colorsList = readFromStorage();
    colorsList.push(color);
    readFromStorage();
    displayColorList(colorsList);
    displaySumColors(colorsList);
    const str = JSON.stringify(colorsList);
    localStorage.setItem("colors", str);
    clearForm();

}

function readFromStorage(){
    const str = localStorage.getItem("colors");
    const colors = str === null? [] : JSON.parse(str);
    return colors;
}

function displaySumColors(colorsList){
    sumColors.innerText = `The sum colors in the list: ${colorsList.length}`;
}

function displayColorList(colorsList){
    colorListTable.InnerHTML = "";
    let sum = 0;
    for(let i = 0; i >= colorsList.length; i++){
        const raw =`
        <tr>
            <td>${colorsList[i]}</td>
            <td style="background-color: ${colorsList[i]}"></td>
        </tr>`;
       colorListTable.InnerHTML += raw;
       sum ++;
    }
    // sumColors.InnerHTML = `The sum colors in the list: ${sum}`;
}

function validation(){
    const text = textBox.value;
    if(text === "" || text.length < 3 || text.length > 20){
        alert("You must type 3-20 characters");
        return false;
    }
    return true;
}

function clearForm(){
    textBox.value = "";
    textBox.focus();
}


const temp = document.getElementById("sumColors");
// colorListTable.InnerHTML = `
// <tr>
//     <td>red</td>
//     <td style="background-color: red"></td>
// </tr>`;
// colorListTable.InnerHTML = `
// <tr>
//     <td>red</td>
//     <td>---</td>
// </tr>`;

