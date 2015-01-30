# Meteor Fibers and Dynamics

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

**https://www.eventedmind.com/classes/meteor-fibers-and-dynamics-9ba17f98**
