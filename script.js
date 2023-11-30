const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

const url = [
  "https://source.unsplash.com/random/1000X1000?sky",
  "https://source.unsplash.com/random/1000X1000?landscape",
  "https://source.unsplash.com/random/1000X1000?mountain",
  "https://source.unsplash.com/random/1000X1000?ocean",
  "https://source.unsplash.com/random/1000X1000?forest"
]

async function getDates() {
  const call = await fetch('https://randomuser.me/api/')
  const { results } = await call.json();
  console.log(results[0].picture);
  urls.push(results[0].picture.thumbnail);
  createCards();
}

getDates()

let cardCount = 0;

function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 6],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  console.log(card.imageUrl);
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });

}

function createCards() {
  for (let i = 0; i < 6; i++) {
    appendNewCard()
  }
}