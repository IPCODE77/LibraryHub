console.log("Es6 classes");

// function book(name,author,type){
//     this.name=name;
//     this.author=author;
//     this.type=type;
// }

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(newbook) {
        let table = document.getElementById("tableBody");
        let uistr = `<tr>
        <td>${newbook.name}</td>
        <td>${newbook.author}</td>
        <td>${newbook.type}</td>
        
        
        </tr>`;

        table.innerHTML += uistr;
    }

    clear() {
        let formreset = document.getElementById("libraryform");
        formreset.reset();
    }

    validate(newbook) {
        if (newbook.name.length <= 2 || newbook.author.length <= 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displaymessage) {
        let message = document.getElementById("msg");
        let displaytext;
        if(type=="success"){
            displaytext="success";
        }
        else{
            displaytext="Error";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${displaytext}:</strong> ${displaymessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

        setTimeout(function () {
            message.innerHTML = "";
        }, 2000);
    }


}


let Addbook = document.getElementById("libraryform");
Addbook.addEventListener("submit", libraryform);
function libraryform(e) {
    console.log("submit event");
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;
    let webdevelopment = document.getElementById("Webdevelopment")
    let datascience = document.getElementById("Datascience");
    let design = document.getElementById("Designing");

    if (webdevelopment.checked) {
        type = webdevelopment.value;
    }
    else if (datascience.checked) {
        type = datascience.value;
    }
    else if (design.checked) {
        type = design.value;
    }

    let newbook = new Book(name, author, type);

    let display = new Display();

    if (display.validate(newbook)) {
        display.add(newbook);
        display.clear();
        display.show("success", "your book successfully added");
    }
    else {
        display.show("danger", "you book can not add");
    }


    let input = localStorage.getItem("input");

    let inputobj={
        name,
        author,
        type,
    }
   window.localStorage.setItem("input", JSON.stringify(inputobj));
    e.preventDefault();
}


