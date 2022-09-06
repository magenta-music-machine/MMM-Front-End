# Software Requirements  

## Vision  

Our vision for this product is an game that plays music for the user, and the user guesses the artist. Users want a way to gamified way to listen to music. This product allows users a fun way to kill time, while introducing them to music they may have never heard before.  

## Scope  

Our application will include:  

* The application will play music for the user to guess.  
* That music will be pulled from an API that is constantly updating with modern music.  
* Users will be able to favorite songs.  
* Users will be able to view additional information about the album and artist the song came from.  
* Users will be able to compete with one another to see how many songs they could guess, in a set amount of time.  

Our application will not be:  

* A way to listen to full songs, or create playlists.  
* A commercial app with advertisments.  

## MVP  

Our MVP will be an application that allows our users to listen to clips of popular music, and guess what song it is.  
Stretch goals will be scoring, favorites, and additional information.  

## Functional requirements  

A user will be able to hear music.  
A user will be able to keep score.  

## Data Flow  

A user opens the application and hits play. The client application makes a request to the server, which will check our database. If our database does not have songs that have been refreshed since at least 24 hours beforehand, the application makes a request to the API which will then send the music back to the client.  

## Non-Functional requirements  

Security: Our application will authorize the web application to pull information from the server. Our application has the potential to make many requests to the API in a short period. Protecting those requests is very important.  

Scalability: Our application will try to store the necassary amount of songs in the database, so as to allow any number of users to play, without locking our API key.  

## User Stories  

Compete with musically talented friends
Those users who want to play a game about music and are competing with musically talented people. Maybe they can not beat them on how to play a guitar, but they can beat them when comparing the score when guessing the music.
The feature of the app will contain a saving system of the music when the music pops up and the user can save it and study for the next round. The score system will be also available  to be able to compete with other users. The feature will also contain playing a game where User has to guess the title, music, and also artist.
We will ensure the schedule will not get in conflict with the SERVER hosts, and also make sure all the team-members will not be in conflict.

Music Trivia Game
Those Users who want to play a game of Music Trivia, and are sick of playing the same old music list, rather this app will be updated when the Music API is updated. 
The feature task will be guessing a music when the music is played and has the option of guessing who is the artist or the title of the music.
We will ensure the schedule will not get in conflict with the SERVER hosts, and also make sure all the team-members will not be in conflict.

Do you know who this is?
Those users who want to update their playlist with modern top 100 songs. It will pick a random song within the top 100 and present it to the user.
The feature will be requesting a song from the top 100 from the music API and has the option of guessing who is the artist or title of the music if User wants to know who or what the song is.
We will ensure the schedule will not get in conflict with the SERVER hosts, and also make sure all the team-members will not be in conflict.

What song is this
Those users who know the 100 songs, but can not remember the artist or music title, however, they want to sing the song in the Karaoke. They are required to remember the title or artist to pick the song.
The feature will be requesting a song from top 100 songs from the music API and has the option of presenting the data of artist information, and the title of the song. The app will filter the top 100, and present the data to music information to the user.
We will ensure the schedule will not get in conflict with the SERVER hosts, and also make sure all the team-members will not be in conflict.

New song me
Those users who are sick of listening to their old playlist and want to update their playlist with modern top 100 music. They would not be required to remember the music because one of the feature of the app will contain saving system for the music
The feature of the app will be being able to save the songs that are presented to the user. Top 100 songs will be picked and their data will be presented with title, the music, and the artist information.
We will ensure the schedule will not get in conflict with the SERVER hosts, and also make sure all the team-members will not be in conflict.


## White Boards  

Schema Models  
![Schema Models](img/SchemaModels.png)  
