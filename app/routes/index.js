import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.get('storeService').getInvoices();//newInvoice();
	},
	storeService: Ember.inject.service('store')
});
