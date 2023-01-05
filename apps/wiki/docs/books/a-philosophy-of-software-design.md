# A Philosophy of Software Design

by John Ousterhout

## Chapter 2: The Nature of Complexity

- TODO

### 2.1 Complexity defined

- TODO

### 2.2 Symptoms of complexity

- TODO

### 2.3 Causes of complexity

- TODO

### 2.4 Complexity is incremental

- TODO

## Chapter 3: Working Code Isn’t Enough (Strategic vs. Tactical Programming)

- TODO

### 3.1 Tactical programming

- TODO

### 3.2 Strategic programming

- TODO

### 3.3 How much to invest?

- TODO

### 3.4 Startups and investment

- TODO

## Chapter 4: Modules Should Be Deep

- TODO

### 4.1 Modular design

- TODO

### 4.2 What’s in an interface?

- TODO

### 4.3 Abstractions

- TODO

### 4.4 Deep modules

- TODO

### 4.5 Shallow modules

- TODO

### 4.6 Classitis

- TODO

### 4.7 Examples: Java and Unix I/O

- TODO

## Chapter 5: Information Hiding (and Leakage)

- TODO

### 5.1 Information hiding

- TODO

### 5.2 Information leakage

- TODO

### 5.3 Temporal decomposition

- TODO

### 5.4 Example: HTTP server

- TODO

### 5.5 Example: too many classes

- TODO

### 5.6 Example: HTTP parameter handling

- TODO

### 5.7 Example: defaults in HTTP responses

- TODO

### 5.8 Information hiding within a class

- TODO

### 5.9 Taking it too far

- TODO

## Chapter 6: General-Purpose Modules are Deeper

- TODO

### 6.1 Make classes somewhat general-purpose

- TODO

### 6.2 Example: storing text for an editor

- TODO

### 6.3 A more general-purpose API

- TODO

### 6.4 Generality leads to better information hiding

- TODO

### 6.5 Questions to ask yourself

- TODO

## Chapter 7: Different Layer, Different Abstraction

- TODO

### 7.1 Pass-through methods

- TODO

### 7.2 When is interface duplication OK?

- TODO

### 7.3 Decorators

- TODO

### 7.4 Interface versus implementation

- TODO

### 7.5 Pass-through variables

- TODO

## Chapter 8: Pull Complexity Downwards

- TODO

### 8.1 Example: editor text class

- TODO

### 8.2 Example: configuration parameters

- TODO

### 8.3 Taking it too far

- TODO

## Chapter 9: Better Together Or Better Apart?

- TODO

### 9.1 Bring together if information is shared

- TODO

### 9.2 Bring together if it will simplify the interface

- TODO

### 9.3 Bring together to eliminate duplication

- TODO

### 9.4 Separate general-purpose and special-purpose code

- TODO

### 9.5 Example: insertion cursor and selection

- TODO

### 9.6 Example: separate class for logging

- TODO

### 9.7 Example: editor undo mechanism

- TODO

### 9.8 Splitting and joining methods

- TODO

## Chapter 10: Define Errors Out Of Existence

- TODO

### 10.1 Why exceptions add complexity

- TODO

### 10.2 Too many exceptions

- TODO

### 10.3 Define errors out of existence

- TODO

### 10.4 Example: file deletion in Windows

- TODO

### 10.5 Example: Java substring method

- TODO

### 10.6 Mask exceptions

- TODO

### 10.7 Exception aggregation

- TODO

### 10.8 Just crash?

- TODO

### 10.9 Design special cases out of existence

- TODO

### 10.10 Taking it too far

- TODO

## Chapter 11: Design it Twice

- TODO

## Chapter 12: Why Write Comments? The Four Excuses

- TODO

### 12.1 Good code is self-documenting

- TODO

### 12.2 I don’t have time to write comments

- TODO

### 12.3 Comments get out of date and become misleading

- TODO

### 12.4 All the comments I have seen are worthless

- TODO

### 12.5 Benefits of well-written comments

- TODO

## Chapter 13: Comments Should Describe Things that Aren’t Obvious from the Code

- TODO

### 13.1 Pick conventions

- TODO

### 13.2 Don’t repeat the code

- TODO

### 13.3 Lower-level comments add precision

- TODO

### 13.4 Higher-level comments enhance intuition

- TODO

### 13.5 Interface documentation

- TODO

### 13.6 Implementation comments: what and why, not how

- TODO

### 13.7 Cross-module design decisions

- TODO

## Chapter 14: Choosing Names

- TODO

### 14.1 Example: bad names cause bugs

- TODO

### 14.2 Create an image

- TODO

### 14.3 Names should be precise

- TODO

### 14.4 Use names consistently

- TODO

### 14.5 A different opinion: Go style guide

- TODO

## Chapter 15: Write The Comments First (Use Comments As Part Of The Design Process)

- TODO

### 15.1 Delayed comments are bad comments

- TODO

### 15.2 Write the comments first

- TODO

### 15.3 Comments are a design tool

- TODO

### 15.4 Early comments are fun comments

- TODO

### 15.5 Are early comments expensive?

- TODO

## Chapter 16: Modifying Existing Code

- TODO

### 16.1 Stay strategic

- TODO

### 16.2 Maintaining comments: keep the comments near the code

- TODO

### 16.3 Comments belong in the code, not the commit log

- TODO

### 16.4 Maintaining comments: avoid duplication

- TODO

### 16.5 Maintaining comments: check the diffs

- TODO

### 16.6 Higher-level comments are easier to maintain

- TODO

## Chapter 17: Consistency

- TODO

### 17.1 Examples of consistency

- TODO

### 17.2 Ensuring consistency

- TODO

### 17.3 Taking it too far

- TODO

## Chapter 18: Code Should be Obvious

- TODO

### 18.1 Things that make code more obvious

- TODO

### 18.2 Things that make code less obvious

- TODO

## Chapter 19: Software Trends

- TODO

### 19.1 Object-oriented programming and inheritance

- TODO

### 19.2 Agile development

- TODO

### 19.3 Unit tests

- TODO

### 19.4 Test-driven development

- TODO

### 19.5 Design patterns

- TODO

### 19.6 Getters and setters

- TODO

## Chapter 20: Designing for Performance

- TODO

### 20.1 How to think about performance

- TODO

### 20.2 Measure before modifying

- TODO

### 20.3 Design around the critical path

- TODO

### 20.4 An example: RAMCloud Buffers

- TODO
