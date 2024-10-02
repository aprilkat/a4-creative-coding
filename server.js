const express = require('express'),
      app     = express(),
      cors    = require('cors')

app.use( cors() )
app.use( express.static('./') )

app.listen(process.env.PORT || 3000);