[Home](../README.md) |

# Tutorial 01 - Using Namespace JUCE:  What is it and Why Shouldn't I Use it?

[Go To Video On YouTube](https://youtu.be/cJtx30ZRl_0)

[Tutorial_01 Index](./Tutorial_01.md)

[Supplemental](./Supplemental.md)

## Transcript

Note that time indexes have been added to the beginning of each paragraph to aid in navigation around the the YouTube video.

-- Transcription Begins --

Josh Hodges - 

(00:00) "Hey what's up everybody, I'd like to welcome you to another JUCE tutorial.  In this tutorial I'd like to talk a little bit about the JUCE namespace.  In JUCE 6 the juce team have decided to make it mandatory by default that you use the JUCE namespace before you instantiate any JUCE classes or objects.  Now the question is, what does that mean for you?  And I'm going to show you in this tutorial.

(00:25)  So let's go ahead and create a new JUCE project so I'll just do that by going up and saying "File -> New Project" and here we have our new project.  I'll just create a plugin, we can just call this "samplePlugin".  I will create it and put this on my desktop.  Now I'm going to have a new project here and it has all my files.  What I can do is go up to the setting and I'll show you this new setting here.  Down here it says "Add 'using namespace juce' to JuceHeader.H and this is disabled by default, and I'll show you what this means right now.

(1:10)  So let's go ahead an open this up in our IDE, so we'll jut click this centre button, and this will open our project up in XCode.  And here we are.  So normally in a JUCE tutorial (if you've seen any of my JUCE tutorials in the past), we can just instantiate a JUCE object just by typing the name of the object.  So for instnace if we add the Slider class we can normally just say `Slider mSlider;` like this and we can just compile and it would work.

(1:45)  But as we can see we're going to get a build failed, and it says (the error is) "Uknown type name 'Slider'; did you mean 'juce::Slider'?" And this is what I mean by "Using the JUCE namespace."  In front of any JUCE objects or in front of any JUCE classes that we're instantiating we would need to put "juce::" in front of this class.  So lets go ahead and try to compile again.  We will see that we now get "Build Succeeded".

(2:16) Now the question is why have they decided to do this?  Does this not make things more complicated.  The reason that they've decided to do this is that, sometimes you would would get name collisions when using multiple libraries.  So lets just say for instance, in a hypothetical scenario, we had two UI classes that had a class called "Slider".  When the codes trying to compile and we don't have any namespace in front of this "Slider", if we have two UI "kits" that are both using the class called slider, it wouldn't know which "Slider" you meant  Does it mean the "JUCE Slider" or does it mean the "Slider" from this other library.  So that's the reason why they have made it where you need to put the namespace in fornt of it and specify that this is the JUCE::Slider.

(3:17)  So I'm going to show you a few little tips to help with longer names.  ONe of the things that I noticed when I first started out when you have these really long namespaces that get very long to read out.  So for one example, let's say we have `std:unique_ptr<juce::AudioProcessorValueTreeState::SliderAttachment> mAttach1`, lets add a couple like this and I'll just name them '2' and '3'.  

(4:14) I remember when I was first starting out that this looked very long and very confusing to me.  So one way that you can abstract this out is by using the "using" keyword.  So we can do something like this `using Attachement =  juce::AudioProcessorValueTreeState::SliderAttachment;` and we can make Attachment mean this long thing here. Then what I can do , within the scope of this code (so within this header file), anywhere that it says "juce::AudioProcessorValueTreeState::SliderAttachment"  I can now just replace that with `Attachment` like this.  And so sometimes that helps to clean up some of the code as well.

(5:09) One thing that I'll say is that, in terms of best practice, it is best practice to put the JUCE namespace in front of objects to prevent name collisions.  For smaller projects or smaller plugins where you're not using any sort of external libraries it's probably okay, but in general it's best practice to use the JUCE namespace infront of these objects.  

(5:35) Sometimes you'll see this, like a `using` keyword, so `using` some keyword = this long bit of nested code right here.  Another way that you can do this, or another way that you'll see in some code bases is something like this where you can use  `namespace juce` like this and then you need to put closing parenthesis like this.  Now anything that's in here that's supposed to be a JUCE object you ow don't have to put `juce::` in front of it.  Now if I compile this the build we fail because I need to do the same thing for the 'cpp' file as well.

(6:31)  In general, it's I guess it depends, but in general I wouldn't advise you shoudl really do this.  Some codebases I've seen have really nested namespaces and they're very, very long, so you have namespace juce and and sometimes inside that you have some sort of other namespace.  What this basically means is that, anything in here that has a JUCE object that it will automatically put the 'juce' namespace in front of it.  Let's try to build here and make sure that this build succeeds, and we've got a fail "unkown type name", so we just need to put "juce::" in front of this as well and now we should get a build succeeded, and now we've got build succeeded just to show you that this works.

(7:38)  Another thing that I'll show you (so lets just go out of this back to the beginning, like this), is that another thing you can do is actually enable the "using namespace juce", like this.  Then we open up in our IDE and this will bring you back to the "old way" where you just instantiate without need to specify the juce:: namespace.  But I would say in tutorials moving forward what we will  look to do is actually look to do this in the way that I've been told is the best practice which is to use the "juce::" namespace.  So moving forward we will now do it like this and `juce::Slider` rather than just "Slider"

(8:37)  So those are a couple of tips to give you some help.  I hope that this was helfpul for you.  If you have any quesions or you have any better suggestions please leave a comment below, and don't forget to subscribe and drop a like on there as well.  I'll see you next time"

-- Transcription Ends -- 

