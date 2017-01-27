import Ember from 'ember';

export default Ember.Route.extend({
	storeService: Ember.inject.service('store'),
	model(){
		return this.get('storeService').newInvoice();
	},
	actions:{
		submitInvoice(invoice, totalTime){
			invoice.timeWorked = totalTime;
			this.get('storeService').saveInvoice(invoice);
			this.transitionTo('invoice', invoice);
		}
	},
	totalTime:"00:00:00"
});
