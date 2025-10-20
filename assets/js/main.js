/*=============== DUPLICATE CARD CAROUSEL ===============*/
// Duplicate images to make the animation work
const tracks = document.querySelectorAll('.carousel__content')

tracks.forEach(track => {
   const cards = [...track.children] // spread to make a static copy

   // Duplicate cards only once
   for (const card of cards) {
      track.appendChild(card.cloneNode(true))
   }
})
