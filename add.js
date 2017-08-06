const Add = Backbone.View.extend({
  id: 'add',

  className: 'row',

  events: {
    'click #save': 'saveMylij',
    'input #miles': 'updateMiles',
    'input #gallons': 'updateGallons',
    'input #date': 'updateDate',
    'input #price': 'updatePrice',
  },

  initialize: function () {
    this.listenTo(this.model, 'change:mpg', this.updateMpg)
  },

  saveMylij: function () {
    if (!this.model.isValid()) {
      console.log(this.model.validationError)
    } else {
      this.collection.add(this.model)

      this.collection.sync()

      this.model = new MylijModel()
      this.render();
    }
  },

  updateMiles: function () {
    if (this.$('#miles').val() === '') {
      this.model.set('miles', undefined)
    } else {
      this.model.set('miles', +this.$('#miles').val())
    }
  },

  updateGallons: function () {
    if (this.$('#gallons').val() === '') {
      this.model.set('gallons', undefined)
    } else {
      this.model.set('gallons', +this.$('#gallons').val())
    }
  },

  updateMpg: function () {
    const mpg = this.model.get('mpg')

    if (mpg) {
      this.$('#mpg').text(`${mpg} mpg`)
    } else {
      this.$('#mpg').empty();
    }
  },

  updateDate: function () {
    if (this.$('#date').val() === '') {
      this.model.set('date', undefined)
    } else {
      this.model.set('date', this.$('#date').val())
    }
  },

  updatePrice: function () {
    if (this.$('#price').val() === '') {
      this.model.set('price', undefined)
    } else {
      this.model.set('price', +this.$('#price').val())
    }
  },

  render: function () {
    this.el.innerHTML = `
      <div class='col-xs-12'>

        <h1>mylij / add</h1>

        <div id='controls'>
          <a href='#home' class='btn btn-clear'><span class='glyphicon glyphicon-home'></span></a>
        </div>

        <form>
          <div class='form-group'>
            <label for='miles'>miles</label>
            <input id='miles' class='form-control' type='number' placeholder='0.0' />
          </div>
          <div class='form-group'>
            <label for='gallons'>gallons</label>
            <input id='gallons' class='form-control' type='number' placeholder='0.0' />
          </div>
          <div class="form-group">
            <label class=" control-label">mpg</label>
            <p id='mpg' class="form-control-static"></p>
          </div>
        </form>
        <form>
          <div class='form-group'>
            <label for='date'>date</label>
            <input id='date' class='form-control' type='date' />
          </div>
          <div class='form-group'>
            <label for='price'>price</label>
            <input id='price' class='form-control' type='number' placeholder='0.0' />
          </div>
          <button id='save' class='btn btn-success'>save</button>
        </form>
      </div>
    `

    return this;
  }
})
