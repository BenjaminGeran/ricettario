class Ricetta {
    constructor (titolo, ingredienti, procedimento) {
        this.titolo = titolo;
        this.ingredienti = ingredienti;
        this.procedimento = procedimento;
    }
}
const ricette = [
    new Ricetta(
        'Torta di base',
        ['farina', 'uova', 'latte', 'zucchero'],
        'Mescolare gli ingredienti, versare in una teglia e cuocere in forno a 180°C per 30 minuti.'
    ),
    new Ricetta(
        'Pasta alla carbonara',
        ['pasta', 'uova', 'formaggio', 'pepe', 'guanciale'],
        'Cuocere la pasta. In una ciotola, sbattere le uova con il formaggio e il pepe. Saltare il guanciale in padella, aggiungere la pasta e il composto di uova. Mescolare bene e servire caldo.'
    ),
    new Ricetta(
        'Pane fatto in casa',
        ['farina', 'acqua', 'lievito', 'sale'],
        'Impastare gli ingredienti, lasciare lievitare l’impasto per 2 ore. Formare delle pagnotte e cuocere in forno a 220°C per 30 minuti.'
    ),
    new Ricetta(
        'Pollo al forno',
        ['pollo', 'olio d’oliva', 'rosmarino', 'sale', 'pepe'],
        'Condire il pollo con olio, rosmarino, sale e pepe. Cuocere in forno a 200°C per 45 minuti.'
    ),
    new Ricetta(
        'Frittata di uova',
        ['uova', 'latte', 'sale', 'pepe'],
        'Sbattere le uova con il latte, sale e pepe. Versare in una padella calda e cuocere fino a doratura.'
    ),
    new Ricetta(
        'Lasagne',
        ['pasta', 'ragù', 'besciamella', 'formaggio', 'latte'],
        'Stratificare la pasta con ragù, besciamella e formaggio. Cuocere in forno a 180°C per 40 minuti.'
    ),
    new Ricetta(
        'Pollo alla griglia',
        ['pollo', 'olio d’oliva', 'limone', 'sale', 'pepe'],
        'Marinare il pollo con olio, limone, sale e pepe. Cuocere alla griglia fino a cottura completa.'
    ),
    new Ricetta(
        'Crepes dolci',
        ['farina', 'uova', 'latte', 'zucchero', 'burro'],
        'Mescolare gli ingredienti, versare un mestolo di impasto in una padella calda e cuocere su entrambi i lati.'
    ),
    new Ricetta(
        'Sandwich al pollo',
        ['pane', 'pollo', 'maionese', 'insalata', 'pomodoro'],
        'Farcire il pane con pollo cotto, maionese, insalata e pomodoro. Servire freddo.'
    ),
    new Ricetta(
        'Ciambelle fritte',
        ['farina', 'uova', 'latte', 'zucchero', 'lievito'],
        'Impastare gli ingredienti, formare delle ciambelle e friggere in olio caldo fino a doratura.'
    )
];



function ricerca (){
    const ingrediente1element = document.getElementById ("ingrediente-1");
    ingrediente1 = ingrediente1element.value;
    const ingrediente2element = document.getElementById ("ingrediente-2");
    ingrediente2 = ingrediente2element.value;
    const ingrediente3element = document.getElementById ("ingrediente-3");
    ingrediente3 = ingrediente3element.value;
    risultati = ricette.filter(ricetta => {
        return ricetta.ingredienti.includes(ingrediente1) || ricetta.ingredienti.includes(ingrediente2) || ricetta.ingredienti.includes(ingrediente3);
    });
    
    const ricette_trovate = document.getElementById ("ricette-trovate");
    ricette_trovate.innerHTML = "";
    risultati.forEach(element => {
        const titolo = document.createElement ("h4");
        titolo.textContent = element.titolo;
        const paragrafo = document.createElement ("p");
        paragrafo.textContent = element.ingredienti;
        const paragrafoprocedimento = document.createElement ("p");
        paragrafoprocedimento.textContent = element.procedimento;
        ricette_trovate.appendChild (titolo);
        ricette_trovate.appendChild (paragrafo);
        ricette_trovate.appendChild (paragrafoprocedimento);

})
        
    
}