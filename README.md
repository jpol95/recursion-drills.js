# recursion-drills.js

Recursion run times
1. O(n). The program runs once for every value of n. 

2. O(n), where n is the exponent. The program runs once for every value of n until it decrements to 0. 

3. O(n), where n is the length of the string. The program runs once for every value decremented from the input until the input is empty. 

4. O(n), where n is the size of the number. The program runs until the number decrements to 0. 

5. I think it's O(n) because it would be the O(length/numseparators * numseparators). length/numseparators because the indexOf method has to, on avergage, search that length of the string for
each recursive call, and numseparators for each recursive call. 

6. O(2^n) since the number of recursive calls doubles every level

7. O(n) run time, where n is the size of the initial number.

8. O(2^n), on average, I believe, where n is the number of open elements, since you have to recursively check an average of 2 of the four squares around you. 

10. O(n!), since there are n! ways to rearrange letters in a word

12. O(logn), since you half the input in every recursive call. 
