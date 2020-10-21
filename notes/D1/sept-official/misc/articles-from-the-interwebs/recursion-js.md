# Understanding Recursion in JavaScript

> One of the many things that JavaScript has going for it is the ability to recursively call functions. This feature is used to provide…

[![Zak Frisch](https://miro.medium.com/fit/c/56/56/1*OarZNJw05u-czH7zH8aedQ.jpeg)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/@zfrisch?source=post_page-----992e96449e03--------------------------------)

One of the many things that JavaScript has going for it is the ability to recursively call functions. This feature is used to provide important functionality that the language would have to work very hard to compensate for if it were not available.

![Image for post](https://miro.medium.com/max/60/0*bvQZxV6MneLT_cI4.jpg?q=20)

![Image for post](https://miro.medium.com/max/3080/0*bvQZxV6MneLT_cI4.jpg)

Unfortunately, as with most Technical concepts, if you were to simply Google “recursion” you might find the definition a little hard to understand:

> “**Recursion —** relating to or involving a program or routine of which a part requires the application of the whole, so that its explicit interpretation requires in general many successive executions.”

If the above worries you, fret not, because the concept is nowhere near as complex as what the incredibly exaggerated wording would have you believe.

**Recursion** in JavaScript is, simply put, the ability to call a function from within itself.

Still not making sense? That’s perfectly okay. It will. Let’s go through some examples of **recursion** starting from the simplest form.

**Example 1**: Infinite Recursion. (_do not try to run this code!)_

function demo() {  
demo();  
}  
demo();

As you can see the function above(**demo**) is called/invoked. It then proceeds to run the instructions found within **demo,** which consists of another call/invocation of the function **demo**. This will call/invoke the function **demo** which will call/invoke the function **demo**, which will call/invoke the function **demo**… and this process will continue ad infinitum until either the page or the browser crashes.

![Image for post](https://miro.medium.com/max/60/0*SlZ9PhUHtnMt-VRX.png?q=20)

![Image for post](https://miro.medium.com/max/1002/0*SlZ9PhUHtnMt-VRX.png)

This is **recursion**. The ability of the function **demo** to invoke the function **demo** from within itself.

Though the above example seems ludicrously unhelpful, it is the _concept_ of **recursion** that is important. You may not see it quite yet, but the ability for a function to call itself is useful in a myriad of ways.

**Example 2:** Setting Up A Leave Event

When constructing a **recursive** function in JavaScript there must _always_ be a **Leave Event**. What is a **Leave Event**? It is any control statement that allows the function to exit the recursive loop. This can be an if statement, a ternary argument, a switch statement, etc.

An example of a simple countdown function:

example 2 recursion

function countDown(n) {  
  console.log(n);  
  if(n >= 1) countDown(n-1);  
}  
countDown(5);

This code will countdown from 5 to 0 in your console.

![Image for post](https://miro.medium.com/max/60/1*rYooIjptQIFErSavr-r-pw.png?q=20)

![Image for post](https://miro.medium.com/max/646/1*rYooIjptQIFErSavr-r-pw.png)

This simple demonstration should give you an appreciation for what we’re doing and in fact, you may recognize that this functionality perfectly mimics the functionality of a for-loop.

function countDown(n) {  
  for(let i=n; i >=0;i--) {  
   console.log(i);  
  }   
}  
countDown(5);

It should be unsurprising to learn that, _yes_, in this instance they are exactly the same. This begs the question, _why should we use recursion over our JavaScript loops?_

To be frank, most of the time it’s up to the discretion of the person doing the coding. Unless you’re forced to use the **Functional Programming** paradigm(You can read my [Understanding Functional Programming](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/@zfrisch/understanding-functional-programming-in-javascript-f3477cde7432) article if you would like more information) there isn’t a concrete reason to forego loops in favor of recursive functions. I want to stress though that this is true _most of the time._

There are also some cases where **recursion** is the better option.

**Example 3:** Recursive Traversal

One of the fundamental purposes of JavaScript is the ability to manipulate the DOM. If you haven’t programmed in JavaScript extensively, or you’re just not as familiar with vanilla JavaScript, but have used libraries to abstract functionality, you may not have noticed that JavaScript has had some unfortunate holes. A lot of these have been filled in as of late. There was a time though that a plethora of JavaScript libraries would cache the DOM for easier access. They did this by **Traversing** the DOM — a fancy way of saying they crawled over all the nodes in a document.

It may sound difficult, but **recursion** made it much easier.

This is an example of that functionality:

function Traverse(ele, callback) {  
  callback(ele);  
  ele = ele.firstChild;  
  while (ele) {  
    Traverse(ele, callback);  
    ele = ele.nextSibling;  
  }  
}

Traverse the DOM Example

In fact JQuery still uses a similar method though they traverse upwards from the bottom of a document. It is also used to find nodes in relation to one specified by a selector.

As an Example:

Traverse Upwards Example

function TraverseUp(ele, callback) {  
  callback(ele);  
  ele = ele.parentNode;  
  while (ele) {  
    TraverseUp(ele, callback);  
    ele = ele.prevSibling;  
  }  
}TraverseUp(document.getElementById('outer'), (ele) => console.log(ele));

Hopefully this has been at least a little enlightening when it comes to **recursion**. I’m betting you found that it’s easier to understand than you probably thought, and I can let you in on a secret, _almost all_ knowledge is easier to grasp than it may initially seem.

If you would like to learn more check out the resources below!


[Source](https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03)