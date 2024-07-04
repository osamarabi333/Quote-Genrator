var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'author': ' Frank Zappa', 
     'quote': '“So many books, so little time.”'
    },
    {'author': ' Albert Einstein', 
     'quote': '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”'
    },
    {'author': ' Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': 'Mae West ', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
    {'author': ' Oscar Wilde', 
     'quote': '“To live is the rarest thing in the world. Most people exist, that is all.””'
    },
    {'author': 'Elbert Hubbard', 
     'quote': '“A friend is someone who knows all about you and still loves you.””'
    },
    {'author': 'Mark Twain', 
     'quote': '“If you tell the truth, you do not have to remember anything.”'
    },
];

function generateQuote(){
    var randomNumber = Math.floor(Math.random() * arrayOfQuotes.length);
        document.getElementById("quote").innerHTML=arrayOfQuotes[randomNumber].quote ;
        document.getElementById("author").innerHTML=arrayOfQuotes[randomNumber].author ;
}