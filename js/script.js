const Landscapes=[
  {name:' Zhangjiajie’s towering peaks',location:' China',img:'img/peaks.jpg'},
  {name:'Badab surt',location:'Iran',img:'img/Surt.jpg'},
  {name:'kronebreen glacier',location:'Norway',img:'img/glacier.jpg'},
  {name:'Gerlache strait',location:'Antarctica',img:'img/strait.jpg'}, 
  {name:'Sonoran desert',location:'United States',img:'img/desert.jpg'}, 
]
let num=0;
const Land=document.getElementById('Land');
Land.innerHTML=`<ul class='list-group'>
<div><img style="height:300px;width:500px" class="img-fluid" src='${Landscapes[num].img}'></div>
</br>
<li class='list-group-item'>landscape: ${Landscapes[num].name}</li>
<br/>
<li class='list-group-item'>location: ${Landscapes[num].location}</li>
</ul>

`
const nextB=document.getElementById('next')
const beforeB=document.getElementById('before')

if(num==0){
 beforeB.disabled=true
}else if(num==Landscapes.length-1){
 nextB.disabled=true
}

function iterator(Landscapes){
 return{
   next:function(){
     return num<Landscapes.length?{value:num++,done:false}:{done:true}}
   ,
   before:function(){
     return num>0?{value:num--,done:false}:{done:true}
   }
 }}

const change=iterator(Landscapes)

document.querySelector('.btn-group').addEventListener('click',(e)=>{
 if(e.target==nextB){
   change.next()
   Land.innerHTML=`<ul class='list-group'>
   <div><img style="height:300px;width:500px" class="img-fluid" src='${Landscapes[num].img}'></div></br>
   <li class='list-group-item'>landscape: ${Landscapes[num].name}</li>
   <br/>
   <li class='list-group-item'>location: ${Landscapes[num].location}</li>
   </ul>`
 }
 if(e.target==beforeB){
   change.before()
   Land.innerHTML=`<ul class='list-group'>
   <div><img style="height:300px;width:500px" class="img-fluid" src='${Landscapes[num].img}'></div></br>
   <li class='list-group-item'>landscape: ${Landscapes[num].name}</li>
   <br/>
   <li class='list-group-item'>location: ${Landscapes[num].location}</li>
   </ul>`
 }
 if(num==0){
   beforeB.disabled=true
 }else{
   beforeB.disabled=false
   nextB.disabled=false
 }
 if(num==Landscapes.length-1){
   nextB.disabled=true

 }else{
   nextB.disabled=false
 }
 
})
