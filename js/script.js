const Landscapes=[
  {name:' Zhangjiajie’s towering peaks',location:' China',img:'img/Zhangjiajie’s towering peaks'},
  {name:'Badab surt',location:'Iran',img:'img/Badab-e_Surt.jpg'},
  {name:'the kronebreen glacier',location:'Norway',img:'https://randomuser.me/api/portraits/men/2.jpg'},
  {name:'gerlache strait',location:'Antarctica',img:'https://randomuser.me/api/portraits/men/2.jpg'}, {name:'Sonoran desert',location:'Norway',img:'https://randomuser.me/api/portraits/men/2.jpg'}, {name:'Bishe',location:'Iran',img:'https://randomuser.me/api/portraits/men/2.jpg'},
]
let num=0;
const person=document.getElementById('person');
person.innerHTML=`<ul class='list-group'>
<div><img style='border-radius:50%' src='${Landscapes[num].img}'></div>
</br>
<li class='list-group-item'>name:${Landscapes[num].name}</li>
<br/>
<li class='list-group-item'>age:${Landscapes[num].location}</li>
</ul>

`
const nextB=document.getElementById('next')
const beforeB=document.getElementById('before')

if(num==0){
 beforeB.disabled=true
}else if(num==persons.length-1){
 nextB.disabled=true
}

function iterator(persons){
 return{
   next:function(){
     return num<persons.length?{value:num++,done:false}:{done:true}}
   ,
   before:function(){
     return num>0?{value:num--,done:false}:{done:true}
   }
 }}

const change=iterator(persons)

document.querySelector('.btn-group').addEventListener('click',(e)=>{
 if(e.target==nextB){
   change.next()
   person.innerHTML=`<ul class='list-group'>
   <div><img style='border-radius:50%' src='${persons[num].img}'></div></br>
   <li class='list-group-item'>name:${persons[num].name}</li>
   <li class='list-group-item'>age:${persons[num].age}</li>
   <li class='list-group-item'>job:${persons[num].job}</li>
   </ul>`
 }
 if(e.target==beforeB){
   change.before()
   person.innerHTML=`<ul class='list-group'>
   <div><img style='border-radius:50%' src='${persons[num].img}'></div></br>
   <li class='list-group-item'>name:${persons[num].name}</li>
   <li class='list-group-item'>age:${persons[num].age}</li>
   <li class='list-group-item'>job:${persons[num].job}</li>
   </ul>`
 }
 if(num==0){
   beforeB.disabled=true
 }else{
   beforeB.disabled=false
   nextB.disabled=false
 }
 if(num==persons.length-1){
   nextB.disabled=true

 }else{
   nextB.disabled=false
 }
 
})
