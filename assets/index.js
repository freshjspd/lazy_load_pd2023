let video = document.querySelector(video);
let isPaused = false;

const observer = new IntersectionObserver(foo);

observer.observe(video);

function foo(entries, observer){
    entries.forEach(el => {
        if(el.isIntersecting && !video.paused){
            video.pause();
            isPaused = true;
        } else{
            video.play();
            isPaused = false;
        }
    })

}