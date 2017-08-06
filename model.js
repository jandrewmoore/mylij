const MylijModel = Backbone.Model.extend({
  initialize: function () {
    this.listenTo(this, 'change:miles', this.updateMpg)
    this.listenTo(this, 'change:gallons', this.updateMpg)
  },

  updateMpg: function () {
    const miles = this.get('miles')
    const gallons = this.get('gallons')

    if (miles && gallons) {
      this.set('mpg', miles / gallons)
    } else {
      this.set('mpg', undefined)
    }
  },

  parse: function (data) {
    return {
        miles: data.miles,
        gallons: data.gallons,
        date: new Date(data.date),
        price: data.price,
        mpg: data.mpg === undefined ? data.miles / data.gallons : data.mpg
    }
  },

  validate: function () {
    const fields = ['miles', 'gallons', 'date', 'price']
    const missingFields = []

    fields.forEach(field => {
      if (!this.has(field)) {
        missingFields.push(field)
      }
    })

    if (missingFields.length) {
      return {
        message: 'Required fields are missing',
        missingFields: missingFields
      }
    }
  }
})
