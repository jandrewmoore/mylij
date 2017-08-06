const Entry = Backbone.View.extend({
  tagName: 'tr',

  render: function () {
    this.el.innerHTML = `
        <td>${this.model.get('miles')}</td>
        <td>${this.model.get('gallons')}</td>
        <td>${this.model.get('mpg')}</td>
        <td>${this.model.get('date')}</td>
        <td>${this.model.get('price')}</td>
    `

    return this
  }
})

const Entries = Backbone.View.extend({
  id: 'entries',

  className: 'row',

  initialize: function () {
    this.entryViews = this.collection.map(model => new Entry({model: model}))
  },

  render: function () {
    this.el.innerHTML = `
      <div class='col-xs-12'>
        <h1>mylij / entries</h1>
        <div id='controls'>
          <a href='#home' class='btn btn-clear'><span class='glyphicon glyphicon-home'></span></a>
        </div>

        <div class='row'>
          <div id='table-scroller' class='col-xs-12'>
            <table class='table'>
              <thead>
                <tr>
                  <th>mi</th>
                  <th>gal</th>
                  <th>mpg</th>
                  <th>date</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody id='entry-list'>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `

    this.entryViews.forEach(entryView => this.$('#entry-list').append(entryView.render().el))

    return this;
  }
})
