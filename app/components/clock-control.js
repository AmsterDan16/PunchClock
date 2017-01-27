import Ember from 'ember';

export default Ember.Component.extend({
	showStart: true,
	state: 'pause',
	timeElapsed: 0,
	totalTime: Ember.computed('totalTime', function(){
		return this.get('totalTime');
	}),
	isRunState: Ember.computed.equal('state', 'run'),
	isPauseState: Ember.computed.equal('state', 'pause'),
	startTime(){
		this.set('state', 'run');
		this.incrementTime(new Date());
	},
	pauseTime(){
		this.set('state', 'pause');
	},
	resetTime(){
		this.set('state', 'reset');
		this.set('timeElapsed', 0);
	},
	//time conversion found on http://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript
	convertMS(timeElapsed){
		var seconds = parseInt((timeElapsed / 1000) % 60),
		minutes = parseInt((timeElapsed / (1000 * 60)) % 60),
		hours = parseInt((timeElapsed / (1000 * 60 * 60)) % 24);

		//format for < 10
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		hours = (hours < 10) ? "0" + hours : hours;

		this.set('totalTime', hours + ":" + minutes + ":" + seconds);//+ ":" + milliseconds);
	},
	//time incrementation referenced from EmberJS guide forum
	incrementTime(startDate){
		var currentDate = new Date();
		if(this.get('isRunState')){
			this.incrementProperty('timeElapsed', currentDate.valueOf() - startDate.valueOf());
			this.convertMS(this.timeElapsed);
			Ember.run.next(this, 'incrementTime', new Date());
		}
	},
	actions: {
		toggleTime(){
			this.toggleProperty('showStart');

			if(this.get('isRunState')){
				this.pauseTime();
				//focus() on name input
			}else if(this.get('isPauseState')){
				this.startTime();
			}
		}
	},
});
