
Technology: Meteor


Subject: Core


## <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98">Class: Meteor Fibers and Dynamics</a>

The meteor runtime lets you write asynchronous code in a synchronous style using
the Fibers co-routines module. This way, you can make Mongo queries without
passing callback after callback while waiting for results. Dynamics is Meteor's
implementation of dynamically scoped variables that work with Fibers.
Understanding these concepts are a prerequisite to understanding Meteor
performance and integration with asynchronous libraries. We'll start off by
reviewing what it means to be asynchronous in NodeJS. Then you'll play with
fibers using a server side debugger and use them to use an asynchronous function
in a synchronous style. Then you'll see how Meteor's bindEnvironment method lets
us work with asynchronous code. Finally, you'll learn what a dynamically scoped
variable means, and how Meteor implements them in Meteor.EnvironmentVariable.



**What's in this class?**


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/introduction-852d7a76">Introduction: Meteor Fibers and Dynamics</a> - Meteor uses Fibers to allow you to write synchronous code on the server. Usually in Node.js applications, you need to nest callbacks when you connect with the database. Meteor also provides the ability to have dynamically scoped variables. Understanding these key features of Meteor is critical to understanding performance in Meteor. We cover both these concepts in depth in this class and start from the beginning by looking at the call stack or task queue and seeing what happens when we make an asynchronous call.

* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/what-does-it-mean-to-be-async-0e204954">What Does it Mean to be Async?</a> - In this video you'll review what it means to be asynchronous in NodeJS. The
topic is covered in depth in the JavaScript runtime class. In this video, we'll
review the difference between an asynchronous function and a function that does
concurrent IO work. This lays the foundation for understanding why Fibers are
necessary and how they work.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/what-is-a-fiber-911701fa">What is a Fiber?</a> - The best way to learn about fibers is to play with them in a debugger. In this
video we'll learn how to create and use fibers. We'll see how they work by
setting breakpoints and playing around in a server debugger.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/using-fibers-to-write-synchronous-style-code-c597e378">Using Fibers to Write Synchronous Style Code</a> - Now that you know what a fiber is lets use them. You'll make an asynchronous
function "fiber aware" so that we can call it in a synchronous style, without
losing the benefits of asynchronous IO.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/dynamic-scoping-with-meteor-dynamics-a70102e4">Dynamic Scoping with Meteor Dynamics</a> - Meteor has an implementation for dynamically scoped variables that work with
multiple Fibers. Dynamically scoped variables in Meteor lets us temporarily set
the value of a variable at a given point in the call stack. One of the key
benefits is that we can use variables without modifying function signatures. For
example, when you make a Meteor method call, Meteor stores the information like
the userId for the method call in a dynamic variable.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/using-bindenvironment-a6c2bb7f">Using bindEnvironment</a> - You've probably seen the error in your applications about Meteor code always
having to run in a Fiber. The solution to this error is to wrap any asynchronous
callbacks in Meteor.bindEnvironment. In this video I'll explore how
bindEnvironment works with fibers and Meteor's dynamic variables.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/meteor-async-wrappers-e3f5dbcb">Meteor Async Wrappers</a> - Meteor wraps the asynchronous setTimeout and setInterval functions, and provides
us a way to wrap any generic asynchronous function that follows the NodeJS
convention.


* <a href="https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98/where-does-meteor-use-dynamic-variables-87a9ee05">Where Does Meteor Use Dynamic Variables?</a> - You've seen the Meteor.EnvironmentVariable data structure and how Meteor
implements dynamically scoped variables. But where does Meteor actually use
these variables? In this video you'll see how Meteor uses two dynamic variables
during RPC method invocations.



