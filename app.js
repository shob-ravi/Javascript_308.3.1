// Looping from 1 to 100
// Part1
for (let i=1;i<=10;i++)
{
    if (i%3==0)
        console.log("Number" +i+ " is FiZZ");
    else if (i%5==0)
        console.log("Number" +i+ " is BuZZ");
    else if ((i%3 == 0) && (i%5==0))
        console.log("Number" +i+ " is FiZZBuZZ");
    else if ((i%3!= 0) || (i%5!=0))
        console.log("Number" +i+ " is not divisable by 3 or 5");
}
// Find prime number-Create a loop that searches for the next prime number, starting at n and incrementing from there.
// part2
let num = prompt("enter a number to find the next prime number");

let nextNum = parseInt(num) +1;
let next_prime;
while(true)
{   
    next_prime = true;
    for(let i=2;i<nextNum;i++)
    {
        if (nextNum%i == 0)
            {
                next_prime = false;
                break;
            }
    }
    if (next_prime)
        { 
            console.log("Next prime no is :" +nextNum);
            break;
        }
    nextNum++;
} 

// Find prime number
// part2
let n = prompt("Enter a number to check whether the number is prime or not");
let prime_found = true;

for (i=2;i<n;i++)
{
    if (n%i == 0)
    {
        prime_found=false;  
        break;
        
    }}
(prime_found)? console.log(n +" is a prime number"):console.log(n +" is not a prime number");






