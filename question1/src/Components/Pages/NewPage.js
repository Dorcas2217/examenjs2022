import { clearPage } from '../../utils/render';
import lieux from '../../utils/places';

const NewPage = () => {
  clearPage();
  renderGoBackHomeButton();
};

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  // indice pour parcourir le tableau des lieux;
  let indiceLieu =3;
   // affichage du premier lieu
  const div = document.createElement('div');
  div.innerHTML = `<CENTER> <img src = "${lieux[indiceLieu].image}"> <img> <br> ${lieux[indiceLieu].name}
    </CENTER><br> `;
    main.appendChild(div);
  // création des boutons  
  const previous = document.createElement('button');
  previous.innerText='previous';
  previous.className = 'btn btn-secondary mt-3 ';
  const next = document.createElement('button');
  next.innerText='next';
  next.className = 'btn btn-secondary mt-3';

  previous.addEventListener('click', () => {
    if(indiceLieu === 0){
      next.removeEventListener('click');
    }

    indiceLieu-=1;
    const divlieu = document.createElement('div');
    div.innerHTML = `<CENTER> <img src = "${lieux[indiceLieu].image}"> <img> <br> ${lieux[indiceLieu].name}
      </CENTER><br> `;
      main.appendChild(divlieu);
  });


  next.addEventListener('click', () => {
    if(indiceLieu === lieux.length-1){
      next.removeEventListener('click');
    }
    indiceLieu+=1;
    const divlieu = document.createElement('div');
    div.innerHTML = `<CENTER> <img src = "${lieux[indiceLieu].image}"> <img> <br> ${lieux[indiceLieu].name}
      </CENTER><br> `;
      main.appendChild(divlieu);
  });
 
  main.appendChild(previous);
  main.appendChild(next);
}

export default NewPage;
