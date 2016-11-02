import express = require('express');
import path = require('path');

import BookRoutes = require('../routes/BookRoutes');
import HeroRoutes = require('../routes/HeroRoutes');

var app = express();

class Routes {
    get routes() {
        app.use("/", new BookRoutes().routes);
        app.use("/", new HeroRoutes().routes);
        return app;
    }
}
export = Routes;