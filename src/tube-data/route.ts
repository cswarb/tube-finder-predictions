"use strict";

const tubeDataRoutes = (app: any) => {
    var tubeData = require('../tube-data/controller');

    app.route("/test").get(tubeData.list_all_tasks).post(tubeData.create_task);

};

module.exports = tubeDataRoutes;