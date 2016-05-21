// Nicked from http://codepen.io/kkoutoup/pen/zxmGLE
var quoteSource=[
    {
        quote:"Check out <i>scran</i>: computational food for the single-cell mind.",
        name:"Aaron"
    },
    {
        quote:"Start from the <i>BASiCS</i> of single-cell RNA-seq data analysis.",
        name:"Catalina"
    },
    {   
        quote:"Much ado about nothing? Read our normalization paper on zeros in RNA-seq data.",
        name:"Aaron"
    },
];

var randomquote = Math.floor(Math.random()*(quoteSource.length));
function printquote(){
    document.write('"'+quoteSource[randomquote].quote+'" &ndash; <b>'+quoteSource[randomquote].name+'</b>');
}

