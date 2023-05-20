let array =[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"},
]
let cardref=document.getElementsByClassName("card-container");
function renderelement(){
    let html="";
    array.forEach((user)=>{
        html+=`<div class="card">
        <span class="name">${user.id}. Name:${user.name}</span>  
        <span>Proffesion: ${user.profession}</span>
        <span>age: ${user.age}</span>
      </div>
        `;
    });
    cardref.innerHTML=html;
}
renderelement();