const Home = Backbone.View.extend({
  id: 'home',

  className: 'row',

  getAverageMileage: function () {
    if (this.collection.isEmpty()) {
      return 0
    } else {
      return this.collection.reduce((memo, model) => memo + model.get('mpg'), 0) / this.collection.length
    }
  },

  render: function() {
    this.el.innerHTML = `
      <div class='col-xs-12'>
        <h1>mylij</h1>
        <div id='controls'>
          <a href='#add' class='btn btn-clear'><span class='glyphicon glyphicon-plus'></span></a>
          <a href='#entries' class='btn btn-clear'><span class='glyphicon glyphicon-th-list'></span></a>
          <a href='#visuals' class='btn btn-clear'><span class='glyphicon glyphicon-signal'></span></a>
        </div>
        <div id='avg-mileage-container'>
          <span id="avg-mileage">${this.getAverageMileage().toFixed(2)}</span><span id='mpg-unit-label'> mpg</span>
        </div>
      </div>
    `

    return this
  }
})
