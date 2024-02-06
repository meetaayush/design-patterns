# Prototype Pattern
The prototype creational pattern is used to instantiate objects with some default values using an existing object. It *clones the object* and __provides the existing properties__ to the cloned object using prototypal inheritance.

In prototypal inheritance, a prototype object acts as a blueprint from which other objects inherit when the constructor instantiates them. Hence, any properties defined on the prototype of a constructor function will also be present in the cloned object it creates.