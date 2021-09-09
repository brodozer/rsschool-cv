### [rsschool-cv](https://brodozer.github.io/rsschool-cv/cv)

# Aleksandr Perepelitsa

## Contacts
* E-mail: perepelitsa.alex@gmail.com
* Telegram: @brodozer

## Skills
* HTML5/CSS3/JavaScript/jQuery
* Bootstrap/Gulp/GIT
* LESS/SASS
* Adobe Photoshop/Figma/Zeplin/Avocode

## Code example
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.

```javascript
function solution(number){
  let sum = 0
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
```
## Courses
["Front-end Pro"](https://drive.google.com/open?id=0BzoeJN8sYRtCS1BvT1dKT1VtQTlnVW9fS0xXZmVyRXAzYmlv)

## Language
English level - A1