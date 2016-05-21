// Nicked from http://codepen.io/kkoutoup/pen/zxmGLE
var quoteSource=[
    {
        quote:"It seems to work. But who knows?",
        name:"Aaron"
    },
    {
        quote:"Close enough is good enough.",
        name:"Aaron"
    },
    {   
        quote:"Measure once and cut twice.",
        name:"Aaron"
    },
    {
        quote:"It builds character.",
        name:"Aaron"
    },
    {
        quote:"Ah, aesthetics. My old nemesis.",
        name:"Aaron"
    },
    {
        quote:"Aaron, someone could make a book out of all the stupid things you say.",
        name:"Nils"
    },
    {
        quote:"Holidays are for chumps.",
        name:"Aaron"
    },
    {
        quote:"Of course I know what I'm doing.",
        name:"Aaron"
    },
    {
        quote:"Sigh.",
        name:"Aaron"
    },
    {
        quote:"Something something random variables something something.",
        name:"Catalina"
    },
];

var randomquote = Math.floor(Math.random()*(quoteSource.length));
function printquote(){
    document.write('<i>"'+quoteSource[randomquote].quote+'"</i> &ndash; <b>'+quoteSource[randomquote].name+'</b>');
}

