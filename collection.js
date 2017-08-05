const electron = require('electron')
const path = require('path')
const fs = require ('fs')

const Mylij = Backbone.Model.extend({
  parse: function (data) {
    return {
        miles: data.miles,
        gallons: data.gallons,
        date: new Date(data.date),
        price: data.price,
        mpg: data.mpg === undefined ? data.miles / data.gallons : data.mpg
    }
  }
})

const MylijCollection = Backbone.Collection.extend({
  model: Mylij,

  initialize: function () {
    const userDataPath = electron.remote.app.getPath('userData')
    this.path = path.join(userDataPath, 'mylij.json')
  },

  fetch: function () {
    let data

    try {
      data = JSON.parse(fs.readFileSync(this.path))
    } catch (error) {
      data = []
    }

    this.set(data)
  },

  sync: function () {
    fs.writeFileSync(this.path, JSON.stringify(this.toJSON()))
  }
})
