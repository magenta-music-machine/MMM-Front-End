# Software Requirements  

## Vision  

Our vision for this product is a game that plays music for the User, and the User guesses the artist. Users want a gamified way to listen to music. This product allows users a fun way to kill time while introducing them to music they may have never heard of before.  

## Scope  

Our application will include:  

* The application will play music for the User to guess.  
* That music will be pulled from an API constantly updating with modern music.  
* Users will be able to favorite songs.  
* Users can view additional information about the album and artist the song came from.  
* Users will be able to compete with one another to see how many songs they can guess in a set amount of time.  

Our application will not be:  

* A way to listen to full songs or create playlists.  
* A commercial app with advertisements.  

## Minimum Viable Product (MVP)  

Our MVP will be an application that allows our users to listen to clips of popular music and guess what song it is.  
Stretch goals will be scoring, favorites, and additional information.  

## Functional requirements  

A user will be able to hear music.  
A user will be able to keep the score.  

## Data Flow  

A user opens the application and hits play. The client application will request data from the server to check our database. If our database does not have songs refreshed at least 24 hours beforehand, the application requests information from the API, which will send the music back to the client.  

## Non-Functional requirements  

Security: Our application will authorize the web application to pull information from the server. Our application can potentially make many requests to the API in a short period. Protecting those requests is very important.  

Scalability: Our application will try to store the necessary number of songs in the database to allow any number of users to play without locking our API key.  

## User Stories  

Compete with musically talented friends
Those users who want to play a game about music and are competing with musically talented people. Maybe they can not beat them on how to play the guitar, but they can beat them when comparing their scores from guessing the music.
The app's feature will contain a saving system of the music when the music pops up, and the User can save it and study for the next round. The scoring system will also be available to compete with other users. The feature will also contain playing a game where the User has to guess the title, music, and artist.
We will ensure that the schedule will not conflict with the SERVER hosts and that all the team members will not be in conflict.

Music Trivia Game
For Users who want to play a game of Music Trivia and are sick of playing the same old music list, this app is for them. This app will be updated when the Music API is updated to ensure new music daily. 
The feature task will be to guess a song when the music is played and has the option of assuming who the artist is or the title of the piece.
We will ensure that the schedule will not conflict with the SERVER hosts and that all the team members will not be in conflict.

Do you know who this is?
Those users who want to update their playlist with modern top 100 songs. It will pick a random piece within the top 100 and present it to the User.
The feature will request the top 100 hits from the music API. The app will also have the option of guessing who the artist is or the music title for the User. Also, the app will provide the info if the User wants to know who the artist is or what the song is.
We will ensure that the schedule will not conflict with the SERVER hosts and that all the team members will not be in conflict.

What song is this
Those users who want to update their playlist with modern top 100 songs. It will pick a random piece within the top 100 and present it to the User.
The feature will request the top 100 hits from the music API. The app will also have the option of guessing who the artist is or the music title for the User. Also, the app will provide the info if the User wants to know who the artist is or what the song is.
We will ensure that the schedule will not conflict with the SERVER hosts and that all the team members will not be in conflict.

New song me
Users who are sick of listening to their old playlist and want to update their playlist with modern top 100 music are welcome. They would not be required to remember the music because one of the features of the app will contain a saving system for the music
The feature of the app will be being able to save the songs that are presented to the User. The top 100 pieces of music will be picked, and their data will be presented with the title, the music, and the artist's information.
We will ensure that the schedule will not conflict with the SERVER hosts and that all the team members will not be in conflict.


## White Boards  

Schema Models  
![Schema Models](img/SchemaModels.png)  