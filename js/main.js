let containerWithItems = document.getElementById('containerWithItems');

let num = 1;
for (let i = 0; i < 10; i++){

    // create div element

    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'post');

    containerWithItems.appendChild(divElement);

    divElement.addEventListener('click', () => {
        alert(`Position number is: ${positionNumber}`)
    })
    // create item inside div

    let postTitle = document.createElement('p');
    postTitle.setAttribute('class', 'postTitle');
    postTitle.innerText = 'item';

    divElement.appendChild(postTitle);

    // create paragrap with counter inside div
    let positionNumber = num++
    let positionCounter = document.createElement('p');
    positionCounter.setAttribute('class', 'postCounter');
    positionCounter.innerText = `Pos:${positionNumber}`
    divElement.appendChild(positionCounter)

  
}



