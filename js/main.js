let containerWithItems = document.getElementById('containerWithItems');

let evenNumbersContainer = document.createElement('div');
evenNumbersContainer.setAttribute('class', 'evenNum');
containerWithItems.appendChild(evenNumbersContainer);


let oddNumbersContainer = document.createElement('div');
oddNumbersContainer.setAttribute('class', 'oddNum');
containerWithItems.appendChild(oddNumbersContainer);


for (let i = 0; i < 10; i++) {
    let positionNumber = i + 1;

    if (i % 2 == 0) {
        // create div element with even numbers

        let evenNumbers = document.createElement('div');
        evenNumbers.setAttribute('class', 'post');

        evenNumbersContainer.appendChild(evenNumbers);
        evenNumbers.addEventListener('click', () => {
            alert(`Position number is: ${positionNumber}`)
        })

        let postTitle = document.createElement('h4');
        postTitle.setAttribute('class', 'postTitle');
        postTitle.innerText = 'item';

        evenNumbers.appendChild(postTitle);

        let positionCounter = document.createElement('p');
        positionCounter.setAttribute('class', 'postCounter');
        positionCounter.innerText = `Pos:${positionNumber}`
        evenNumbers.appendChild(positionCounter)
    } else {
        // create div element with odd numbers
        let oddNumbers = document.createElement('div');
        oddNumbers.setAttribute('class', 'post');

        oddNumbersContainer.appendChild(oddNumbers);
        oddNumbers.addEventListener('click', () => {
            alert(`Position number is: ${positionNumber}`)
        })

        let postTitle = document.createElement('h4');
        postTitle.setAttribute('class', 'postTitle');
        postTitle.innerText = 'item';

        oddNumbers.appendChild(postTitle);

        let positionCounter = document.createElement('p');
        positionCounter.setAttribute('class', 'postCounter');
        positionCounter.innerText = `Pos:${positionNumber}`
        oddNumbers.appendChild(positionCounter)
    }
}



