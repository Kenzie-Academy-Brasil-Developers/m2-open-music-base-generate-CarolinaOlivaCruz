function createButtonCategory(array) {
    const ul = document.getElementById('ulButtons')

    array.forEach(element => {
        const li = document.createElement('li')
        li.className = 'category-list'

        const buttonCategory = document.createElement('button')
        buttonCategory.className = 'button-category'
        buttonCategory.type = 'submit'

        const p = document.createElement('p')
        p.className = 'p-categoria'
        p.innerText = element


        buttonCategory.append(p)
        li.append(buttonCategory)
        ul.append(li)
    })
}
createButtonCategory(categories)




function createCards(array){
    const ul = document.getElementById('ulCards')

    array.forEach(element => {
        
        const li = document.createElement('li')
        li.className = 'card-list'

        const img = document.createElement('img')
        img.src = element.img
        img.alt = 'Imagem do álbum'

        const divDate = document.createElement('div')
        divDate.className = 'div-date'

        const divBand = document.createElement('div')
        divBand.className = 'div-band'
        const pBand = document.createElement('p')
        pBand.innerText = element.title
        const pYear = document.createElement('p')
        pYear.innerText = element.year

        const h4DateTitle = document.createElement('h4')
        h4DateTitle.innerText = element.title

        const divPrice = document.createElement('div')
        divPrice.className = 'div-price'
        const pPrice = document.createElement('p')
        pPrice.innerText = element.price
        const button = document.createElement('button')
        button.type = 'submit'
        button.innerText = 'Comprar'

        divBand.append(pBand, pYear)
        divPrice.append(pPrice, button)
        divDate.append(divBand, h4DateTitle, divPrice)
        li.append(img, divDate)
        ul.append(li)
    })
}

createCards(products)