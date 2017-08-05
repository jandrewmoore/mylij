const Visuals = Backbone.View.extend({
  render: function () {
    this.el.innerHTML = `
      <h1>mylij / visuals</h1>
      <p>A chart!</p>
      <a href='#home'>🏡</a>
    `

    return this;
  }
})
