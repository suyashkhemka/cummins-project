const clientApp = new Vue({
  el: '#clientMain',
  data: {
    clients: [ ],
    clientForm: { }
  },
  computed: {

  },
  methods: {
    handleClientForm(e) {

      //.this.commentForm.comment = this.comment;

      const s = JSON.stringify(this.clientForm);
      console.log({ s })

      // POST to remote server
      fetch('./api/client.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json())
      .then( json => { this.clients.push(json) })
      .catch( err => {
        console.error('client POST ERROR:');
        console.error(err);
      })

      this.clientForm = this.getEmptyClientForm();
    },
    getEmptyClientForm() {
      return {
      }
    },
    fetchClients () {
      fetch('./api/client.php')
      .then( response => response.json() )
      .then( json => {clientApp.clients = json} )
      .catch( err => {
        console.log('CLIENTS FETCH ERROR:');
        console.log(err);
      })
    },
    gotoSite(cid) {
      window.location = 'sites.html?clientId=' + cid;
    },
    gotoClientNotes(cid) {
      window.location = 'clientNotes.html?clientId=' + cid;
    },
  },
  created() {
    this.fetchClients();
  },
});
