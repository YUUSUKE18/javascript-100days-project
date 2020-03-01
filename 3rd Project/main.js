const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        //e.preventDefault();
        // console.log(e.target);
        // console.log(item);
        e.target.style.textDecoration = "line-through";
    });
});