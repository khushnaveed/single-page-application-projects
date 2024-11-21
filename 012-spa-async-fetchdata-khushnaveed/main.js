const processData = () => {
    const ul = document.querySelector('ul');
    fetch('./data.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then(data => {
            const stringArray = data.split("\n");
            const sortArray = stringArray.sort();
            sortArray.forEach(element => {
                const li = document.createElement('li');
                li.append(element);
                ul.append(li);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        
};

const button = document.querySelector('button');
button.addEventListener('click', processData);
