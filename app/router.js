import EmberRouter from '@ember/routing/router';
import config from 'router-queue/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('route-will-transition');
  this.route('route-will-change-event');

  this.route('route-will-transition-with-abort');
  this.route('route-will-change-event-with-abort');
});
