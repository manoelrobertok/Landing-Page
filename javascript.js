

let slides = document.querySelectorAll('.slideshow');
        let dots = document.querySelectorAll('.dot');
        let slideIndex = 1;
        let timeoutID;

        const showSlides = (n) => {
            let i;

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }


            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            clearTimeout(timeoutID);
            timeoutID = setTimeout(autoSlides, 4000);
        };

        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };

        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };

        function autoSlides() {
            let i;

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            timeoutID = setTimeout(autoSlides, 4000);
        }

        autoSlides();



        window.sr = ScrollReveal({reset:true});

        sr.reveal('.logo',{duration:4000,
            rotate: {x:0, y:0, z:0}});

        sr.reveal('.sobre',{duration:2000});
        sr.reveal('.txt_sobre',{duration:2000});

        sr.reveal('.etapas',{duration:4000,
            rotate: {x:0, y:80, z:0}});

        sr.reveal('.portifolio',{duration:4000,
        rotate: {x:0, y:80, z:0}});

        sr.reveal('.tela', {  duration: 4000,
        rotate: {x:0, y:80, z:0} });

        sr.reveal('.redesSociais', {  duration: 3000,
            rotate: {x:100, y:0, z:0} });
       




        