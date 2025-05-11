// hame butger 
let bars = document.querySelector('.hamburger')
let hampage = document.querySelector('.hampage')
let cross  = document.querySelector('#cross')

bars.addEventListener('click',()=>{
  hampage.style.transform = 'translateX(0px)'
})
cross.addEventListener('click',()=>{
  hampage.style.transform = 'translateX(-1500px)'
})


// theme change 
let theme = document.querySelector('#atheme')
let home = document.querySelector('#inhome')
let home2 = document.querySelector('#inhome2')
let home3 = document.querySelector('#inhome3')
let home4= document.querySelector('#inhome4')
let active = document.querySelector('.active')
let body = document.getElementById('body')
let navbar = document.querySelector('.navbar')
let line = document.querySelector('#line')
let line2 = document.querySelector('#line2')
let line3 = document.querySelector('#line3')
let themebtn = document.querySelector('#atheme')
let alltask = document.querySelector('.alltask')
let card = document.querySelector('#card')
let add = document.querySelector('#add')
let bar = document.querySelector('#bar')
let time = document.querySelector('#time')
let btns = document.querySelectorAll('.btn')
let git = document.querySelector('#git')
let insta = document.querySelector('#insta')
theme.addEventListener('change',()=>{
  if(theme.value === 'light'){
  hampage.classList.add('lite1')
  home.style.color = 'black'
  home2.style.color = 'black'
  home3.style.color = 'black'
  home4.style.color = 'black'
  active.style.background = 'lightgrey'
  body.style.background = '#F8F9FA'
  navbar.style.background = '#FFFFFF'
  navbar.style.color = '#212529'
  line.style.border = '2px solid #212529'
  line2.style.border = '2px solid #212529'
  line3.style.border = '2px solid #212529'
  atheme.style.border = '2px solid black'
  atheme.style.color = '#212529'
  card.style.background = 'white'
  card.style.boxShadow = '0px 0px 10px lightgrey'
  card.style.color = 'darkgrey'
  time.style.color = 'black'
  btns.forEach(btn=>{
  btn.style.color = '#212529'
  btn.style.borderColor = '#212529'
  bar.style.boxShadow = '0px 0px 10px lightgrey'
  git.style.color = '#121211'
  insta.style.color = '#121212'
  li.style.background='white'
  })
  }else{
  hampage.classList.remove('lite1')
  home.classList.remove('h2')
  active.style.background = 'lightgrey'
  body.style.background = '#1A1A1A'
  navbar.style.background = '#2D2D2D'
  navbar.style.color = '#E9ECEF'
  line.style.border = '2px solid white'
  line2.style.border = '2px solid white'
  line3.style.border = '2px solid white'
  atheme.style.border = '2px solid white'
  atheme.style.color = '#E9ECEF'
  home.style.color = '#E9ECEF'
  home2.style.color = '#E9ECEF'
  home3.style.color = '#E9ECEF'
  home4.style.color = '#E9ECEF'
  card.style.background = '#121212'
  card.style.boxShadow = '0px 0px 10px #121212'
  card.style.color = 'E9ECEF'
  time.style.color = '#E9ECEF'
  btns.forEach(btn=>{
  btn.style.color = '#E9ECEF'
  btn.style.borderColor = '#E9ECEF'
  bar.style.boxShadow = '0px 0px 0px '
  git.style.color = '#E9ECEF'
  insta.style.color = '#E9ECEF'
  })
  
}
})




//  pemorodo logic 

let total = 1500
let interval

let play = document.querySelector('#play')
let reset = document.querySelector('#reset')
let pause = document.querySelector('#pause')



play.addEventListener('click',()=>{
  interval = setInterval(()=>{
    timechange()
    
    
    reset.addEventListener('click', () => {
  total = 1501
  console.log('hii')
  
})
  },1000)
  
  pause.addEventListener('click',()=>{
    clearInterval(interval)
    console.log('hii')
  })
})

function timechange() {
  total--
    let min = Math.floor(total/60)
    let sec = total % 60
    
    time.innerHTML = `${min.toString().padStart(2,'0')}
    :
    ${sec.toString().padStart(2,'0')}`
    if (total === 0){
     alert('hey times up , you can have a break now ')
     total = 1500
     
    }
}


// The to do section

let ul = document.querySelector('#listitems');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

add.addEventListener('click', () => {
  if (bar.value === '') {
    alert('Please enter a value');
  } else {
    tasks.push({ text: bar.value, completed: false });
    bar.value = '';
    saveTasks();
    renderTasks();
  }
});

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  ul.innerHTML = '';
  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.classList.add('item');
    if (task.completed) {
      li.classList.add('completed');
    }
    li.textContent = task.text;

    let x = document.createElement('span');
    x.classList.add('xcross');
    x.textContent = '×';
    li.appendChild(x);

    // Cross button
    x.addEventListener('click', (e) => {
     e.stopPropagation(); // prevent triggering toggle
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

// Toggle complete
li.addEventListener('click', () => {
tasks[index].completed = !tasks[index].completed;
saveTasks();
    renderTasks();
    });

   ul.appendChild(li);
  });
}

// initial load
renderTasks();
