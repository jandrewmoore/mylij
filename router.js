const MylijRouter = Backbone.Router.extend({
  routes: {
    'home': 'loadHomePage',
    'add': 'loadAddPage',
    'entries': 'loadEntriesPage',
    'visuals': 'loadVisualsPage'
  },

  loadHomePage: function () {
    const home = new Home();
    $('#root').html(home.render().el);

    console.log('Load home page')
  },

  loadAddPage: function () {
    const add = new Add()
    $('#root').html(add.render().el);

    console.log('Load add page')
  },

  loadEntriesPage: function () {
    const entries = new Entries()
    $('#root').html(entries.render().el);

    console.log('Load entries page')
  },

  loadVisualsPage: function () {
    const visuals = new Visuals()
    $('#root').html(visuals.render().el);

    console.log('Load visuals page')
  }
})
