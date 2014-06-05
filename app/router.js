var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('weather', {path: '/weather'}, function() {
    this.route('tomorrow');
    this.route('today');
    this.route('extended');
  });
  this.resource('news', {path: '/news'}, function() {
    this.resource('article', {path: '/:id'});
  });
  this.resource('sports', {path: '/sports'}, function() {});
  this.resource('events', {path: '/events'}, function() {});
  this.resource('contact', {path: '/contact'}, function() {
    this.route('submitted');
  });
});

export default Router;
