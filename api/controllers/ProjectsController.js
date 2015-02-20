module.exports = {
    show: function (req, res) {
        //var param = req.param('message');
        //res.json({
        //    success: true,
        //    message: param
        //});
        Projects.find({}, function (err, data) {
            res.json(data);
        });
    },

    //create: function (req, res) {
    //    Projects.create(req.body)
    //        .done(function (err, event) {
    //            if (err) {
    //                res.send(err);
    //            } else {
    //                res.socket.emit('new projects', event);
    //                res.send(200);
    //            }
    //        });
    //
    //},

    update: function (req, res) {
        Projects.findOne(req.param("id")).exec(function (err, project) {
            project.tasks.push(req.body);
            project.save(function (err) {             if (err) {
                res.send(err);
            } else {
                res.send(200);
            }});
        });
    },

    destroy: function (req, res) {

        // Send a JSON response
        return res.json({
            hello: 'world'
        });
    }
}