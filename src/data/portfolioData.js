export const cardsPortfolio = [
    {
        'id' : '01',
        'title' : 'Emparejados',
        'description' : [
            'En esta versión del clásico juego de buscar parejas, podremos encontrar 20 videojuegos salidos al mercado en los últimos años.',
            ' La mecánica es sencilla, levanta una carta y al levantar la segunda se comprueba si estas coinciden o no, en caso de hacerlo ganas 10 puntos, en caso de no hacerlo, pierdes 5 puntos y las cartas vuelven a su posición original.',
            ' La idea es practicar la creación del juego usando React para comprender mejor la comunicación entre diferentes componentes.',
            'Además, se he empezado a experimentar con este proyecto el uso de Sass para darle estilos a los diferentes componentes. '
        ], 
        'descriptionShort' : 'Versión del popular juego de buscar parejas creado con React', 
        'imagen' : 'portada.png',
        'tecnologies': [ 'html', 'css', 'js', 'react', 'sass' ],
        'url' : 'emparejados',
        'pictures' : [ `01.png`, `02.png`, `03.png`, `04.png`, `05.png` ],
        'github': 'https://github.com/Caraje/Emparejados',
        'demo': 'https://caraje.github.io/Emparejados/',
    },
    
    {
        
        'id' : '02',
        'title' : 'GifApp',
        'description' : [
            'Usando React, se ha creado una aplicación que hace peticiones a la Api de giphy.com con la búsqueda que introduzca el usuario.',
            'Además, en la pantalla principal se muestran categorías predefinidas por la propia aplicación como los gifs más populares, sobre videojuegos, cine y otras que se muestran en función de los datos recibidos desde giphy.com.',
            'Los estilos se los he dado usando Sass'
        ], 
        'descriptionShort' : 'Buscador de gifs usando la API de giphy.com', 
        'imagen' : 'portada.jpg',
        'tecnologies': [ 'html', 'css', 'js', 'react', 'sass' ],
        'url' : 'GifApp',
        'pictures' : ['01.jpg', '02.jpg', '03.png' ],
        'github': 'https://github.com/Caraje/gifsApp',
        'demo': 'https://caraje.github.io/gifsApp/',

    },
    {
        
        'id' : '03',
        'title' : 'BlackJack',
        'description' : [
            'He creado un juego sencillo de cartas en el que poder practicar con Javascript y el funcionamiento del DOM, así como de la lógica',
            'El funcionamiento del juego es sencillo, al entrar a la app, el jugador puede introducir un nombre para poder empezar su partida.',
            'Durante la partida el jugador solicita a la CPU cartas hasta que cree que pueden sumar un máximo de 21 puntos, en caso de que lo supere el jugador pierde.',
            'Si el jugador no supera los 21 puntos, pasa el turno a la CPU, que ira pidiendo cartas hasta superar la puntuación del jugador o pasarse de 21 puntos.',

        ], 
        'descriptionShort' : 'Juego de cartas BlackJack usando Javascript Vanilla', 
        'imagen' : 'portada.png',
        'tecnologies': [ 'html', 'css', 'js' ],
        'url' : 'BlackJack',
        'pictures' : '',
        'github': 'https://github.com/Caraje/BalckJack',
        'demo': 'https://blackjack-caraje.netlify.app/',

    },

]