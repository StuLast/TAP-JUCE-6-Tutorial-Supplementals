# Tutorial 01 - Using Namespace JUCE:  What is it and Why Shouldn't I Use it?

[Go To Video On YouTube](https://youtu.be/cJtx30ZRl_0)

[Tutorial_01 Index](./Tutorial_01.md)

[Transcript](./Transcript.md)

## Supplemental

In this lesson Josh covers some aspects of namespaces in C++ but it is worth looking at the detail of the lesson and C++ namespaces in general to get a better idea of why they are used, how to use them, and some of the best practices seen in C++ today.

Let's start by looking at what a namespace is.

## Namespaces - an introduction.

C++ is a fairly established language that has been round for a long time and is based on the language C, which has been around even longer.  C++ has evolved over it's lifetime, with one of the features being that of "Namespaces".  Namespaces in C++ and in many other languages are a way to collect blocks of code together and give that collection a name.

Think of it this way - if you have a street on a map, the individual houses would be the blocks of code (objects, structure, etc) and the streetname would be the namespace.

## Why namespaces came into being

One of the things you'll encounter as a developer in any language is the use of libraries of code.  This is code written by somebody else that is provided as a sort of toolkit upon which to build other code.  Effectively, a library allows us to re-use (or even create) tried and tested code so that we, or other programmers don't have to reinvent the wheel.  The JUCE framework is one such library that handles the heavy-lifting and/or commonly used code in Audio Programming thereby letting the programmer focus on creating something new, interesting and, hopefully marketable.  Let's face it, it would be crazy to have to keep redefining commonly used code each time you wanted to build a plugin.

The problem comes, though when you start using multiple libraries, or even your own code.  What if more than one library contains the same object name, static method, struct etc.  How will the C++ compiler know which one you are referring to, unless you've been specific.  Take, as an example, the number Pi, a pretty important number when it comes to generating waveforms.  C++ has a library, cmath, which defines a constant for Pi.  JUCE also has a constant for PI.  For the purpose of demonstration, let's assume they are both called PI.  We'll also assume that you want to use math constants from both cmath and juce.


In your sin wave generator, you use the JUCE PI in the formula.  It makes perfect sense to you because, at the time of writing, you know which PI you mean.  But what happens if you have to work on the project again in a few months time?  Will you be clear which PI you intended to use?  Would another programmer instinctively know which PI you intended to use.  In a situation such as this, where there is no way to know which PI you intended to use.  The compiler is wise to this, and, where there is any such ambiguity, will flat out refuse to build.  After all, it's a program and until software can read our minds (a truly terrifying concept), the compiler will never know whcih PI you are thinking about.

To use our street address analogy, if you have 2 streets, both with a house numbered "1", how will the post man know which house to deliver to unless you provide additional information (such as the street name) to make the address more specific.

## Specificity

This is where namespaces can solve the problem by adding "specificity" to our code.  

It's worth noting at this point that, if your working in a language such as C++, you are probably beginning to think about yourself as a software engineer.  Engineeing is all about specificity.  If you look at an Aston Martin DB9, each nut, bolt, wire, resistor, basically every part has been selected for a specific purpose.  A bolt of a specific size, tightened to a specific torque, machined to specific tolerances and placed in a specific postion will do one job, and it will do it extremely well.  This is as true of software engineering as it is of any other kind of engineering.  Being specific adds clarity to your code.

Getting back to namespaces and our PI analogy.  It may be, for drawing a circle in the UI, that the cmath definition of Pi is defined to just the right number of decimal places and so this would be the perfect fit.  When generating a sine wave, it is likely that the JUCE definition of Pi is more appropriate, and that should be the one you use.  By adding the namespace (cmath or juce) you are declaring in your code the specific definition that you're using, and this is readily apparent to the compiler (which means your code will build) and it's clear to anybody else reading your code or developing the software alongside you.  In short, Specificity adds clarity and intent to yoru code.

## The "using" Keyword

This is where we might get into some heated discussions about the pros and cons of using the "using" keyword but I'll try to stick to purpose rather than opinion  This keyword gives us a tool to shortcut our typing, that's all.  When the compiler compiles, it will still seek out the appropriate code declared in "using", add it the .h and/or .cpp file and then, at a later part in the process, optimise the code as best it can.  If you could open up and read the files that are output from the compiler, you wouldn't see any "using" keywords, or even recognise the code.  The reason the keyword exists is to make a programmer's life easier and to use "natural language" to create software rather than hex codes and binary.  In short, the "using" keyword is a bit of a shortcut.

The "using" keyword, as Josh alludes to in the video, gives the programmer the opportunity to inform the compiler which libraries the compiler in for a particular block of code, whether that is a function, constant, struct or class.  As advanced as computing is getting, guessing what a programmer is thinking is still, thankfully, outside the capabilities of a compiler.


## Scope of "using"

The "using" keyword has scope.  That is to say it is sensitive to where it is placed in the code.  If you place it at the top of a .h or .cpp file, the namespace will
```c++
#include <iostream>  // This is an instruction to the pre-processor to grab the code from the iostream class(es)/header(s) and inject it here

using namespace std;  //this tells the compiler to look in std for objects, methods etc.  It is in the outer scope of the file, so will be referred to everywhere

void foo() {
    cout << "This cout will also work because the scope of 'using std' is above both the functions. \n\n";
}


int main() {
    cout << "This cout is found in the std library, which is where the compiler looked for the cout function. \n\n";
    foo();
    return 0;
}

```

Note that in this code snippet, the "using" statement is outside of all code blocks, so has scope over all code within this file.

If we wanted to use "using", but be a tad more specific, we could change the scope of the "using", by including it in a code block.


```c++
#include <iostream>  // This is an instruction to the pre-processor to grab the code from the iostream class(es)/header(s) and inject it here


void foo() {
    cout << "This cout will also work because the scope of 'using std' is above both the functions. \n\n";
}


int main() {
    using namespace std;  //this tells the compiler to look in std for objects, methods etc.  It is in the outer scope of the file, so will be referred to everywhere
    cout << "This cout is found in the std library, which is where the compiler looked for the cout function. \n\n";
    foo();
    return 0;
}
```

In this example, the "using" is limited to the main() function code block.  In the foo function, we're relying on the compiler to guess where cout is located,
but becuase the scope of "using namespace std;" is limited to the main() function, the compiler won't know where to look, and we get a build fail.


## Using 'using' to create Aliases for types.

Now that we're a little more comfortable using 'using', we can take it a step further. Before I go further, though, let me just explain that a type can be a basic type, such as an int, or a complex type, such as a class or struct.  Josh demonstrates this really well in the YouTube video, but another example is shown below.

```C++
#include <iostream>  // This is an instruction to the pre-processor to grab the code from the iostream class(es)/header(s) and inject it here

using namespace std;
using wholeNumbers = int;

int main() {
    wholeNumbers number (10);
    cout << "This cout is found in the std library, which is where the compiler looked for the cout function. \n\n";
    cout << number << "\n\n";
}
```

Whilst this is an admittedly somewhat contrived example, and absolutely useless in this context, it does show that you can create a measure of readability in your code by creating an alias for a type.  So when Josh proposes `using attachment = juce::ProcessorValueTreeState::SliderAttachment` as a way to create readability in your code, it is a valid way of using "using".  The compiler will simply change each reference of attachment back to it's full namespace path and type, before processing the code, optimising it and spitting out a working program.  Again, this use of "using" is mereley an option to make the code easier to work with.

Remember, that this use of "using" can also be scoped to specific blocks of code.

##  An alternative to using for creating Aliases

There is another way to create aliases in your code, when dealing with types: The "typedef" keyword.  Syntactically, this may appear to be more obvious as to what you're trying to achieve.  After all, it's not a huge stretch of the imagination to see that typedef translates to type definition.

So, to switch out our previous code to use typedef instead:
```C++
#include <iostream>  // This is an instruction to the pre-processor to grab the code from the iostream class(es)/header(s) and inject it here

using namespace std;
typedef int wholeNumbers;

int main() {
    wholeNumbers number (10);
    cout << "This cout is found in the std library, which is where the compiler looked for the cout function. \n\n";
    cout << number << "\n\n";
}
```

In this case the two different keywords, "using" and "typedef" are clearly performing different roles, although this is, once again, a somewhat contrived and wholly useless example.  Let's something that, at first glance, could be seen as a litte more useful.

```C++
#include <iostream>
#include <map>
#include <string>

typedef std::map<int, std::string> rankings;


int main() {

    rankings raceRankings;
    raceRankings.insert(std::make_pair(1, "first"));
    raceRankings.insert(std::make_pair(2, "second"));
    raceRankings.insert(std::make_pair(3, "third"));

    std::cout << raceRankings[2] << "\n\n";
}
```

This compiles just fine, becuase once again we are just talking about an alias as a convenience for the programmer.  The compiler will happily replace all the mentions of "ranking" with the full ```std::map<int, std::string>``` whilst pulling together all your code, optimising it and converting it into a lower level language that the computer can actually make sense of and use.


## So why all the fuss about not using "using".

At first glance it does seem to make our jobs as programmers much easier to use "using" as a shortcut and to use these type aliases.  But consider the following scenarios:

### namespace scenario

You have a JUCE project, which uses the juce namespace at the top of all it's files.  Part of this project also uses a bespoke synth class form the namespace myBiz, your companies own syth class with more functionality. You create a project, and in the process of writing it put "using namespace myBiz" at the top of each file.  A few months later, whilst working on another part of the project, a colleague requires something from the JUCE library, and ticks that little box to add "using juce" at the top of each file.  Now the build fails becuase the compiler has two choices of synth class. Much debugging ensues.

### Alias scenario

You're working on a team of developers in a busy software house.  At the inception of the project lots of type aliases have been defined in the header files.  Over time, the files have grown and now need debugging.  Do you have the time to keep scrolling up to the top of the file to remind yourself of the typedefs/using aliases, or would it actually be quicker to know straight away, wherever you are in the code, what specific types you're using?

As mentioned several times in this document, "using namespace" using "using" to create aliases, and "typedef" are tools were created to make the programmers life easier.  But, they are only useful until they stop making the programmers life easier.  

## Your Options

You can push ahead and use "using namespace" and using "using" and "typedef" for type aliasing at the top of your file, at the highest level of scope, and hope you don't encounter any namespace clashes.

You can use "using namespace" and using "using" and "typedef" judiciously, and keeping it to the most limited scope possible, thereby keeping definitions and namespace shortcuts as close to the point they are being "consumed" in your code.  This will make a bit easier to track down compiletime bugs and the dreaded runtime bugs.

You can take the time to get used to typing and reading fully qualified namespacing in your code (ie std::cout).  It is amazing how quickly you'll become accustomed to it, with the added bonus that you will type in exactly what you mean, and other readers of your code will be in no doubt about exactly what you meant when you wrote it.

The reason code like "using namespace std" is frowned upon, and the best practice is to use fully qualified namespaces in your code, is that it is specific and clearly states the intent at the point that line of code would be executed.

## A word on "namespace"

In the video, Josh uses the following as a shortcut to the JUCE namespace

```C++
namespace juce
{
    //... all the code
}
```

This really did cause a nervous twitch in my eyebrow which I'll explain here.

The way in which we assign code to a particular namespace is exactly what Josh used.    If you look at any of the JUCE library files, you'll see that all the code is wrapped in the same way ```namespace juce```.  This is how c++ collects multiple files, classes, structs, consts etc etc in the JUCE library namespace.

If I, for example, were to create a whole new library called "Bogdan", I would wrap all my code in ```namespace bogdan { ... }```.  That way, if I wanted to use something out of my "bogdan" namespace, I could type ```bogdan::SomeClass::someConstant```, for example.

Whilst Josh's demonstration "works" the reason it works kinda goes against what the code is intended to do.  In essence, Josh is telling the compiler is that the bespoke code that's been written for this particular pluging is actually part of the "juce" namespace.  Syntactically this works because the compiler is bundling Josh's code in with the code from the juce namespace.  Symantically, though, this is incorrect.  The bespoke code can belong to it's own namespace, by all means, but it really is not part of the JUCE library namespace.

Once again we are back to talking about specificity and clarity of intent.  Should you a programmer revisit Josh's code months or years down the line, is the intent that the code is part of the specific Juce library, or is it specific to another project?

## A final thought on the benefits of namespacing

Namespacing makes our programming lives easier.  For me, one of the biggest benefits comes with naming classes, methods etc.  As an example, let's think about an imaginary but commonly used method in audio programming, creating a sine wave.  In a whole host of audio programming libraries, including JUCE,  there will be a synthesizer.  But what if I wanted to come up with my own specific approach to generating a sine wave, to specific tolerances for the specific purpose of my software?

Looking at the other libraries, there will be such method names as "synth", "synthesizer", "mutliSynth" etc etc - the possibilities are endless.  With some many useful names taken up, what should I do - although unique, I think "StusFunkySynthomograph" is a bit of a mouthful, hard to read, not obvious,  and not really that necessary.  By wrapping my synth class code in a namespace, such as stuSynth, I can still use clear and obvious naming such as getSinWave.  To make use of this all I'd need to do then is use stuSynth::synth.

