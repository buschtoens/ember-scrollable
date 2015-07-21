import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  preferences: Ember.inject.service(),
  showAppSwitcher: false,

  navigationItems: [{
    id: 'dashboard', name: 'Dashboard', routeName: 'dashboard'
  }, {
    id: 'projects', name: 'Projects', routeName: 'projects'
  }, {
    id: 'whiteboards', name: 'Whiteboards', routeName: 'whiteboards'
  }, {
    id: 'performance', name: 'Performance', routeName: 'performance'
  }],

  actionItems: [{
    name: 'feedback',
    label: 'Feedback'
  }, {
    name: 'logout',
    label: 'Logout'
  }],

  advisorSearchUrl: `${EmberENV.pistachioUrl}/advisors`,

  actions: {
    savePreferences: function() {
      this.get('preferences.model').save();
    },

    logout: function() {
      this.get('currentUser').logout();
    },

    feedback: function() {
      /* jshint newcap: false */
      Intercom('show');
      /* jshint newcap: true */
    },

    toggleAppSwitcher: function() {
      this.toggleProperty('showAppSwitcher');
    }
  }
});
