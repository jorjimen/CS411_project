# User Stories Document  

## General Flow of the Web Application
  Open page.
  
  Login through Spotify.
  
  First time: Set music preferences - either from existing spotify playlists, or select genres, or both.
  
  Two buttons: New Route, Existing Routes
  
  Toggle button on the top right (switch between generated from spotify, genres, or both)
   
   New Route - Enter start location(automatically filled), destination, click generate route, shows list of routes (route,   
   price, time), option to save this route (this set of start location and destination.

   Clicking on an option from this list enters a detailed view with a new buttons: generate playlist.

   Generate Playlist - displays playlist, button to save to spotify or regenerate.
    
   Existing Routes - Choose from a list of saved routes.

## User Stories 

### New User Trying to Make a Route and Playlist
   The user will first open the webpage and will be prompted to log in to Spotify. Since it’s their first login they will be asked to select whether they want songs from their preexisting spotify playlists or from certain genres. The user will then input the station they are currently at and where they would like to go and press the generate button. A list of possible routes will appear and the user will select one. A detailed view of the route will appear and they will have the option to generate a playlist as well as to save this route for future use.

### Existing User Wants Playlist for Specific Route
  The user will open the webpage and log in. Then they will input the station they are currently at and where they would like to go and press the generate button. They will look through the list of routes and select the specific route they were looking for. Then, they will click the generate playlist button to generate a playlist.

### Existing User Wants to Generate a New Playlist On a Route They Saved
  The user will open the webpage and log in. They will click the “Existing Routes” button and be shown the list of routes they have saved from before. They will select that route and generate a new playlist.

### User in Mid Route wants to Generate Playlist
  In order to generate a playlist while in the middle of transit, the user should open the webpage and log in. The user can then click on “Existing Routes” to click on the route that they’re currently on or click on “New Route” to register the route that they’re currently on if the application hasn’t saved the route before. Either way, if the user is in mid route they can click on the “Refresh” button which will calculate the route duration from the closest stop to the user on the route to the destination. Using that calculated route duration, the application will then generate a playlist matching that duration.

### Music Preference / Playlist Generation Settings
  Upon logging into the web application, there will be a toggle button on the top right of the screen where “New Route” and “Existing Routes” buttons will be in the middle. The toggle button on the upper right will allow the user to customize how the application generates their playlist. The button is meant to be there in the case that the user has a change in music preference and wants to change it. From there they can generate playlists from their own personal spotify playlists, playlists curated by Spotify, or from the music genre survey the user took in the beginning when registering for this application. There’s also an option to generate a playlist that is a combination of the three options previously stated.

### User Wants to Save a New Route to Existing Routes
  After logging into the web application, the user will click on the New Route, put in their closest station and destination, and select a route from the generated list of routes. The user then has the option to click on the “Save Route” button where they can save the route to “Existing Routes”.

### Generate Playlist Options
  When given the choice to generate the playlist for the user’s route, the user can generate a playlist based on their music preference settings by clicking on “Generate New Playlist” button. There is another option however to play saved generated playlists (or even the user’s personal playlists from Spotify) from the app by clicking on the “Play Saved Playlists” Button. The “Play Saved Playlists” will then take the user to their saved playlists on Spotify so they can play the playlist of their choice. If there’s a difference between the playlist and route, the playlist can be adjusted to match the route’s duration.
