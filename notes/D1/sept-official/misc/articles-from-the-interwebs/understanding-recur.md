# How to Understand Recursion in JavaScript

> > "To understand recursion, one must first understand recursion" - Unknown
If you're like me then you probably didn't understood recursion the first time
you read about it. 

For me, it was because

 1. recursion is a hard concept in itself, and 
 2. some of the tutorials and articles I read weren't super clear. 

For some reason, most articles that explained recursion used the example of
factorial numbers and the Fibonacci sequence. That meant I had to understand how
Fibonacci numbers worked th

> "To understand recursion, one must first understand recursion" - Unknown

If you're like me then you probably didn't understood recursion the first time you read about it.

For me, it was because

1.  recursion is a hard concept in itself, and
2.  some of the tutorials and articles I read weren't super clear.

For some reason, most articles that explained recursion used the example of factorial numbers and the Fibonacci sequence. That meant I had to understand how Fibonacci numbers worked then connect that to recursion.

But we are taking a different route in this article.

What Is Recursion?
------------------

In the most basic of terms, recursion is when a function keeps calling itself until it doesn't have to anymore.

What? Yeah, the function keeps calling itself but with a smaller input every single time.

Think of recursion as a circuit race. It's like running the same track over and over again but the laps keep getting smaller every time. Eventually, you're going to run the last, smallest lap and the race will be over.

Same with recursion: the function keeps calling itself with smaller input and eventually it stops.

But, the function doesn't decide for itself when to stop. We tell it when to stop. We give the function a condition known as a **base case**.

The base case is the condition that tells the function when to stop calling itself. It like telling the function what the last lap in the race will be so it stops running after that lap.

Examples of Recursion
---------------------

Alright that's recursion. Let's look at some examples to understand how recursion works.

Remember the first time you learned about loops? The first example you probably did was a countdown program. Let's do that.

First, let's understand what we want our program to do. Count down from a given number to the smallest number, subtracting 1 every time.

Given the number 5, we expect the output to be something like:

Alright, how can we code this program with recursion?

    let countDown = number => {
        
        if (number === 0) {
            return;
        }
        console.log(number);
        return countDown(number - 1);
    };
    console.log(countDown(5)) 
    

So what exactly is going on here?

If you noticed, the first thing we did was to define the base case. Why? Because the function first of all needs to know when it's going to stop calling itself.

You'd never run a race without first knowing how long the race is, would you?

If you don't tell the function when to stop, then something called stackoverflow is going to happen. The stack is going to get filled with functions that are being called but not returning or being taken off the stack.

The recursive bit of it actually happens on line 7. There we tell the function to keep returning itself but reducing the input by one every time.

So, effectively, this is what is going on:

Alright, that made sense. Let's try another example.

You know how we can tell that a number is even by using the remainder (%) operator? So if any number % 2 == 0 then that number is even or if any number % 3 == 0 then that number is odd.

Well, it turns out there's another method.

If we continuously subtract two from a number until the smallest number is either 0 or 1 then we can tell whether the number is even or odd.

Let's try that with recursion. So, given then number 6 our program should return **'Even'** because 6-2-2-2 = 0. Given 7, our program should return **'odd'** because 7-2-2-2 = 1.

Let's see it in code.

    let oddOrEven = (number) => {
        if (number === 0) {
            return 'Even';
        } else if (number === 1) {
            return 'Odd';
        } else {
            return oddOrEven(number - 2);
        }
    };
    console.log(oddOrEven(20)) 
    console.log(oddOrEven(75)) 
    console.log(oddOrEven(98)) 
    console.log(oddOrEven(113)) 
    

Again, the first step was to tell the function when to stop calling it self. Then we told it what to do when it calls itself.

Recursion is basically divide and conquer. We keep dividing the problem making it smaller every time.

Recursion vs Loops
------------------

When it comes to speed, a loop runs way faster than a recursive function. It's also easier to write a loop than a recursive function. And when it comes to readability, it's easier to know what's going on with a loop than a recursive function.

But, recursive functions are very elegant.

So what is the best choice? Efficiency or speed?

Here's a quote from the book eloquent JavaScript.

> Worrying about efficiency can be a distraction. It’s yet another factor that  
> complicates program design, and when you’re doing something that’s already  
> difficult, that extra thing to worry about can be paralyzing.  
> Therefore, always start by writing something that’s correct and easy to understand.  
> If you’re worried that it’s too slow—which it usually isn’t since  
> most code simply isn’t executed often enough to take any significant amount  
> of time—you can measure afterward and improve it if necessary.

At this point you might be wondering why in the world you would ever choose to write a recursive function over a loop. I mean loops are way easier right?

Well, that is true – but there are some problems which are easier to solve with recursion. If you would like to explore one such problem, then considering reading [chapter 3](https://eloquentjavascript.net/03_functions.html) of Eloquent JavaScript.

Now that you have discovered a new super power, let's put it to some use.

Carry out the following exercises using recursion. If you feel you can take on more, then you can solve the famous factorial and Fibonacci sequence problems.

Exercises
---------

If you would like to further challenge yourself, then consider solving these recursive problems.

1.  Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".
2.  Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.  
    Given the string "JavaScript" and a character "a", your program should return 2.
    
    **Hint**: Try to figure out when you want the function to stop calling itself and how to return a smaller version of the problem every time the function calls itself.
    

That's all for this article. I hope it has helped you to further understand recursion.

_If you liked this article, you can connect with me on [Twitter](https://twitter.com/joeepm)._

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn)


[Source](https://www.freecodecamp.org/news/understanding-recursion-in-javascript/)