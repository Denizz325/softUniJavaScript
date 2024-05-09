function search() {
   const elements = Array.from(document.querySelectorAll('ul li'));

   searchedText = document.getElementById('searchText').value;

   elements.forEach((el) => {
      if (el.textContent.includes(searchedText)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   })
}
