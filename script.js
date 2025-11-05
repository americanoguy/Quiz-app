const halloweenQuestions = [
  { sual: "Which spirit is said to return during Halloween night?", cavablar: ["Ghost", "Fairy", "Elf", "Goblin"], duzgun: "Ghost" },
  { sual: "What plant is associated with Halloween traditions?", cavablar: ["Pumpkin", "Sunflower", "Rose", "Cactus"], duzgun: "Pumpkin" },
  { sual: "Which creature is known for rising from the grave?", cavablar: ["Zombie", "Vampire", "Witch", "Cat"], duzgun: "Zombie" },
  { sual: "Which scary film is set on Halloween night?", cavablar: ["Halloween", "Jaws", "E.T.", "Frozen"], duzgun: "Halloween" },
  { sual: "Which candy is shaped like kernels of corn?", cavablar: ["Candy corn", "Gummy bears", "Lollipops", "Chocolate bars"], duzgun: "Candy corn" },
  { sual: "What color combination is most associated with Halloween?", cavablar: ["Orange and black", "Red and white", "Green and purple", "Blue and yellow"], duzgun: "Orange and black" },
  { sual: "What do people traditionally carve for Halloween?", cavablar: ["Pumpkin", "Apple", "Watermelon", "Coconut"], duzgun: "Pumpkin" },
  { sual: "Which animal is often linked to witches?", cavablar: ["Cat", "Dog", "Owl", "Bat"], duzgun: "Cat" },
  { sual: "What do children say when collecting candy?", cavablar: ["Trick or treat!", "Give me candy!", "Boo!", "Happy Halloween!"], duzgun: "Trick or treat!" },
  { sual: "Which month is Halloween celebrated?", cavablar: ["October", "November", "September", "December"], duzgun: "October" },
  { sual: "What day is Halloween celebrated on?", cavablar: ["October 31", "November 1", "October 30", "October 29"], duzgun: "October 31" },
  { sual: "What vegetable was originally used before pumpkins for lanterns?", cavablar: ["Turnip", "Potato", "Apple", "Cabbage"], duzgun: "Turnip" },
  { sual: "Who is said to fly on a broomstick?", cavablar: ["Witch", "Ghost", "Mummy", "Skeleton"], duzgun: "Witch" },
  { sual: "What does a vampire drink?", cavablar: ["Blood", "Juice", "Water", "Wine"], duzgun: "Blood" },
  { sual: "Which monster is afraid of silver?", cavablar: ["Werewolf", "Vampire", "Ghost", "Zombie"], duzgun: "Werewolf" },
  { sual: "What item do you wear to disguise yourself on Halloween?", cavablar: ["Costume", "Uniform", "Cape", "Jacket"], duzgun: "Costume" },
  { sual: "What bird is often seen as a bad omen?", cavablar: ["Crow", "Parrot", "Pigeon", "Owl"], duzgun: "Crow" },
  { sual: "What do bats use to see in the dark?", cavablar: ["Echolocation", "Night vision", "Magic", "Light"], duzgun: "Echolocation" },
  { sual: "What color cat is considered unlucky?", cavablar: ["Black", "White", "Orange", "Gray"], duzgun: "Black" },
  { sual: "What spooky sound does a ghost make?", cavablar: ["Boo!", "Meow!", "Woof!", "Ah!"], duzgun: "Boo!" },
  { sual: "What creature sucks blood at night?", cavablar: ["Vampire", "Werewolf", "Zombie", "Spider"], duzgun: "Vampire" },
  { sual: "Which famous magician died on Halloween?", cavablar: ["Harry Houdini", "David Copperfield", "Criss Angel", "David Blaine"], duzgun: "Harry Houdini" },
  { sual: "What is another name for Halloween?", cavablar: ["All Hallows' Eve", "Harvest Day", "Pumpkin Night", "Spirit Day"], duzgun: "All Hallows' Eve" },
  { sual: "What do spiders spin?", cavablar: ["Webs", "Nests", "Cocoons", "Traps"], duzgun: "Webs" },
  { sual: "What is a group of witches called?", cavablar: ["Coven", "Flock", "Pack", "Clan"], duzgun: "Coven" },
  { sual: "What’s the name of Dracula’s home?", cavablar: ["Transylvania", "London", "Paris", "Rome"], duzgun: "Transylvania" },
  { sual: "What fruit do you bob for on Halloween?", cavablar: ["Apples", "Oranges", "Pears", "Bananas"], duzgun: "Apples" },
  { sual: "Which ghost haunts Hamlet?", cavablar: ["His father", "His friend", "His enemy", "A stranger"], duzgun: "His father" },
  { sual: "What is the name of Frankenstein’s assistant?", cavablar: ["Igor", "Hugo", "Ivan", "Eric"], duzgun: "Igor" },
  { sual: "What do skeletons have but no flesh?", cavablar: ["Bones", "Teeth", "Blood", "Skin"], duzgun: "Bones" },
  { sual: "What shape are witch hats?", cavablar: ["Cone", "Square", "Round", "Flat"], duzgun: "Cone" },
  { sual: "What is said to happen if a black cat crosses your path?", cavablar: ["Bad luck", "Good luck", "Nothing", "Riches"], duzgun: "Bad luck" },
  { sual: "What is Dracula’s title?", cavablar: ["Count", "Lord", "Sir", "King"], duzgun: "Count" },
  { sual: "What do mummies wrap themselves in?", cavablar: ["Bandages", "Paper", "Cloth", "Silk"], duzgun: "Bandages" },
  { sual: "What do you light inside a pumpkin?", cavablar: ["Candle", "Lamp", "Flashlight", "Torch"], duzgun: "Candle" },
  { sual: "What country started Halloween?", cavablar: ["Ireland", "USA", "England", "France"], duzgun: "Ireland" },
  { sual: "What is the main symbol of Halloween?", cavablar: ["Jack-o'-lantern", "Bat", "Ghost", "Spider"], duzgun: "Jack-o'-lantern" },
  { sual: "Which movie features Michael Myers?", cavablar: ["Halloween", "Scream", "The Shining", "It"], duzgun: "Halloween" },
  { sual: "Which color is NOT typical for Halloween?", cavablar: ["Blue", "Orange", "Black", "Purple"], duzgun: "Blue" },
  { sual: "What is a vampire afraid of?", cavablar: ["Sunlight", "Water", "Silver", "Mirrors"], duzgun: "Sunlight" },
  { sual: "What do you call a ghost that helps people?", cavablar: ["Friendly ghost", "Scary ghost", "Evil spirit", "Watcher"], duzgun: "Friendly ghost" },
  { sual: "What night comes after Halloween?", cavablar: ["All Saints’ Day", "Thanksgiving", "New Year’s Eve", "Easter"], duzgun: "All Saints’ Day" },
  { sual: "Which bone protects your brain?", cavablar: ["Skull", "Spine", "Rib", "Leg bone"], duzgun: "Skull" },
  { sual: "What animal do vampires sometimes turn into?", cavablar: ["Bat", "Wolf", "Cat", "Crow"], duzgun: "Bat" },
  { sual: "What is another word for a ghost?", cavablar: ["Spirit", "Shadow", "Monster", "Phantom"], duzgun: "Spirit" },
  { sual: "Which monster is made from body parts?", cavablar: ["Frankenstein", "Zombie", "Vampire", "Mummy"], duzgun: "Frankenstein" },
  { sual: "What sense do zombies lack?", cavablar: ["Smell", "Taste", "Reason", "Touch"], duzgun: "Reason" },
  { sual: "Which Halloween figure laughs wickedly?", cavablar: ["Witch", "Mummy", "Skeleton", "Cat"], duzgun: "Witch" },
  { sual: "What’s the word for fear of Halloween?", cavablar: ["Samhainophobia", "Claustrophobia", "Arachnophobia", "Nyctophobia"], duzgun: "Samhainophobia" },
  { sual: "Which animal says 'hoo' at night?", cavablar: ["Owl", "Bat", "Cat", "Fox"], duzgun: "Owl" },
  { sual: "What do people wear on their faces on Halloween?", cavablar: ["Masks", "Glasses", "Crowns", "Hats"], duzgun: "Masks" }
];


const geographyQuestions = [
  { sual: "What is the capital of France?", cavablar: ["Paris", "London", "Berlin", "Madrid"], duzgun: "Paris" },
  { sual: "Which is the largest continent?", cavablar: ["Asia", "Africa", "Europe", "Australia"], duzgun: "Asia" },
  { sual: "Which ocean is the biggest?", cavablar: ["Pacific", "Atlantic", "Indian", "Arctic"], duzgun: "Pacific" },
  { sual: "What is the longest river in the world?", cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"], duzgun: "Nile" },
  { sual: "Which country has the largest population?", cavablar: ["China", "India", "USA", "Indonesia"], duzgun: "China" },
  { sual: "What is the capital of Japan?", cavablar: ["Tokyo", "Beijing", "Seoul", "Bangkok"], duzgun: "Tokyo" },
  { sual: "Which desert is the largest in the world?", cavablar: ["Sahara", "Arabian", "Gobi", "Kalahari"], duzgun: "Sahara" },
  { sual: "Which country has the most islands?", cavablar: ["Sweden", "Indonesia", "Philippines", "Canada"], duzgun: "Sweden" },
  { sual: "Mount Everest is located in which mountain range?", cavablar: ["Himalayas", "Andes", "Rockies", "Alps"], duzgun: "Himalayas" },
  { sual: "Which is the smallest country in the world?", cavablar: ["Vatican City", "Monaco", "San Marino", "Malta"], duzgun: "Vatican City" },
  { sual: "What is the capital of Australia?", cavablar: ["Canberra", "Sydney", "Melbourne", "Perth"], duzgun: "Canberra" },
  { sual: "Which river runs through Egypt?", cavablar: ["Nile", "Amazon", "Congo", "Yangtze"], duzgun: "Nile" },
  { sual: "What is the largest country in the world by area?", cavablar: ["Russia", "Canada", "China", "USA"], duzgun: "Russia" },
  { sual: "Which continent is known as the 'Dark Continent'?", cavablar: ["Africa", "Asia", "Europe", "South America"], duzgun: "Africa" },
  { sual: "Which country is also known as the Land of the Rising Sun?", cavablar: ["Japan", "China", "Thailand", "Vietnam"], duzgun: "Japan" },
  { sual: "What is the capital of Canada?", cavablar: ["Ottawa", "Toronto", "Vancouver", "Montreal"], duzgun: "Ottawa" },
  { sual: "Which ocean is on the east coast of the United States?", cavablar: ["Atlantic", "Pacific", "Indian", "Arctic"], duzgun: "Atlantic" },
  { sual: "What is the capital of Italy?", cavablar: ["Rome", "Milan", "Venice", "Florence"], duzgun: "Rome" },
  { sual: "What is the largest desert in Asia?", cavablar: ["Gobi", "Thar", "Arabian", "Karakum"], duzgun: "Gobi" },
  { sual: "Which mountain range separates Europe and Asia?", cavablar: ["Ural Mountains", "Alps", "Carpathians", "Caucasus"], duzgun: "Ural Mountains" },
  { sual: "Which country has the city of Istanbul?", cavablar: ["Turkey", "Greece", "Egypt", "Iran"], duzgun: "Turkey" },
  { sual: "Which continent is the driest?", cavablar: ["Antarctica", "Africa", "Asia", "Australia"], duzgun: "Antarctica" },
  { sual: "Which US state has the Grand Canyon?", cavablar: ["Arizona", "Nevada", "Utah", "California"], duzgun: "Arizona" },
  { sual: "Which is the largest lake in the world?", cavablar: ["Caspian Sea", "Superior", "Victoria", "Baikal"], duzgun: "Caspian Sea" },
  { sual: "Which is the coldest place on Earth?", cavablar: ["Antarctica", "Arctic", "Siberia", "Greenland"], duzgun: "Antarctica" },
  { sual: "What is the capital of Germany?", cavablar: ["Berlin", "Munich", "Hamburg", "Frankfurt"], duzgun: "Berlin" },
  { sual: "Which country is known for the Eiffel Tower?", cavablar: ["France", "Italy", "Germany", "Spain"], duzgun: "France" },
  { sual: "What is the capital of Spain?", cavablar: ["Madrid", "Barcelona", "Valencia", "Seville"], duzgun: "Madrid" },
  { sual: "Which African country is famous for pyramids?", cavablar: ["Egypt", "Sudan", "Ethiopia", "Morocco"], duzgun: "Egypt" },
  { sual: "Which country has the longest coastline?", cavablar: ["Canada", "Australia", "Russia", "Indonesia"], duzgun: "Canada" },
  { sual: "Which is the largest country in South America?", cavablar: ["Brazil", "Argentina", "Peru", "Colombia"], duzgun: "Brazil" },
  { sual: "Which country is home to the Amazon Rainforest?", cavablar: ["Brazil", "Peru", "Colombia", "Venezuela"], duzgun: "Brazil" },
  { sual: "Which European country is famous for tulips and windmills?", cavablar: ["Netherlands", "Belgium", "Denmark", "Sweden"], duzgun: "Netherlands" },
  { sual: "What is the capital of China?", cavablar: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"], duzgun: "Beijing" },
  { sual: "Which continent has the most countries?", cavablar: ["Africa", "Europe", "Asia", "South America"], duzgun: "Africa" },
  { sual: "Which river flows through London?", cavablar: ["Thames", "Seine", "Danube", "Rhine"], duzgun: "Thames" },
  { sual: "Which ocean lies between Africa and Australia?", cavablar: ["Indian", "Pacific", "Atlantic", "Arctic"], duzgun: "Indian" },
  { sual: "Which country is known as the Land of Fire and Ice?", cavablar: ["Iceland", "Greenland", "Norway", "Finland"], duzgun: "Iceland" },
  { sual: "Which mountain is the highest in Africa?", cavablar: ["Kilimanjaro", "Kenya", "Ruwenzori", "Atlas"], duzgun: "Kilimanjaro" },
  { sual: "What is the capital of Russia?", cavablar: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"], duzgun: "Moscow" },
  { sual: "What is the largest island in the world?", cavablar: ["Greenland", "New Guinea", "Borneo", "Madagascar"], duzgun: "Greenland" },
  { sual: "What is the capital of Egypt?", cavablar: ["Cairo", "Alexandria", "Giza", "Luxor"], duzgun: "Cairo" },
  { sual: "Which is the deepest ocean?", cavablar: ["Pacific", "Atlantic", "Indian", "Arctic"], duzgun: "Pacific" },
  { sual: "Which European city has the Colosseum?", cavablar: ["Rome", "Athens", "Paris", "Madrid"], duzgun: "Rome" },
  { sual: "What is the capital of India?", cavablar: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], duzgun: "New Delhi" },
  { sual: "Which country is located on two continents?", cavablar: ["Turkey", "Russia", "Egypt", "Kazakhstan"], duzgun: "Turkey" },
  { sual: "Which sea separates Europe and Africa?", cavablar: ["Mediterranean Sea", "Red Sea", "Black Sea", "Caspian Sea"], duzgun: "Mediterranean Sea" },
  { sual: "Which country has the city of Rio de Janeiro?", cavablar: ["Brazil", "Argentina", "Chile", "Peru"], duzgun: "Brazil" },
  { sual: "What is the capital of Mexico?", cavablar: ["Mexico City", "Guadalajara", "Cancun", "Monterrey"], duzgun: "Mexico City" },
  { sual: "Which continent is the second largest?", cavablar: ["Africa", "Asia", "North America", "Europe"], duzgun: "Africa" },
  { sual: "Which country is known for the Great Barrier Reef?", cavablar: ["Australia", "Indonesia", "Philippines", "New Zealand"], duzgun: "Australia" }
];


const historyQuestions = [
  { sual: "Who was the first President of the United States?", cavablar: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], duzgun: "George Washington" },
  { sual: "In which year did World War II end?", cavablar: ["1945", "1939", "1918", "1963"], duzgun: "1945" },
  { sual: "Which empire was ruled by Julius Caesar?", cavablar: ["Roman Empire", "Ottoman Empire", "British Empire", "Persian Empire"], duzgun: "Roman Empire" },
  { sual: "When did the French Revolution begin?", cavablar: ["1789", "1776", "1804", "1799"], duzgun: "1789" },
  { sual: "Who discovered America in 1492?", cavablar: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], duzgun: "Christopher Columbus" },
  { sual: "Who was known as the Iron Lady?", cavablar: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel", "Queen Victoria"], duzgun: "Margaret Thatcher" },
  { sual: "What wall fell in 1989, symbolizing the end of the Cold War?", cavablar: ["Berlin Wall", "Great Wall of China", "Hadrian’s Wall", "Western Wall"], duzgun: "Berlin Wall" },
  { sual: "Who was the leader of Nazi Germany?", cavablar: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Winston Churchill"], duzgun: "Adolf Hitler" },
  { sual: "Who wrote the Declaration of Independence?", cavablar: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], duzgun: "Thomas Jefferson" },
  { sual: "What year did World War I begin?", cavablar: ["1914", "1918", "1939", "1920"], duzgun: "1914" },
  { sual: "Who was the first man to step on the moon?", cavablar: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], duzgun: "Neil Armstrong" },
  { sual: "Who was the British Prime Minister during World War II?", cavablar: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Tony Blair"], duzgun: "Winston Churchill" },
  { sual: "In which city was the Titanic built?", cavablar: ["Belfast", "Liverpool", "London", "Glasgow"], duzgun: "Belfast" },
  { sual: "What was the name of the ship on which the Pilgrims traveled to America?", cavablar: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"], duzgun: "Mayflower" },
  { sual: "Who was assassinated in Sarajevo in 1914, triggering World War I?", cavablar: ["Archduke Franz Ferdinand", "Kaiser Wilhelm II", "Nicholas II", "Gavrilo Princip"], duzgun: "Archduke Franz Ferdinand" },
  { sual: "What ancient civilization built the pyramids?", cavablar: ["Egyptian", "Greek", "Roman", "Mayan"], duzgun: "Egyptian" },
  { sual: "Which explorer first circumnavigated the globe?", cavablar: ["Ferdinand Magellan", "Christopher Columbus", "James Cook", "Marco Polo"], duzgun: "Ferdinand Magellan" },
  { sual: "Who was the first emperor of China?", cavablar: ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Confucius"], duzgun: "Qin Shi Huang" },
  { sual: "What year did the American Civil War begin?", cavablar: ["1861", "1776", "1812", "1865"], duzgun: "1861" },
  { sual: "Who was the 16th President of the United States?", cavablar: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "James Buchanan"], duzgun: "Abraham Lincoln" },
  { sual: "Which country was the first to grant women the right to vote?", cavablar: ["New Zealand", "USA", "UK", "Sweden"], duzgun: "New Zealand" },
  { sual: "Which empire built the Colosseum?", cavablar: ["Roman Empire", "Greek Empire", "Byzantine Empire", "Ottoman Empire"], duzgun: "Roman Empire" },
  { sual: "Who was known as the Maid of Orleans?", cavablar: ["Joan of Arc", "Marie Antoinette", "Cleopatra", "Queen Elizabeth I"], duzgun: "Joan of Arc" },
  { sual: "What year did the United States declare independence?", cavablar: ["1776", "1789", "1756", "1804"], duzgun: "1776" },
  { sual: "Who was the first human in space?", cavablar: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Buzz Aldrin"], duzgun: "Yuri Gagarin" },
  { sual: "Which war was fought between the North and South regions of the United States?", cavablar: ["Civil War", "Revolutionary War", "Vietnam War", "Korean War"], duzgun: "Civil War" },
  { sual: "What was the main language of the Roman Empire?", cavablar: ["Latin", "Greek", "Italian", "German"], duzgun: "Latin" },
  { sual: "Who was the founder of the Mongol Empire?", cavablar: ["Genghis Khan", "Kublai Khan", "Attila the Hun", "Tamerlane"], duzgun: "Genghis Khan" },
  { sual: "In which year did the Berlin Wall fall?", cavablar: ["1989", "1991", "1979", "1995"], duzgun: "1989" },
  { sual: "Which famous document was signed in 1215?", cavablar: ["Magna Carta", "Bill of Rights", "Declaration of Independence", "Constitution"], duzgun: "Magna Carta" },
  { sual: "Who was the first female Prime Minister of the UK?", cavablar: ["Margaret Thatcher", "Theresa May", "Queen Victoria", "Elizabeth I"], duzgun: "Margaret Thatcher" },
  { sual: "Which ancient wonder was located in Babylon?", cavablar: ["Hanging Gardens", "Great Pyramid", "Colossus of Rhodes", "Temple of Artemis"], duzgun: "Hanging Gardens" },
  { sual: "Who painted the Mona Lisa?", cavablar: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], duzgun: "Leonardo da Vinci" },
  { sual: "Which country built the Great Wall?", cavablar: ["China", "Japan", "India", "Mongolia"], duzgun: "China" },
  { sual: "Who was the last Tsar of Russia?", cavablar: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan the Terrible"], duzgun: "Nicholas II" },
  { sual: "What was the name of the first successful English colony in America?", cavablar: ["Jamestown", "Plymouth", "Roanoke", "Boston"], duzgun: "Jamestown" },
  { sual: "Who was the Greek god of war?", cavablar: ["Ares", "Zeus", "Apollo", "Poseidon"], duzgun: "Ares" },
  { sual: "Which war ended with the Treaty of Versailles?", cavablar: ["World War I", "World War II", "Napoleonic Wars", "Crimean War"], duzgun: "World War I" },
  { sual: "Who was the first African American President of the USA?", cavablar: ["Barack Obama", "Martin Luther King Jr.", "Jesse Jackson", "Colin Powell"], duzgun: "Barack Obama" },
  { sual: "In which year did man first walk on the moon?", cavablar: ["1969", "1959", "1972", "1965"], duzgun: "1969" },
  { sual: "Which war was fought from 1950 to 1953?", cavablar: ["Korean War", "Vietnam War", "World War II", "Cold War"], duzgun: "Korean War" },
  { sual: "Who invented the telephone?", cavablar: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], duzgun: "Alexander Graham Bell" },
  { sual: "Who was the Egyptian queen famous for her beauty?", cavablar: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], duzgun: "Cleopatra" },
  { sual: "What ancient city was destroyed by a volcanic eruption in 79 AD?", cavablar: ["Pompeii", "Athens", "Rome", "Troy"], duzgun: "Pompeii" },
  { sual: "Who was the first President of Russia after the Soviet Union?", cavablar: ["Boris Yeltsin", "Mikhail Gorbachev", "Vladimir Putin", "Leonid Brezhnev"], duzgun: "Boris Yeltsin" },
  { sual: "What was the name of the first man-made satellite?", cavablar: ["Sputnik", "Apollo", "Voyager", "Explorer"], duzgun: "Sputnik" },
  { sual: "Who was known as the Father of Modern Physics?", cavablar: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], duzgun: "Albert Einstein" },
  { sual: "Which ancient civilization built Machu Picchu?", cavablar: ["Inca", "Aztec", "Maya", "Olmec"], duzgun: "Inca" },
  { sual: "Who was the founder of Islam?", cavablar: ["Prophet Muhammad", "Jesus Christ", "Buddha", "Moses"], duzgun: "Prophet Muhammad" },
  { sual: "Who discovered penicillin?", cavablar: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"], duzgun: "Alexander Fleming" }
];


const movieQuestions = [
  { sual: "Who directed the movie 'Inception'?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], duzgun: "Christopher Nolan" },
  { sual: "Which movie won the Oscar for Best Picture in 2020?", cavablar: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"], duzgun: "Parasite" },
  { sual: "Who played Jack in the movie 'Titanic'?", cavablar: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"], duzgun: "Leonardo DiCaprio" },
  { sual: "What is the name of the toy cowboy in 'Toy Story'?", cavablar: ["Woody", "Buzz Lightyear", "Andy", "Jessie"], duzgun: "Woody" },
  { sual: "Who is the main villain in 'Star Wars'?", cavablar: ["Darth Vader", "Luke Skywalker", "Han Solo", "Yoda"], duzgun: "Darth Vader" },
  { sual: "Who directed 'Avatar'?", cavablar: ["James Cameron", "Peter Jackson", "Ridley Scott", "Steven Spielberg"], duzgun: "James Cameron" },
  { sual: "What year was the first 'Harry Potter' movie released?", cavablar: ["2001", "2000", "2002", "2003"], duzgun: "2001" },
  { sual: "Who played Iron Man in the Marvel movies?", cavablar: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Tom Holland"], duzgun: "Robert Downey Jr." },
  { sual: "What is the highest-grossing movie of all time?", cavablar: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], duzgun: "Avatar" },
  { sual: "Which movie features the song 'Let It Go'?", cavablar: ["Frozen", "Moana", "Tangled", "Cinderella"], duzgun: "Frozen" },
  { sual: "Who played the Joker in 'The Dark Knight'?", cavablar: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], duzgun: "Heath Ledger" },
  { sual: "What is the name of the hobbit played by Elijah Wood?", cavablar: ["Frodo Baggins", "Bilbo Baggins", "Samwise Gamgee", "Pippin Took"], duzgun: "Frodo Baggins" },
  { sual: "Who directed 'Jurassic Park'?", cavablar: ["Steven Spielberg", "James Cameron", "Michael Bay", "George Lucas"], duzgun: "Steven Spielberg" },
  { sual: "Which superhero is also known as the Caped Crusader?", cavablar: ["Batman", "Superman", "Spider-Man", "Iron Man"], duzgun: "Batman" },
  { sual: "In which movie does Tom Hanks say 'Life is like a box of chocolates'?", cavablar: ["Forrest Gump", "Cast Away", "Big", "Saving Private Ryan"], duzgun: "Forrest Gump" },
  { sual: "Who voiced Shrek?", cavablar: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"], duzgun: "Mike Myers" },
  { sual: "What is the name of the princess in 'Aladdin'?", cavablar: ["Jasmine", "Ariel", "Belle", "Elsa"], duzgun: "Jasmine" },
  { sual: "Which movie features a clownfish named Nemo?", cavablar: ["Finding Nemo", "Shark Tale", "The Little Mermaid", "Happy Feet"], duzgun: "Finding Nemo" },
  { sual: "Who directed 'The Godfather'?", cavablar: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Stanley Kubrick"], duzgun: "Francis Ford Coppola" },
  { sual: "Which movie features the character 'Jack Sparrow'?", cavablar: ["Pirates of the Caribbean", "Peter Pan", "Moana", "Treasure Planet"], duzgun: "Pirates of the Caribbean" },
  { sual: "Who played Black Panther?", cavablar: ["Chadwick Boseman", "Michael B. Jordan", "Anthony Mackie", "Idris Elba"], duzgun: "Chadwick Boseman" },
  { sual: "What movie is about a young lion named Simba?", cavablar: ["The Lion King", "Madagascar", "Zootopia", "Jungle Book"], duzgun: "The Lion King" },
  { sual: "In 'The Matrix', what color pill does Neo take?", cavablar: ["Red", "Blue", "Green", "Yellow"], duzgun: "Red" },
  { sual: "Who played Hermione Granger in 'Harry Potter'?", cavablar: ["Emma Watson", "Emma Stone", "Natalie Portman", "Anne Hathaway"], duzgun: "Emma Watson" },
  { sual: "Which movie features a computer named HAL 9000?", cavablar: ["2001: A Space Odyssey", "Interstellar", "The Terminator", "Blade Runner"], duzgun: "2001: A Space Odyssey" },
  { sual: "Which Pixar movie is about emotions inside a girl’s mind?", cavablar: ["Inside Out", "Up", "Soul", "Coco"], duzgun: "Inside Out" },
  { sual: "Who played Wolverine in the 'X-Men' movies?", cavablar: ["Hugh Jackman", "Chris Hemsworth", "Ryan Reynolds", "Tom Hardy"], duzgun: "Hugh Jackman" },
  { sual: "Which movie features the quote 'I'm the king of the world!'?", cavablar: ["Titanic", "Avatar", "The Revenant", "Cast Away"], duzgun: "Titanic" },
  { sual: "Who directed 'The Lord of the Rings' trilogy?", cavablar: ["Peter Jackson", "George Lucas", "Ridley Scott", "James Cameron"], duzgun: "Peter Jackson" },
  { sual: "What is the name of the snowman in 'Frozen'?", cavablar: ["Olaf", "Sven", "Kristoff", "Hans"], duzgun: "Olaf" },
  { sual: "Which movie features the character 'Buzz Lightyear'?", cavablar: ["Toy Story", "Monsters Inc", "Finding Nemo", "Cars"], duzgun: "Toy Story" },
  { sual: "Who played Spider-Man in the 2002 movie?", cavablar: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Jake Gyllenhaal"], duzgun: "Tobey Maguire" },
  { sual: "What movie is about a robot left alone on Earth?", cavablar: ["WALL-E", "Robots", "The Iron Giant", "I, Robot"], duzgun: "WALL-E" },
  { sual: "Who directed 'Pulp Fiction'?", cavablar: ["Quentin Tarantino", "Martin Scorsese", "Guy Ritchie", "Francis Ford Coppola"], duzgun: "Quentin Tarantino" },
  { sual: "Which movie features a large ape named King Kong?", cavablar: ["King Kong", "Godzilla", "Jurassic Park", "Kong: Skull Island"], duzgun: "King Kong" },
  { sual: "Who played Joker in the 2019 movie 'Joker'?", cavablar: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], duzgun: "Joaquin Phoenix" },
  { sual: "What movie features a robot named R2-D2?", cavablar: ["Star Wars", "Star Trek", "The Matrix", "Blade Runner"], duzgun: "Star Wars" },
  { sual: "What movie features a clown named Pennywise?", cavablar: ["It", "The Nun", "The Conjuring", "Annabelle"], duzgun: "It" },
  { sual: "Who played Captain America?", cavablar: ["Chris Evans", "Chris Hemsworth", "Chris Pratt", "Robert Downey Jr."], duzgun: "Chris Evans" },
  { sual: "Which movie takes place in the fictional African nation of Wakanda?", cavablar: ["Black Panther", "Coming to America", "Avatar", "The Lion King"], duzgun: "Black Panther" },
  { sual: "Who directed 'Interstellar'?", cavablar: ["Christopher Nolan", "Ridley Scott", "Denis Villeneuve", "James Cameron"], duzgun: "Christopher Nolan" },
  { sual: "What movie features a talking donkey?", cavablar: ["Shrek", "Frozen", "Zootopia", "Encanto"], duzgun: "Shrek" },
  { sual: "Who played the character 'John Wick'?", cavablar: ["Keanu Reeves", "Tom Cruise", "Matt Damon", "Brad Pitt"], duzgun: "Keanu Reeves" },
  { sual: "Which movie is about dreams within dreams?", cavablar: ["Inception", "Shutter Island", "The Matrix", "Tenet"], duzgun: "Inception" },
  { sual: "Which movie features the quote 'May the Force be with you'?", cavablar: ["Star Wars", "Star Trek", "The Avengers", "Guardians of the Galaxy"], duzgun: "Star Wars" },
  { sual: "Who directed 'The Dark Knight'?", cavablar: ["Christopher Nolan", "Zack Snyder", "Tim Burton", "Sam Raimi"], duzgun: "Christopher Nolan" },
  { sual: "Which movie won the first Academy Award for Best Picture?", cavablar: ["Wings", "Gone with the Wind", "Casablanca", "Citizen Kane"], duzgun: "Wings" },
  { sual: "What is the name of the princess in 'The Little Mermaid'?", cavablar: ["Ariel", "Belle", "Rapunzel", "Elsa"], duzgun: "Ariel" },
  { sual: "Who played the Terminator?", cavablar: ["Arnold Schwarzenegger", "Sylvester Stallone", "Bruce Willis", "Dwayne Johnson"], duzgun: "Arnold Schwarzenegger" },
  { sual: "Which movie features the superhero team called 'The Avengers'?", cavablar: ["The Avengers", "Justice League", "X-Men", "Fantastic Four"], duzgun: "The Avengers" }
];


// =================================================================================================================

const halloweenQuestionsAze = [
  { sual: "Halloween gecəsi hansı ruhun geri qayıtdığı deyilir?", cavablar: ["Xortdan", "Pəri", "Cırtdan", "Cin"], duzgun: "Xortdan" },
  { sual: "Halloween ənənələri ilə hansı bitki əlaqələndirilir?", cavablar: ["Balqabaq", "Günəbaxan", "Qızılgül", "Kaktus"], duzgun: "Balqabaq" },
  { sual: "Hansı varlıq məzardan qalxır?", cavablar: ["Zombi", "Vampir", "Cadugər", "Pişik"], duzgun: "Zombi" },
  { sual: "Hansı qorxulu film Halloween gecəsində baş verir?", cavablar: ["Halloween", "Çənə (Jaws)", "E.T.", "Buzlu (Frozen)"], duzgun: "Halloween" },
  { sual: "Qarğıdalı dənələrinə bənzər formaya malik hansı konfetdir?", cavablar: ["Konfet qarğıdalı", "Jelibonlar", "Lollipop", "Şokolad"], duzgun: "Konfet qarğıdalı" },
  { sual: "Halloween üçün ən çox istifadə olunan rənglər hansılardır?", cavablar: ["Narıncı və qara", "Qırmızı və ağ", "Yaşıl və bənövşəyi", "Mavi və sarı"], duzgun: "Narıncı və qara" },
  { sual: "Halloween üçün insanlar ən çox nəyi oyurlar?", cavablar: ["Balqabaq", "Alma", "Qarpız", "Hind qozu"], duzgun: "Balqabaq" },
  { sual: "Hansı heyvan cadugərlərlə əlaqələndirilir?", cavablar: ["Pişik", "İt", "Bayquş", "Yarasa"], duzgun: "Pişik" },
  { sual: "Uşaqlar konfet toplamaq üçün nə deyirlər?", cavablar: ["Trick or treat!", "Mənə konfet ver!", "Buu!", "Xoş Halloween!"], duzgun: "Trick or treat!" },
  { sual: "Halloween hansı ayda qeyd olunur?", cavablar: ["Oktyabr", "Noyabr", "Sentyabr", "Dekabr"], duzgun: "Oktyabr" },
  { sual: "Halloween hansı gündə qeyd olunur?", cavablar: ["31 oktyabr", "1 noyabr", "30 oktyabr", "29 oktyabr"], duzgun: "31 oktyabr" },
  { sual: "Balqabaqlardan əvvəl fənər düzəltmək üçün hansı tərəvəz istifadə olunurdu?", cavablar: ["Şalğam", "Kartof", "Alma", "Kələm"], duzgun: "Şalğam" },
  { sual: "Süpürgə ilə uçan kimdir?", cavablar: ["Cadugər", "Xortdan", "Mumiya", "İskelet"], duzgun: "Cadugər" },
  { sual: "Vampir nə içir?", cavablar: ["Qan", "Şirə", "Su", "Şərab"], duzgun: "Qan" },
  { sual: "Hansı məxluq gümüşdən qorxur?", cavablar: ["Canavaradam (Kurtadam)", "Vampir", "Ruh", "Zombi"], duzgun: "Canavaradam (Kurtadam)" },
  { sual: "Halloween üçün insan nə geyinir?", cavablar: ["Kostyum", "Forma", "Kloş", "Ceket"], duzgun: "Kostyum" },
  { sual: "Hansı quş pis əlamət sayılır?", cavablar: ["Qarga", "Tutuquşu", "Göyərçin", "Bayquş"], duzgun: "Qarga" },
  { sual: "Yarasalar qaranlıqda görmək üçün nə istifadə edirlər?", cavablar: ["Ekolokasiya", "Gecə görmə", "Sehr", "İşıq"], duzgun: "Ekolokasiya" },
  { sual: "Hansı rəngdə pişik bədbəxtlik gətirir?", cavablar: ["Qara", "Ağ", "Narıncı", "Boz"], duzgun: "Qara" },
  { sual: "Xortdan hansı səsi çıxarır?", cavablar: ["Buu!", "Miyav!", "Hav!", "Ah!"], duzgun: "Buu!" },
  { sual: "Hansı varlıq gecələr qan sorur?", cavablar: ["Vampir", "Kurtadam", "Zombi", "Hörümçək"], duzgun: "Vampir" },
  { sual: "Hansı məşhur sehrbaz Halloween günü vəfat edib?", cavablar: ["Harri Hudini", "Devid Koperfild", "Kris Eycel", "Devid Bleyin"], duzgun: "Harri Hudini" },
  { sual: "Halloween-in başqa adı nədir?", cavablar: ["Müqəddəslər Gecəsi (All Hallows' Eve)", "Məhsul Bayramı", "Balqabaq Gecəsi", "Ruhlar Günü"], duzgun: "Müqəddəslər Gecəsi (All Hallows' Eve)" },
  { sual: "Hörümçəklər nə toxuyur?", cavablar: ["Tor", "Yuva", "Koza", "Tələ"], duzgun: "Tor" },
  { sual: "Cadugərlərin bir qrupuna nə deyilir?", cavablar: ["Koven", "Qrup", "Dəstə", "Klan"], duzgun: "Koven" },
  { sual: "Drakulanın evi haradadır?", cavablar: ["Transilvaniya", "London", "Paris", "Roma"], duzgun: "Transilvaniya" },
  { sual: "Halloween-də insanlar hansı meyvəni suda tutmağa çalışırlar?", cavablar: ["Alma", "Portağal", "Armud", "Banan"], duzgun: "Alma" },
  { sual: "Hamleti hansı ruh izləyir?", cavablar: ["Atasının ruhu", "Dostu", "Düşməni", "Yad biri"], duzgun: "Atasının ruhu" },
  { sual: "Frankenşteynin köməkçisinin adı nədir?", cavablar: ["İqor", "Hüqo", "İvan", "Erik"], duzgun: "İqor" },
  { sual: "İskeletlərin nəyi var, amma ətləri yoxdur?", cavablar: ["Sümüklər", "Dişlər", "Qan", "Dəri"], duzgun: "Sümüklər" },
  { sual: "Cadugər papaqları hansı formadadır?", cavablar: ["Konus", "Düzbucaqlı", "Dairəvi", "Yastı"], duzgun: "Konus" },
  { sual: "Qara pişik yolundan keçəndə nə olur?", cavablar: ["Bədbəxtlik", "Uğur", "Heç nə", "Zənginlik"], duzgun: "Bədbəxtlik" },
  { sual: "Drakulanın titulu nədir?", cavablar: ["Qraf", "Lord", "Cənab", "Kral"], duzgun: "Qraf" },
  { sual: "Mumiyalar nə ilə sarınır?", cavablar: ["Bint", "Kağız", "Parça", "İpək"], duzgun: "Bint" },
  { sual: "Balqabağın içinə nə qoyulur?", cavablar: ["Şam", "Lampa", "Fənər", "Məşəl"], duzgun: "Şam" },
  { sual: "Halloween hansı ölkədə yaranıb?", cavablar: ["İrlandiya", "ABŞ", "İngiltərə", "Fransa"], duzgun: "İrlandiya" },
  { sual: "Halloween-in əsas simvolu hansıdır?", cavablar: ["Balqabaq fənəri (Jack-o'-lantern)", "Yarasa", "Ruh", "Hörümçək"], duzgun: "Balqabaq fənəri (Jack-o'-lantern)" },
  { sual: "Hansı film Mixael Mayers haqqında danışır?", cavablar: ["Halloween", "Qışqırıq (Scream)", "Parıltı (The Shining)", "O (It)"], duzgun: "Halloween" },
  { sual: "Aşağıdakılardan hansı Halloween rəngi deyil?", cavablar: ["Mavi", "Narıncı", "Qara", "Bənövşəyi"], duzgun: "Mavi" },
  { sual: "Vampir nədən qorxur?", cavablar: ["Günəş işığı", "Su", "Gümüş", "Güzgü"], duzgun: "Günəş işığı" },
  { sual: "İnsanlara kömək edən xortdana nə deyilir?", cavablar: ["Dost ruh", "Qorxulu ruh", "Pis ruh", "İzləyici"], duzgun: "Dost ruh" },
  { sual: "Halloween-dən sonrakı gecə nə adlanır?", cavablar: ["Bütün Müqəddəslər Günü (All Saints’ Day)", "Şükran Günü", "Yeni il gecəsi", "Pasxa"], duzgun: "Bütün Müqəddəslər Günü (All Saints’ Day)" },
  { sual: "Hansı sümük beyni qoruyur?", cavablar: ["Kəllə", "Onurğa", "Qabırğa", "Ayaq sümüyü"], duzgun: "Kəllə" },
  { sual: "Vampirlər bəzən hansı heyvana çevrilirlər?", cavablar: ["Yarasa", "Canavar", "Pişik", "Qarga"], duzgun: "Yarasa" },
  { sual: "Ruhun başqa adı nədir?", cavablar: ["Cən", "Kölgə", "Canavar", "Xəyal"], duzgun: "Cən" },
  { sual: "Hansı məxluq bədən hissələrindən yığılır?", cavablar: ["Frankenşteyn", "Zombi", "Vampir", "Mumiya"], duzgun: "Frankenşteyn" },
  { sual: "Zombilərin hansı duyğusu yoxdur?", cavablar: ["Ağıl", "Qoxu", "Dad", "Toxunma"], duzgun: "Ağıl" },
  { sual: "Hansı Halloween obrazı pis gülüşü ilə tanınır?", cavablar: ["Cadugər", "Mumiya", "İskelet", "Pişik"], duzgun: "Cadugər" },
  { sual: "Halloween qorxusu necə adlanır?", cavablar: ["Samxaynofobiya (Samhainophobia)", "Qapalı yerlər qorxusu", "Hörümçək qorxusu", "Qaranlıq qorxusu"], duzgun: "Samxaynofobiya (Samhainophobia)" },
  { sual: "Gecələr 'huhu' deyən heyvan hansıdır?", cavablar: ["Bayquş", "Yarasa", "Pişik", "Tülkü"], duzgun: "Bayquş" },
  { sual: "Halloween-də insanlar üzlərinə nə taxırlar?", cavablar: ["Maska", "Eynək", "Tac", "Papaq"], duzgun: "Maska" }
];

const geographyQuestionsAze = [
  { sual: "Fransanın paytaxtı haradır?", cavablar: ["Paris", "London", "Berlin", "Madrid"], duzgun: "Paris" },
  { sual: "Ən böyük qitə hansıdır?", cavablar: ["Asiya", "Afrika", "Avropa", "Avstraliya"], duzgun: "Asiya" },
  { sual: "Ən böyük okean hansıdır?", cavablar: ["Sakit okean", "Atlantik okean", "Hind okeanı", "Arktika okeanı"], duzgun: "Sakit okean" },
  { sual: "Dünyanın ən uzun çayı hansıdır?", cavablar: ["Nil", "Amazon", "Yanszi", "Missisipi"], duzgun: "Nil" },
  { sual: "Ən çox əhaliyə malik ölkə hansıdır?", cavablar: ["Çin", "Hindistan", "ABŞ", "İndoneziya"], duzgun: "Çin" },
  { sual: "Dünyanın ən böyük səhrası hansıdır?", cavablar: ["Sahara", "Qobi", "Kalahari", "Arabistan"], duzgun: "Sahara" },
  { sual: "Azərbaycanın paytaxtı haradır?", cavablar: ["Bakı", "Gəncə", "Naxçıvan", "Sumqayıt"], duzgun: "Bakı" },
  { sual: "Yer kürəsində neçə materik var?", cavablar: ["5", "6", "7", "8"], duzgun: "7" },
  { sual: "Afrikanın ən böyük ölkəsi hansıdır?", cavablar: ["Əlcəzair", "Misir", "Nigeriya", "Konqo"], duzgun: "Əlcəzair" },
  { sual: "Avropanın ən uzun çayı hansıdır?", cavablar: ["Volqa", "Dunay", "Reyn", "Seine"], duzgun: "Volqa" },
  { sual: "Dünyanın ən yüksək zirvəsi hansıdır?", cavablar: ["Everest", "K2", "Kançencanqa", "Makalu"], duzgun: "Everest" },
  { sual: "Azərbaycan hansı materikdə yerləşir?", cavablar: ["Asiya", "Avropa", "Afrika", "Amerika"], duzgun: "Asiya" },
  { sual: "Yaponiyanın paytaxtı haradır?", cavablar: ["Tokio", "Osaka", "Kioto", "Naqooya"], duzgun: "Tokio" },
  { sual: "Ən kiçik materik hansıdır?", cavablar: ["Avstraliya", "Avropa", "Cənubi Amerika", "Antarktida"], duzgun: "Avstraliya" },
  { sual: "İtaliyanın paytaxtı haradır?", cavablar: ["Roma", "Milan", "Venesiya", "Florensiya"], duzgun: "Roma" },
  { sual: "Dünyanın ən dərin gölü hansıdır?", cavablar: ["Baykal", "Tanganika", "Xazar", "Superior"], duzgun: "Baykal" },
  { sual: "Dünyanın ən böyük ada ölkəsi hansıdır?", cavablar: ["İndoneziya", "Filippin", "Yaponiya", "Malayziya"], duzgun: "İndoneziya" },
  { sual: "Böyük Çin Səddi hansı ölkədə yerləşir?", cavablar: ["Çin", "Monqolustan", "Vyetnam", "Koreya"], duzgun: "Çin" },
  { sual: "Kanadanın paytaxtı haradır?", cavablar: ["Ottava", "Toronto", "Vankuver", "Monreal"], duzgun: "Ottava" },
  { sual: "Dünyanın ən soyuq materiki hansıdır?", cavablar: ["Antarktida", "Asiya", "Avropa", "Şimali Amerika"], duzgun: "Antarktida" },
  { sual: "Braziliyanın rəsmi dili hansıdır?", cavablar: ["Portuqal", "İspan", "İngilis", "Fransız"], duzgun: "Portuqal" },
  { sual: "Ən böyük ada hansıdır?", cavablar: ["Qrenlandiya", "Madagaskar", "Yeni Qvineya", "Borneo"], duzgun: "Qrenlandiya" },
  { sual: "Misir hansı qitədə yerləşir?", cavablar: ["Afrika", "Asiya", "Avropa", "Amerika"], duzgun: "Afrika" },
  { sual: "Avstraliyanın paytaxtı haradır?", cavablar: ["Kanberra", "Sidney", "Melburn", "Perth"], duzgun: "Kanberra" },
  { sual: "İspaniyanın paytaxtı haradır?", cavablar: ["Madrid", "Barselona", "Sevilya", "Valensiya"], duzgun: "Madrid" },
  { sual: "Rusiyanın paytaxtı haradır?", cavablar: ["Moskva", "Sankt-Peterburq", "Kazan", "Novosibirsk"], duzgun: "Moskva" },
  { sual: "Afrikanın ən uzun çayı hansıdır?", cavablar: ["Nil", "Kongo", "Niger", "Zambezi"], duzgun: "Nil" },
  { sual: "ABŞ-ın paytaxtı haradır?", cavablar: ["Vaşinqton", "Nyu-York", "Los Anceles", "Çikaqo"], duzgun: "Vaşinqton" },
  { sual: "Almaniyanın paytaxtı haradır?", cavablar: ["Berlin", "Münhen", "Frankfurt", "Hamburq"], duzgun: "Berlin" },
  { sual: "Ən böyük göl hansıdır?", cavablar: ["Xəzər dənizi", "Superior", "Victoria", "Baykal"], duzgun: "Xəzər dənizi" },
  { sual: "Ən çox ada olan ölkə hansıdır?", cavablar: ["İndoneziya", "Norveç", "Filippin", "Yaponiya"], duzgun: "İndoneziya" },
  { sual: "Hindistanın paytaxtı haradır?", cavablar: ["Yeni Dehli", "Mumbay", "Kalkutta", "Bangalore"], duzgun: "Yeni Dehli" },
  { sual: "Qütb ayısı hansı qütbdə yaşayır?", cavablar: ["Şimal qütbü", "Cənub qütbü", "Hər ikisində", "Heç birində"], duzgun: "Şimal qütbü" },
  { sual: "Ən böyük yarımada hansıdır?", cavablar: ["Ərəbistan yarımadası", "Skandinaviya", "Hindistan", "Koreya"], duzgun: "Ərəbistan yarımadası" },
  { sual: "Ən uzun dağ sistemi hansıdır?", cavablar: ["And dağları", "Himalaylar", "Kayser dağları", "Ural dağları"], duzgun: "And dağları" },
  { sual: "Dünyanın ən isti yeri haradır?", cavablar: ["Lut səhrası", "Sahara", "Qobi", "Death Valley"], duzgun: "Lut səhrası" },
  { sual: "Azərbaycanın ən hündür dağı hansıdır?", cavablar: ["Bazardüzü", "Tufandağ", "Şahdağ", "Qızılqaya"], duzgun: "Bazardüzü" },
  { sual: "Xəzər dənizi neçə ölkə ilə sərhəddir?", cavablar: ["5", "4", "6", "3"], duzgun: "5" },
  { sual: "Türkiyənin paytaxtı haradır?", cavablar: ["Ankara", "İstanbul", "İzmir", "Bursa"], duzgun: "Ankara" },
  { sual: "Ən yüksək şəlalə hansıdır?", cavablar: ["Anxel", "Niagara", "Victoria", "İquasu"], duzgun: "Anxel" },
  { sual: "Yer səthinin neçə faizi su ilə örtülüdür?", cavablar: ["71%", "50%", "60%", "80%"], duzgun: "71%" },
  { sual: "Afrikanın ən əhali çox olan ölkəsi hansıdır?", cavablar: ["Nigeriya", "Misir", "Efiopiya", "Cənubi Afrika"], duzgun: "Nigeriya" },
  { sual: "Dünyanın ən böyük şəhəri (əhalisinə görə) hansıdır?", cavablar: ["Tokio", "Pekin", "Dehli", "Sao Paulo"], duzgun: "Tokio" },
  { sual: "Ən kiçik ölkə hansıdır?", cavablar: ["Vatikan", "Monako", "San-Marino", "Lixtenşteyn"], duzgun: "Vatikan" },
  { sual: "Dünyada ən çox danışılan dil hansıdır?", cavablar: ["Çin dili", "İngilis dili", "İspan dili", "Hind dili"], duzgun: "Çin dili" },
  { sual: "Ən böyük dağ hansıdır?", cavablar: ["Everest", "K2", "Makalu", "Lhotse"], duzgun: "Everest" },
  { sual: "Azərbaycanın ən böyük gölü hansıdır?", cavablar: ["Göygöl", "Ağgöl", "Hacıqabul", "Böyük Şor"], duzgun: "Göygöl" },
  { sual: "Azərbaycanın dənizə çıxışı varmı?", cavablar: ["Bəli, Xəzər dənizi", "Xeyr", "Yalnız göl var", "Sadəcə çaylar"], duzgun: "Bəli, Xəzər dənizi" },
  { sual: "Ən çox vulkan olan ölkə hansıdır?", cavablar: ["İndoneziya", "Yaponiya", "İtaliya", "Meksika"], duzgun: "İndoneziya" }
];


const historyQuestionsAze = [
  { sual: "ABŞ-ın ilk prezidenti kim idi?", cavablar: ["Corc Vaşinqton", "Abraham Linkoln", "Tomas Cefferson", "Con Adams"], duzgun: "Corc Vaşinqton" },
  { sual: "İkinci Dünya Müharibəsi hansı ildə başa çatdı?", cavablar: ["1945", "1939", "1918", "1963"], duzgun: "1945" },
  { sual: "Yuli Sezar hansı imperiyanı idarə edirdi?", cavablar: ["Roma İmperiyası", "Osmanlı İmperiyası", "Britaniya İmperiyası", "Fars İmperiyası"], duzgun: "Roma İmperiyası" },
  { sual: "Fransız İnqilabı nə vaxt başlamışdır?", cavablar: ["1789", "1776", "1804", "1799"], duzgun: "1789" },
  { sual: "Amerikanı 1492-ci ildə kim kəşf etdi?", cavablar: ["Kristofor Kolumb", "Vasko da Qama", "Ferdinand Magellan", "Marko Polo"], duzgun: "Kristofor Kolumb" },
  { sual: "Napoleon Bonapart hansı ölkənin lideri idi?", cavablar: ["Fransa", "İtaliya", "İspaniya", "Almaniya"], duzgun: "Fransa" },
  { sual: "Birinci Dünya Müharibəsi hansı ildə başladı?", cavablar: ["1914", "1918", "1939", "1920"], duzgun: "1914" },
  { sual: "Sovet İttifaqı hansı ildə dağıldı?", cavablar: ["1991", "1989", "1993", "1990"], duzgun: "1991" },
  { sual: "Azərbaycan Xalq Cümhuriyyəti nə vaxt elan edildi?", cavablar: ["1918", "1920", "1917", "1919"], duzgun: "1918" },
  { sual: "Osmanlı İmperiyasının son sultanı kim idi?", cavablar: ["VI Mehmed Vahidəddin", "Abdülhəmid II", "Mehmed V", "Süleyman Qanuni"], duzgun: "VI Mehmed Vahidəddin" },
  { sual: "Berlin divarı nə vaxt söküldü?", cavablar: ["1989", "1991", "1980", "1995"], duzgun: "1989" },
  { sual: "Roma şəhəri hansı ölkədə yerləşir?", cavablar: ["İtaliya", "Fransa", "İspaniya", "Yunanıstan"], duzgun: "İtaliya" },
  { sual: "Qədim Misirdə fironlar kim idi?", cavablar: ["Padşahlar", "Rəssamlar", "Alimlər", "Əsgərlər"], duzgun: "Padşahlar" },
  { sual: "Böyük İpək Yolu hansı ölkələri birləşdirirdi?", cavablar: ["Çin və Avropa", "Rusiya və Hindistan", "Misir və Yunanıstan", "Fransa və İspaniya"], duzgun: "Çin və Avropa" },
  { sual: "Əhməd bəy Ağaoğlu kim idi?", cavablar: ["Azərbaycan mütəfəkkiri", "Həkim", "Rəssam", "Sərkərdə"], duzgun: "Azərbaycan mütəfəkkiri" },
  { sual: "Almaniya Birinci Dünya Müharibəsində hansı ittifaqda idi?", cavablar: ["Mərkəzi dövlətlər", "Antanta", "BMT", "Avropa İttifaqı"], duzgun: "Mərkəzi dövlətlər" },
  { sual: "Müqəddəs Roma İmperiyası nə vaxt mövcud olub?", cavablar: ["IX-XIX əsrlər", "XV-XVI əsrlər", "XI-XII əsrlər", "XVIII əsr"], duzgun: "IX-XIX əsrlər" },
  { sual: "Sovet İttifaqının ilk lideri kim idi?", cavablar: ["Vladimir Lenin", "Stalin", "Trotski", "Xruşşov"], duzgun: "Vladimir Lenin" },
  { sual: "Stalinqrad döyüşü hansı müharibə zamanı baş verib?", cavablar: ["İkinci Dünya Müharibəsi", "Birinci Dünya Müharibəsi", "Soyuq Müharibə", "Napoleon müharibələri"], duzgun: "İkinci Dünya Müharibəsi" },
  { sual: "Qızıl Orda dövləti kimlər tərəfindən yaradılmışdı?", cavablar: ["Monqollar", "Ruslar", "Türklər", "Farslar"], duzgun: "Monqollar" },
  { sual: "Azərbaycan BMT-yə nə vaxt üzv oldu?", cavablar: ["1992", "1991", "1993", "1994"], duzgun: "1992" },
  { sual: "Səfəvilər dövlətinin banisi kim idi?", cavablar: ["Şah İsmayıl Xətai", "Nadir şah", "Fətəli şah", "Şah Abbas"], duzgun: "Şah İsmayıl Xətai" },
  { sual: "Sovet İttifaqının paytaxtı harada idi?", cavablar: ["Moskva", "Sankt-Peterburq", "Kiyev", "Minsk"], duzgun: "Moskva" },
  { sual: "Qədim Babil hansı çayın sahilində yerləşirdi?", cavablar: ["Fərat", "Nil", "Dəclə", "İnd"], duzgun: "Fərat" },
  { sual: "Atatürk Türkiyə Cümhuriyyətini nə vaxt elan etdi?", cavablar: ["1923", "1920", "1925", "1930"], duzgun: "1923" },
  { sual: "Roma İmperiyası nə vaxt süqut etdi?", cavablar: ["476", "1000", "600", "800"], duzgun: "476" },
  { sual: "Böyük Vətən Müharibəsi hansı illərdə olub?", cavablar: ["1941–1945", "1939–1945", "1914–1918", "1950–1953"], duzgun: "1941–1945" },
  { sual: "Azərbaycan SSR nə vaxt yaradıldı?", cavablar: ["1920", "1918", "1923", "1925"], duzgun: "1920" },
  { sual: "Hitler Almaniyada hakimiyyətə nə vaxt gəldi?", cavablar: ["1933", "1939", "1929", "1940"], duzgun: "1933" },
  { sual: "İngiltərə Kraliçası II Elizabet taxta nə vaxt çıxmışdı?", cavablar: ["1952", "1945", "1960", "1970"], duzgun: "1952" },
  { sual: "Soyuq Müharibə əsasən kimlər arasında idi?", cavablar: ["ABŞ və SSRİ", "Almaniya və Fransa", "Çin və Yaponiya", "İtaliya və İspaniya"], duzgun: "ABŞ və SSRİ" },
  { sual: "Neft sənayesinin beşiyi hesab olunan şəhər hansıdır?", cavablar: ["Bakı", "Moskva", "Londan", "Paris"], duzgun: "Bakı" },
  { sual: "Azərbaycanın müstəqilliyi nə vaxt bərpa olundu?", cavablar: ["1991", "1990", "1992", "1993"], duzgun: "1991" },
  { sual: "SSRİ-nin son rəhbəri kim idi?", cavablar: ["Mixail Qorbaçov", "Leonid Brejnev", "Stalin", "Xruşşov"], duzgun: "Mixail Qorbaçov" },
  { sual: "Türklərin Orxon-Yenisey yazıları hansı əsrdə yaranmışdır?", cavablar: ["VIII əsr", "X əsr", "VI əsr", "IX əsr"], duzgun: "VIII əsr" },
  { sual: "İlk Olimpiya oyunları harada keçirilib?", cavablar: ["Yunanıstan", "Roma", "Misir", "Fransa"], duzgun: "Yunanıstan" },
  { sual: "Fars İmperiyasının banisi kim idi?", cavablar: ["Kir II", "Dara I", "Kserks", "Kambiz"], duzgun: "Kir II" },
  { sual: "Qədim Misir hansı çayın ətrafında formalaşmışdır?", cavablar: ["Nil", "Fərat", "Dəclə", "İnd"], duzgun: "Nil" },
  { sual: "Makedoniyalı İsgəndər kim idi?", cavablar: ["Sərkərdə", "Rəssam", "Filosof", "Hökmdar"], duzgun: "Sərkərdə" },
  { sual: "Amerika Birləşmiş Ştatları nə vaxt yaradıldı?", cavablar: ["1776", "1789", "1800", "1760"], duzgun: "1776" },
  { sual: "Qədim Yunanıstan hansı mədəniyyətlə tanınırdı?", cavablar: ["Demokratiya", "Monarxiya", "Feodalizm", "Diktatura"], duzgun: "Demokratiya" },
  { sual: "Çingiz xan hansı imperiyanı qurmuşdu?", cavablar: ["Monqol İmperiyası", "Roma İmperiyası", "Osmanlı", "Persiya"], duzgun: "Monqol İmperiyası" },
  { sual: "Azərbaycanın ilk prezidenti kim idi?", cavablar: ["Əbülfəz Elçibəy", "Heydər Əliyev", "Ayaz Mütəllibov", "İlham Əliyev"], duzgun: "Ayaz Mütəllibov" },
  { sual: "Heydər Əliyev hakimiyyətə nə vaxt qayıtdı?", cavablar: ["1993", "1992", "1994", "1995"], duzgun: "1993" },
  { sual: "Osmanlı İmperiyası nə vaxt süqut etdi?", cavablar: ["1922", "1918", "1920", "1930"], duzgun: "1922" },
  { sual: "İlk yazı sistemi harada yaranmışdır?", cavablar: ["Mesopotamiya", "Misir", "Çin", "Yunanıstan"], duzgun: "Mesopotamiya" },
  { sual: "İlk kitab çapını kim icad edib?", cavablar: ["Qutenberq", "Kolumb", "Dara", "Aristotel"], duzgun: "Qutenberq" },
  { sual: "İlk kosmosa çıxan insan kim idi?", cavablar: ["Yuri Qaqarin", "Neil Armstrong", "Buzz Aldrin", "Valentina Tereşkova"], duzgun: "Yuri Qaqarin" },
  { sual: "İlk Ay səfərini kim etmişdi?", cavablar: ["Neil Armstrong", "Buzz Aldrin", "Yuri Qaqarin", "Michael Collins"], duzgun: "Neil Armstrong" },
  { sual: "Azərbaycan Respublikasının Konstitusiyası nə vaxt qəbul edildi?", cavablar: ["1995", "1993", "1997", "2000"], duzgun: "1995" }
];

const movieQuestionsAze = [
  { sual: "'Başlanğıc' (Inception) filmini kim rejissorluq edib?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], duzgun: "Christopher Nolan" },
  { sual: "2020-ci ildə 'Ən Yaxşı Film' üzrə Oskar mükafatını hansı film qazandı?", cavablar: ["Joker", "Parazit (Parasite)", "1917", "Bir Zamanlar Hollivudda"], duzgun: "Parazit (Parasite)" },
  { sual: "'Titanik' filmində Cek obrazını kim canlandırıb?", cavablar: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"], duzgun: "Leonardo DiCaprio" },
  { sual: "'Oyun Oyuncağı' (Toy Story) filmində kovboy oyuncaq kimdir?", cavablar: ["Vudi (Woody)", "Bazz Laytyear (Buzz Lightyear)", "Endi", "Cessi"], duzgun: "Vudi (Woody)" },
  { sual: "'Ulduz Müharibələri' (Star Wars) filmində əsas düşmən kimdir?", cavablar: ["Dart Veyder (Darth Vader)", "Lük Skayuoker", "Han Solo", "Yoda"], duzgun: "Dart Veyder (Darth Vader)" },
  { sual: "'Avatar' filminin rejissoru kimdir?", cavablar: ["James Cameron", "Peter Jackson", "Christopher Nolan", "Ridley Scott"], duzgun: "James Cameron" },
  { sual: "'Qisasçılar' (Avengers) filmlərində Tony Stark obrazını kim oynayır?", cavablar: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], duzgun: "Robert Downey Jr." },
  { sual: "'Harry Potter' filmlərində əsas qəhrəman kimdir?", cavablar: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], duzgun: "Harry Potter" },
  { sual: "'Matrix' filmində Neo rolunu kim oynayıb?", cavablar: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Matt Damon"], duzgun: "Keanu Reeves" },
  { sual: "'Qara Panter' (Black Panther) filminin hadisələri hansı uydurma ölkədə baş verir?", cavablar: ["Wakanda", "Zamunda", "Genovia", "Elbonia"], duzgun: "Wakanda" },
  { sual: "'Şrek' filmində Şrek hansı canlı növünə aiddir?", cavablar: ["Ogre", "İnsan", "Cırtdan", "Elf"], duzgun: "Ogre" },
  { sual: "'Dondurulmuş' (Frozen) filmində mahnı oxuyan şahzadənin adı nədir?", cavablar: ["Elsa", "Anna", "Olaf", "Kristoff"], duzgun: "Elsa" },
  { sual: "'Batman' filmlərində Batmanın əsl adı nədir?", cavablar: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"], duzgun: "Bruce Wayne" },
  { sual: "'Gecə Gəzintisi' (The Dark Knight) filmində Jokeri kim oynayıb?", cavablar: ["Heath Ledger", "Jared Leto", "Jack Nicholson", "Joaquin Phoenix"], duzgun: "Heath Ledger" },
  { sual: "'Pirates of the Caribbean' filmində Cek Sparrow rolunu kim oynayıb?", cavablar: ["Johnny Depp", "Orlando Bloom", "Hugh Jackman", "Tom Cruise"], duzgun: "Johnny Depp" },
  { sual: "'Forrest Gump' filmində baş rolu kim oynayıb?", cavablar: ["Tom Hanks", "Robin Williams", "Kevin Costner", "Matt Damon"], duzgun: "Tom Hanks" },
  { sual: "'Joker' filmində baş rolu kim oynayıb?", cavablar: ["Joaquin Phoenix", "Heath Ledger", "Christian Bale", "Jim Carrey"], duzgun: "Joaquin Phoenix" },
  { sual: "'Spider-Man: No Way Home' filmində Spiderman obrazını kim canlandırıb?", cavablar: ["Tom Holland", "Tobey Maguire", "Andrew Garfield", "Chris Pratt"], duzgun: "Tom Holland" },
  { sual: "'Interstellar' filminin rejissoru kimdir?", cavablar: ["Christopher Nolan", "Ridley Scott", "James Cameron", "Denis Villeneuve"], duzgun: "Christopher Nolan" },
  { sual: "'Oppenheimer' filminin mövzusu nə haqqındadır?", cavablar: ["Atom bombası", "Kosmos", "Zəlzələ", "Süni intellekt"], duzgun: "Atom bombası" },
  { sual: "'Minions' filmində sarı personajlar kimə xidmət edir?", cavablar: ["Gru", "Vector", "Scarlet Overkill", "Dr. Nefario"], duzgun: "Gru" },
  { sual: "'The Lion King' filmində əsas qəhrəman kimdir?", cavablar: ["Simba", "Mufasa", "Scar", "Timon"], duzgun: "Simba" },
  { sual: "'Frozen' filmində “Let It Go” mahnısını kim oxuyur?", cavablar: ["Idina Menzel", "Ariana Grande", "Selena Gomez", "Demi Lovato"], duzgun: "Idina Menzel" },
  { sual: "'The Godfather' filmində Don Corleone obrazını kim oynayıb?", cavablar: ["Marlon Brando", "Al Pacino", "Robert De Niro", "Joe Pesci"], duzgun: "Marlon Brando" },
  { sual: "'The Shawshank Redemption' filmində hadisələr harada baş verir?", cavablar: ["Həbsxanada", "Məktəbdə", "Neməkdə", "Məhkəmədə"], duzgun: "Həbsxanada" },
  { sual: "'Pulp Fiction' filmini kim rejissorluq edib?", cavablar: ["Quentin Tarantino", "Martin Scorsese", "Guy Ritchie", "Steven Soderbergh"], duzgun: "Quentin Tarantino" },
  { sual: "'Inception' filmində yuxu içində yuxu ideyası kimindir?", cavablar: ["Dom Cobb", "Arthur", "Eames", "Fischer"], duzgun: "Dom Cobb" },
  { sual: "'Gladiator' filmində Maksimus rolunu kim oynayıb?", cavablar: ["Russell Crowe", "Gerard Butler", "Mel Gibson", "Brad Pitt"], duzgun: "Russell Crowe" },
  { sual: "'The Matrix' filmində Neo-nun müəllimi kimdir?", cavablar: ["Morpheus", "Trinity", "Agent Smith", "Oracle"], duzgun: "Morpheus" },
  { sual: "'Avatar: The Way of Water' filmi hansı ildə çıxıb?", cavablar: ["2022", "2019", "2020", "2023"], duzgun: "2022" },
  { sual: "'Toy Story' filminin istehsal studiyası hansıdır?", cavablar: ["Pixar", "DreamWorks", "Illumination", "Blue Sky"], duzgun: "Pixar" },
  { sual: "'Frozen 2' filmində Anna və Elsa nəyə gedirlər?", cavablar: ["Keçmişin sirrini açmaq", "Yeni krallıq qurmaq", "Evlənmək", "Qış bayramı keçirmək"], duzgun: "Keçmişin sirrini açmaq" },
  { sual: "'Home Alone' filmində Kevin obrazını kim canlandırıb?", cavablar: ["Macaulay Culkin", "Daniel Stern", "Joe Pesci", "Tim Allen"], duzgun: "Macaulay Culkin" },
  { sual: "'Back to the Future' filmində maşınla zaman səyahəti kim edir?", cavablar: ["Marty McFly", "Doc Brown", "George McFly", "Biff Tannen"], duzgun: "Marty McFly" },
  { sual: "'The Avengers' filmində Hulk rolunu kim oynayıb?", cavablar: ["Mark Ruffalo", "Edward Norton", "Eric Bana", "Chris Hemsworth"], duzgun: "Mark Ruffalo" },
  { sual: "'Doctor Strange' filminin əsas qəhrəmanı kimdir?", cavablar: ["Stephen Strange", "Tony Stark", "Bruce Wayne", "Peter Parker"], duzgun: "Stephen Strange" },
  { sual: "'Guardians of the Galaxy' filmində danışan ağac kimdir?", cavablar: ["Groot", "Rocket", "Star-Lord", "Drax"], duzgun: "Groot" },
  { sual: "'Iron Man' filminin ilk çıxış ili hansıdır?", cavablar: ["2008", "2010", "2006", "2012"], duzgun: "2008" },
  { sual: "'Black Widow' filmi hansı qəhrəman haqqındadır?", cavablar: ["Natasha Romanoff", "Wanda Maximoff", "Gamora", "Nebula"], duzgun: "Natasha Romanoff" },
  { sual: "'The Batman' (2022) filmində Batmanı kim oynayıb?", cavablar: ["Robert Pattinson", "Ben Affleck", "Christian Bale", "Michael Keaton"], duzgun: "Robert Pattinson" },
  { sual: "'Frozen' filmində qar adam kimdir?", cavablar: ["Olaf", "Kristoff", "Hans", "Sven"], duzgun: "Olaf" },
  { sual: "'Finding Nemo' filmində Nemo hansı heyvandır?", cavablar: ["Balıq", "Pinqvin", "Delfin", "Qurbağa"], duzgun: "Balıq" },
  { sual: "'Up' (Yuxarı) filmində evini uçuran qocanın adı nədir?", cavablar: ["Carl Fredricksen", "Russell", "Andy", "George"], duzgun: "Carl Fredricksen" },
  { sual: "'Inside Out' filmində hansı hisslər təsvir olunur?", cavablar: ["Sevinc, Qəzəb, Kədər, Qorxu, İyrənmə", "Sevinc, Təəccüb, Utanc, Məhəbbət", "Sevinc, Tənbəllik, Cəsarət", "Qorxu, Utanc, Sevgi"], duzgun: "Sevinc, Qəzəb, Kədər, Qorxu, İyrənmə" },
  { sual: "'Coco' filmində Migel hansı aləti çalır?", cavablar: ["Gitara", "Piano", "Skripka", "Nağara"], duzgun: "Gitara" },
  { sual: "'Encanto' filmində Madrigal ailəsi harada yaşayır?", cavablar: ["Kolumbiya", "Meksika", "İspaniya", "Braziliya"], duzgun: "Kolumbiya" },
  { sual: "'Turning Red' filmində qız hansı heyvana çevrilir?", cavablar: ["Qırmızı panda", "Tülkü", "Pişik", "İt"], duzgun: "Qırmızı panda" },
  { sual: "'Zootopia' filmində polis olan dovşanın adı nədir?", cavablar: ["Judy Hopps", "Nick Wilde", "Flash", "Clawhauser"], duzgun: "Judy Hopps" },
  { sual: "'Ratatouille' filmində siçan hansı işi görür?", cavablar: ["Aşpaz", "Təmizlikçi", "Qoca", "Məktəbli"], duzgun: "Aşpaz" },
  { sual: "'Moana' filmində qızın məqsədi nədir?", cavablar: ["Dənizdə səyahət etmək", "Qızıl tapmaq", "Qəsəbə qurmaq", "Düşmənlə döyüşmək"], duzgun: "Dənizdə səyahət etmək" }
];


const suallarData = {
  halloween: [
    { lang: "az", suallar: halloweenQuestionsAze },
    { lang: "en", suallar: halloweenQuestions }
  ],
  geography: [
    { lang: "az", suallar: geographyQuestionsAze },
    { lang: "en", suallar: geographyQuestions }
  ],
  history: [
    { lang: "az", suallar: historyQuestionsAze },
    { lang: "en", suallar: historyQuestions }
  ],
  Movie: [
    { lang: "az", suallar: movieQuestionsAze },
    { lang: "en", suallar: movieQuestions }
  ]
};



// Dili götür (default: en)
const lang = localStorage.getItem("quizLang") || "en";



// arrayi qarisdir
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 10-luq random sual sec
function selectRandomQuestions(array, count = 10) {
  const shuffled = shuffleArray([...array]);
  return shuffled.slice(0, count);
}

// mode secimi
const mode = localStorage.getItem("quizMode") || "halloween"; 
let suallar = [];

if (mode === "halloween") {
  suallar = selectRandomQuestions(halloweenQuestions, 10);
  document.body.style.background = "linear-gradient(orange, orangered)";
  document.querySelector("h1").textContent = "Halloween Quiz";
  document.querySelector("h1").style.fontFamily = "arial";
} else if (mode === "geography") {

  suallar = selectRandomQuestions(geographyQuestions, 10);
  document.body.style.background = "linear-gradient(skyblue, green)";
  document.querySelector("h1").textContent = "Geography Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
  document.body.style.fontFamily = "Arial, sans-serif";


} else if (mode === "history") {

  suallar = selectRandomQuestions(historyQuestions, 10);
  document.body.style.background = "linear-gradient(brown, gold)";
  document.querySelector("h1").textContent = "History Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";

}else if(mode==="Movie"){

  suallar = selectRandomQuestions(movieQuestions, 10);
  document.body.style.background = "linear-gradient(yellow, orangered)";
  document.querySelector("h1").textContent = "Movie Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
}

let secilmisDilSual = suallarData[mode].find(item => item.lang === lang);
suallar = selectRandomQuestions(secilmisDilSual.suallar, 10);


function setLang(l) {
  localStorage.setItem("quizLang", l);
  location.reload();
}

// suallari yazmaq
const suallarolandiv = document.getElementById("suallarolandiv");
let sualHTML = "";
for (let i = 0; i < suallar.length; i++) {
  sualHTML += `<p>${i + 1}. ${suallar[i].sual}</p>`;
  for (let j = 0; j < suallar[i].cavablar.length; j++) {
    let item = suallar[i].cavablar[j];
    sualHTML += `
      <label class="option">
        <input type="radio" name="${i}" value="${item}" />
        <span class="dot"></span>
        <span class="text">${item}</span>
      </label><br>
    `;
  }
  sualHTML += "<br>";
}
suallarolandiv.innerHTML = sualHTML;

//moda uygun font

if (mode === "geography" || mode === "history" || mode==="Movie") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "Arial";
  });
} else if (mode === "halloween") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "arial";
  });
}


//cavab yoxlama ve neticve
const eng =document.getElementById("en");
const az = document.getElementById("az");
const suallarigonderbtn = document.getElementById("suallarigonderbtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const halloweenmode = document.getElementById("halloweenmode");
const geographymode = document.getElementById("geographymode");
const historymode  =document.getElementById("historymode");
const moviemode =document.getElementById("moviemode")

// sesler
const failaudio = document.getElementById("failaudio");
const escapeaudio = document.getElementById("escapeaudio");
const fail = document.getElementById("fail");
const clap = document.getElementById("clap");

suallarigonderbtn.onclick = function () {
  let xal = 0;
  for (let i = 0; i < suallar.length; i++) {
    let secimler = document.getElementsByName(i);
    for (let j = 0; j < secimler.length; j++) {
      if (secimler[j].checked && secimler[j].value === suallar[i].duzgun) {
        xal++;
      }
    }

    // duz ve sehvleri rengleriyle gosteremek
    for (let j = 0; j < secimler.length; j++) {
      if (secimler[j].value === suallar[i].duzgun) {
        secimler[j].parentElement.style.background = "limegreen";
      } else if (secimler[j].checked && secimler[j].value !== suallar[i].duzgun) {
        secimler[j].parentElement.style.background = "red";
      } else {
        secimler[j].parentElement.style.background = ""; 
      }
    }
  }

  eng.style.display = "none";
  az.style.display = "none";
  moviemode.style.display = "none";
  historymode.style.display = "none";
  halloweenmode.style.display = "none";
  geographymode.style.display = "none";
  suallarolandiv.style.display = "none";
  suallarigonderbtn.style.display = "none";
  loading.classList.remove("hidden");

  setTimeout(function () {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    if (mode === "halloween") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="dead">You got ${xal} / ${suallar.length} correct! <br> <span id="youdied">You died</span></h3>`;
        failaudio.play();
      } else {
        result.innerHTML = `<h3 id="live">You got ${xal} / ${suallar.length} correct! <br> <span id="youescaped">You escaped</span></h3>`;
        escapeaudio.play();
      }
    } else if (mode === "geography") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    } else if (mode === "history") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    } else if (mode === "Movie") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }

    let cavablarDiv = document.createElement("div");
    cavablarDiv.id = "cavablar";
    cavablarDiv.innerHTML = "<h2>Your Answers:</h2>";
    cavablarDiv.style.marginTop = "40vh";
    cavablarDiv.style.fontFamily = "Arial";

    suallar.forEach((sual, i) => {
      let sualBox = document.createElement("div");
      sualBox.classList.add("sualBox");
      sualBox.innerHTML = `<h4>${i + 1}. ${sual.sual}</h4>`;

      // secilen cavabi tapmaq
      let secilmis = "";
      let secimler = document.getElementsByName(i);
      for (let j = 0; j < secimler.length; j++) {
        if (secimler[j].checked) {
          secilmis = secimler[j].value;
        }
      }

      sual.cavablar.forEach(cavab => {
        let p = document.createElement("p");
        p.textContent = cavab;

        if (cavab === sual.duzgun) {
          p.style.background = "limegreen";
        } else if (cavab === secilmis && cavab !== sual.duzgun) {
          p.style.background = "red";
          p.style.color = "white";
          p.style.opacity = "1";
        } else {
          p.style.background = "tomato";
          p.style.opacity = "0.6";
        }

        sualBox.appendChild(p);
      });

      cavablarDiv.appendChild(sualBox);
    });

    result.appendChild(cavablarDiv);
  });
};

// timer
let vaxt = 80;
const vaxtDiv = document.getElementById("vaxt");
let timer = setInterval(() => {
  vaxt--;
  vaxtDiv.innerHTML = `Time left ${vaxt}s`;
  if (vaxt <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    suallarigonderbtn.click();
  }
}, 1000);

suallarigonderbtn.addEventListener("click", () => {
  clearInterval(timer);
});

// mode deyis
function setMode(mode) {
  localStorage.setItem("quizMode", mode);
  location.reload();
}


