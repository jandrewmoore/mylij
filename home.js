const Home = Backbone.View.extend({
  classname: 'mylij',

  getAverageMileage: function () {
    return this.collection.reduce((memo, model) => memo + model.get('mpg'), 0) / this.collection.length
  },

  render: function() {
    this.el.innerHTML = '<h1>mylij</h1>'

    this.el.innerHTML += `<span id="avg-mileage">${this.getAverageMileage()} mpg</span>`

    this.el.innerHTML += `
    <div id='controls'>
      <a href='#add'>➕</a>
      <a href='#entries'>🗒</a>
      <a href='#visuals'>📊</a>
    </div>
    `

    return this
  }
})
