class Slider {
    constructor(autoload, elements, time) {
        this.autoload = autoload;
        this.element = elements;
        this.count = elements.length;
        this.contador = 0;
        this.time = time;
        this.init()
    }
    init() {

        document.getElementById('slide_0' + this.contador).classList.add('on')
        document.getElementById('prev_slide').addEventListener("click", this.prevSlide.bind(this), false)
        document.getElementById('next_slide').addEventListener("click", this.nextSlide.bind(this), false)
        if(this.autoload) {
            this.initAutoload();
        }
    }
    nextSlide() {
        document.getElementById('slide_0' + this.contador).classList.remove('on')
        if (this.contador < (this.count - 1)) {
            this.contador = this.contador + 1;
        } else {
            this.contador = 0;
        }
        document.getElementById('slide_0' + this.contador).classList.add('on')
        
    }
    prevSlide() {
        document.getElementById('slide_0' + this.contador).classList.remove('on')
        if (this.contador > 0) {
            this.contador = this.contador - 1;
        } else {
            this.contador = this.count - 1;
        }
        document.getElementById('slide_0' + this.contador).classList.add('on')
    }
    initAutoload() {
        setInterval(() => {
            document.getElementById('slide_0' + this.contador).classList.remove('on')
            if (this.contador < (this.count - 1)) {
                this.contador = this.contador + 1;
            } else {
                this.contador = 0;
            }  
            document.getElementById('slide_0' + this.contador).classList.add('on')
        }, this.time);
    }
}