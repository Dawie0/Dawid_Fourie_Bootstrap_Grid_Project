const searchBarAnim = document.querySelector(".search-bar-mobile");
const currentMailboxText = document.querySelector(".Current-Mailbox");
let selectedNum = null;

const searchAnim = () => {
    if (searchBarAnim.classList.contains('visually-hidden')){
        searchBarAnim.classList.remove('visually-hidden');
    }
    else {
        searchBarAnim.classList.add('visually-hidden');
    }
};

const changeCurrentMailboxText = (mailbox) => {
    currentMailboxText.innerHTML = mailbox;
}

const selectMessage = (number) => {
    if(selectedNum != null) {
        document.querySelector(`#m${selectedNum + 1}`).classList.add('blur');
        selectedNum = number;
        document.querySelector(`#m${selectedNum + 1}`).classList.remove('blur');
    }
    else{  
        selectedNum = number
        for(let i = 0; i < 13; i++) {
            if(i != number) {
                document.querySelector(`#m${i + 1}`).classList.add('blur');
            }
        }
    }
}


selectMessage(0);