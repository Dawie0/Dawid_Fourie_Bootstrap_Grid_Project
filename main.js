/* Setting variables */
const searchBarAnim = document.querySelector(".search-bar-mobile");
const currentMailboxText = document.querySelector(".Current-Mailbox");
const emailTextArea = document.querySelector("#text-view-area");
const mainColumn2 = document.querySelector(".main-col-2");
const mainColumn3 = document.querySelector(".main-col-3");
const smallButton = document.querySelector(".sm-b-button");
const medButton = document.querySelector(".md-b-button");
let selectedNum = null;

/* Objects for email viewing (m stands for message) */
const listEmail = [{
    sender: "Michael Scott",
    subject: "Urgent! Please Read This Email Immediately!",
    email: "Hey, everyone!<br><br>Just wanted to let you all know that I'll be out of the office for a few hours today. Don't worry, I'm not sick or anything. I'm just working on something top secret that I can't tell you about. It's super important, though. So, if you need anything, please contact my assistant, Dwight. He'll be more than happy to help you out!<br><br>Thanks!<br>Best, Michael"
}, {
    sender: "Jim Halpert",
    subject: "Question about the office birthday policy",
    email: "Hey, Pam,<br><br>Quick question: What's the deal with the office birthday policy? Is it still the same as it was last year, or did something change? I just want to make sure I\'m doing everything right. Also, do you know what Dwight\'s favorite kind of cake is? Asking for a friend.<br><br>Thanks! Jim"
}, {
    sender: "Dwight Schrute",
    subject: "Urgent:Reminder about the beet harvest",
    email: "Attention all employees, <br>I just wanted to remind you all that the beet harvest is coming up soon, and we need everyone\'s help to make sure it\'s a success. Please make sure you have your work boots and gloves ready, and be prepared to work long hours. If you have any questions, feel free to ask me.<br>Thanks, Dwight"
}, {
    sender: "Pam Beesly",
    subject: "Reminder: Company Picnic This Weekend",
    email: "Hey, everyone!<br><br> Just wanted to remind you that the company picnic is this weekend! It\'s going to be a blast, so I hope to see you all there. Remember to bring sunscreen, a towel, and your favorite dish to share. Oh, and don\'t forget your swimsuit if you plan on going swimming!<br>Can\'t wait to see you all there! <br><br>Pam"
}, {
    sender: "Kevin Malone",
    subject: "Recipe for Chili",
    email: "Hey, guys! <br><br>I know you all loved my famous chili at the last office potluck, so I thought I'd share the recipe with you. It's super easy to make, and it's guaranteed to be a crowd-pleaser. <br><br>Here's what you need:<br>2 cans of kidney beans<br> 1 can of black beans<br> 1 can of corn<br> 1 can of tomato sauce<br> 1 pound of ground beef <br>1 packet of chili seasoning <br><br>Instructions: <br>Brown the ground beef in a large pot over medium heat.<br> Drain the fat from the pot. <br>Add the beans, corn, and tomato sauce to the pot.<br> Stir in the chili seasoning.<br> Simmer for 20 minutes. <br>Enjoy!<br><br> Let me know how it turns out! <br>Kevin"
}, {
    sender: "Stanley Hudson",
    subject: "Reminder: Office Fantasy Football Draft",
    email: "Hey, fellow fantasy football enthusiasts, <br><br>Just wanted to remind you that the office draft is tomorrow! We\'ll be meeting in the conference room at 2 pm sharp, so make sure you\'re there on time. And remember, no cheating! I\'m looking at you, Jim. <br><br>Good luck to everyone!<br> Stanley"
}, {
    sender: "Angela Martin",
    subject: "Request for Help with Cat Sitting",
    email: "Hello, <br><br>I was wondering if anyone would be willing to watch my cats while I\'m out of town next weekend. They\'re very well-behaved and don\'t require much attention, but they do need to be fed twice a day. I\'d be willing to pay you for your time, of course.<br><br> Please let me know if you\'re interested."
}, {
    sender: "Oscar Martinez",
    subject: "Reminder: Office Diversity Training",
    email: "Hello everyone, <br><br>Just a friendly reminder that our annual diversity training session is coming up next week. Please make sure to clear your schedules for the morning of the 15th. It\'s important that we all attend and learn how to better understand and appreciate the diversity within our office.<br><br>Thank you, <br>Oscar"
}, {
    sender: "Kelly Kapoor",
    subject: "Important Fashion News",
    email: "Hey guys, <br><br>I just wanted to let you know that I found the perfect pair of shoes to go with my new dress. They\'re super cute and comfortable, and they were on sale! I highly recommend checking out the new collection at DSW. <br>You\'re welcome! <br><br>Xoxo, <br>Kelly"
}, {
    sender: "Creed Bratton",
    subject: "Urgent Request",
    email: "Hey,<br> I need someone to bail me out of jail. Don\'t ask any questions. Just bring cash and meet me at the police station. <br><br>Thanks,<br> Creed"
}, {
    sender: "Ryan Howard",
    subject: "Coffee Run",
    email: "Hey everyone, <br><br>I\'m heading out for a coffee run in about 10 minutes. If you want anything, let me know. And if you don\'t know what you want, don\'t worry, I\'ll surprise you. <br><br>Ryan"
}, {
    sender: "Toby Flenderson",
    subject: "Complaint Box",
    email: "Hello everyone, <br><br>I\'ve noticed that there have been a lot of complaints around the office lately. In order to help resolve any issues, I\'ve set up a complaint box in the break room. Please feel free to write down any concerns or grievances you may have and drop them in the box. I will review them and do my best to address them. <br><br>Thank you, <br>Toby"
}, {
    sender: "Darryl Philbin",
    subject: "Moving Help Needed",
    email: "Hey guys,<br><br> I\'m moving into my new place next weekend and I could use some help. If anyone is available, I\'d really appreciate it. I\'ll provide pizza and beer as compensation. Let me know if you\'re interested. <br><br>Thanks, <br>Darryl"
}]


/* Function to animate searchbar on smaller devices */
const searchAnim = () => {
    if (searchBarAnim.classList.contains('visually-hidden')){
        searchBarAnim.classList.remove('visually-hidden');
    }
    else {
        searchBarAnim.classList.add('visually-hidden');
    }
};

/* Function to simulate switching to a different mailbox */
const changeCurrentMailboxText = (mailbox) => {
    currentMailboxText.innerHTML = mailbox;
}

/* Function to populate text viewing window */
const setMessage = (messageNumber) => {
    emailTextArea.innerHTML = listEmail[messageNumber].email;
    document.querySelector(".big-subject").innerHTML = listEmail[messageNumber].subject;
    let name = listEmail[messageNumber].sender;
    let reworkedName = name.split(" ").join("").toLowerCase();
    document.querySelector(".email-address").innerHTML = reworkedName;
}

/* Function to add and remove breakpoint classes to be able to read emails on smaller screens */
const readEmailSmallerScreens = () => {
    if(!mainColumn2.classList.contains('d-none', 'd-lg-block') && mainColumn3.classList.contains('d-none', 'd-md-block')){
        mainColumn2.classList.add('d-none', 'd-lg-block');
        mainColumn3.classList.remove('d-none', 'd-lg-block');
        mainColumn3.classList.add('col-md-9');
        smallButton.classList.remove('d-none', 'd-md-block');
        medButton.classList.remove('d-md-none');
        
    }
}

/* Function for back buttons */
const returnToNormal = () => {
    if(mainColumn2.classList.contains('d-none', 'd-md-block') && !mainColumn3.classList.contains('d-none', 'd-lg-block')){
        mainColumn2.classList.remove('d-none', 'd-md-block');
        mainColumn3.classList.add('d-none', 'd-lg-block');
        mainColumn3.classList.remove('col-md-9');
        smallButton.classList.add('d-none', 'd-md-block');
        medButton.classList.add('d-md-none');
    }
}

/* Function to simulate clicking on an email to view it */
const selectMessage = (number) => {
    if(selectedNum != null) {
        document.querySelector(`#m${selectedNum}`).classList.add('blur');
        selectedNum = number;
        document.querySelector(`#m${selectedNum}`).classList.remove('blur');
        
    }
    else{  
        selectedNum = number
        for(let i = 0; i < 13; i++) {
            if(i != number) {
                document.querySelector(`#m${i}`).classList.add('blur');
            }
        }
    }
    setMessage(number);
    readEmailSmallerScreens();
}

/* Function to populate email details */
const popEmailDetails = () => {
    for (let j = 0; j < 13; j++) {
        document.querySelector(`.t${j}`).innerHTML = listEmail[j].sender;
        document.querySelector(`.s${j}`).innerHTML = listEmail[j].subject;
    }
};

/* Function to switch between pages */
const changePage = (page) => {
    document.location = `${page}.html`
  }

/* Calling 'selectMessage' function to start off with first message selected */


popEmailDetails();
selectMessage(0);