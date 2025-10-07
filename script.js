(function () {
  const button=document.getElementById('ex1_button');

 button.addEventListener('click', ()=>{
  const liczby = Array.from({length:10},(_,i)=>i).join(',');
   document.getElementById('ex1_content').textContent=liczby;
 });
  const ex2Input = document.getElementById('ex2_text');
  const ex2Content = document.getElementById('ex2_content');
  ex2Input.addEventListener('input', () => {
   const value = ex2Input.value.trim();

    if(value.length !== 9){
      ex2Content.textContent = 'Długość numeru musi być równa 9';
      return;
    }
    if(/[a-zA-Z]/.test(value)){
      ex2Content.textContent = 'Numer nie może zawierać liter';
      return;
    }
    if(/[^0-9]/.test(value)){
      ex2Content.textContent = 'Numer nie może zawierać znaków specjalnych';
      return;
    }
    ex2Content.textContent = 'Numer telefonu jest poprawny';
  });
})();
