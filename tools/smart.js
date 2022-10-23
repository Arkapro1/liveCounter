let numberDisplays=document.querySelectorAll('.num')
// console.log(numberDisplays)
let interval=4000;
numberDisplays.forEach((numberDisplay)=>{
    let start=0;
    let end=parseInt(numberDisplay.getAttribute('max'));
    // console.log(end);
    let duration=Math.floor(interval*2/end);
    let counter=setInterval(function(){
        start++;
        numberDisplay.textContent=start;
        if(start==end){
            clearInterval(counter)
        }
    },duration)
})