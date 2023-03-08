const searchBarAnim = document.querySelector(".search-bar-mobile");
const currentMailboxText = document.querySelector(".Current-Mailbox");

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