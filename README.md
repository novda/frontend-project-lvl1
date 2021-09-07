### Hexlet tests and linter status:
[![Actions Status](https://github.com/novda/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/novda/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
[![Node CI](https://github.com/hexlet-boilerplates/nodejs-package/workflows/Node%20CI/badge.svg)](https://github.com/novda/frontend-project-lvl1/actions)

# Games

**Calculator:** :abacus:
```bash
$ brain-calc

#right way
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!

#bad way
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```

**GCD:** :ng:
```bash
$ brain-gcd

#right way
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

#bad way
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```

**Progression:**
```bash
$ brain-progression

#right way
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!

#bad way
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```