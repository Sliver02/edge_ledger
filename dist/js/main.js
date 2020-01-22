
// Smooth scrolling
$('.c-navbar a, .c-btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Navbar fade
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        $('.c-navbar').css({'opacity': '0.9'});
    } else {
        console.log('asdasd2');

        $('.c-navbar').css({'opacity': '1'});
    }
});