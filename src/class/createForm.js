
export class createForm {

    constructor(){
        this.board = document.body;
    }

    addForm(){
        let form = document.createElement('div');
        form.classList.add('form');
        this.board.appendChild(form)
        let cards = document.createElement('div');
        cards.classList.add('cards');
        form.appendChild(cards);
        for (let i = 0 ; i < 7; i++){
            let card = document.createElement('div');
            card.classList.add(`card${i}`);
            if (i == 0){
                card.classList.add('AmericanExpress');
            }else if (i == 1){
                card.classList.add('Visa');
            }else if (i == 2){
                card.classList.add('Mastercard');
            }else if (i == 3){
                card.classList.add('DinersClub');
            }else if (i == 4){
                card.classList.add('JCB');
            }else if (i == 5){
                card.classList.add('Discover');
            }else if (i == 6){
                card.classList.add('Mir');
            }
            card.classList.add('card');
            cards.appendChild(card);

        }
        let valid = document.createElement('div');
        valid.classList.add('valid');
        form.appendChild(valid);

        let input = document.createElement('input');
        input.classList.add('input');
        input.setAttribute('type', 'text');
        input.placeholder = 'Номер кредитной карты';
        valid.appendChild(input);

        let button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Validate';
        valid.appendChild(button);
    }


    addImage(path){
        let img = document.createElement('img');
        img.classList.add('img');
        img.src = `../src/image/${path}.png`;
        return img
    }

    disabledCard(firma){
        for (let i = 0; i < 7; i++) {
            const card = document.querySelector(`.card${i}`);
            console.log(card.className)
            if (firma == "remove") {
                card.classList.remove("card_disabled")
            }else{
            if (card.classList.contains(firma)) {
                continue
            }else{
                card.classList.add("card_disabled")
            }
            }
            
    }
    }
    
}