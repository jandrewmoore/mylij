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
    if (this.model.isValid()) {
      this.collection.add(this.model)

      this.collection.sync()

      this.model = new MylijModel()
      this.listenTo(this.model, 'change:mpg', this.updateMpg)
      this.render();
    } else {
      console.log(this.model.validationError)
      this.renderValidationErrors();
    }
  },

  renderValidationErrors: function () {
    this.$('.has-error').removeClass('has-error')
    this.model.validationError.missingFields.forEach(missingField => {
      this.$(`#${missingField}-group`).addClass('has-error')
    })
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
      this.$('#mpg').text(`${mpg.toFixed(2)}`)
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

        <div class='row'>
          <div id='miles-group' class='form-group col-xs-3'>
            <label for='miles'>miles</label>
            <div class='input-group'>
              <span class="input-group-addon"><span class='glyphicon glyphicon-dashboard'></span></span>
              <input id='miles' class='form-control' type='number' placeholder='0.0' />
            </div>
          </div>
          <div class='col-xs-1 operator'>÷</div>
          <div id='gallons-group' class='form-group col-xs-3'>
            <label for='gallons'>gallons</label>
            <div class='input-group'>
              <span class="input-group-addon"><span class='glyphicon glyphicon-oil'></span></span>
              <input id='gallons' class='form-control' type='number' placeholder='0.00' />
            </div>
          </div>
          <div class='col-xs-1 operator'>=</div>
          <div class='col-xs-4'>
            <span id='mpg'></span>
          </div>
        </div>

        <div class='row'>
          <div id='date-group' class='form-group col-xs-4'>
            <label for='date'>date</label>
            <div class='input-group'>
              <span class="input-group-addon"><span class='glyphicon glyphicon-calendar'></span></span>
              <input id='date' class='form-control' type='date' />
            </div>
          </div>
          <div id='price-group' class='form-group col-xs-4'>
            <label for='price'>price</label>
            <div class='input-group'>
              <span class="input-group-addon"><span class='glyphicon glyphicon-usd'></span></span>
              <input id='price' class='form-control' type='number' placeholder='0.00' />
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='col-xs-1'>
            <button id='save' class='btn btn-clear'>save</button>
          </div>
        </div>
      </div>
    `

    return this;
  }
})
