module.exports = {
    attributes: {
        title: "string",
        tasks: {
            type: "array",
            defaultsTo: []
        },
        createdAt: {
            type: 'datetime',
            defaultsTo: function (){ return new Date(); }
        }
    },

    adapter: 'someMongodbServer',
    tableName: 'Projects'
};