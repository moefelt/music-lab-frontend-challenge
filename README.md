
# Coding Challenge
We want you to create a new simple Jukebox app in React.
We have provided you with a simple backend and a boilerplate React app, that should contain everything for you to get started.

## Stories (must haves)
These stories are high priority and must be implemented in our Jukebox app.
1. As a User I want to be able to view all tracks in the Jukebox on a nice list.
2. As a User I want to be able to click individual tracks on the list so I can hear the audio.

## Stories (nice to haves)
These stories are low priority so you decide if you want to focus on all, some or none of them.
1. As a User I want to be able to see a time indicator on playing tracks so I know the length of a track and how much I've heard.
2. As a User I want to be able to add a track to a queue instead of playing at once, so a playing track is not interupted.
3. As a Product Manager I want the Jukebox to be usable for visual impaired people to maximize accessibility.
4. As a Product Manager I want a log on all played tracks so I can see the usage metrics of our Jukebox app.

## Using the "API"
The API runs on a simple express backend, and runs on localhost port 3000, and has two endpoints:
* `/api/tracks`
 Returns a JSON collection with 20 tracks.
* `/api/tracks/{TRACK_ID}`
 Returns a specific track info. `TRACK_ID` represents the id of the track you want to fetch.

## Using the "CDN"
The CDN is our small local storage for static files (mp3, jpeg):
* `/cdn/{TRACK_ID}.mp3`
 Path to a track audio (mp3) file. `TRACK_ID` is the track id.
* `/cdn/{TRACK_ID}.jpeg`
 Path to a track coverv  (jpeg) file. `TRACK_ID` is the track id.

## Restrictions
* You may not use a CSS framework such as Bootstrap

## Requirements
* You must use React
* The app must be responsive, with a “mobile-first” approach in mind.
* * Optional you can get the YouSee specific guidelines and assets from https://dna.yousee.dk/.
* The data (tracks) must be fetched asynchronously using JavaScript.
* Unfortunately the backend is sometimes rather slow. So you must display a loading indicator while you're loading the data.
* Please lint your code so your new team mates are happy.
* You must deliver the app in a git repository. You decide if you want to use GitHub, Bitbucket, GitLab or whatever.
* There are no limits on using other NPM packages but choose wisely - we want to see what YOU can do!
* The design and look and feel is completely up to you - so release your inner creative beast.

## Starting the application
* Unzip the project
* Open your terminal and navigate to the folder where you extracted the project to.
* Run `npm install` to install dependencies.
* Open the project in your editor.
* Start the backend by running `npm run backend`.
* Start the frontend by running `npm run frontend`.
