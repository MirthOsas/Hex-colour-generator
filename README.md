# Hex-colour-generator
This is a basic project that generates hex colour codes and also changes the background of the page with each colour generated.

I utilized the Math.random() method to create random numbers

Called the .toString() method on it and also added the radix argument '16' to convert the generated number to hexadecimal code while converting it to a string.

Also called the .subString() method to limit the length of the generated hexadecimal code to six(6), since a normal Hex colour takes 6 characters concactenated with the # symbol.

I used the template literal to concactenate the generated code and a # symbol.
