const Entries = Backbone.View.extend({
  render: function () {
    this.el.innerHTML = `
      <h1>mylij / entries</h1>
      <ul>
        ${this.collection.models.reduce((memo, model) => memo + `<li>${model.get('mpg')} mpg</li>`, '')}
      </ul>
      <a href='#home'>🏡</a>
    `

    return this;
  }
})
