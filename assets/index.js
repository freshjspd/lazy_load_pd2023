const list = document.getElementById('list');
let count = 0;

const observer = new IntersectionObserver(foo);
observer.observe(document.getElementById('itemLoader'));

function foo(entries, observer){
    entries.forEach(el => {
        if(el.isIntersecting){
            addItemToList();
        }
    });
}

function createItem(){
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = `${++count} item`;
    return li;
}

function addItemToList(){
    for(let i=0; i<30; i++){
        list.prepend(createItem());
    }
    list.scrollTo(0,700);
}