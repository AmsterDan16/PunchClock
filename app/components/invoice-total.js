import Ember from 'ember';

export default Ember.Component.extend({
	invoiceTotal: Ember.computed('billingRate', 'hoursWorked', function(){
		//parse the hours and minutes
		var timeArr = this.get('hoursWorked').split(':'),
		hours = parseInt(timeArr[0]),
		minutes = parseInt(timeArr[1]);

		return (this.get('billingRate') * hours) + Math.round((this.get('billingRate') * (minutes / 60)));
	})
});
