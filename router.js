const MylijRouter = Backbone.Router.extend({
  initialize: function () {
    this.collection = new MylijCollection()
    this.collection.fetch()
  },

  routes: {
    'home': 'loadHomePage',
    'add': 'loadAddPage',
    'entries': 'loadEntriesPage',
    'visuals': 'loadVisualsPage'
  },

  loadHomePage: function () {
    const home = new Home({collection: this.collection});
    $('#root').html(home.render().el);
  },

  loadAddPage: function () {
    const add = new Add({
      collection: this.collection,
      model: new MylijModel()
    })

    $('#root').html(add.render().el);
  },

  loadEntriesPage: function () {
    const entries = new Entries({collection: this.collection})
    $('#root').html(entries.render().el);
  },

  loadVisualsPage: function () {
    const visuals = new Visuals({collection: this.collection})
    $('#root').html(visuals.render().el);
  }
})
