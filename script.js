//preloader script 

let firstText = document.querySelectorAll('.orbs span');
let lasText = document.querySelector('.glow');
let preloader = document.querySelector('.preloader');
setTimeout(() => {
    firstText[0].classList.add('text-bottom');
}, 100);

setTimeout(() => {
    firstText[0].classList.add('font-sz');
}, 500);
setTimeout(() => {
    firstText[1].classList.add('text-bottom');
    setTimeout(() => {
        firstText[1].classList.add('font-sz');
    }, 500);
    setTimeout(() => {
        firstText[2].classList.add('text-bottom');
        setTimeout(() => {
            firstText[2].classList.add('font-sz');
        }, 500);
        setTimeout(() => {
            firstText[3].classList.add('text-bottom');
            setTimeout(() => {
                firstText[3].classList.add('font-sz');
            }, 500);
            setTimeout(() => {
                firstText[4].classList.add('text-bottom');
                setTimeout(() => {
                    firstText[4].classList.add('font-sz');
                    setTimeout(() => {
                        lasText.style.opacity = 1;
                    }, 1000);
                }, 500);
            }, 100);
        }, 100);
    }, 100);
}, 100);
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('preloader-none');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 401);
    }, 3000);
})
//////////////


let burgerMnu = document.querySelector('.burger');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        burgerMnu.classList.add('burger-active');
        burgerMnu.style.display = 'block';
    }
    else {
        burgerMnu.classList.remove('burger-active');
        burgerMnu.style.display = 'none';
    }
});


// function slider
function sliderImg() {
    let images = document.querySelectorAll('.slider-img'),
        nextBtn = document.querySelector('.btn-next'),
        prevBtn = document.querySelector('.btn-prev'),
        interval = true;



    nextBtn.onclick = () => {
        if (images[0].classList.contains('active')) {
            images[0].classList.remove('active');
            images[1].classList.add('active');
        }
        else if (images[1].classList.contains('active')) {
            images[1].classList.remove('active');
            images[2].classList.add('active');
        }
        else if (images[2].classList.contains('active')) {
            images[2].classList.remove('active');
            images[0].classList.add('active');
        }
    };

    prevBtn.onclick = () => {
        if (images[0].classList.contains('active')) {
            images[0].classList.remove('active');
            images[2].classList.add('active');
        }
        else if (images[1].classList.contains('active')) {
            images[1].classList.remove('active');
            images[0].classList.add('active');
        }
        else if (images[2].classList.contains('active')) {
            images[2].classList.remove('active');
            images[1].classList.add('active');
        };
    }


    // avto prokrutka slider function
    /*   if (interval) {
           setInterval(() => {
               if (images[0].classList.contains('active')) {
                   images[0].classList.remove('active');
                   images[1].classList.add('active');
               }
               else if (images[1].classList.contains('active')) {
                   images[1].classList.remove('active');
                   images[2].classList.add('active');
               }
               else if (images[2].classList.contains('active')) {
                   images[2].classList.remove('active');
                   images[0].classList.add('active');
               };
           }, 5000);
       };*/
};

sliderImg();

let smsFixed = document.querySelector('.sms-fixed');
setInterval(() => {
    smsFixed.style.animationName = 'tresk';
    setTimeout(() => {
        smsFixed.style.animationName = '';
    }, 500);
}, 7000);

//////


// burger menu  script
let burger = document.querySelector('.burger');
let menuBurger = document.querySelector('.menu-burger');
let menuBurgerClose = document.querySelector('.menu-burger-close');
burger.onclick = () => {
    menuBurger.classList.add('menu-burger-open');
    burger.style.display = 'none';
};

menuBurgerClose.onclick = () => {
    menuBurger.classList.remove('menu-burger-open');
    burger.style.display = 'block';
};

//////////


//run number script 

let runNumber = document.querySelectorAll('.run-number-content-number span');
let num = 0;
let intervalNumber = setInterval(runNumberFn, 1)


function runNumberFn() {
    for (let i = 0; i < runNumber.length; i++) {
        runNumber[i].innerHTML = num++;
    }
    if (num > 3000) {
        clearInterval(intervalNumber)
    }

};



// video script slider users 

let blogImgUser = document.querySelectorAll('.blog-bottom-flex');
let blogPrevBtn = document.querySelector('.blog-bottom-btn-prev');
let blogNextBtn = document.querySelector('.blog-bottom-btn-next');



function sliderResize() {

    let posImg = 0;
    if (window.innerWidth <= 1050) {
        blogImgUser[0].classList.remove('blog-bottom-flex-active');
        blogImgUser[1].classList.remove('blog-bottom-flex-active');


        blogNextBtn.onclick = () => {
            if (posImg === 1700) {
                posImg = 0;
            } else {
                posImg = posImg + 340;
            }
            for (let i = 0; i < blogImgUser.length; i++) {
                blogImgUser[i].style.left = -posImg + 'px';
            }

        }

        blogPrevBtn.addEventListener('click', () => {
            if (posImg === 0) {
                posImg = 1700;
            } else {
                posImg = posImg - 340;
            }
            for (let i = 0; i < blogImgUser.length; i++) {
                blogImgUser[i].style.left = -posImg + 'px';
            }
        });
    }
    else if (window.innerWidth > 1050) {
        blogImgUser[0].classList.add('blog-bottom-flex-active');

        blogNextBtn.onclick = () => {
            if (blogImgUser[0].classList.contains('blog-bottom-flex-active')) {
                setTimeout(() => {
                    blogImgUser[0].classList.remove('blog-bottom-flex-active');
                    blogImgUser[1].classList.add('blog-bottom-flex-active');
                }, 100);
            }

            else if (blogImgUser[1].classList.contains('blog-bottom-flex-active')) {
                blogImgUser[1].classList.remove('blog-bottom-flex-active');
                blogImgUser[0].classList.add('blog-bottom-flex-active');
            }
        };

        blogPrevBtn.onclick = () => {
            if (blogImgUser[0].classList.contains('blog-bottom-flex-active')) {
                setTimeout(() => {
                    blogImgUser[0].classList.remove('blog-bottom-flex-active');
                    blogImgUser[1].classList.add('blog-bottom-flex-active');
                }, 100);
            }

            else if (blogImgUser[1].classList.contains('blog-bottom-flex-active')) {
                blogImgUser[1].classList.remove('blog-bottom-flex-active');
                blogImgUser[0].classList.add('blog-bottom-flex-active');
            }
        };


    }


};

sliderResize();






/* animation script bgColor
let body =  document.body;
(() => {
    window.addEventListener('scroll',() => {
        if(window.scrollY >= 8050 ){
            body.style.backgroundColor = 'red';
        }
        else if(window.scrollY <= 10){
            body.style.backgroundColor = '#181818';
        };
    });
})();
*/


// animation scroll bar 
let scrollBar = document.querySelector('.scroll-bar');



window.addEventListener('resize', () => {
    if (window.innerWidth > 989) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 5.8);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        })
    };

    // 989
    if (window.innerWidth < 989) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.2);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 900
    if (window.innerWidth <= 900) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.65);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 771
    if (window.innerWidth <= 771) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.45);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 700
    if (window.innerWidth <= 700) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.40);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 680
    if (window.innerWidth <= 680) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.95);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };


    // 629
    if (window.innerWidth <= 629) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.98);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 624
    if (window.innerWidth <= 624) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 9.1);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 600
    if (window.innerWidth <= 600) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.8);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 529
    if (window.innerWidth <= 529) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.9);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };


    // 514
    if (window.innerWidth <= 514) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.98);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    // 500
    if (window.innerWidth <= 500) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.90);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    //463
    if (window.innerWidth <= 463) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.95);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    //463
    if (window.innerWidth <= 445) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.35);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    //437
    if (window.innerWidth <= 437) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.43);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

    //382
    if (window.innerWidth <= 382) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.48);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };


    //367
    if (window.innerWidth <= 367) {
        window.addEventListener('scroll', (x, y) => {
            x = scrollY / 10;
            y = Math.trunc(x / 8.60);
            if (window.scrollY) {
                scrollBar.style.width = `${y}%`;
            }
        });
    };

});



if (window.innerWidth > 989) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 5.8);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    })
};

// 989
if (window.innerWidth < 989) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.2);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 900
if (window.innerWidth <= 900) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.65);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 771
if (window.innerWidth <= 771) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.45);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 700
if (window.innerWidth <= 700) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.40);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 680
if (window.innerWidth <= 680) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.95);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};


// 629
if (window.innerWidth <= 629) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.98);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 624
if (window.innerWidth <= 624) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 9.1);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 600
if (window.innerWidth <= 600) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.8);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 529
if (window.innerWidth <= 529) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.9);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};


// 514
if (window.innerWidth <= 514) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.98);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

// 500
if (window.innerWidth <= 500) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.90);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

//463
if (window.innerWidth <= 463) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.95);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

//463
if (window.innerWidth <= 445) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.35);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

//437
if (window.innerWidth <= 437) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.43);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};

//382
if (window.innerWidth <= 382) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.48);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};


//367
if (window.innerWidth <= 367) {
    window.addEventListener('scroll', (x, y) => {
        x = scrollY / 10;
        y = Math.trunc(x / 8.60);
        if (window.scrollY) {
            scrollBar.style.width = `${y}%`;
        }
    });
};



/////////


let playVideo = document.querySelector('.play-video');
let closeVideo = document.querySelector('.video-modal-close');
let modalVideo = document.querySelector('.video-modal');
let videoPause = document.querySelector('#video-modal-video')

playVideo.onclick = () => {
    modalVideo.style.display = 'flex';
    videoPause.play();
    setTimeout(() => {
        modalVideo.style.opacity = 1;
    }, 100);
}



closeVideo.onclick = () => {
    modalVideo.style.opacity = 0;
    videoPause.pause();
    setTimeout(() => {
        modalVideo.style.display = 'none';
    }, 300);
}





let darkThemeBtn = document.querySelector('.dark-theme-btn-radius');
let darkThemeBtnRadius = document.querySelector('.dark-theme-btn-radius-radius');
let darkThemeTitle = document.querySelector('.dark-theme-title');
let body = document.querySelector('body');
darkThemeBtn.onclick = () => {
    darkThemeBtn.classList.toggle('dark-theme-btn-radius-active');
    if (darkThemeBtn.classList.contains('dark-theme-btn-radius-active')) {
        darkThemeTitle.textContent = 'Выкл свет';
        nextBtnV.src = './img/next-black.png';
        prevBtnV.src = './img/prev-black.png';
        nextBtnT.src = './img/next-black.png';
        nextBtnS.src = './img/next-black.png';
        prevBtnS.src = './img/prev-black.png';
        nextBtnB.src = './img/next-black.png';
        prevBtnB.src = './img/prev-black.png';
        logo.src = './img/logo-white.png';
    }
    else {
        darkThemeTitle.textContent = 'Вкл свет';
        nextBtnV.src = './img/next.png';
        prevBtnV.src = './img/prev.png';
        nextBtnT.src = './img/next.png';
        nextBtnS.src = './img/next.png';
        prevBtnS.src = './img/prev.png';
        nextBtnB.src = './img/next.png';
        prevBtnB.src = './img/prev.png';
        logo.src = './img/logo-black.png';
    };

    body.classList.toggle('body-active');
}



//nextBtn prevBtn

let nextBtnV = document.querySelector('.blog-top-next img');
let prevBtnV = document.querySelector('.blog-top-prev img');
let nextBtnT = document.querySelector('.the-templates-btn img');
let nextBtnS = document.querySelector('.btn-next img');
let prevBtnS = document.querySelector('.btn-prev img');
let nextBtnB = document.querySelector('.blog-bottom-btn-next  img');
let prevBtnB = document.querySelector('.blog-bottom-btn-prev  img');
let logo = document.querySelector('.logo img');


