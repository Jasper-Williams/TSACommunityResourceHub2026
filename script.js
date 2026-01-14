console.log("Welcome to the Huntsville Community Resource Hub!")



let searchInput = document.getElementById('restaurantSearch')
            let restaurantCards = document.querySelectorAll('.restaurant')

            function handleSearchInput() {
                let search = searchInput.value.toLowerCase().trim()

                restaurantCards.forEach(function (card) {
                let text = card.textContent.toLowerCase()

            if (search === '' || text.includes(search)) {
                card.style.display = ''
            } else {
                card.style.display = 'none'
            }
        })
    }

  searchInput.addEventListener('input', handleSearchInput);
