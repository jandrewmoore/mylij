const Add = Backbone.View.extend({
  events: {
    'click #save': 'saveMylij',
    'input #miles': 'updateMiles',
    'input #gallons': 'updateGallons',
    'input #date': 'updateDate',
    'input #price': 'updatePrice',
  },

  saveMylij: function () {
    if (!this.model.isValid()) {
      console.log(this.model.validationError)
    } else {
      this.collection.add(this.model)

      this.collection.sync();

      this.model = new MylijModel()
      this.render();
    }
  },

  updateMiles: function () {
    if (this.$('#miles').val() === '') {
      this.model.set('miles', undefined)
    } else {
      this.model.set('miles', +this.$('#miles').val())
      this.updateMpg()
    }
  },

  updateGallons: function () {
    if (this.$('#gallons').val() === '') {
      this.model.set('gallons', undefined)
    } else {
      this.model.set('gallons', +this.$('#gallons').val())
      this.updateMpg()
    }
  },

  updateMpg: function () {
    const mpg = this.model.get('mpg')

    if (mpg) {
      this.$('#mpg').text(`${mpg} mpg`)
    }
  },

  updateDate: function () {
    if (this.$('#date').val() === '') {
      this.model.set('date', undefined)
    } else {
      this.model.set('date', new Date(this.$('#date').val()))
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
      <h1>mylij / add</h1>

      <div>
        <label for='miles'>miles</label>
        <input id='miles' type='number' placeholder='0.0' />
        /
        <label for='gallons'>gallons</label>
        <input id='gallons' type='number' placeholder='0.0' />
        =
        <span id='mpg'></span>
      </div>
      <div>
        <label for='date'>date</label>
        <input id='date' type='date' />

        <label for='price'>price</label>
        <input id='price' type='number' placeholder='0.0' />
      </div>
      <div>
        <button id='save'>save</button>
        <button id='cancel'>cancel</button>
      </div>

      <a href='#home'>🏡</a>
    `

    return this;
  }
})
