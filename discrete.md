# Discrete Structures (CSCI 150 @ Hunter with Schaffer)
**SF** = **Schaffer Formula** = Formulas Highlighted in blue in the text = *Memorize them*

* ## Basic Sum Manipulations
  * Item 1-2: Adding integers from 1 to n
  * Item 3-4: Adding integers from 1 to n-1

* ## Sum Manipulations with Arithmetic Series
  * Item 5: Introducing Arithmetic Series, Sigma Notation
    * **Schaffer Formula #1 (sum of first n numbers = n(n+1)/2 )** p3
  * Item 6: Sigma Manipulations

* ## Set Theory 
  * Item 7: Introducing Set Theory
    * Choose Notation
    * 0, 1, 2 element subsets 

* ## Binomial Theorem
  * Item 8: Coefficients of terms with 0,1,2 y's
  * Item 9: Binomial Coefficients
    * **Schaffer Formula #2( nCk = nCn-k )** p5
    * **SF#3( Binomial Theorem )** p5
  
* ## Multiplication Principle
  * Item 10: Introducing Multiplication Principle
  * Item 11: Number of terms in a binomial expansion (with subscripts)
  * Item 12: **SF#4( sum nCi = 2^n )** p6
  * Item 13: Total number of elements in an n element set
  
* ## Factorial Manipulation
  * Item 14: Number of orderings; Introducing permutations, factorial notation
  * Item 15: Factorial Manipulation (canceling factors in numerator/denominator)
  * Item 16: Ordering k elements of an n element set ( n!/(n-k)! )
  * Item 17: Choosing k element subsets of an n element set
    * **SF#5( nCk = n! / k!(n-k! )** p9
  * Item 18: Calculating Binomial Coefficients using SF5
  
* Item 19: Representing numbers in binary and other bases (repeated division technique)

* Item 20: How many n bit binary numbers (2^n)
  * a. Using multiplication principle
  * b. Representing bits as elements and numbers as subsets: How many subsets of n element set
  * c. The number of n digit numbers is 1 more than the highest (n-1) digit number
    * Finding the highest n bit number with sum manipulations
    * The highest n bit number is 1 less than the smallest (n+1) bit number = (2^n -1)

* ## Item 21: Geometric Series (sum of a geometric sequence)
  * **SF#6 ( Sum of a geometric sequence / evaluating geometric series )** p12
  * **SF#7 ( Sum of an infinite geometric sequence / evaluating infinite geometric series )** p13
  * Technique for evaluating geometric series
    * factor out first term so series starts at 1
    * write each term in the form of r to a power
    * apply SF6 (or SF7 if infinite)

* ## Advanced Sigma Manipulations
  * Item 22: Sigma containing a constant (note: starting at 0 adds an iteration)
* Nested Summations / Double Sigmas: Work on inner sum, then outer sum
  * Item 23: n x n addition table 
  * Item 24: n x n multiplication table 
    * Instead of using sigma manipulations, multiplying 2 sums 
    
* Item 25: Pascal's Triangle
  * **SF#8 ( minus C minus 1 + minus 1 C same  ) p16**
  * Triangle properties (symmetric, rows add to 2^n)
  
* Item 26: Alternating Row of Pascal's Triangle (is 0)
  * Using binomial theorem
  * Using SF8 and telescoping sum
  * Representing positives as even sized subsets and negatives as odd sized subsets
    * Prove that a set has the same number of each 
    * Form pairs of subsets that are exactly identical except one includes a the other doesnt
    * In each pair, one subset must be even and the other must be odd, but if each pair contributes 1
    * Introducing combinatorial proofs
  * **SF#9 ( sum -1<sup>^</sup>i <sub>n</sub>C<sub>i</sub> = 0)** p19
     
* Algebraic and Combinatorial Choose Formula Proofs
  * Item 27: Algebraic Proof of SF#8
  * Item 28: Algebraic and Combinatorial Proof of <sub>n</sub>C<sub>k</sub> = n/k (<sub>n-1</sub>C<sub>k-1</sub>)
  
* ## Proof by Induction 
  * Item 29: Sum of First n odd numbers 
  * Item 30: Sum of First n squares
  * Item 31: Sum of First n Cubes (Not Induction)
  * Item 32: Recursive algorithm for calculating binomial coefficients
  
* Item 33: Number of recursive function calls 

* ## Graph Theory
  * Item 34: Number of odd degree vertices is always even
  * Item 35: Pigeonhole principle

* ## Recurrences
  * Item 36: n x 2 area with 1 x 2 Tiles 
  * Item 37: Tower of Hanoi
  * Item 38: Basic Recurrence Solve
  * Item 39: Solving a class of recurrences
  * Item 40: Using geometric sequences to solve recurrences
  * Item 41: Closing the tile problem and geometric sequence technique

* Item 42: Sum x<sup>i</sup> <sub>n</sub>C<sub>i</sub> = (x+1)<sup>n</sup>
  * Combinatorial Proof
  * Using Binomial Theorem
  
* ## Permutations of things with repeats
  * Item 43: Number of ways of arranging digits of a number that have repeated digits
    * Add subscripts and divide by rearrangements that are the same
    * Using multiplication principle 
    * Derivation of factorial formula for binomial coeffecients with this method
  * Item 44: Assigning people tasks 
    * Tasks are all different: think of it as tasks to people instead of people to tasks
    * Tasks are all the same: stars and bars 
  * Item 45: n digit numbers with at least 1 repeated digits
    * Introducing general principle: count what you don't want and subtract
 
* ## Probability (RIP)
  * Item 46: Chance of choosing a random subset of k elements from an n element set
  * Item 47: Chance of being dealt a one pair hand; chance of a flush
    * Introducing poker and card system
    * Construct in stages with multiplication principle
  * Item 48: Chance of a straight or a flush or both
    * Introducing inclusion exclusion principle
  * Item 49: Coin Flips with a run of at least 3
    * Subtract unwanted runs from total
    * Create inductive definition for recurrence describing unwanted runs

* Item 50: Average Number of flips of a fair coin
* Item 51: Evaluating solution to Item 50
  * Advanced sum manipulations
* Item 52: sum i <sub>n</sub>C<sub>i</sub> = n (2<sup>n-1</sup>)
  * Combinatorial Proof
  * Proof by Induction
  
* ## More Probability 
  * Item 53: 𝑃(𝑘 heads in 𝑛 flips) for unfair coins
    * Building the probability
    * Using binomial theorem
    * **SF #10 (probability of k heads in n flips)**
  * Item 54: Advanced Inclusion Exclusion 
    * Getting the formula
    * proving it correctly counts arbitrary element k
    * Using alternating sum of pascals triangle proof
    * Using formula in the problem
 
* Set Operations, Logic, and De Morgan's
  * Item 55: Distributive Law for Sets; De Morgan's Law for Sets
  * Item 56: Propositional Logic and Truth Tables
  
* Item 57: Proving Item 52 using average size of a subset


    
    
