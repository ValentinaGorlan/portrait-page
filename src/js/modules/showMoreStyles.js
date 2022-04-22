import {getResourse} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {

    // const cards = document.querySelectorAll(styles),
       const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp'); 
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // });

    btn.addEventListener('click', function(){
        getResourse('http://localhost:3000/styles')
        .then(res => createCards(res))
        .catch(error => ifError(error));
        setTimeout(() => {
        this.remove();
        }, 400);

    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
	 		        <img src=${src} alt="style">
	 		     <h4>${title}</h4>
	 		        <a href="${link}">Подробнее</a>
	 	        </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

    function ifError (text) {
        let messageError = document.createElement('div');
        messageError.textContent = 'Что-то пошло не так...';
        console.log(text)
        messageError.style.textAlign = 'center';
        document.querySelector(wrapper).appendChild(messageError);
    }
	
	
};

export default showMoreStyles;