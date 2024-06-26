//contains all the main code of the application, including the import statements
//importing the returnGreeting func
import { returnGreeting } from "./greetings_module.js";
//renaming the function since it is contained in a different module
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module.js";
//import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
//allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
