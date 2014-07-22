#Ember Chi - Lightning Fast HTML/CSS Prototyping

Move blazingly fast with prototyping. Demo written for a talk. Use the following technologies:

* Live reloading of HTML/CSS.
* Use reusable components though `{{partials}}`.
* Structure your layout using `{{outlet}}`.
* Easily use SASS, LESS, or Stylus CSS preprocessors.

## Links
* [Talk](http://vimeo.com/101336492)
* [Transcription of Talk](https://github.com/deanmarano/ember-chi/blob/master/talk.md)
* [Slides](http://slides.com/il1019/prototypes#/)
* [Demo Site](http://deanmarano.github.io/ember-chi/)

Happy prototyping!

## Prototyping 'The Ember Way'

1. Install node.js (`brew install nodejs` on a Mac, `apt-get install nodejs` on unix).
2. Install ember-cli (`npm install -g ember-cli`).
3. Create a new Ember project (`ember new project-name`).
4. Install dependencies (`cd project-name && npm install`).
5. Start the server (`ember serve`).
6. Start editing `app/templates/application.hbs` and `app/styles/app.css`.
7. Learn about `{{outlet}}`s and `{{partial}}`s to start reusing.

### Using a CSS Preprocessor

After doing the above, install the preprocessor of your choice:

* __LESS__: `npm install --save-dev broccoli-less-single`
* __Sass__: `npm install --save-dev broccoli-sass`
* __Stylus__: `npm install --save-dev broccoli-stylus-single`

## Modifying this app

1. Install node.js (`brew install nodejs` on a Mac, `apt-get install nodejs` on unix).
2. Install ember-cli (`npm install -g ember-cli`).
3. Clone the repo (`git clone git@github.com:deanmarano/ember-chi.git`).
4. Install dependencies (`cd ember-chi && npm install`).
5. Start the server (`ember serve`).

## Have a question? Ask! @pleiadeez on Twitter or open an issue on this repo.
