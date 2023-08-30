const API = 'https://places-exam-api.azurewebsites.net/';
const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = 'Chargement....';

  renderLieux();
};


const renderLieux = async ()  => {
const places = await fetch(`${API}places`).then((res) => res.json);

const main = document.querySelector('main');
main.innerHTML = '<CENTER> <h1> MY All  PLACES  </h1> </CENTER> ';

places.forEach(element => {
   const div = document.createElement('li');
   div.innerText= element.name;
   main.appendChild(div);
});

await recommended();
}

const recommended = async () => {
  const favor = await fetch(`${API}recommended`).then((res) => res.json);
  
  const div = document.createElement('div');
  div.innerHTML = `<th> ce que nous vous recommendons : <U> ${favor.name} </U> </th>`;

main.appendChild(div);

}


export default HomePage;
