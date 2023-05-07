'use strict'

class Gallery {
    constructor(gallery) {
        this.gallery = document.querySelector(gallery);
    }

    get overlay() {
        return document.querySelector('.overlay');
    }

    get rectangleLeft() {
        return this.overlay.querySelectorAll('.rectangle__left')
    }

    get AllPicture() {
        let temp = [];
        this.gallery.querySelectorAll('img').forEach(elem => {
            let obj = {};

            obj.url = elem.getAttribute('src');
            obj.title = elem.parentNode.dataset.title;
            obj.desc = elem.parentNode.dataset.description;

            temp.push(obj);
        })
        return temp;
    }

    generateModalWindow() {
        let str = `
        <div class="overlay none">
            <div class="modal">
                <div class="modal__close"></div>
                <div class="rectangle">
                    <span class="rectangle__left"></span>
                    <span class="rectangle__right"></span>
                </div>
                <div class="modal__img">
                    <img src="">
                </div>
                <div class="text">
                    <h2></h2>
                    <p></p>
                    <div class="btn">
                        <div class="btn__prev"><svg><use xlink:href="sprite.svg#arrow"></svg></div>
                        <div class="btn__next"><svg><use xlink:href="sprite.svg#arrow"></svg></div>
                    </div>
                </div>
            </div>
            <div class="modal__under">
                <div class="modal__close"></div>
                <div class="rectangle">
                    <span class="rectangle__left"></span>
                    <span class="rectangle__right"></span>
                </div>
                <div class="modal__img">
                    <img src="">
                </div>
                <div class="text">
                    <h2></h2>
                    <p></p>
                    <div class="btn">
                        <div class="btn__prev"><svg><use xlink:href="sprite.svg#arrow"></svg></div>
                        <div class="btn__next"><svg><use xlink:href="sprite.svg#arrow"></svg></div>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', str);
    }

    generateStyle() {
        let str = `
        <style>
        .overlay {
            font-family: 'Raleway', sans-serif;
            padding: 20px;
            font-weight: 400;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.617);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .modal {
            position: relative;
            z-index: 1;
            max-height: 427px;
            overflow: hidden;
            background-color: #fff;
            box-shadow:  0 0 10px #000;
            display: grid;
            grid-template-rows: 427px;
            grid-template-columns: minmax(100px, 629px) minmax(332px, 332px);
        }

        .modal__under {
            margin: 20px;
            position: absolute;
            z-index: 0;
            max-height: 427px;
            overflow: hidden;
            background-color: #fff;
            box-shadow:  0 0 10px #000;
            display: grid;
            grid-template-rows: 427px;
            grid-template-columns: minmax(100px, 629px) minmax(100px, 332px);
        }

        @media(max-width: 669px) {
            .modal,
            .modal__under {
                max-height: inherit;
                grid-template-rows: minmax(280px,300px) minmax(250px,300px);
                grid-template-columns: minmax(100px, 629px);
            }
        }

        .modal__close {
            position: absolute;
            width: 15.56px;
            height: 15.56px;
            left: 925.22px;
            top: 13.22px;
            opacity: 0.2;
            cursor: pointer;
        }
        
        .modal__close::before,
        .modal__close::after {
            border-radius: 1px;
            content: '';
            position: absolute;
            top: -2px;
            right: 44%;
            display: block;
            width: 2px;
            height: 20px;
            background: #C4C4C4;
        }
        
        .modal__close:hover::before,
        .modal__close:hover::after {background: black;}

        .modal__close::before {transform: rotate(45deg);}
        
        .modal__close::after {transform: rotate(-45deg);}

        .rectangle {
            position: absolute;
            width: 371px;
            height: 9px;
            left: 528px;
            top: 90px;
            background: #FFAD00;
        }

        .rectangle__left {
            display: block;
            width: 101px;
            height: 9px;
        }

        .rectangle__right {
            position: absolute;
            width: 8px;
            height: 9px;
            left: 379px;
            top: 0px;
            background: #FFAD00;
        }

        @media(max-width: 1000px) {
            .modal__close {left: calc(599px + (925.22 - 599) * ((100vw - 669px) / (1000 - 669)));}
            .rectangle {left: calc(196px + (527 - 196) * ((100vw - 669px) / (1000 - 669)));}
        }

        @media(max-width: 669px) {.rectangle {display:none}}

        .modal__img {
            max-width: 629px;
            max-height: 427px;
        }

        .modal img {object-fit: cover;}

        .modal__under img {object-fit: cover;}
        
        .text {
            max-width: 332px;
            padding: 44px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .text h2 {
            font-weight: 400;
            text-transform: uppercase;
            font-size: 24px;
            line-height: 28px;
            max-height: 28px;
            overflow: hidden;
        }

        .text p {
            margin-top: 10px;
            font-weight: 400;
            font-style: normal;
            font-size: 18px;
            line-height: 26px;
            max-height: 182px;
            overflow: hidden;
        }

        @media(max-width: 669px) {
            .text {
                max-width: inherit;
                padding: calc(30px + (44 - 30) * ((100vw - 320px) / (669 - 320)));
            }
            .text h2 {font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (669 - 320)));}
            .text p {font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (669 - 320)));}
            
        }

        .btn {
            display: flex;
            justify-content: flex-end;
            gap: 48px;
        }

        .btn__prev,
        .btn__next {
            max-height: 24px;
            position: relative;
            z-index: 1;
            cursor: pointer;  
        }

        .btn__prev svg,
        .btn__next svg{
            position: relative;
            z-index: -1;
            width: 14px;
            height: 24px;
            transform: rotate(-180deg);
        }

        .btn__next svg{
            transform: rotate(0deg);
        }
        
        .none {
            display: none;
        }
        </style>`;
        document.head.insertAdjacentHTML('beforeend', str);
    }

    openModalWindow(even) {
        let target = even.target;

        if(target.matches('img')) {
            let targetUrl = target.getAttribute('src');
            let targetTitle = target.parentNode.dataset.title;
            let targetDescr = target.parentNode.dataset.description;

            this.rectangleLeft.forEach(((el)=> el.classList.remove('indicator__el')));
            this.overlay.querySelector('.btn__prev').style.visibility="visible";
            this.overlay.querySelector('.btn__next').style.visibility="visible";
            this.overlay.classList.remove('none');
            this.overlay.querySelector('.modal').classList.add('animate','animate-modal');
            this.overlay.querySelector('.modal__under').classList.add('animate','animate-modal');

            this.applyChangeModal(targetUrl,targetTitle,targetDescr);
            this.applyChangeModalSecond(targetUrl,targetTitle,targetDescr);

            if(targetUrl === this.AllPicture[this.AllPicture.length -1].url) {
                let arrBtnNext = this.overlay.querySelectorAll('.btn__next');
                arrBtnNext.forEach(((el) => el.style.visibility="hidden"));
            } 
            if(targetUrl === this.AllPicture[0].url) {
                let arrBtnPrev = this.overlay.querySelectorAll('.btn__prev');
                arrBtnPrev.forEach(((el) => el.style.visibility="hidden"));
                this.rectangleLeft.forEach(((el)=> el.classList.add('indicator__el')));
            }
        }
    }

    changeSlide(even) {
        let target = even.target;
        let currentImg = this.overlay.querySelector('.modal img').getAttribute('src');
          
        if (target.matches('.btn__prev')) {
            this.overlay.querySelector('.modal').classList.add('animate-left');
            setTimeout(()=> {this.overlay.querySelector('.modal').classList.remove('animate','animate-modal','animate-left')},300);
            this.rectangleLeft.forEach(((el)=> el.classList.remove('indicator__el')));

            let prevImgIndex = this.AllPicture.findIndex(el => el.url === currentImg) - 1;
          
            if (prevImgIndex >= 0) {
                let prevImgUrl = this.AllPicture[prevImgIndex].url;
                let prevImgTitle = this.AllPicture[prevImgIndex].title;
                let prevImgDescr = this.AllPicture[prevImgIndex].desc;
            
                this.applyChangeModal(prevImgUrl,prevImgTitle,prevImgDescr);
                setTimeout(()=> {this.applyChangeModalSecond(prevImgUrl,prevImgTitle,prevImgDescr)}, 300);
            }
          
            if (prevImgIndex === 0) {
                let arrBtnPrev = this.overlay.querySelectorAll('.btn__prev');
                setTimeout(()=> {arrBtnPrev.forEach(((el) => el.style.visibility="hidden"))}, 100);
                setTimeout(()=> {this.rectangleLeft.forEach(((el)=> el.classList.add('indicator__el')))}, 100);
            }

            this.overlay.querySelector('.btn__next').style.visibility = 'visible';
        }

        if (target.matches('.btn__next')) {
            this.overlay.querySelector('.modal').classList.add('animate-right');
            setTimeout(()=> {this.overlay.querySelector('.modal').classList.remove('animate','animate-modal','animate-right')},300);
            setTimeout(()=> {this.rectangleLeft.forEach(((el)=> el.classList.remove('indicator__el')))}, 100);

            let prevImgIndex = this.AllPicture.findIndex(el => el.url === currentImg) + 1;
            
            if (prevImgIndex <= this.AllPicture.length -1) {
                let prevImgUrl = this.AllPicture[prevImgIndex].url;
                let prevImgTitle = this.AllPicture[prevImgIndex].title;
                let prevImgDescr = this.AllPicture[prevImgIndex].desc;
                    
                this.applyChangeModal(prevImgUrl,prevImgTitle,prevImgDescr);
                setTimeout(()=> {this.applyChangeModalSecond(prevImgUrl,prevImgTitle,prevImgDescr)}, 300);
            }
            
            if (prevImgIndex === this.AllPicture.length -1) {
                let arrBtnNext = this.overlay.querySelectorAll('.btn__next');
                setTimeout(()=> {arrBtnNext.forEach(((el) => el.style.visibility="hidden"))}, 100);
            }

            this.overlay.querySelector('.btn__prev').style.visibility = 'visible';
        }
    }

    closeModalWindow(even) {
        if(even.target.matches('.overlay')) {
            this.overlay.querySelector('.modal__under').classList.remove('animate-left','animate-right');
            this.overlay.querySelector('.modal').classList.add('animate-leave');
            this.overlay.querySelector('.modal__under').classList.add('animate-leave');
            setTimeout(()=> {even.target.classList.add('none'),
                this.overlay.querySelector('.modal').classList.remove('animate-leave'),
                this.overlay.querySelector('.modal__under').classList.remove('animate-leave')
            }, 300);
        }

        if(even.target.matches('.modal__close')) {
            this.overlay.classList.add('none');
        }
    }

    applyChangeModal(elUrl,elTitl,elDescr) {
        this.overlay.querySelector('.modal img').setAttribute('src', elUrl);
        this.overlay.querySelector('.text h2').innerText = elTitl;
        this.overlay.querySelector('.text p').innerText = elDescr;
    }

    applyChangeModalSecond(elUrl,elTitl,elDescr) {
        this.overlay.querySelector('.modal__under img').setAttribute('src', elUrl);
        this.overlay.querySelector('.modal__under .text h2').innerText = elTitl;
        this.overlay.querySelector('.modal__under .text p').innerText = elDescr;
    }

    init() {
        this.generateModalWindow();
        this.generateStyle();
        this.gallery.classList.add('gallery');
        this.gallery.addEventListener('click', this.openModalWindow.bind(this));
        document.body.addEventListener('click', this.closeModalWindow.bind(this));
        this.overlay.querySelector('.btn').addEventListener('click', this.changeSlide.bind(this));
    }
}

const gallery = new Gallery('.gallery__items');
gallery.init();