const app = require('express')()

app.use('/test', (req, res) => {
  res.send({Nijar : 'Ahmad'})
})

app.use('/', (req, res) => {
  res.send({jos : 'run' })
})

app.listen((process.env.PORT || '3000'), () => {
	console.log('jalan port 3000 tong');
})

module.exports = app
