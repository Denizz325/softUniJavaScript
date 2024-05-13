function create(words) {
   const content = document.getElementById('content')

   for (let word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      div.appendChild(p);
      p.style.display = 'none';
   
      div.addEventListener('click', show);
   
      content.appendChild(div)
   
      function show(ev) {
         ev.target.children[0].style.display = '';
      }
   }


}