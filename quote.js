var jsonQuotes = [{
    id: 1,
    quote: "After All this time.!",
    author: "Albus Percival Wulfric brian Dumbledore",
    twitterUrl: "",
    tumblrUrl: "",
}, {
    id: 2,
    quote: "Always",
    author: "Prof. Severus Snape",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 3,
    quote: "You're the brightest Witch of your Age",
    author: "Sirius Black",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 4,
    quote: "Fear of a name only increases fear of the thing itself.",
    author: "Hermione Granger",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 5,
    quote: "There will be no foolish wand-waving or silly incantations in this class. As such, I don’t expect many of you to appreciate the subtle science and exact art that is potion-making.",
    author: "Prof. Severus Snape",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 6,
    quote: "It was, he thought, the difference between being dragged into the arena to face a battle to the death and walking into the arena with your head held high. ",
    author: "Harry Potter",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 7,
    quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    author: "Luna Lovegood",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 8,
    quote: "I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.",
    author: "Rubeus Hagrid",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 9,
    quote: "I think we’ve outgrown full-time education … Time to test our talents in the real world, d’you reckon?",
    author: "Fred Wesley",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 10,
    quote: "He must have known I’d run out on you.’ ‘No,’ Harry corrected him. ‘He must’ve always known you’d always want to come back.",
    author: "Ron Weasley",
    twitterUrl: "",
    tumblrUrl: "",
},{
    id: 11,
    quote: "We’re all going to keep fighting, Harry. You know that?",
    author: "Neville Longbottom",
    twitterUrl: "",
    tumblrUrl: "",
}]

var colors = [
    "#D98880",
    "#7FB3D5",
    "#A9DFBF",
    "#FAD7A0",
    "#F5B041",
    "#F7DC6F",
    "#BFC9CA",
    "#C39BD3",
    "#85C1E9",
    "#D7DBDD"
]

$(document).ready(() => {
    setInterval(() => {
        getRandomQuote()
    }, 2000);
})


// function getRandomQuote(){
//     for (let index = 0; index < 300; index++) {
//         const number = (Math.floor( Math.random() * 10));
//         console.log(number);
//        if(number > 0 && number <= 10){
//         const selectedQuote =  jsonQuotes.find( q => q.id == number);
//         var randomNum = getRandomNumber(0, 10)
//         $('#quotetext').text(selectedQuote.quote)
//         $('#quotetext').css(`color:${colors[randomNum]}`)
//         $('#quotetext').css(`background-color:${colors[randomNum]}`)
//         $('#quoteauthor').text( "-" + selectedQuote.author)
//         break;
//        }
//        else{
//            continue;
//        }
        
//     }
// }

function getRandomQuote(){
    var randomNumForQuotes = getRandomNumber(0, 10)

    const selectedQuote =  jsonQuotes.find( q => q.id == randomNumForQuotes);
    var randomNumForColors = getRandomNumber(0, 10)
    $('#quotetext').text(selectedQuote.quote)
    // $('#quotetext').css(`color:${colors[randomNumForColors]}`)
    $('#quote-box').css("background-color", `${colors[randomNumForColors]}`)
    // $('body').css("background-color", `${colors[randomNumForColors]}`)

    $('#quote-box').css("box-shadow", "5px 5px 8px #000")
    $('#quoteauthor').text( "-" + selectedQuote.author)
}

function getRandomNumber(num1, num2){
    var number = 0;
    do{
        number = (Math.floor( Math.random() * 10));
    }
    while(number != num1 && number > num2)

    return number;
}