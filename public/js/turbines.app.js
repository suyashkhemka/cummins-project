var turbinesApp = new Vue({
  el: '#turbinesMain',
  data: {
    turbines: [ ],
    turbinesForm: { },
    turbineDeployedList: []
  },
  computed: {
  },
  methods: {
    dateFormat(d) {
      d = d || moment();
      return moment(d).format('YYYY-MM-DD');
    },
    timeFormat(d) {
      d = d || moment();
      return moment(d).format('HH:mm');
    },
    prettyDate(d) {
      return moment(d).format('YYYY-MM-DD HH:mm')
    },
    gotoSiteTurbinesChart(tid) {
      window.location = 'turbinescharts.html?turbineId=' + tid;
    },
  },
  created() {

        // Do data fetch
        const url = new URL(window.location.href);
        const siteId = url.searchParams.get('siteId');
        console.log('siteId: '+ siteId);
        this.siteId = siteId;

        if (!siteId) {
          //TODO: Error? 404?
          //e.g., window.location = '404.html';
        }

        // TODO: Fetch task-specific data
        // fetch('api/task?id=4')
        fetch('api/turbineDeployed.php?siteId='+siteId)
        .then( response => response.json() )
        .then( json => {turbinesApp.turbines = json} )
        .catch( err => {
          console.log('TURBINES FETCH ERROR:');
      
          console.log({err});
        })
  }
});
