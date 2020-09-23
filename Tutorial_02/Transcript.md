# Tutorial 01 - Using Namespace JUCE:  What is it and Why Shouldn't I Use it?

[Go To Video On YouTube](https://youtu.be/cJtx30ZRl_0)

[Tutorial_02 Index](./Tutorial_02.md)

[Supplemental](./Supplemental.md)

## Transcript

Note that time indexes have been added to the beginning of each paragraph to aid in navigation around the the YouTube video.

-- Transcription Begins --

Josh Hodges - 

(00:00) "Hey what's up everybody, I'd like to welcome you to another JUCE tutorial. In this tutorial we're going to talk a little bit about the Projucer itself. So, the Projucer is what comes with, when you actually downlaod JUCE, and it's a way to actually get your first project started when you build your first juce application.

(00:18) So when your first open JUCE \[sic\] (Josh means "Projucer" here), you'll be presented with this screen, or if not, you can actually go up here to "file" and do "new project" and then this should bring up this screen.  Then you can see over here on the left hand side that you have a couple of different types of application that you can actually build.

- Blank Application, which basically has nothing.

... and these are templates to help you get started.  They provide you with the basic source files that you need to build that type of application...

- A UI application just has basically a window where you can actually start building and using some graphics but it doesn't have any sort of facilities for audio input and output and that sort of thing.

- Audio application which is where you can build a standalone audio application
- Plugin Application which is where you can actually build a "vst" or "au" or "aax" plug-in.

The audio application and the basic plugin application are the ones that I tend to use.  Sometimes I'll use a UI application if I'm just trying to show an exmaple or build something very quickly; something visual.

(1:40)  For this one we'll just use a UI application.  Coming over here to the right side of your Projucer now, you can give your project a name, so I will just call this "sample".  Below that we have a module section where you can actually ... Juce is more a kind of of collection of libraries so you have different the you can include or disclude from your JUCE project.  As you can see some of them are checked in here becase we're creating a template.  You have others that you can include sucah as DSP library, you have openGL library, so on and so forth, but they're not included because we don't need them just yet. So I will just leave that as is.

(2:26)  Then we have the path to the modules.  Normally, at least on a Mac, those will be in the applications folder and then we have our exporter section.  So we have checked in "Xcode" as our choice of integrated development environment or IDE.  If we were on windows then we would have "Visual Studio" and so on.  That's it, so what I can could do is actually create this project (by) just going down here to the bottom right, and hit "create project" and then I will just choose desktop.  To actually create the project I hit "Open".  And now it's created my project.

(3:13)  So once it's created the project, then you have your source files here.  You have 3 source files, "main", "maincomponent" and "maincomponent.cpp" - we'll go through those in future tutorials and show you some of the basics around those.   

(3:31)  Those are your source files, and then, below that, you have your modules section so that corresponds with what we did when we were actually creating the project, where we included certain modules.  What you can do, if you want to include other modules is you can hit this plus button down here at the bottom, hit "add a module", then I'm going to go to "Global JUCE modules path", and what I can do is I can include something else.  Now I'll just, for example, include this juce_dsp library.  Now I've included this we can see that it's in red, and we have a warning down here that says "Missing Module Dependencies - Module(s) have missing dependencies".  What this means is that the JUCE DSP module depends on other modules for it to function.  What I need to do is either remove the module, which will just remove the DSP module from our list of included libraries, or I can hit "add missing dependencies" and that will automatically include the other libraries that we need for the JUCE DSP module to work.  So I will just clcik that, and now it's included these other modules that we need for the JUCE DSP library to actually work properly.

(4:51)  Down at the bottom we have exporters, so as you can see we have our Xcode (MacOSX) as our exporter, which is the IDE that we're going to be using.  If I clck in here then we'll see that we ahve these other sections and these are more for advanced features such as if you want to create compiler flags, extra linker flags or you have other libraries that you're trying to link, you would do that in here rather than trying to do that through your IDE.  

(5:20) So make sure you do that all here in the Projucer.  The Projucer is a way of managing your whole project.
  
(5:28) And then I think that's everything important.  A lot of these I've never actually used myself, but they're more kind of advanced things. Sometimes you'll have some menus that are here in debug that aren't in the main Xcode section and vice-versa. 

(5:51) Then what else we have is the settings menu.  Up here at the top in the left, if I click "project settings" then you'll see here that I can change the project name. The main thing that you want to be concerned about here is "Add 'Using Namespace Juce" to  JuceHeader.h.  So I explained a little bit about that in my [last tutorial](../Tutorial_01/Tutorial_01.md)
-- Transcription Ends -- 

