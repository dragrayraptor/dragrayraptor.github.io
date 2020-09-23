window.onload = function() {

    var header = document.querySelector("#header");
        introH = document.querySelector("#intro").clientHeight;

    checkScroll(pageYOffset);

    window.addEventListener('scroll', function() {
        checkScroll(pageYOffset);
      });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

    const nav_links = document.querySelectorAll("[data-scroll]");
    for (const nav_link of nav_links) {
        nav_link.onclick = function(event) {
            event.preventDefault();
    
            var blockId = this.dataset.scroll;

            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth'
            });
        };
    }

};
