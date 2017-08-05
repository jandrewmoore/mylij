const Add = Backbone.View.extend({
  render: function () {
    this.el.innerHTML = `
      <h1>mylij / add</h1>
      <p>A form!</p>
      <a href='#home'>🏡</a>
    `

    return this;
  }
})
