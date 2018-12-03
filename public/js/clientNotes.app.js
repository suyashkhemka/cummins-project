var clientNotesApp = new Vue({
  el: '#clientNotesMain',
  data: {
    clientNotes: [],
    clientNotesForm: {},   // populated by this.getEmptyWorkForm()
    teamList: [] // All the teams
  },
  computed: {
  },
  methods: {
    handleClientNotesForm(e) {
      // this.clientNotesForm.clientNote = this.clientNote;

      const s = JSON.stringify(this.clientNotesForm);
      console.log({ s })

      // POST to remote server
      fetch('./api/clientNotes.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
        .then(response => response.json())
        .then(json => { this.clientNotes.push(json) })
        .catch(err => {
          console.error('clientNotes POST ERROR:');
          console.error(err);
        })

      this.clientNotesForm = this.getEmptyClientNotesForm();
    },
    getEmptyClientNotesForm() {
      return {
      }
    },
    deleteClientNoteButtonClick(clientId) {
      const url = './api/clientNotes.php?clientId=' + clientId;

      // POST to remote server
      fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
      })
        .then(response => response.json())
        .catch(err => {
          console.error('clientNotes POST ERROR:');
          console.error(err);
        })
        window.location.reload();
    },
  },
  created() {

    // Do data fetch
    const url = new URL(window.location.href);
    const clientId = url.searchParams.get('clientId');
    console.log('Client: ' + clientId);
    this.clientId = clientId;
    this.clientNotesForm.clientId = clientId;

    if (!clientId) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/clientNotes.php?clientId=' + clientId)
      .then(response => response.json())
      .then(json => { clientNotesApp.clientNotes = json })
      .catch(err => {
        console.log('clientNotes FETCH ERROR:');
        console.log({ err });
      })
  }
})