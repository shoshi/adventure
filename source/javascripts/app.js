//= require_tree .

var App = App || {};

// VueX Store for game data
App.store = new Vuex.Store({
  state: {
    currentStep: 0,
    // NOTE: We could store this in a DB instead. Steps could also be fetched
    //       individually by ID when they become active
    storyData: [
      {
        id: 0,
        text: 'Oh, hello there!',
        actions: [
          { text: 'Um, hello?', stepId: 1 }
        ]
      },
      {
        id: 1,
        text: 'Are you friend or foe?',
        actions: [
          { text: 'Friend', stepId: 2 },
          { text: 'Foe', stepId: 3 },
          { text: 'Not sure', stepId: 3 }
        ]
      },
      {
        id: 2,
        text: 'Oh well that\'s good. You don\'t happen to fly do you?',
        actions: [
          { text: 'No?', stepId: 4 }
        ]
      },
      {
        id: 3,
        text: 'What a shame.',
        actions: [
          { text: 'Initiate memory loss', stepId: 0 }
        ]
      },
      {
        id: 4,
        text: 'Pity, we could have used another.',
        actions: [
          { text: 'Initiate memory loss', stepId: 0 }
        ]
      },
    ]
  },
  mutations: {
    changeStep: function(state, newStep) {
      state.currentStep = newStep;
    }
  }
});

// Register the game component
Vue.component('game', {
  template: '#game-template',
  computed: {
    data: function() {
      return App.store.state.storyData;
    },
    step: function() {
      return App.store.state.currentStep;
    },
    stepData: function () {
      return this.data[this.step];
    }
  },
  methods: {
    goToStep: function(newStep) {
      console.log('go to step: ' + newStep);
      App.store.commit('changeStep', newStep);
    }
  }
});

// Setup the root game demo Vue
App.game = new Vue({
  el: '#app'
});
