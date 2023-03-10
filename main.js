/* Setting variables */
const searchBarAnim = document.querySelector(".search-bar-mobile");
const currentMailboxText = document.querySelector(".Current-Mailbox");
let selectedNum = null;

/* Function to animate searchbar on smaller devices */
const searchAnim = () => {
    if (searchBarAnim.classList.contains('visually-hidden')){
        searchBarAnim.classList.remove('visually-hidden');
    }
    else {
        searchBarAnim.classList.add('visually-hidden');
    }
};

/* Function to similate switching to a different mailbox */
const changeCurrentMailboxText = (mailbox) => {
    currentMailboxText.innerHTML = mailbox;
}

/* Function to simulate clicking on an email to view it */
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

/* Function to switch between pages */
const changePage = (page) => {
    document.location = `${page}.html`
  }

/* Calling 'selectMessage' function to start off with first message selected */
selectMessage(0);