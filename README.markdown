# The Basic Idea

I made this template to scratch my own itch. I wanted to be able to do the following:

1. Quickly make a standard website that is able to reuse elements on every page, like footers, headers, and navigation bars.

2. Have access to modern conveniences that preprocessors like Jade and Stylus provide. Having worked in Node.js, I've come to prefer using Jade and Stylus and I can't see going back to writing plain HTML and CSS anytime soon.

3. Create a basic structure and automate a build process, so that I can automatically generate vendor prefixes for CSS and produce a development version of my code and a production version that is minified and uglified.

4. Not have to learn another templating language or be reliant on a commercial tool such as CodeKit or Hammer. (Also, neither of those products currently allows you to write in Stylus and apply [Autoprefixer](https://github.com/ai/autoprefixer) to the CSS.)

## How do I use this?

1. Clone this repository or download the files and navigate to the main directory.

2. If you haven't already, install [Node.js](http://nodejs.org).

3. Install [gulp](https://github.com/gulpjs/gul://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). 

4. In the terminal, type: `npm install`.

5. Then type: `gulp`.
    - This will start the watcher in the background, which will automatically compile all of the relevant files when they are saved.

6. The files you want to edit are all in the 'source-files' folder. When changes are made to these files, they will be re-compiled into the 'compiled-site' directory.
  - Inside the 'compiled-site' directory are 2 folders: 'pretty' and 'ugly'
  - The 'pretty' folder contains pretty html and css files that are easy to read by humans. You might want to view the files in this folder when debugging.
  - The 'ugly' folder contains the minified and uglified versions of the files and this is what you would want to use on the production server.

## I want to change the directory structure

Cool, go for it! This is just a basic starting point. Just be aware that if you change the layout of the file locations, you will have to change the corresponding fields in the gulp file. In other news, gulp is really cool, so I'd recommend checking the gulp file out and seeing if you can think of anything else that you'd like gulp to handle for you.


