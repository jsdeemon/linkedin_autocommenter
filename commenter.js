/*
Linkedin posts autoliker and autocommenter
works unlimitedly
open link with hashtag posts, for example
https://linkedin.com/feed/hashtag/hiring

Change text of the comment messages
Push f12 and open console
Paste in console full scrippt and launch

*/ 



async function scroll() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.scrollTo(0,  document.body.scrollHeight)
            console.log("SCROLL")
            resolve()
            }, Math.floor(Math.random() * 10000));
    })
    } 

async function sleep() {
        return new Promise(resolve => {
            setTimeout(() => {
             console.log("sleeped")
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 

async function singleClick(elem) {
        return new Promise(resolve => {
            setTimeout(() => {
                elem.click()
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 

  // функция поиска кнопки размещения комментария
  function selectButtons() {
    return [...document.querySelectorAll("span")].filter(a => a.textContent.includes("Post"))
    } 

  function selectCommentButtons() {
    return [...document.querySelectorAll("button")].filter(a => a.textContent.includes("Comment"))
    }

var commts = selectCommentButtons()
commts.length

    async function addComment(elem, msg) {
        return new Promise(resolve => {
            setTimeout(() => {
                elem.innerHTML = msg 
                console.log("message was added")
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 


   //  main function
   
   async function commentAllPosts() {
    
    var number_sent_comments = 0;
    var posts = document.getElementsByClassName("artdeco-button__text react-button__text");
    var commentButtons = selectCommentButtons(); 
    var commentInputs = document.getElementsByClassName('ql-editor ql-blank');
    var msg = [
        'Great!',
        'Super!',
        'Cool!',
        'Nice!',
        'Amazing!', 
        'Wow!',
        'Wonderful!',
        'Huh!',
        'Awesome!',
        ':)'
    ]

     for(var i=0;i<Number(commentButtons.length);i++)
     {
      
        try {
     
            await singleClick(commentButtons[i])
            console.warn("Comment button was clicked!")

await sleep();
commentInputs = document.getElementsByClassName('ql-editor ql-blank');
if (commentInputs.length > 0) {
if (commentInputs[i]) {
await addComment(commentInputs[i], msg[Number(Math.floor(Math.random() *10))]);
await sleep()
var postbuttons = selectButtons()
postbuttons[0].click()
} else {

}

console.log("Comment " + i + " was published!")
number_sent_comments += 1;
await sleep()
if (number_sent_comments = commentButtons.length - 1) {
    await scroll()
    commentButtons = selectCommentButtons();
}

} else {

}

await sleep()

        } catch(err) {
            console.log(err);
        }
     } 
  
    }

commentAllPosts()