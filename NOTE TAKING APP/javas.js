showNotes();

  let addBtn = document.getElementById("addBtn");
  
  addBtn.addEventListener("click", function () {
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
  //   let impNote = document.getElementById()
    
  
    let notes = localStorage.getItem("notes");
   
    if (notes == null) {
      notesObj = [];
  
    }
    else {
      notesObj = JSON.parse(notes);
  
    }
    if (addTitle.value == "") {
      addTitle.value = "Untitled Note";
    }
    let eleImp = document.getElementById(0);
  
    let insert = 0;
    // if(eleImp.checked){
    //   insert = 2;
    // }
  
    notesObj.splice(insert,0,addTxt.value);
    notesObj.splice(insert,0,addTitle.value);
    //   notesObjTitle.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    //   localStorage.setItem("notesTitle",JSON.stringify(notesObjTitle));
    addTxt.value = "";
    addTitle.value = "";
    
    showNotes();
  
  })
  
  //SHOW 
  function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } 
    else {
      notesObj = JSON.parse(notes);
    }
  
  
  
    let html = '';
    let l = (notesObj.length) / 2;
    for (let i = 0; i < l; i++) {
  
      html += `
      <div class="noteCard my-1 mx-1 card" style="width: 314px; height : 350px; background-color : rgb(255, 249, 240);">
        <div class="card-body" style = "background-color : rgb(255, 249, 240);">
            <h5 class="card-title" id = "TitleId">${notesObj[2 * (i)]}</h5>
            <p class="card-text"><span style="
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;    
            max-height: 1000px;     
            -webkit-line-clamp:9;
            -webkit-box-orient: vertical;
            line-height: 1.4;
            "> ${notesObj[2*(i)+1]}</span></p>
            
        
            <button style = "background-color: rgb(45, 0, 0); color : rgb(255, 249, 240)"; 	id="${2*(i)+1}" onclick="myFunction(this.id)" class="btn btn-dark">copy</button>
  
        <button type="button"  style = "background-color: rgb(45, 0, 0); color : rgb(255, 249, 240)"; data-bs-toggle="modal" data-bs-target="#y${2 * i}" class="btn btn-dark" >
        VIEW
        </button>
  
        <button style = "background-color: rgb(45, 0, 0); color : rgb(255, 249, 240)"; 	id="${2 * i}" onclick="deleteNote(this.id)" class="btn btn-dark">Delete Note</button>
  
        <div class="modal fade" id="y${2 * i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
          <div class="modal-content"> 
            <div class="modal-header">
            <h3 class="modal-title" id="staticBackdropLabel"  style = "color:white;">${notesObj[2 * (i)]}</h3>
            <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close" style = "background-color:white;"></button>
            </div>
              <div class="modal-body" style = "font-size : 15px; background-color:rgb(255, 249, 240);">
            ${notesObj[2*(i)+1]}
              </div>
            <div class="modal-footer" style ="background-color:rgb(255, 249, 240);">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style = "background-color: rgb(45, 0, 0)";>Close</button>
            
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  
              `;
        
      
    }
  
  
  
  
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    }
    else {
      notesElm.innerHTML = `<div style = "color : white;">Nothing to show! Use "Add a Note" section above to add notes.</div>`;
    }
  
    //   let imp = document.getElementById("markedAsImp");
    // imp.addEventListener("change",function(){
    //   console.log("it is checked");
    // })
  
  }
  
  
  // delete a notes
  function deleteNote(i) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(i, 2);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
  
  //search
  let search = document.getElementById("searchTxt");
  search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log(inputVal);
  
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      let titleTxt = element.getElementsByTagName("h5")[0].innerText;
      if (cardTxt.includes(inputVal) || titleTxt.includes(inputVal)) {
        element.style.display = "block";
      }
      else {
        element.style.display = "none";
      }
    })
  })
  
  //MARKED AS IMPORTANT
  
  // if(document.getElementById("markedAsImp").checked){
  //   console.log("yes");
  // }
  // else{
  //   console.log("no");
  // }
  
  
  // function markImp(i) {
  //   // onchange="markImp(this.id)"
    
    
  
  //   let notes = localStorage.getItem("notes");
  //   if (notes == null) {
  //     notesObj = [];
  //   }
  //   else {
  //     notesObj = JSON.parse(notes);
  //   }
  //   // console.log("you have changed "+i);
  //   // console.log(notesObj); 
  
  //   let k = parseFloat(i)+parseFloat(1);
    
  //   notesObj.unshift(notesObj[i],notesObj[k]);
  //   let dltK = parseFloat(i)+parseFloat(2);
  //   notesObj.splice(dltK,2);
  
  //   // console.log(notesObj);   
  //   localStorage.setItem("notes", JSON.stringify(notesObj));
  //   showNotes();
    
  // }
  
  
  
  // <input  class="star" type="checkbox" title="bookmark page"  id ="${2*i}" onclick = "markImp(this.id)">sdf
  
  // function forSmall(){
    
  //   if()
  // }
  
  
  function myFunction(i) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
  
    
  }