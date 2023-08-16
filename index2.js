const main = document.querySelector('#main')
console.log(main.id)
let selectedItem

main.addEventListener('click', event => {
    const { target } = event
    const item = target.closest('.item')
    if (item.className === 'item') {
        highlight(item)
    }
})

function highlight(item) {
    selectedItem = item
    selectedItem.classList.add('item_highlight')
    setTimeout(() => selectedItem.classList.remove('item_highlight'), 100)
}

function highlightOut(item) {
    item.classList.remove('item_highlight')
}



