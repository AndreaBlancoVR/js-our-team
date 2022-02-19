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
const ADD_MEMBER_BUTTON = document.getElementById('addMemberButton');

function getHTMLCard( teamMember ) {
    const name = teamMember.name;
    const image = teamMember.image;
    const role = teamMember.role;

    return `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${image}" alt="${name}"/>
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>
    `;
}

function newTeamMember( name, image, role ) {
    return {
        name: name,
        image: image,
        role: role
    }
}
// fa la stessa cosa di quella sopra
// function newTeamMember( name, image, role ) {
//     return {
//         name,
//         image,
//         role
//     }
// }

function stampaMembroTeam( teamMember ) {
    const htmlCard = getHTMLCard( teamMember );
    TEAM_CONTAINER.innerHTML += htmlCard
}

for( let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    stampaMembroTeam( teamMember );

    // const name = teamMember.name;
    // const image = teamMember.image;
    // const role = teamMember.role;

    // const htmlCard = 
    // `
    // <div class="team-card">
    //     <div class="card-image">
    //         <img src="img/${image}" alt="${name}"/>
    //     </div>
    //     <div class="card-text">
    //         <h3>${name}</h3>
    //         <p>${role}</p>
    //     </div>
    // </div>
    // `;
    // TEAM_CONTAINER.innerHTML += htmlCard
}



// const newMember = newTeamMember( 'Mario', 'MarioRossi.jpg', 'Apprendista' )





ADD_MEMBER_BUTTON.addEventListener('click',addNewMember); 

    const nameInput = document.getElementById('name');  
    const roleInput = document.getElementById('role');
    const imageInput = document.getElementById('image');

function addNewMember() {
    // prendo i valori dagli imput
    const name = nameInput.value;
    const role = roleInput.value;
    const image = imageInput.value;

    if( !name || !image || !role ) {
        alert('I dati inseriti non sono corretti.')
        return
    }


    // creo nuovo oggetto con name, image e role
    const teamMember = newTeamMember(name, image, role);

    // pusho l'oggetto nell'array dei membri del team
    team.push( teamMember );

    // stampo nel dom la card appena creata e pushata
    stampaMembroTeam( teamMember );

    nameInput = ''
    roleInput = ''
    roleInput = ''
}








// creo la funzione per generare un nuovo oggetto con i tre parametri

// function newMemberObject( nameTemp, roleTemp, imageTemp) {
//     return {
//         name: nameTemp,
//         role: roleTemp,
//         image: imageTemp,
//     }
// }

// function InnerNewMember(team) {
//     let membro
//     for( let i = 0; i < team.length; i++) {
//         membro = team[i];
//         membro = 
//         `<div class="team-card">
//             <div class="card-image">
//                 <img src="img/${team[i].image}" alt="${team[i].name}"/>
//             </div>
//             <div class="card-text">
//                 <h3>${team[i].name}</h3>
//                 <p>${team[i].role}</p>
//             </div>
//         </div>`
        
//     }
//     return membro
// } 

// const ADD_MEMBER_BUTTON = document.getElementById('addMemberButton');
// ADD_MEMBER_BUTTON.addEventListener('click', function() {

//     const uNome = document.getElementById('name').value;  
//     const uRuolo = document.getElementById('role').value;
//     const uImage = document.getElementById('image').value;
   
//     const newMember_ = newMemberObject(uNome, uRuolo, uImage)
//     // pusho il nuovo oggetto 
//     team.push( newMember_ )

    
    
//     const MEMBRO = InnerNewMember (team)
//     TEAM_CONTAINER.innerHTML += MEMBRO
// })







