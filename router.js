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

    console.log('Load home page')
  },

  loadAddPage: function () {
    const add = new Add({
      collection: this.collection,
    })
    
    $('#root').html(add.render().el);

    console.log('Load add page')
  },

  loadEntriesPage: function () {
    const entries = new Entries({collection: this.collection})
    $('#root').html(entries.render().el);

    console.log('Load entries page')
  },

  loadVisualsPage: function () {
    const visuals = new Visuals({collection: this.collection})
    $('#root').html(visuals.render().el);

    console.log('Load visuals page')
  }
})
