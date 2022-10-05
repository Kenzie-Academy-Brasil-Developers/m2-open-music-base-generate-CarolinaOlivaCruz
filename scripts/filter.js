function eventFiltro() {
    const buttons = document.querySelectorAll('.button-category')

    buttons.forEach(button => {

        button.addEventListener('click', () => {
            
            const filter = parseInt(button.id)
            console.log(filter)
            if (filter === 0) {
                createCards(products)
            } else{
                const filterList = products.filter(element => element.category === parseInt(button.id))
                createCards(filterList)
            } 
        })
    })

}
eventFiltro()