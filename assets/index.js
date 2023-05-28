window.onload = () => {
    const options= {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    const observer = new IntersectionObserver(foo, options);

    function foo(entries, observer){
        entries.forEach(el => {
            if(el.isIntersecting){
                el.target.src = el.target.dataset.src;
                observer.unobserve(activeImg);
    }})
    }

    const imgArr = document.querySelectorAll('img');

    imgArr.forEach(i => {
        observer.observe(i);
    });

}