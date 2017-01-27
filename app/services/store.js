import Ember from 'ember';
import Invoice from 'punchclock/models/invoice';

const invoices = [
	Invoice.create({
		id:0,
		firstName: 'Daniel',
		lastName: 'Connor', 
		clientName: 'Movenium', 
		projectTitle: 'Time Tracker Proto', 
		billingRate: '22.00', 
		projectDescription: 'This is a prototype of a time tracking app. After logging the time worked, an invoice is generated.',
		date: '2017-24-01',
		timeWorked: '03:00:00'}),
	Invoice.create({id:1,
		firstName: 'Daniel',
		lastName: 'Connor', 
		clientName: 'Company2', 
		projectTitle: 'project2', 
		billingRate: '20.00', 
		projectDescription: 'The project 2 description goes here.',
		date: '2017-25-01',
		timeWorked: '05:30:00'	
	})
];

export default Ember.Service.extend({
	getInvoices(){
		return invoices;
	},
	getInvoiceById(id){
		return invoices.findBy('id', id);
	},
	newInvoice(){
		var date = new Date(),
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

		day = (day < 10) ? 0 + day.toString() : day.toString();
		month = (month < 10) ? 0 + month.toString() : month.toString();


		return Invoice.create({
			id:0,
			firstName:'',
			lastName:'',
			clientName:'',
			projectTitle:'',
			billingRate:'',
			projectDescription:'',
			date: year + '-' + day + '-' + month,
			timeWorked:'00:00:00'
		});
	},
	saveInvoice(invoice){
		//setting new invoice id to the length of the invoices array will give it the new highest id
		invoice.set('id', invoices.length);
		invoice.set('firstName', invoice.firstName);
		invoice.set('lastName', invoice.lastName);
		invoice.set('clientName', invoice.clientName);
		invoice.set('projectTitle', invoice.projectTitle);
		invoice.set('billingRate', invoice.billingRate);
		invoice.set('projectDescription', invoice.projectDescription);
		invoice.set('timeWorked', invoice.timeWorked);
		invoices.pushObject(invoice);
	}
});
