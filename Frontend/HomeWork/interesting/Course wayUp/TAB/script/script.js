const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content')


const changeClass = (el) => {
for (let i = 0; i < tabs.children.length; i++){

    tabs.children[i].classList.remove('active') // children  потому что дочерний
    }
    el.classList.add('active')
}


tabs.addEventListener('click', e => { // e - ивент
    const currTab = e.target.dataset.atribute;
    changeClass(e.target);
    for( let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active')
        }
    }
    // console.log(currTab)
})

//==========

const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnclose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () =>{
    modal.classList.add('active');

});
const closeModal = () =>{
    modal.classList.remove('active');
};

overlay.addEventListener('click', closeModal)
btnclose.addEventListener('click', closeModal)

btnclose.addEventListener('click', () => {
    overlay.classList.remove('active');
})



