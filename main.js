/* Setting variables */
const searchBarAnim = document.querySelector(".search-bar-mobile");
const currentMailboxText = document.querySelector(".Current-Mailbox");
const emailTextArea = document.querySelector("#text-view-area");
let selectedNum = null;

/* Objects for email viewing (m stands for message) */
const m0 = {
    sender: "Michael Scott",
    subject: "Urgent! Please Read This Email Immediately!",
    email: "Hey, everyone!Just wanted to let you all know that I'll be out of the office for a few hours today. Don't worry, I'm not sick or anything. I'm just working on something top secret that I can't tell you about. It's super important, though. So, if you need anything, please contact my assistant, Dwight. He'll be more than happy to help you out!Thanks!Best,Michael"
};
const m1 = {
    sender: "Jim Halpert",
    subject: "Question about the office birthday policy",
    email: "Hey, Pam,Quick question: What's the deal with the office birthday policy? Is it still the same as it was last year, or did something change? I just want to make sure I\'m doing everything right. Also, do you know what Dwight\'s favorite kind of cake is? Asking for a friend.Thanks!Jim"
};
const m2 = {
    sender: "Dwight Schrute",
    subject: "Urgent:Reminder about the beet harvest",
    email: "Attention all employees, I just wanted to remind you all that the beet harvest is coming up soon, and we need everyone\'s help to make sure it\'s a success. Please make sure you have your work boots and gloves ready, and be prepared to work long hours. If you have any questions, feel free to ask me.Thanks,Dwight"
};
const m3 = {
    sender: "Pam Beesly",
    subject: "Reminder: Company Picnic This Weekend",
    email: "Hey, everyone! Just wanted to remind you that the company picnic is this weekend! It\'s going to be a blast, so I hope to see you all there. Remember to bring sunscreen, a towel, and your favorite dish to share. Oh, and don\'t forget your swimsuit if you plan on going swimming!Can\'t wait to see you all there!Pam"
};
const m4 = {
    sender: "Kevin Malone",
    subject: "Recipe for Chili",
    email: "Hey, guys! I know you all loved my famous chili at the last office potluck, so I thought I'd share the recipe with you. It's super easy to make, and it's guaranteed to be a crowd-pleaser. Here's what you need:2 cans of kidney beans 1 can of black beans 1 can of corn 1 can of tomato sauce 1 pound of ground beef 1 packet of chili seasoning Instructions: Brown the ground beef in a large pot over medium heat. Drain the fat from the pot. Add the beans, corn, and tomato sauce to the pot. Stir in the chili seasoning. Simmer for 20 minutes. Enjoy! Let me know how it turns out! Kevin"
};
const m5 = {
    sender: "Stanley Hudson",
    subject: "Reminder: Office Fantasy Football Draft",
    email: "Hey, fellow fantasy football enthusiasts, Just wanted to remind you that the office draft is tomorrow! We\'ll be meeting in the conference room at 2 pm sharp, so make sure you\'re there on time. And remember, no cheating! I\'m looking at you, Jim. Good luck to everyone! Stanley"
};
const m6 = {
    sender: "Angela Martin",
    subject: "Request for Help with Cat Sitting",
    email: "Hello, I was wondering if anyone would be willing to watch my cats while I\'m out of town next weekend. They\'re very well-behaved and don\'t require much attention, but they do need to be fed twice a day. I\'d be willing to pay you for your time, of course. Please let me know if you\'re interested."
};
const m7 = {
    sender: "Oscar Martinez",
    subject: "Reminder: Office Diversity Training",
    email: "Hello everyone, Just a friendly reminder that our annual diversity training session is coming up next week. Please make sure to clear your schedules for the morning of the 15th. It\'s important that we all attend and learn how to better understand and appreciate the diversity within our office.Thank you, Oscar"
};
const m8 = {
    sender: "Kelly Kapoor",
    subject: "Important Fashion News",
    email: "Hey guys, I just wanted to let you know that I found the perfect pair of shoes to go with my new dress. They\'re super cute and comfortable, and they were on sale! I highly recommend checking out the new collection at DSW. You\'re welcome! Xoxo, Kelly"
};
const m9 = {
    sender: "Creed Bratton",
    subject: "Urgent Request",
    email: "Hey, I need someone to bail me out of jail. Don\'t ask any questions. Just bring cash and meet me at the police station. Thanks, Creed"
};
const m10 = {
    sender: "Ryan Howard",
    subject: "Coffee Run",
    email: "Hey everyone, I\'m heading out for a coffee run in about 10 minutes. If you want anything, let me know. And if you don\'t know what you want, don\'t worry, I\'ll surprise you. Ryan"
};
const m11 = {
    sender: "Toby Flenderson",
    subject: "Complaint Box",
    email: "Hello everyone, I\'ve noticed that there have been a lot of complaints around the office lately. In order to help resolve any issues, I\'ve set up a complaint box in the break room. Please feel free to write down any concerns or grievances you may have and drop them in the box. I will review them and do my best to address them. Thank you, Toby"
};
const m12 = {
    sender: "Darryl Philbin",
    subject: "Moving Help Needed",
    email: "Hey guys, I\'m moving into my new place next weekend and I could use some help. If anyone is available, I\'d really appreciate it. I\'ll provide pizza and beer as compensation. Let me know if you\'re interested. Thanks, Darryl"
};

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


const setMessage = (messageNumber) => {

    // for (let i = 0; i < 13; i++) {
    //     if (i === messageNumber) {
    //         console.log((m).sender);
    //     }
    // }
    emailTextArea.innerHTML = m+messageNumber.email;
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
}


/* Function to switch between pages */
const changePage = (page) => {
    document.location = `${page}.html`
  }

/* Calling 'selectMessage' function to start off with first message selected */
selectMessage(0);