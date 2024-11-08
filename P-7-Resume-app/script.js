const weNewTextArea = document.getElementById("weAddButton");
    const aqNewTextArea = document.getElementById("aqAddButton");

function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weDiv = document.getElementById("we");
    weDiv.insertBefore(newNode, weNewTextArea);
}

function addAQFiedld(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-3")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqDiv = document.getElementById("aq");
    aqDiv.insertBefore(newNode, aqNewTextArea);
}

// Generate CV

function generateCV(){
    // console.log("generateCV")

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    // let nameT2 = document.getElementById("nameT2");
    // nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML = fbField;

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedField;

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    // for a list of li elements we need to use for loop

    let weField = document.getElementsByClassName("weField");
    let str = "";
    for(let e of weField){
        str = str + `<li> ${e.value} </li>`
    }
      document.getElementById("weT").innerHTML = str;

    let aqField = document.getElementsByClassName("aqField");
    let str2 = "";
    for(let e of aqField){
        str2 = str2 + `<li> ${e.value} </li>`
    }
    // image updating
    let file = document.getElementById("imgField").files[0];
    // console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function (){
        document.getElementById("imgTemplate").src = reader.result;
    }

    
      document.getElementById("aqT").innerHTML = str2;

      document.getElementById("cv-form").style.display = "none";
      document.getElementById("cv-template").style.display ="block";
}

window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}

function printCV(){
	window.print();
}