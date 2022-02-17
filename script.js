const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

const TEAM_CONTAINER = document.querySelector('.team-container')
console.log(TEAM_CONTAINER)

// const TEAM_CARD = `<div class="team-card">
// <div class="card-image">
//   <img
//     src="img/wayne-barnett-founder-ceo.jpg"
//     alt="Wayne Barnett"
//   />
// </div>
// <div class="card-text">
//   <h3>Wayne Barnett</h3>
//   <p>Founder & CEO</p>
// </div>
// </div>`

// TEAM_CONTAINER.innerHTML += TEAM_CARD



// const TEAM_CARD = `<div class="team-card">
// <div class="card-image">
//   <img
//     src="img/${team[0].image}"
//     alt="${team[0].name}"
//   />
// </div>
// <div class="card-text">
//   <h3>${team[0].name}</h3>
//   <p>${team[0].role}</p>
// </div>
// </div>`

// TEAM_CONTAINER.innerHTML += TEAM_CARD


// creo un ciclo che legga il contenuto dell'array e 
// lo uso per assegnare le caratterisiche degli elementi 
// creati all'interno del ciclo stesso
for( let i = 0; i < team.length; i++) {
    let membro = team[i];
    membro = `<div class="team-card">
<div class="card-image">
  <img
    src="img/${team[i].image}"
    alt="${team[i].name}"
  />
</div>
<div class="card-text">
  <h3>${team[i].name}</h3>
  <p>${team[i].role}</p>
</div>
</div>`
TEAM_CONTAINER.innerHTML += membro
}