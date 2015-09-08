# Simply Social

## Running the app

Everything needed should be included in the repository.  Assuming that you have node/npm installed, the below should be all you need to run the app on port 3001.

```bash
git clone git@github.com:gdborton/turbulent-octo-wookie.git
cd turbulent-octo-wookie
npm install
node app.js
```

In the event that something doesn't work, I've predeployed the application to heroku, and you can see it [here](https://simplysocial-gary.herokuapp.com/#/).

## Additional Steps

These are a few of the things that I'd work on with a production application, but didn't implement due to time constraints.

 - Minification of images, css, and javascript through the grunt/gulp process.
 - Using a server with gzip enabled (webpack-dev-server is convenient for dev, but shouldn't be used in production).
 - Testing performance against page speed insights and/or speed index.
 - Tests for javascript pieces, ideally using a service like Saucelabs for cross browser testing.
  - **I'd really love to work with an image diffing tool** to see differences between browsers and pull requests.
 - Continuous Integration in place for master, and pull requests (+ in an ideal world Continuous Deployment)
 - Complexity, jshint, and javascript code style (I prefer to adhere to jscs's implementation of airbnb's javascript styles)
 - No dist/ in the repo, this is ok for tags or as release artifacts in GH, but muddies pull requests.

## Inferences

These are the sorts of things that I'd normally work with ux to figure out.  Below are some assumptions that I made since I don't have a direct line of communication with the team that made the prototypes.

 - Like and reply buttons appear on top of the list view posts, but on the bottom of the tiled posts, assumption is that this was intentional.
 - Vertical white line on `What's on your mind?` component in psd is a cursor.
 - Provided fonts and fonts in the psd differ, assuming fonts reported by Photoshop to be accurate.
 - Header scrolls on the InVision prototype on one screen, but not others. Assuming that majority rules, and it shouldn't be fixed on the page.
 - Fonts are occasionally inconsistent between InVision prototype and psd.  This is most apparent in the `Create new message` modal's lower case g's descender.
 - The last three options on the settings page are independent, and should be checkboxes.

## Concessions
 - It seems as thought > IE9 doesn't have support for `filter: blur()`.  There are js solutions, but that's a bit beyond the scope of this exercise I think.
