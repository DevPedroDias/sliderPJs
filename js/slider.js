class Slider {
    constructor(autoload, elements, time) {
        this.autoload = autoload; // set if slide will roll by itself
        this.element = elements; // witch element contains the slides
        this.count = elements.length; //number of slides
        this.contador = 0; //set current slide
        this.time = time; // time to roll the slide
        this.init()
    }
    init() {
        // will start slider in first slide based in your class
        document.getElementById('slide_0' + this.contador).classList.add('on')
        document.getElementById('prev_slide').addEventListener("click", this.prevSlide.bind(this), false)
        document.getElementById('next_slide').addEventListener("click", this.nextSlide.bind(this), false)
        this.putDots()
        document.getElementById('dot_0'+this.contador).classList.add('doton')
        if (this.autoload) {
            this.initAutoload();
        }
    }
    nextSlide() {
        // pass to the next slide
        document.getElementById('slide_0' + this.contador).style.marginLeft = '100%'
        document.getElementById('slide_0' + this.contador).style.transition = '0.5s'
        setTimeout(() => {
            document.getElementById('slide_0' + this.contador).classList.remove('on')
            document.getElementById('dot_0'+this.contador).classList.remove('doton')

            document.getElementById('slide_0' + this.contador).style.marginLeft = '0'
            document.getElementById('slide_0' + this.contador).style.transition = '0'
            if (this.contador < (this.count - 1)) {
                this.contador = this.contador + 1;
            } else {
                this.contador = 0;
            }
            document.getElementById('slide_0' + this.contador).classList.add('on')
            document.getElementById('dot_0'+this.contador).classList.add('doton')
        }, 150);


    }
    prevSlide() {
        // pass to the previous slide
        document.getElementById('slide_0' + this.contador).style.marginLeft = '-100%'
        document.getElementById('slide_0' + this.contador).style.transition = '0.5s'
        setTimeout(() => {
            document.getElementById('slide_0' + this.contador).classList.remove('on')
            document.getElementById('dot_0'+this.contador).classList.remove('doton')

            document.getElementById('slide_0' + this.contador).style.marginLeft = '0'
            document.getElementById('slide_0' + this.contador).style.transition = '0'
            if (this.contador > 0) {
                this.contador = this.contador - 1;
            } else {
                this.contador = this.count - 1;
            }
            document.getElementById('slide_0' + this.contador).classList.add('on')
            document.getElementById('dot_0'+this.contador).classList.add('doton')
        }, 150);

    }
    initAutoload() {
        // start auto load slider
        setInterval(() => {
            this.nextSlide()
        }, this.time);
    }
    putDots(){
        for (let index = 0; index < this.count; index++) {
            var dot = document.createElement('div')
            dot.setAttribute('id','dot_0'+index)
            dot.setAttribute('index',index)
            dot.classList.add('dotS')
            dot.addEventListener("click", this.dotIn, false)
            document.getElementById('slider_footer').append(dot)
        }
    }
    dotIn(){
        var position = this.getAttribute('index')
       // console.log(position)
       
        console.log(position)
    }
    
  
}