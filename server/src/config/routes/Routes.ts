import express = require('express');
import path = require('path');

import BookRoutes = require('../routes/BookRoutes');

var app = express();

class Routes {
    get routes() {
        app.use("/", new BookRoutes().routes);
        return app;
    }
}
export = Routes;