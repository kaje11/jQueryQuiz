var Questions = [];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function addQuestion( question, answers, right ){
	var Q = [];
	var r;
	Q[ "question" ] = question;
	Q[ "answers" ] = [];
	
	for( var i = 0;i < answers.length;i++ )
	{
		console.log( answers[ i ] );
		r = 0;
		for( var j = 0;j < right.length;j++ )
			if( right[ j ] == i+1 )
				r = 1;
		
		Q[ "answers" ][ i ] = [ answers[ i ], r ];
		
	}
	
	
	Questions.push( Q );
	
}

addQuestion( "Na misję organizacji składają się", 
			 [ "cele", 
			 "kierunki", 
			 "wartości", 
			 "przesłanki" ],
			 [ 1 ] );
 
addQuestion( "Współczesne ujęcie funkcji zarządzania bazuje na koncepcji opracowanej przez",
			 [ "Frederic W. Taylor", 
			 "H. Fayol", 
			 "E. Mayo",
			 "M. Weber" ],
			 [ 2 ] );

addQuestion( "Które z poniższych ról kierowniczych zalicza się do decyzyjnych",
			 [ "rezprezentant, przywódca, łącznik", 
			 "przedsiębiorca, przeciwdziałający zakłoceniom, negocjator",
			 "obserwator, upowszechniający, negocjator, łącznik" ],
			 [ 2 ] );

addQuestion( "W typologii grup mieszczą się",
			 [ "nieformalna", 
			 "interesu",
			 "zadaniowa",
			 "funkcjonalna" ],
			 [ 1, 2, 3, 4 ] );
			 
addQuestion( "Przedsiębiorca wg. Adizesa to",
			 [ "fachowiec w swojej branży", 
			 "osoba poszukująca nowych badań",
			 "inspirator zmian",
			 "osoba przywiązująca wagę do informacji" ],
			 [ 3 ] );
			 
addQuestion( "Pierwszym etapem procesu planowania jest",
			 [ "określenie obecnej sytuacji czyli zrozumienie otoczenia", 
			 "ustalenie celu lub zbioru celów",
			 "opracowanie cząstkowych planów działania",
			 "określenie mierników efektywności" ],
			 [ 2 ] );			 
			 
addQuestion( "Podejście do motywacji od strony stosunków międzyludzkich zakładało m.in",
			 [ "szerokie stosowanie bodźcowego systemu płac", 
			 "dowartościowywanie roli procesów społecznych w środowisku pracy",
			 "identyfikację potrzeb społecznych" ],
			 [ 2] );			 
			 
addQuestion( "Według H. Mintzberga pełnione przez kierowników role można ująć w następujące grupy",
			 [ "informacyjne", 
			 "interpersonalne",
			 "decyzyjne",
			 "przywódcze" ],
			 [ 1, 2, 3 ] );			 
			 
addQuestion( "Która z poniższych zasad nie została sformułowana przez H. Fayola",
			 [ "zasada autorytetu", 
			 "zasada podziału pracy kierowniczej",
			 "zasada celu nadrzędnego" ],
			 [ 2, 3 ] );				 			 
			 			 
			 
addQuestion( "Twórcy teorii zarządzania administracyjnego",
			 [ "Henri Fayol", 
			 "Lyndall Urwick",
			 "Max Weber",
			 "Chester Barnard",
			 "Luther Halsey Gulick",
			 "Frederick W. Taylor",
			 "Frank Gilbreth",
			 "Abraham Maslow"],
			 [ 1, 2, 3, 4, 5 ] );				 
			 			 						 
			 
addQuestion( "Twórcy teorii zarządzania naukowego",
			 [ "Henri Fayol", 
			 "Lyndall Urwick",
			 "Max Weber",
			 "Chester Barnard",
			 "Harrington Emerson",
			 "Frederick W. Taylor",
			 "Frank Gilbreth",
			 "Lilian Gilbreth",
			 "Henry Gantt"],
			 [ 5, 6, 7, 8, 9 ] );				 
			 			 			
addQuestion( "Twórcy kierunku behawiorystycznego",
			 [ "Henri Fayol",
			 "Hugo Munsterberg",
			 "Mary Parker Follet",
			 "Elton Mayo",
			 "Frederick W. Taylor" ],
			 [ 2, 3, 4 ] );				 
			 			 						 									