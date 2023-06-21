var bookName =document.getElementById("bookName");
var url=document.getElementById("url");
 var bookMarkerArray=[];

 if(localStorage.getItem("book")==null)
 {
    bookMarkerArray=[];
 }
 else
 {
     bookMarkerArray=JSON.parse(localStorage.getItem("book"));
     display();
 }
function getData()
{
    if(bookName.value==null && url.value==null)
    {
     window.alert("invalid");
    }
    else
    {
        addBook();
      
    }
    display();
    clearAll();
    // addBook();
    // display();
    // clearAll();
}
function addBook()
{
    var book=
    {
        name:bookName.value,
        url:url.value
    };
    bookMarkerArray.push(book);
    localStorage.setItem("book",JSON.stringify(bookMarkerArray));
   
}
function display()
{
    var container="";
    for(var i=0; i<bookMarkerArray.length; i++)
    {
        container+=` <div  class="row contain py-4">
        <h2 class="col-sm-4 p-2">${bookMarkerArray[i].name}</h2>
      <div class="col-sm-8 p-2">
        <a  class="btn btn-primary me-2"href="${bookMarkerArray[i].url}" target="_blank">Visit</a>
        <button onclick="deleteitem(${i})" class="btn btn-danger ms-3">Delete</button> 
      </div>  
    </div>`    
  
    }
    document.getElementById("demo").innerHTML=container;
}
function clearAll()
{
    bookName.value="  ";
    url.value="  ";

}
function deleteitem(deleteIndex)
{
    bookMarkerArray.splice(deleteIndex,1);
    localStorage.setItem("book",JSON.stringify(bookMarkerArray));
    display();
}