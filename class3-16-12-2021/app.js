let GitCardComponent = {
  template: '#git-card-template',
  props: {
    username: {
      type: String,
      requerid: true
    }
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    axios.get(`https://api.github.com/users/${this.username}`).then(response => {
      this.user = response.data
    })
  },
}

new Vue({
  el: '#app',
  data: {
    usernames: ['hootlex', 'rahaug', 'sdras', 'akryum']
  },
  components: {
    'git-card-component': GitCardComponent
  }
});
