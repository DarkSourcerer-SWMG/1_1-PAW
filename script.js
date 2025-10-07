(function () {
  const button=document.getElementById('ex1_button');

 button.addEventListener('click', ()=>{
  const liczby = Array.from({length:10},(_,i)=>i).join(',');
   document.getElementById('ex1_content').textContent=liczby;
 })
})();
