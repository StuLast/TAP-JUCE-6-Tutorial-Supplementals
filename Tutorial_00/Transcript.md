# Tutorial 00 - How to Explore the JUCE Repository and New Features

[Go To Video On YouTube](https://youtu.be/3GyQhLwb3J8)

[Tutorial_00 Index](./Tutorial_00.md)

[Supplemental](./Supplemental.md)

## Transcript

Note that time indexes have been added to the beginning of each paragraph to aid in navigation around the the YouTube video.

-- Transcription Begins --

- Josh Hodges:

(00:00) "Hey what's up everybody? I'd like to welcome to another JUCE tutorial.  In this tutorial we're going to talk about how to build JUCE from the actual repo that's on Git Hub. The reason that we want to do this is if we want to start experimenting with some of the new features in JUCE 6 we can do this by switching over to the JUCE 6 branch that we see here on the JUCE Github repo at [Github.com/juce-framework/JUCE](https://github.com/juce-framework/juce).  

(00:29) I'm going to show you how to switch over to the branch and I'm also going to show you a few things that had me caught out for a little bit and had me stuck for a second - one of things I found out was that I didn't read the "README" correctly.  One of the big things to know is you have to read the Readme in order to actually build these things correctly.

(00:50) So before we get started if you like tutorials like this and you want to see more of them be sure to support us on (Patreon.com/TheAudioProgrammer)[https://www.patroen.com//TheAudioProgrammer] and we also have a free audio development community.  If you'd like to join and link up and network with other audio developers, help each other solve problems and discuss all things audio programming, you can join us on (TheAudioProgrammer.com/community)[https://TheAudioProgrammer.com/community].  So lets get started...

(1:19) The first thing we want to do do is want to actually clone the JUCE Github repo link.  We can do that just by clicking on this arrow and we will just copy this link here.  I'm going to go a little bit slower for people who are just starting out and may not be as familiar with command line and repos and these sort of concepts so for more experienced developers please bear with us as we go a little bit slowly for people who are looking to keep up.

(1:53) Now we are in our  command line and the first thing that we want to do is we would like to go to our applications folder.  This may be a little bit different if you are on a windows or if your using linux, but this is how you do it on OSX.  What we need to do is get into this directory so what we will do is the command "cd" which is "change directory" and then we will just go into our applications folder.  Actually I need to go here and theres our applications folder, and actually you can just take this and drag it, like so, and then press "enter" and now we are inside our applications folder in our command line.

(2:38) So now, I think I need to copy this again so we would just copy this, and now what I'm going to do - I'm in the applications folder - and now I'm going to "clone" this repo into the application folder.  Type the command "git clone " and then paste the link and hit enter and now we see that there's this new JUCE folder that's in there.  So at the moment I don't even have JUCE on my computer, I'm just cloning this (I've actually delete Juce), and I'm just cloning this from new.  You see that we are now cloning the repo.

(3:18)  Also I have some tutorials on how to use the command line, "command line basics".  Those are on my YouTube page.  I can't remember what the links are.  I'll actually just link you to them - should be in the top Right Hand Corner (?) of this tutorial and I'll put a little card there if you're curios about some of these command line basics.

(3:38)  So, currently we are receiving everything - we should be done monetarily - he we are. So, now it's done cloning the repo and if we click into the JUCE folder, what we'll see is that unlike when you actually download JUCE from the website, there's actually no Projucer in this directory.  Normally we'd see the Projucer and, I believe, the Demo Runner in this directory and we don't see it.

(4:10) So, Projucer, we actually have it in "extras", so if we go to "extras"; we go to "projucer" and then into builds - amnd all of this is in the "Readme" by the way - and into "MacOSX" and then... Oh!  Did I miss something?  Yeah what we need to do is build this.  Let me show you something that I did is I actually used the Projucer and that can give you an error - I'm not going to go through the whole thing with you, I'll do that when I switch brances.  

(4:56)  Essentially, what the "Readme" will tell if you read the "Readme" is you actually need to build it from the XCode project rather than the from the Projucer.  In your MacOSX folder, you'll see a Projucer.xcodeproject - I imagine this will be a Visual Studio Project if you're on Windows - and so we actually need to launch that and build from that source code.

(5:19)  Now we're just going to build the Projucer, and this will take a second so I'll be back when this is done ... Okay, so here we are, we see that this has built succesfully and that this has created a New Project so this has actually launched the Projucer for us.  Now if we go into our folder here we see a new folder that says "build" and then in "debug" and then our Projucer is actually there and we can take this and drag this over to our shortcuts now, and now that's fine.

(5:51) Now I'm going to show you a couple of things that had me stuck when I was actually doing this.  Lets say I want to start exploring some of the features in JUCE 6.  If we go to the repo here we have 3 branches - a "Master" branch, a "Develop" branch and a "juce6" branch.  We can also do that here by doing "git branch --all" - ah - I'm sorry, I'm not in the JUCE folder at the moment - I'm in the application folder -  so I need to "cd JUCE/" and now I do "git branch --all" and now we see that this shows us all our branches at the moment.  If we try to switch branches at the moment we're not going to be able to because we changed the actual branch - so I'm just going to reset this by "git reset --hard" like this.  If I do "git branch --all" and we see we have a juce6 branch - so what I can do, if I want to swtich over to explore juce6, I can do "git checkout juce6" and now we see that we've switched over the new branch "juce6"

(7:36) Now what we'll do, one of the first things we can do, lets just try to do something from the Projucer.  We have our Projucer, so let's just try to create a new project - we'll call this "Project 5".  I'll create it, then we'll try to open it up in the IDE as usual, and now we will just try to build it and let's see what happens.

(8:06)  We see that we get this error that says "This project was saved using an outdated version of the Projucer."  So noew we have a problem in that we are in the "juce6" branch but we are using the "Juce 5" Projucer.  What we need to do is to back to our xcodeproject, click on this again and then we need to actually rebuild this which is going to take a second.  I'm  going to show you another thing that caught me out the first time that I was doing this.

(8:51)  We see that we've got a build succeeded here, but one think that you'll notice if your looking ver carefully, is you'll see down here in our console, "another instance is running" and then it says "quitting: Shutdown."  If you see this it means your actually running the Projucer, so the old version of the Projucer is actually still running.  What we need to do is quit out of that in order for us to be able to build the new version properly.  So lets just click it again and see that we now don't get that dialogue any more.

(9:23)  Now, here we are, and we see that the JUCE 6 project builder actually looks a little bit different than the JUCE 5 so we have an updated look here.  What we can do is save a new project, we'll just call this "newproject6",  we'll do create project, then it asks you to save it somewhere, we'll save it to the desktop and then I'll just quit out of the Projucer.

(09:58)  This should open up our IDE, I actually I think I quite before it actually opened up our new project, but that's okay - doesn't matter.  Now, let's say that we ahve our new JUCE 6 Projucer and now we've experimented with some feature and now we want to go back to JUCE 5, to our "Master" branch where we have, let's say, a number of projects that we are working on that are actual industry projects.  So now what we can do is "git checkout master", and so we go back to the master branch.  On thing to keep in mind is that, okay, I'm going to open up the Projucer again and we will see that, when we open up the Projucer, still the JUCE 6 Projucer.  So that's a problem because we're not going to be able to build JUCE 5 Projects from this Projucer.

(11:01) I'm notgoing to run through the whole thing but essentially were going to get some sort of weird area.  Let's just do it real quick - why not?  We'll do "newProject6" and then we'll do "Create Project" and then we see some sort of weird dialogue, but that doesn't matter, and let's just "open in IDE" and lets just try and build and show you that, I believe that we will get a strange error here, a linker error, when we do this.

(11:36) So I'm back and as you can see we have this linker error that says "Rez failed with exit code 3".  Basically this isn't going to build properly with this projucer.  So you're using a JUCE 6 Projucer to try to build with JUCE 5 (5.4) modules and files.  So that's not going to work.  So once again we're have to go back up to the Projucer file - so don't go to the Projucer file but we actually have go to the xcodeproject.  Double click here, then we have to build this.  

(12:14)  Okay, so we've got build succeeded, but once again, if you're paying attention down at the bottom, you'll see that I'm actually running the newer version of the Projucer, so because of that it won't let me overwrite that Projucer and it says that "Another instance is running - quitting... Shutdown."  So what wqe need to do is quit out of that Projucer in order to actually overwrite it with the correct version, and now we have the correct version.

(12:45)  So what are the main points of this?

1.  That when you're using a different branch of JUCE what you'll need to do is you'll need to use the xcodeproject to actually build the correct version of Projucer.

1.  You will not hae the Projucer in the JUCE Folder, like if you donwlaoded it from the JUCE website so you will actually need to build that yourself and then just sae it as a shortcut - just drag it over here.

1.  Everytime you switch branches make sure that you quit out of all your Projucer Instances and that you actually build from the xcode project

1.  Perhaps, the most important lesson is read the README.  That is so important or else you'll be bound to hae problems.

I hope you enjoyed this tutorial and we're going to be doing some JUCE 6 tutorials very soon and I'll see next time."

-- End of Transcription --