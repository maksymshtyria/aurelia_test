module.exports = {
    attributes: {
        title: "string",
        tasks: "array",
        createdAt: {
            type: 'datetime',
            defaultsTo: function (){ return new Date(); }
        }
    },

    adapter: 'someMongodbServer',
    tableName: 'Projects'
}