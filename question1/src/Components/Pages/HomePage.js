import lieux  from "../../utils/places";

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '<CENTER> <h1> <b> Places to visit !</b> </h1> </CENTER>';
  lieux.forEach(elt =>{
    const div = document.createElement('div');
    div.innerHTML= `<CENTER> <button> ${elt.name} </button></CENTER><br> `;
    main.appendChild(div);
  });
};



export default HomePage;
