const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

(() => {
    const addToCardButtons = document.querySelectorAll('.normal');
    for (const btn of addToCardButtons) {
      const identifier = btn.dataset.target;
  
      btn.addEventListener('click', () => addToCart(identifier))
    }
  
    const addToCart = (id) => {
      console.log(id);
      // handle 'add to cart' functionality
    }
  
    // other functionalities can follow the same structure
  })()


