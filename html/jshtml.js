// document.body.innerHTML = '<h3>not Working with js...</h3>'
// const p = document.querySelector('h1')
// console.log(p)
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    p.textContent = "***********"
})
const paragraphs = document.createElement('p')
paragraphs.textContent = 'this is new paragraphs from JavaScript'
document.querySelector('body').appendChild(paragraphs)