/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
const client = document.getElementById('client');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosenColor = btn.getAttribute('data-color');
    
    // Paint the nails
    nails.forEach(nail => {
      nail.setAttribute('fill', chosenColor);
    });

    // Clear previous animation
    client.classList.remove('happy', 'mad');

    // Force reflow to restart animation
    void client.offsetWidth;

    // Check result and animate
    if (chosenColor === secretColor) {
      message.textContent = "You win!";
      message.className = "happy";
      client.classList.add('happy');
    } else {
      message.textContent = "Try again!";
      message.className = "mad";
      client.classList.add('mad');
    }
  });
});
