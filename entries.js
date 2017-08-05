const Entries = Backbone.View.extend({
  render: function () {
    this.el.innerHTML = `
      <h1>mylij / entries</h1>
      <p>A list!</p>
      <a href='#home'>🏡</a>
    `

    return this;
  }
})
