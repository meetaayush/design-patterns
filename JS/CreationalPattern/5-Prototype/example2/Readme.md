In this challenge, you have to implement a Ninja fighting game using the prototype pattern.

You have already been given the Ninja constructor function, which will be used to create a ninja object. A ninja should have the following properties:

- name
- points

The points are set to 100 by default upon the instantiation of a Ninja object.

A ninja can pull the following moves in a fight:

**punch**: ninjas points reduce by 20 if they get a punch
**kick**: ninjas points reduce by 50 if they get a kick

> A ninja can only kick or punch the other ninja if the following conditions are met:
`
The other ninja’s points are greater than 0.
The points of the ninja himself are also greater than 0.
`

If the two conditions above are met, you should return the points of the other ninja as follows:

`{other ninja's "name"} points are {other ninja's "points"}`

If the conditions are not met, you should return the following if a punch was attempted:

`Can't punch {other ninja's name}`

And the following if a kick was attempted:

`Can't kick {other ninja's name}`

---

### Input
Two fighting Ninjas

```js
var ninja1 = new Ninja('Ninja1')
var ninja2 = new Ninja('Ninja2')

ninja1.kick(ninja2)
ninja2.punch(ninja1)
ninja1.kick(ninja2) 
ninja1.punch(ninja2) 
ninja2.kick(ninja1)
```

### Output
```js
"Ninja2's points are 50"    
"Ninja1's points are 80"    
"Ninja2's points are 0"
"Can't punch Ninja2"
"Can't kick Ninja1"
```