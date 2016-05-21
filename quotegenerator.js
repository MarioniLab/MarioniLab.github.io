// Nicked from http://codepen.io/kkoutoup/pen/zxmGLE
var quoteSource=[
    {
        quote:"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name:"Francis of Assisi"
    },
    {
        quote:"Believe you can and you're halfway there.",
        name:"Theodore Roosevelt"
    },
    {   
        quote:"Keep your eyes on the stars, and your feet on the ground.",
        name:"Theodore Roosevelt"
    },
    {
        quote:"It always seems impossible until it's done.",
        name:"Nelson Mandela"
    },
    {
        quote:"Aim for the moon. If you miss, you may hit a star.",
        name:"W. Clement Stone"
    },
    {
        quote:"Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        name:"Johann Wolfgang Von Goethe"
    },
    {
        quote:"Whether you think you can or think you can't, you’re right.",
        name:"Henry Ford"
    },
    {
        quote:"I’m a greater believer in luck, and I find the harder I work the more I have of it.",
        name:"Thomas Jefferson"
    },
    {
        quote:"A dream doesn’t become reality through magic; it takes sweat, determination and hard work.",
        name:"Colin Powell"
    },
    {
        quote:"If you don’t burn out at the end of each day, you're a bum.",
        name:"George Lois"
    },
    {
        quote:"Let me tell you the secret that has led me to my goals: my strength lies solely in my tenacity.",
        name:"Louis Pasteur"
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        name:"Confucius"
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name:"Thomas A. Edison"
    },
    {
        quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        name:"Confucius"
    },
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
        name:"Sam Levenson"
    },
    {
        quote:"Expect problems and eat them for breakfast.",
        name:"Alfred A. Montapert"
    },
    {
        quote:"Start where you are. Use what you have. Do what you can.",
        name:"Arthur Ashe"
    },
    {
        quote:"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
        name:"Samuel Beckett"
    },
    {
        quote:"People who think they know everything are a great annoyance to those of us who do.",
        name:"Isaac Asimov"
    },
    {
        quote:"Don't sweat the petty things and don't pet the sweaty things.",
        name:"George Carlin"
    },
    {
        quote:"Always do whatever's next.",
        name:"George Carlin"
    },

];

var randomquote = Math.floor(Math.random()*(quoteSource.length));
function printquote(){
    document.write('<i>"'+quoteSource[randomquote].quote+'"</i> &ndash; <b>'+quoteSource[randomquote].name+'</b>');
}

