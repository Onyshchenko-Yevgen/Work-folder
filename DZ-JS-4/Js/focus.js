let suit = '0',
    num = '0',
cards = [
    ['peak', 'tambourine', 'club', 'chirv'],
    ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
];

suit = parseInt(Math.random() * 4);
num = parseInt(Math.random() * 13);

alert(cards[1] [num] + cards[0] [suit] );

