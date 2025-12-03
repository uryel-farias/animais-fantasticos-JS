let imagens = document.querySelectorAll(".animais-lista li img");
console.log(imagens);

let imagemEspecifica = document.querySelectorAll("img");
console.log(imagemEspecifica);

imagemEspecifica.forEach((item) => {
    console.log(item.attributes.src.value)
})

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('atiivo');

if(tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
  
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
  
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
