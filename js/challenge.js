let counter=document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const pauseBtn = document.getElementById('pause');
const heartBtn = document.getElementById('heart');
const likes = document.getElementsByClassName('likes')[0];
const comments =document.getElementById('list');
const form =document.getElementById('comment-form');
const commentInput =document.getElementById('comment-input');
const submit =document.getElementById('submit');

let timer=0;
let likesArr=[];
function plus(){

    counter.innerText=timer++;

}
function minus(){
    counter.innerText=timer--;
}
plusBtn.addEventListener('click',function(){

   let interval= setInterval(plus,1000);

   pauseBtn.addEventListener('click',function(){

    if(pauseBtn.innerText=="pause"){
        pauseBtn.innerText="resume";
        clearInterval(interval);
        plusBtn.disabled=true;
        heartBtn.disabled=true;
        minusBtn.disabled=true;
    }
    else{
        pauseBtn.innerText="pause";
        interval;
    }
   })
minusBtn.addEventListener('click',minus);

heartBtn.addEventListener('click',function(){

let like = document.createElement('li');
like.innerText=`you hearted ❤️ ${counter.innerText}`;
likes.appendChild(like);
});
});

submit.addEventListener('click',function(e){
e.preventDefault();

if(commentInput&&commentInput.value){

    let comment= document.createElement('li');
    comment.innerText= commentInput.value;
    comments.appendChild(comment);
    form.reset();
}

});