# Film DB!

## Live Link
[https://filmdb.onrender.com ](https://filmdb.onrender.com )

Note: Refreshing the page doesn't work because I don't have access to the server configuration on this deployment platform!

## Running the app
This app expects a `.env` file in the project root with a key for `REACT_APP_API_KEY`

e.g.
```
REACT_APP_API_KEY=9a6sdf8
```

It has been `.gitignored` for best security practices.

Once that's done, you can go ahead and run the typical `npm i` and `npm start`

## Basic details
The user is stored as a simple username, along with an array of the user's favorite films in localStorage. There is no authentication or backend registration whatsoever.

The application is broken up into 4 pages:
 - login
 - main
 - movie
 - favorites

### Login
The login page comprises a simple HTML form. When it's submitted the state and localStorage are updated with the username and any favorites that reside in local storage.

### Main
The main page contains - among other things - the search filters, displays the movie results, and has buttons to increment/decrement the page count. 

### Movie
Once the user has searched for films, they can then click on one to see a more detailed view.

### Favorites
Displays the user's favorites in a list, which the user can then click on to see the detailed view of the film.

## Technical details

### Folder Structure
The app has 4 folders in the `/src` directory:
 - common 
 - pages
 - context
 - hooks

#### Common
Houses data, functions, and types that are used throughout the application.

#### Components
Keeps all of the individual components. They haven't been further organised due to the relatively small size of the app.

#### Context
Provides all context API functionality.

#### Hooks
Has a couple of custom hooks.

### Global data (context)
Three data types were considered fit to be shared across nearly the whole application:
 - loading status
 - notifications
 - user data (username and favorites)

 Loading and Notifications are displayed with absolutely positioned components in the outer application, so the functionality to set their state is provided through the context API.

 Similarly, the user has to be set and unset in a couple situations, i.e. login and signout - 
 similarly for the user's favorites.

 ### Hooks
 After noticing some common patterns in the code, two hooks were created to clean it up:
  - useAsyncAction
  - useFavorite

#### UseAsyncAction
Fetch a url, parse the JSON, check for error, call a function if successful otherwise set an error notification.

This hook was extracted so as to abstract the process. It returns a function that accepts a URL route, an errorMessage, and a callback to execute on success - it handles all of the aformentioned steps.

#### UseFavorite
Returns three functions relating to individual movies:
- Add to favorites (in context and local storage).
- Remove from favorites (in context and local storage).
- Check if it is already favorited.
