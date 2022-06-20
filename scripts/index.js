const cardButton = document.querySelectorAll('.card__button');
const closeButton = document.querySelector('.popup__button');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup__description');
const popupImage = document.querySelector('.popup__photo');

function openPopup(text, image) {
  popup.classList.add('popup_opened');
  popupText.textContent = text;
  popupImage.src = image;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);
cardButton[0].addEventListener('click', () => {
  const text ="Чтобы найти попутчиков посмотри доступные в приложении предложения соседей о поездках - если ты пассажир, или информацию о том, куда хотят поехать соседи - если ты водитель. В приложении доступны варианты не более 1 км от указанного местоположения.";
  const link = "./images/Component 1.png";
  openPopup(text, link)
});
cardButton[1].addEventListener('click', () => {
  const text ="Если доступные варианты поездок не подошли, размести свою. Возможно, кто-то из соседей поедет одновременно с тобой в нужную тебе сторону. Укажи адрес, куда тебе нужно попасть, и время, когда нужно выезжать. По умолчанию адресом отправления указывается твое текущее местоположение, его можно поменять.";
  const link = "./images/Group 6.png";
  openPopup(text, link)
});
cardButton[2].addEventListener('click', () => {
  const text ="Если из уже размещенных другими пользователями поездок тебе что-то подходит, выбери подходящую из списка. В приложении также можно написать сообщение соседу. Если подходящей поездки еще нет, придется подождать, когда кто-нибудь откликнится на твою или разместит новую. О новой мы обязательно уведомим тебя в пуш-сообщении.";
  const link = "./images/Group 4.png";
  openPopup(text, link)
});
cardButton[3].addEventListener('click', () => {
  const text ="Когда ты выберешь поездку, мы заморозим на твоей карте Х рублей, это нужно для гарантии оплаты поездки водителю. Договорись в сообщениях с водителем о точном месте встречи и выдвигайся знакомиться с соседом. После поездки мы перечислим деньги водителю. Счастливого пути!";
  const link = "./images/Group 9.png";
  openPopup(text, link)
});