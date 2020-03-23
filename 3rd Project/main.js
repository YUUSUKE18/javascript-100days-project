const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something New To Do';
    ul.prepend(li);
})
items.forEach(item => {
    item.addEventListener('click', e => {
        //e.preventDefault();
        // console.log(e.target);
        // console.log(item);
        //e.target.style.textDecoration = "line-through";
        e.target.remove();
    });
});