// Data массиві
const data = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" }
];

const cardContainer = document.getElementById('card-container');


data.forEach(item => {
   
    const card = document.createElement('div');
    card.className = 'card';

  
    const title = document.createElement('h2');
    title.textContent = item.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = item.description;
    card.appendChild(description);

   
    const button = document.createElement('button');
    button.textContent = 'Жою';
    button.addEventListener('click', () => {
        cardContainer.removeChild(card);
    });
    card.appendChild(button);

   
    cardContainer.appendChild(card);
});
