# console

> The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

The **`console`** object provides access to the browser's debugging console (e.g. the [Web Console](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Tools/Web_Console) in Firefox). The specifics of how it works varies from browser to browser, but there is a _de facto_ set of features that are typically provided.

The `console` object can be accessed from any global object. [`Window`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window) on browsing scopes and [`WorkerGlobalScope`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/WorkerGlobalScope) as specific variants in workers via the property console. It's exposed as [`Window.console`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Window/console), and can be referenced as simply `console`. For example:

    console.log("Failed to open the specified link")

This page documents the [Methods](#Methods) available on the `console` object and gives a few [Usage](#Usage) examples.

**Note:** This feature is available in [Web Workers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Web_Workers_API).

**Note**: The actual `console` interface is defined as all lower case (i.e. not `Console`), for historical reasons.

Methods
-------

[`console.assert()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/assert)

Log a message and stack trace to console if the first argument is `false`.

[`console.clear()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/clear)

Clear the console.

[`console.count()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/count)

Log the number of times this line has been called with the given label.

[`console.countReset()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/countReset)

Resets the value of the counter with the given label.

[`console.debug()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/debug)

Outputs a message to the console with the log level `debug`.

[`console.dir()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/dir)

Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

[`console.dirxml()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/dirxml)

Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

[`console.error()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/error)

Outputs an error message. You may use [string substitution](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.

`console.exception()`

An alias for `error()`.

[`console.group()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/group)

Creates a new inline [group](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_groups_in_the_console), indenting all following output by another level. To move back out a level, call `groupEnd()`.

[`console.groupCollapsed()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/groupCollapsed)

Creates a new inline [group](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_groups_in_the_console), indenting all following output by another level. However, unlike `group()` this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `groupEnd()`.

[`console.groupEnd()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/groupEnd)

Exits the current inline [group](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_groups_in_the_console).

[`console.info()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/info)

Informative logging of information. You may use [string substitution](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.

[`console.log()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/log)

For general output of logging information. You may use [string substitution](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.

[`console.profile()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/profile)

Starts the browser's built-in profiler (for example, the [Firefox performance tool](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Tools/Performance)). You can specify an optional name for the profile.

[`console.profileEnd()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/profileEnd)

Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the [Firefox performance tool](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Tools/Performance)).

[`console.table()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/table)

Displays tabular data as a table.

[`console.time()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/time)

Starts a [timer](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Timers) with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

[`console.timeEnd()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/timeEnd)

Stops the specified [timer](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Timers) and logs the elapsed time in seconds since it started.

[`console.timeLog()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/timeLog)

Logs the value of the specified [timer](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Timers) to the console.

[`console.timeStamp()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/timeStamp)

Adds a marker to the browser's [Timeline](https://developer.chrome.com/devtools/docs/timeline) or [Waterfall](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Tools/Performance/Waterfall) tool.

[`console.trace()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/trace)

Outputs a [stack trace](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Stack_traces).

[`console.warn()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/warn)

Outputs a warning message. You may use [string substitution](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.

Examples
--------

### Outputting text to the console

The most frequently-used feature of the console is logging of text and other data. There are four categories of output you can generate, using the [`console.log()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/log), [`console.info()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/info), [`console.warn()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/warn), and [`console.error()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/error) methods respectively. Each of these results in output styled differently in the log, and you can use the filtering controls provided by your browser to only view the kinds of output that interest you.

There are two ways to use each of the output methods; you can simply pass in a list of objects whose string representations get concatenated into one string, then output to the console, or you can pass in a string containing zero or more substitution strings followed by a list of objects to replace them.

#### Outputting a single object

The simplest way to use the logging methods is to output a single object:

    var someObject = { str: "Some text", id: 5 };
    console.log(someObject);
    

The output looks something like this:

    [09:27:13.475] ({str:"Some text", id:5})

#### Outputting multiple objects

You can also output multiple objects by simply listing them when calling the logging method, like this:

    var car = "Dodge Charger";
    var someObject = { str: "Some text", id: 5 }; 
    console.info("My first car was a", car, ". The object is:", someObject);

This output will look like this:

    [09:28:22.711] My first car was a Dodge Charger . The object is: ({str:"Some text", id:5})
    

#### Using string substitutions

When passing a string to one of the `console` object's methods that accepts a string (such as `log()`), you may use these substitution strings:

`%o` or `%O`

Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.

`%d` or `%i`

Outputs an integer. Number formatting is supported, for example  `console.log("Foo %.2d", 1.1)` will output the number as two significant figures with a leading 0: `Foo 01`

`%s`

Outputs a string.

`%f`

Outputs a floating-point value. Formatting is supported, for example  `console.log("Foo %.2f", 1.1)` will output the number to 2 decimal places: `Foo 1.10`

**Note**: Precision formatting doesn't work in Chrome

Each of these pulls the next argument after the format string off the parameter list. For example:

    for (var i=0; i<5; i++) {
      console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
    }
    

The output looks like this:

    [13:14:13.481] Hello, Bob. You've called me 1 times.
    [13:14:13.483] Hello, Bob. You've called me 2 times.
    [13:14:13.485] Hello, Bob. You've called me 3 times.
    [13:14:13.487] Hello, Bob. You've called me 4 times.
    [13:14:13.488] Hello, Bob. You've called me 5 times.
    
<p>The <a href=3D"https://developer.mozilla.org/en-US/docs/Web/API/Console"=
><code>console</code></a> interface's <code><strong>trace()</strong></code>=
 method outputs a stack trace to the <a href=3D"https://developer.mozilla.o=
rg/en-US/docs/Tools/Web_Console">Web Console</a>.</p>

<div class=3D"blockIndicator note"><strong>Note:</strong>&nbsp;This feature=
 is available in <a href=3D"https://developer.mozilla.org/en-US/docs/Web/AP=
I/Web_Workers_API">Web Workers</a>.</div>

<p>See <a href=3D"https://developer.mozilla.org/en-US/docs/Web/API/console#=
Stack_traces">Stack traces</a> in the <a href=3D"https://developer.mozilla.=
org/en-US/docs/Web/API/Console"><code>console</code></a> documentation for =
details and examples.</p>

<h2 id=3D"Syntax">Syntax</h2>

<pre class=3D"syntaxbox notranslate">console.trace( [...<var>any</var>, ...=
<var>data</var> ]);
</pre>

<h3 id=3D"Parameters">Parameters</h3>

<dl>
	<dt><code>...<var>any</var>, ...<var>data</var></code> <span class=3D"inli=
neIndicator optional optionalInline">Optional</span></dt>
	<dd>Zero or more objects to be output to console along with the trace. The=
se are assembled and formatted the same way they would be if passed to the =
<a href=3D"https://developer.mozilla.org/en-US/docs/Web/API/Console/log"><c=
ode>console.log()</code></a> method.</dd>
</dl>

<h2 id=3D"Example">Example</h2>

<pre class=3D"brush: js notranslate line-numbers language-js"><code class=
=3D" language-js"><span class=3D"token keyword">function</span> <span class=
=3D"token function">foo</span><span class=3D"token punctuation">(</span><sp=
an class=3D"token punctuation">)</span> <span class=3D"token punctuation">{=
</span>
  <span class=3D"token keyword">function</span> <span class=3D"token functi=
on">bar</span><span class=3D"token punctuation">(</span><span class=3D"toke=
n punctuation">)</span> <span class=3D"token punctuation">{</span>
    console<span class=3D"token punctuation">.</span><span class=3D"token f=
unction">trace</span><span class=3D"token punctuation">(</span><span class=
=3D"token punctuation">)</span><span class=3D"token punctuation">;</span>
  <span class=3D"token punctuation">}</span>
  <span class=3D"token function">bar</span><span class=3D"token punctuation=
">(</span><span class=3D"token punctuation">)</span><span class=3D"token pu=
nctuation">;</span>
<span class=3D"token punctuation">}</span>

<span class=3D"token function">foo</span><span class=3D"token punctuation">=
(</span><span class=3D"token punctuation">)</span><span class=3D"token punc=
tuation">;</span>
<span aria-hidden=3D"true" class=3D"line-numbers-rows"><span></span><span><=
/span><span></span><span></span><span></span><span></span><span></span><spa=
n></span></span></code></pre>

<p>In the console, the following trace will be displayed:</p>

<pre class=3D"notranslate line-numbers language-html"><code class=3D" langu=
age-html">bar
foo
<span class=3D"token tag"><span class=3D"token tag"><span class=3D"token pu=
nctuation">&lt;</span>anonymous</span><span class=3D"token punctuation">&gt=
;</span></span><span aria-hidden=3D"true" class=3D"line-numbers-rows"><span=
></span><span></span><span></span></span></code></pre>

<h2 id=3D"Specifications">Specifications</h2>

<table class=3D"standard-table">
	<thead>
		<tr>
			<th scope=3D"col">Specification</th>
			<th scope=3D"col">Status</th>
			<th scope=3D"col">Comment</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a class=3D"external" href=3D"https://console.spec.whatwg.org/#trace=
" hreflang=3D"en" lang=3D"en" rel=3D"noopener">Console API<br><small lang=
=3D"en-US">The definition of 'console.trace()' in that specification.</smal=
l></a></td>
			<td><span class=3D"spec-Living">Living Standard</span></td>
			<td>Initial definition</td>
		</tr>
	</tbody>
</table>



#### Styling console output

You can use the `%c` directive to apply a CSS style to console output:

    console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

The text before the directive will not be affected, but the text after the directive will be styled using the CSS declarations in the parameter.

![](https://mdn.mozillademos.org/files/12527/CSS-styling.png)

The properties usable along with the `%c` syntax are as follows (at least, in Firefox — they may differ in other browsers):

*   [`background`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") and its longhand equivalents.
*   [`border`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.") and its longhand equivalents
*   [`border-radius`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/border-radius "The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.")
*   [`box-decoration-break`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/box-decoration-break "The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.")
*   [`box-shadow`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/box-shadow "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas.")
*   [`clear`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/clear "The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.") and [`float`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/float "The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.")
*   [`color`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.")
*   [`cursor`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/cursor "The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.")
*   [`display`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/display "The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.")
*   [`font`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/font "The font CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.") and its longhand equivalents
*   [`line-height`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.")
*   [`margin`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.")
*   [`outline`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/outline "The outline CSS shorthand property set all the outline properties in a single declaration.") and its longhand equivalents
*   [`padding`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/padding "The padding CSS shorthand property sets the padding area on all four sides of an element at once.")
*   `text-*` properties such as [`text-transform`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/text-transform "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.")
*   [`white-space`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.")
*   [`word-spacing`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/word-spacing "The word-spacing CSS property sets the length of space between words and between tags.") and [`word-break`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/word-break "The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.")
*   [`writing-mode`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/CSS/writing-mode "The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).")

**Note**: The console message behaves like an inline element by default. To see the effects of `padding`, `margin`, etc. you should set it to for example `display: inline-block`.

### Using groups in the console

You can use nested groups to help organize your output by visually combining related material. To create a new nested block, call `console.group()`. The `console.groupCollapsed()` method is similar but creates the new block collapsed, requiring the use of a disclosure button to open it for reading.

To exit the current group, simply call `console.groupEnd()`. For example, given this code:

    console.log("This is the outer level");
    console.group("First group");
    console.log("In the first group");
    console.group("Second group");
    console.log("In the second group");
    console.warn("Still in the second group");
    console.groupEnd();
    console.log("Back to the first group");
    console.groupEnd();
    console.debug("Back to the outer level");
    

The output looks like this:

![Demo of nested groups in Firefox console](https://mdn.mozillademos.org/files/16911/console_groups_demo.png)

### Timers

You can start a timer to calculate the duration of a specific operation. To start one, call the `console.time``()` method, giving it a name as the only parameter. To stop the timer, and to get the elapsed time in milliseconds, just call the `console.timeEnd()` method, again passing the timer's name as the parameter. Up to 10,000 timers can run simultaneously on a given page.

For example, given this code:

    console.time("answer time");
    alert("Click to continue");
    console.timeLog("answer time");
    alert("Do a bunch of other stuff...");
    console.timeEnd("answer time");
    

Will log the time needed by the user to dismiss the alert box, log the time to the console, wait for the user to dismiss the second alert, and then log the ending time to the console:

![timerresult.png](https://mdn.mozillademos.org/files/16113/console-timeLog.png)

Notice that the timer's name is displayed both when the timer is started and when it's stopped.

**Note:** It's important to note that if you're using this to log the timing for network traffic, the timer will report the total time for the transaction, while the time listed in the network panel is just the amount of time required for the header. If you have response body logging enabled, the time listed for the response header and body combined should match what you see in the console output.

### Stack traces

The console object also supports outputting a stack trace; this will show you the call path taken to reach the point at which you call [`console.trace()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/API/Console/trace). Given code like this:

    function foo() {
      function bar() {
        console.trace();
      }
      bar();
    }
    
    foo();
    

The output in the console looks something like this:

![](https://mdn.mozillademos.org/files/7167/api-trace2.png)

Specifications
--------------

| Specification | Status | Comment |
| --- | --- | --- |
| [Console API](https://console.spec.whatwg.org/ "The 'Console API' specification") | Living Standard | Initial definition. |


# JavaScript Stack Trace: Understanding It and Using It to Debug | Scalyr

> What's the stack trace in JavaScript? Learn that and all about the anatomy of the JavaScript stack trace—plus how to ensure good error reports for debugging

* * *

We’ve all been there. You’ve set up a new project, everything is going smoothly, and boom, it hits. You’re staring at a big red error in your console. After trying everything you can think of, you just can’t seem to resolve it. In desperation, you resort to posting the error up on the internet. Help!

Sure enough, an anonymous hero, “Linux412,” rides in and informs you, “Looks like you’ve got a naming error on your function.” Aha—that fixed it, but how did they know?! The secret to the anonymous developer’s magic lies in their ability to read and make sense of application error reports.

If we learn how to read these errors, we’ll be able to solve nearly all of our coding problems. In JavaScript, the error report is called a stack trace. We already covered the stack trace in [PHP](https://www.scalyr.com/blog/php-stack-trace-understanding-debug/) and [Java](https://www.scalyr.com/blog/java-stack-trace-understanding/) in earlier articles. But today, it’s the JavaScript stack trace that’s under discussion.

By the end of this article, you should understand what the JavaScript stack trace is and why naming functions and error messages are important for debugging with stack traces.

![JavaScript fly swatter signifying javascript stack trace](https://library.scalyr.com/2019/08/22174333/JavaScript-fly-swatter-signifying-javascript-stack-trace1.png)

What Is a Stack Trace?
----------------------

As always, let’s start by defining a stack trace.

> A stack trace is a list of the functions, in order, that lead to a given point in a software program.

A stack trace is essentially a breadcrumb trail for your software. You can easily see the stack trace in [JavaScript](https://www.scalyr.com/blog/get-started-quickly-javascript-logging/) by adding the following into your code:

console.trace();

And you’ll get an outputted stack trace.

But what does a stack trace actually look like? Let’s cover that now.

![](https://library.scalyr.com/2019/08/22174241/Javascript-Stack-Trace-Pull-Quote-11.png)

The Anatomy of a Stack Trace
----------------------------

To understand the stack trace better, let’s take an example.

function controller(){
    database();
}

function database(){
    query();
}

function query () {
    throw new Error();
}

Here we see a series of functions that call each other. The last function will error, causing the program to halt and emit a stack trace.

When the last function errors, the following stack trace is emitted:

Uncaught Error
    at query (:10:11)
    at database (:6:5)
    at controller (:2:5)

And you can see from the above error, query was called by database, which in turn was called by controller. You can see then that the stack trace shows which functions called each other. Importantly, we can also see the line number and file that the function exists on, and the topmost line is the error itself.

The stack trace helps us to know the steps that lead up to our error. And the stack trace isn’t only useful for humans. If you’re using error tooling that tracks and stores errors, it can use these stack traces to count how often an error occurs.

But wait—before you take your newfound knowledge of stack traces and start using the console.trace method as a debugging tool, there are a few other things we should consider. In JavaScript, the stack trace may not always appear as you think. What do I mean? Let me explain…

Function Naming, and Why It’s Important
---------------------------------------

One of the key components in the above stack trace is that it emits not only an error message and a set of line numbers, but the function names. However, in JavaScript, not every function has a name. Some functions can be anonymous.

These anonymous functions pose a threat to our debugging. If our stack traces include anonymous functions, we’ll greatly reduce the value of the stack trace because it’s much harder to see the steps that lead to an error. This will make our whole debugging process so much more painful.

Take, for instance, the following example:

const database = Promise.resolve();
database
    .then(function () {
        throw new Error();
    });

When we run the above code, we see the following stack trace:

Uncaught (in promise) Error
at <anonymous>

As you can see, the error is thrown, but the parent function that led to the error is anonymous. Not only that, but the error itself is quite cryptic. It tells us that an error happened, but no indication is made as to why the error occurred.

The stack trace contains a reference to an unnamed function because in the previous example the error that was thrown was in fact anonymous. Go ahead and take a look. We didn’t tell JavaScript the name of the function, so it can’t report it, which isn’t very useful.

So how can we resolve the problem and go back to understanding the history of each of our called functions? By ensuring that we apply a name property to all of our functions.

Let’s modify the above example with a name on our function.

const database = Promise.resolve(); 
database
    .then(function resolver () { 
        throw new Error(); 
    });

Which now results in the following stack trace:

Uncaught (in promise) Error
    at resolver (<anonymous>:1:81)

Aha! Much better.

Always Name Your Functions
--------------------------

Generally speaking, it’s wise to always name your functions, no matter the situation. You can name a function by adding the name between the function keyword and your argument brackets. But don’t be fooled—an anonymous function assigned to a variable is still anonymous.

For instance, take the following:

const named = function(){}

Here, it appears that the function is named, but it isn’t. Because there’s no name between the function keyword and the round brackets, the function has no name and will appear as anonymous in our stack trace. Some JavaScript engines can infer our name in some scenarios, but it’s not an officially supported feature, so don’t be fooled. Always name your functions.

Give Names to Your JavaScript Errors
------------------------------------

The keen-eyed among you will have noticed that in all the examples shown so far, the error messages themselves have been pretty useless. For instance, “Uncaught (in promise) Error” gives us very little context or understanding to fix the error.

But there is hope! We can actually fix these error messages. Let me show you how.

In order for stack traces to be their most effective, we should anticipate as many error states as possible and throw descriptive errors. Say, for instance, that JavaScript encountered a missing piece of data—let’s say a username not in a database. We wouldn’t want our code to continue running, because it would try to perform actions on the missing data and would eventually throw some unhelpful message like:

Uncaught ReferenceError: user is not defined

Seem familiar? It will be to most developers. Because JavaScript is quite flexible, running into these cryptic error messages is all too common.

So, how do we fix it? By throwing errors with descriptive error messages.

Let’s go back to our first example to look at throwing named errors in action. If we take our original example, rather than throwing a generic error, let’s go ahead and add an error message to our error object constructor, as follows:

function controller(){ database(); }

function database(){ query(); }

function query () { throw new Error('Error occurred in query, please try X'); }

Which will result in the following stack trace:

Uncaught Error: Error occurred in query, please try X
at query (<anonymous>:5:27)
at database (<anonymous>:3:22)
at controller (<anonymous>:1:24)

Now that’s a lot more readable!

Notice that we even modified our error message to include a suggestion for a fix.

When you’re writing the code at that point in time, you’ll have a good understanding of all the different ways that your function can fail. So, if you can, explicitly throw errors with meaningful messages to help out your future self when you’re debugging your code.

![](https://library.scalyr.com/2019/08/22174302/Javascript-Stack-Trace-Pull-Quote-21.png)

And That’s All on the Stack Trace
---------------------------------

That concludes our look at JavaScript stack traces. I hope it helps you feel more confident when you see stack traces and that you understand how they’re created, how to read them, and ultimately how to use them confidently to debug your application.

Remember, always name functions, and don’t be fooled by assigning them to variables, which are still unnamed. And also, try to predict failure points in your application and throw reasonable error messages that will make your life easier later on.

No more will you need to mindlessly paste errors onto the internet. Instead, you can sift through them yourself like an investigator solving a mystery. Debugging applications in a much more logical and straightforward manner should save you plenty of headaches in the long run, and make writing code a little bit more fun.

Good luck!

_This post was written by Lou Bichard._ [_Lou_](http://www.thedevcoach.co.uk/) _is a JavaScript full stack engineer with a passion for culture, approach, and delivery. He believes the best products emerge from high performing teams and practices. Lou is a fan and advocate of old-school lean and systems thinking, XP, continuous delivery, and DevOps._


[Source](https://www.scalyr.com/blog/javascript-stack-trace-understanding-it-and-using-it-to-debug/)



# Stack trace in JavaScript

> When you are done check out how else we might help you!

When you are done [check out](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/invitation) how else we might help you!

We have already seen 5 levels of [logging in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/logging-in-javascript). Each one showed the line number where the function was called. That's very nice, but if the same function can be called in multiple places then having that context can improve your understand what has happened.

Printing a full stack trace can help a lot.

Using console.trace
-------------------

Luckily the console object also has a method called trace.

In the following example we have a few totally useless functions calling each other and then calling the add function, that calls console.trace.

**examples/javascript/logging/logging\_trace.js**  

1.  function add(x, y) {
2.   console.trace('add called with ', x, 'and', y);
3.   return x+y;
4.  }

6.  function calc() {
7.   return add(8, 11) + add(9, 14);
8.  }

10.  function main() {
11.   var x \= add(2, 3);
12.   var y \= calc();
13.  }

16.  main();

The output in [the JavaScript web console](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/open-javascript-console) of Chrome looks like this:

![console trace in Chrome](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_trace_in_chrome.png)

In Firefox it looks like this:

![console trace in Firefox](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_trace_in_firefox.png)

If you'd like to try it yourself, here is the HTML that will load the above JavaScript file.

**examples/javascript/logging/logging\_trace.html**  

1.  <!DOCTYPE html>
2.  <html lang\="en"\>
3.  <head>
4.   <meta charset\="utf-8"\>
5.   <script src\="logging\_trace.js"\></script>
6.  </head>
7.  <body>
8.   <a href\="[http://code\-maven.com/open\-javascript\-console](http://code-maven.com/open-javascript-console)" target\="\_blank"\>Open the JavaScript console</a>
9.   in order to see the logging messages.
10.  </body>
11.  </html>

[Try!](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/try/examples/javascript/logging/logging_trace.html)

Stack trace as a string
-----------------------

There are cases when you might not necessarily want to print the stacktrace immediately, or you might even want to save it or send it to the server. For such cases, it would be nice to be able to get a string version of the stack trace.

The following solutions are based on ideas found on [this](http://stackoverflow.com/questions/591857/how-can-i-get-a-javascript-stack-trace-when-i-throw-an-exception) and [this](http://ivan-gandhi.livejournal.com/942493.html) page.

Stack trace with Error object
-----------------------------

In this solution we create and Error object and then return (and print) the stack attribute.

The full JavaScript code looks like this:

**examples/javascript/logging/logging\_trace\_with\_error.js**  

1.  function add(x, y) {
2.   console.log(new Error().stack);
3.   return x+y;
4.  }

6.  function calc() {
7.   return add(8, 11) + add(9, 14);
8.  }

10.  function main() {
11.   var x \= add(2, 3);
12.   var y \= calc();
13.  }

16.  main();

The corresponding HTML file is not very intersting, but it is included to make it easier for you to try it: **examples/javascript/logging/logging\_trace\_with\_error.html**  

1.  <!DOCTYPE html>
2.  <html lang\="en"\>
3.  <head>
4.   <meta charset\="utf-8"\>
5.   <script src\="logging\_trace\_with\_error.js"\></script>
6.  </head>
7.  <body>
8.   <a href\="[http://code\-maven.com/open\-javascript\-console](http://code-maven.com/open-javascript-console)" target\="\_blank"\>Open the JavaScript console</a>
9.   in order to see the logging messages.
10.  </body>
11.  </html>

[Try!](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/try/examples/javascript/logging/logging_trace_with_error.html)

The output in Chrome: ![console trace in Chrome](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_trace_with_error_in_chrome.png)

and in FireFox: ![console trace in Firefox](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_trace_with_error_in_firefox.png)

Stack trace using caller object
-------------------------------

In this solution we have implemented a function called stacktrace that will return a string representing the call history to the point where stacktrace() was called.

Internally it uses another function called st2 that will be called recursively traversing the call-tree up till the point where we reach the main body of our JavaScript script.

**examples/javascript/logging/logging\_stacktrace.js**  

1.  function add(x, y) {
2.   console.log(stacktrace());
3.   return x+y;
4.  }

6.  function calc() {
7.   return add(8, 11) + add(9, 14);
8.  }

10.  function main() {
11.   var x \= add(2, 3);
12.   var y \= calc();
13.  }

16.  main();

18.  function stacktrace() {
19.   function st2(f) {
20.   var args \= \[\];
21.   if (f) {
22.   for (var i \= 0; i < f.arguments.length; i++) {
23.   args.push(f.arguments\[i\]);
24.   }
25.   var function\_name \= f.toString().split('(')\[0\].substring(9);
26.   return st2(f.caller) + function\_name + '(' + args.join(', ') + ')' + "\\n";
27.   } else {
28.   return "";
29.   }
30.   }
31.   return st2(arguments.callee.caller);
32.  }

At the end of the declaration of stacktrace we call st2 with the arguments.callee.caller. [arguments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments) is a special object that belongs to the current function call and that contains a lot of information about the current call. For example the callee attribute refers to the currently executing function which is stacktrace.

We can probably replace return st2(arguments.callee.caller); by return st2(stacktrace.caller);, but then we repeat the function name which will make it harder to rename the function.

the st2 function is then called recursively and it returns the stacktrace string so far. When it reaches the top-most function call (in our case main) the next recursive call will be with an undefined value received from f.caller. That will make it return an empty string without further recursive calls.

If f is not yet undefined we build up the current call at the current level of the stacktrace. We use the [arguments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments) object of the current function. Because it is not a real Array we cannot use join and we have to loop over the elements to build up the list of arguments received by this call. That's what is saved in the args array.

f.toString() returns the string representation of the function f. Each such string representation starts with function some\_name(param, param) {. split('(') cuts that string at the ( characters in the source code of the function, including the first ( in the argument declaration.

The \[0\] means we take the first element from the returned array. That returns function some\_name. Calling substring(9) take all the characters except the first 9 and returns that string. The returned string is the name of the function. In our example it is some\_name. That's how we can extract the name of the currently called function.

Now that we have both the name of the current function and the list of parameters it received we can create a string that represents the call.

The result looks like this in Chrome:

![console trace in Chrome](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_stacktrace_chrome.png)

and this in FireFox:

![console trace in Firefox](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/javascript_stacktrace_firefox.png)

If you'd like to try it yourself, here is the corresponding html file: **examples/javascript/logging/logging\_stacktrace.html**  

1.  <!DOCTYPE html>
2.  <html lang\="en"\>
3.  <head>
4.   <meta charset\="utf-8"\>
5.   <script src\="logging\_stacktrace.js"\></script>
6.  </head>
7.  <body>
8.   <a href\="[http://code\-maven.com/open\-javascript\-console](http://code-maven.com/open-javascript-console)" target\="\_blank"\>Open the JavaScript console</a>
9.   in order to see the logging messages.
10.  </body>
11.  </html>

[Try!](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/try/examples/javascript/logging/logging_stacktrace.html)

The console API
---------------

For even further details check out the [console API of Chrome](https://developer.chrome.com/devtools/docs/console-api) and the [console API of FireFox](https://developer.mozilla.org/en/docs/Web/API/console).

If this article helped you, [check out](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/invitation) what else can you learn here!

In the comments, please wrap your code snippets within <pre> </pre> tags and use spaces for indentation.

If you have any comments or questions, feel free to post them on the source of this page in GitHub. [Source on GitHub.](https://github.com/szabgab/code-maven.com/tree/main/sites/en/pages//stack-trace-in-javascript.txt)


[Source](https://code-maven.com/stack-trace-in-javascript)
