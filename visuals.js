const Visuals = Backbone.View.extend({
  id: 'visuals',

  className: 'row',

  render: function () {
    this.el.innerHTML = `
      <div class='col-xs-12'>
        <h1>mylij / visuals</h1>
        <div id='controls'>
          <a href='#home' class='btn btn-clear'><span class='glyphicon glyphicon-home'></span></a>
        </div>
        <p>Come back later for 📊 and 📈</p>
      </div>
    `

    return this;
  }
})
