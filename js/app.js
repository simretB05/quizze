let points = 2000;

if ( points >= 1000 )
{
    console.log( `Congrats your point is ${ points }` );
} else if ( points >= 500 )
{
    console.log( `your point is ${ points }` );
    
} else
{
    console.log( `some day you will get those points keep working ` );
}

let players = {
    name: `lula`,
    is_premium: true,
    friends:[`lulu`,`liya`,`lewame`]
}
let first_friend = players[`friends`][1]
console.log( first_friend )
 
let random_numbers = [12, 3, 6, 18, 0]
random_numbers.push( 99 )
console.log(random_numbers)
 
let counter = 0

while ( counter < random_numbers.length )
{
    console.log( random_numbers[counter] )
    counter=counter+1
}