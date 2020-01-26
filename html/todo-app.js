//remove any paragraphs includes do
const p = document.querySelectorAll('p')
p.forEach(function(paragraphs) {
    if (paragraphs.textContent.includes('do')) {
        paragraphs.remove()
    }
})