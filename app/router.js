import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('invoice', { path: '/invoice/:invoice_id'});
  this.route('add-invoice');
});

export default Router;
