let NotificationComponent = {
  template: '#notification-template',
  data() {
    return {
      hidden: false
    }
  },
  props: {
    type: {
      type: String,
      requerid: true,
      default: 'info'
    },
    header: {
      type: String,
      default: 'Información'
    },
  },
  methods: {
    hide () {
      this.hidden = !this.hidden;
    }
  },
}

new Vue({
  el: '#app',
  components: {
    'notification-component': NotificationComponent
  }
});
