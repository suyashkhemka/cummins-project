var sitesApp = new Vue({
  el: '#siteMain',
  data: {
    sites: [ ],
    siteForm: { },   // populated by this.getEmptyWorkForm()
    teamList: [] // All the teams
  },
  computed: {
  },
  methods: {
    handleSiteForm(e) {

      //.this.commentForm.comment = this.comment;
      this.siteForm.clientId = this.clientId;

      const s = JSON.stringify(this.siteForm);
      console.log({ s })

      // POST to remote server
      fetch('./api/site.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json())
      .then( json => { this.sites.push(json) })
      .catch( err => {
        console.error('site POST ERROR:');
        console.error(err);
      })

      this.siteForm = this.getEmptySiteForm();
    },
    getEmptySiteForm() {
      return {
      }
    },
    gotoSiteTurbines(sid) {
      window.location = 'turbines.html?siteId=' + sid;
    },
  },
  created () {

    // Do data fetch
    const url = new URL(window.location.href);
    const clientId = url.searchParams.get('clientId');
    console.log('Client: '+ clientId);
    this.clientId = clientId;

    if (!clientId) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/site.php?clientId='+clientId)
    .then( response => response.json() )
    .then( json => {sitesApp.sites = json} )
    .catch( err => {
      console.log('WORK FETCH ERROR:');
      console.log({err});
    })
  }
})