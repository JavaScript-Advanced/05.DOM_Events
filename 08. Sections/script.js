function create(words) {
   let content = document.getElementById('content');

   for (const element of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(element);

      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', (event) =>{
         event.currentTarget.children[0].style.display='';
      });

      content.appendChild(div);
   }
}