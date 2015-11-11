//= require_tree .

var App = App || {};

// register the grid component
Vue.component('game', {
  template: '#game-template',
  props: {
    data: Array,
    step: Number
  },
  computed: {
    stepData: function () {
      return this.data[this.step];
    }
  },
  methods: {
    goToStep: function(e, newStep) {
      e.$event.preventDefault();
      console.log('go to step: ' + newStep);
      this.step = newStep;
    }
  }
})

// bootstrap the demo
App.game = new Vue({
  el: '#game',
  data: {
    currentStep: 0,
    // NOTE: We could store this anywhere, here is fine for now
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
          { text: 'Foe', stepId: 3 }
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
          { text: '> Initiate memory loss', stepId: 0 }
        ]
      },
      {
        id: 4,
        text: 'Pity, we could have used another.',
        actions: [
          { text: '> Initiate memory loss', stepId: 0 }
        ]
      },
    ]
  }
})
