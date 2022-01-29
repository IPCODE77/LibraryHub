function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}


function Display(){

}



Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}


Display.prototype.clear=function (){
let libraryform=document.getElementById("libraryform");
    libraryform.reset();
}

Display.prototype.validate=function (book){
     if(book.name.length<2||book.author.length<2){
         return false;
     }
     else{
         return true;
     }

    }

    Display.prototype.show=function(type,displaymessgae){
        let message=document.getElementById("msg");
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>message:</strong> ${displaymessgae}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

      setTimeout(function() {
          message.innerHTML="";
      }, 2000);
    }
    


let libraryform=document.getElementById("libraryform");
libraryform.addEventListener("submit",libraryformsubmit);

function libraryformsubmit(e){
    console.log("you submit");
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value;

    let type;
    let webdevelopment=document.getElementById("Webdevelopment")
    let datascience=document.getElementById("Datascience");
    let design=document.getElementById("Designing");

    if(webdevelopment.checked){
       type=webdevelopment.value;
    }
    else if(datascience.checked){
         type=datascience.value;
    }
    else if(design.checked){
        type=design.value;
    }

    let book=new Book(name,author,type);

    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success","Your book succesfully added");
    }
    else{
        display.show("danger","Error please try again");
    }

    let obj={
        name,
        author,
        type
    }
    let item =localStorage.setItem("value",JSON.stringify(obj));
    e.preventDefault();
}



