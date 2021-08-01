// create array data for users
let users = [
  {
    photo : '1.jpg',
    name  : 'Salim Hasan',
    skill : 'JavaScript Dev',
    cell  : '01773980593',
    age   : '25',
    gender    : 'Male',
    location  : 'Mirpur',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '2.jpg',
    name  : 'Meharin Khan',
    skill : 'Python Dev',
    cell  : '01659874589',
    age   : '30',
    gender    : 'Female',
    location  : 'Uttara',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '3.jpg',
    name  : 'Shihab Ahmed',
    skill : 'Networking Sec',
    cell  : '01256987548',
    age   : '26',
    gender    : 'Male',
    location  : 'Mirpur',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '4.jpg',
    name  : 'Jobayda Khanom',
    skill : 'Laravel Dev',
    cell  : '01369587425',
    age   : '32',
    gender    : 'Female',
    location  : 'Mirpur',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '5.jpg',
    name  : 'Shamim Hossain',
    skill : 'Seo Analist',
    cell  : '01698523698',
    age   : '29',
    gender    : 'Male',
    location  : 'Bonani',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '6.jpg',
    name  : 'Moriom Khatun',
    skill : 'MERN Dev',
    cell  : '01785963256',
    age   : '35',
    gender    : 'Female',
    location  : 'Uttara',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '7.jpg',
    name  : 'Sabiha Khan',
    skill : 'JavaScript Dev',
    cell  : '01569854789',
    age   : '23',
    gender    : 'Female',
    location  : 'Bonani',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '8.jpg',
    name  : 'Sohan Khan',
    skill : 'Laravel Dev',
    cell  : '01456321547',
    age   : '26',
    gender    : 'Male',
    location  : 'Uttara',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '9.jpg',
    name  : 'Shoukhin Khan',
    skill : 'Networking Sec',
    cell  : '01856325698',
    age   : '26',
    gender    : 'Male',
    location  : 'bonani',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '10.jpg',
    name  : 'Muskan Rahman',
    skill : 'Java Dev',
    cell  : '01740445607',
    age   : '15',
    gender    : 'Female',
    location  : 'Mirpur',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '11.jpg',
    name  : 'Milon Hossain',
    skill : 'Wordpress Dev',
    cell  : '01569874525',
    age   : '26',
    gender    : 'Male',
    location  : 'Uttara',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '12.jpg',
    name  : 'Tasfia Khan',
    skill : 'Laravel Dev',
    cell  : '01236589874',
    age   : '21',
    gender    : 'Female',
    location  : 'Bonani',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '13.jpg',
    name  : 'Pervin Akter',
    skill : 'Laravel Dev',
    cell  : '01456325896',
    age   : '35',
    gender    : 'Female',
    location  : 'Uttara',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '14.jpg',
    name  : 'Jorina Haque',
    skill : 'JavaScript Dev',
    cell  : '01985632587',
    age   : '40',
    gender    : 'Female',
    location  : 'Mirpur',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '15.jpg',
    name  : 'Plabon Khan',
    skill : 'PHP Dev',
    cell  : '01563258963',
    age   : '25',
    gender    : 'Male',
    location  : 'Bonani',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
  {
    photo : '16.jpg',
    name  : 'Rabbi Khan',
    skill : 'JavaScript Dev',
    cell  : '01773980593',
    age   : '23',
    gender    : 'Male',
    location  : 'Gulsan',
    desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odio.',
  },
];


// filter get selectors
let team      = document.querySelector('#team');
let gender    = document.querySelectorAll('input[name="gender"]');
let locations = document.querySelectorAll('.checkbox');

// slider get selectors
let photo      = document.querySelector('.slider_1 img');
let name       = document.querySelector('.slider_1 .name');
let skill      = document.querySelector('.slider_1 .skill');
let cell       = document.querySelector('.slider_1 .cell');
let age        = document.querySelector('.slider_1 .age');
let location_1 = document.querySelector('.slider_1 .location');
let desc       = document.querySelector('.slider_1 .desc');
let prev       = document.querySelector('.nav #prev');
let next       = document.querySelector('.nav #next');



//========== Slider section ==========//

let default_index = 0;
//===== next slide =====//
next.onclick = () => {

  clearInterval(start_slider);

  if(default_index >= users.length-1){
    default_index = 0;
  }

  userShowSlider(default_index);
  default_index++;

} 

//===== previous slide =====//
prev.onclick = () => {

  clearInterval(start_slider);

  if(default_index < 0){
    default_index = users.length - 1;
  }

  userShowSlider(default_index);
  default_index--;

} 




userShowSlider(0);
function userShowSlider(index = 0){
  photo.setAttribute('src', 'users/'+users[index].photo);
  name.innerHTML       = users[index].name;
  skill.innerHTML      = users[index].skill;
  cell.innerHTML       = users[index].cell;
  age.innerHTML        = users[index].age+' years old';
  location_1.innerHTML = users[index].location;
  desc.innerHTML       = users[index].desc;
}


//====== Auto slider load ======//
let start_slider = setInterval(()=>{
  if(default_index >= users.length-1){
    default_index = 0;
  }

  userShowSlider(default_index);
  default_index++;
}, 1000);





//========== filter section ==========//

showUsers();
// show all user function 
function showUsers(){
  users.map(user => {
    team.innerHTML += `<div class="col-md-4 mb-4">
                        <div class="card shadow cd">
                          <div class="card-body slider">
                            <img class="shadow-lg" src="users/${user.photo}" alt="">
                            <h2>${user.name}</h2>
                            <h5>${user.skill}</h5>
                            <h5>${user.cell}</h5>
                            <h6>${user.age} years old</h6>
                            <h6>${user.location}</h6>
                            <p>${user.desc}</p>
                          </div>
                        </div>
                      </div>`;
  });
}


// filter by gender
for(let i = 0; i < gender.length; i++){
  gender[i].onchange = () => {
    team.innerHTML = '';
    let gen = gender[i].value;
    users.map(user => {
      if(user.gender.toLocaleLowerCase() == gen || gen == ''){
        team.innerHTML += `<div class="col-md-4 mb-4">
                            <div class="card shadow cd">
                              <div class="card-body slider">
                                <img class="shadow-lg" src="users/${user.photo}" alt="">
                                <h2>${user.name}</h2>
                                <h5>${user.skill}</h5>
                                <h5>${user.cell}</h5>
                                <h6>${user.age} years old</h6>
                                <h6>${user.location}</h6>
                                <p>${user.desc}</p>
                              </div>
                            </div>
                          </div>`;
      }
    });
  }
}


let list_location = [];
// filter by location
for(let location of locations){
  location.addEventListener('click', function() {
    team.innerHTML = '';
    if(this.checked == true){
      list_location.push(this.value);
      locationWiseUser(list_location);
      // console.log(list_location);
    }else {
      list_location = list_location.filter(e => e !== this.value);
      locationWiseUser(list_location);
      // console.log(list_location);
      if(list_location.length == 0){
        showUsers();
      }
    }
  });
}


// location wise filter function 
function locationWiseUser(location){
  for(let loc of location){
    users.map(user => {
     if(user.location.toLocaleLowerCase() == loc){
        team.innerHTML += `<div class="col-md-4 mb-4">
                            <div class="card shadow cd">
                              <div class="card-body slider">
                                <img class="shadow-lg" src="users/${user.photo}" alt="">
                                <h2>${user.name}</h2>
                                <h5>${user.skill}</h5>
                                <h5>${user.cell}</h5>
                                <h6>${user.age} years old</h6>
                                <h6>${user.location}</h6>
                                <p>${user.desc}</p>
                              </div>
                            </div>
                          </div>`;

      }
    });
  }
  
}



// filter by search panel
function searchUser(){
  team.innerHTML = '';
  let search = document.querySelector('input[name="search"]').value;
  users.map(user => {
    if(user.age.toLocaleLowerCase() == search || search == ''){
      team.innerHTML += `<div class="col-md-4 mb-4">
                          <div class="card shadow cd">
                            <div class="card-body slider">
                              <img class="shadow-lg" src="users/${user.photo}" alt="">
                              <h2>${user.name}</h2>
                              <h5>${user.skill}</h5>
                              <h5>${user.cell}</h5>
                              <h6>${user.age} years old</h6>
                              <h6>${user.location}</h6>
                              <p>${user.desc}</p>
                            </div>
                          </div>
                        </div>`;
    }else {
      // console.log();
      // if(users[1].age == user.age){
      //   team.innerHTML += `
      //                     <h2 class="m-auto" style="color: red;">Not found!</h2>
      //                   `;
      // }
    }
  });
}

