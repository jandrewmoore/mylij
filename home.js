const Home = Backbone.View.extend({
  classname: 'mylij',

  getAverageMileage: function () {
    return this.collection.reduce((memo, model) => memo + model.get('mpg'), 0) / this.collection.length
  },

  render: function() {
    this.el.innerHTML = '<h1>mylij</h1>'

    this.el.innerHTML += `<span id="avg-mileage">${this.getAverageMileage()}</span>`

    this.el.innerHTML += `
    <ul id='controls'>
      <li><a href='#add'>➕</a></li>
      <li><a href='#entries'>🗒</a></li>
      <li><a href='#visuals'>📊</a></li>
    </ul>
    `

    return this
  }
})
