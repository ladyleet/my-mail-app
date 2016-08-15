import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      from: 'recruiter@startup.com',
      to: 'dev@me.com',
      subject: 'opportunity',
      body: 'dear {{firstName}}, ...',
      sentAt: new Date()
    },{
      id: 2,
      from: 'spam@twitter.com',
      to: 'dev@me.com',
      subject: 'You may like these adds',
      body: 'some irrelevant ads',
      sentAt: new Date()
    }]
  }
});
