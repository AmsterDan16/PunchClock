import Ember from 'ember';

export default Ember.Route.extend({
	storeService: Ember.inject.service('store'),

	model(params){
		return this.get('storeService').getInvoiceById(params.invoice_id);;
	}

});
