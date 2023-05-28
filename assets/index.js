window.onload = () => {
    const options= {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(foo, options);

    function foo(entries, observer){
        entries.forEach(e => {
            if(e.isIntersecting){
                const activeImg = e.target;
                activeImg.style.background = 'blue';
                observer.unobserve(activeImg);
    }})
    }

    const imgArr = document.querySelectorAll('img');

    imgArr.forEach(i => {
        observer.observe(i);
    });

}