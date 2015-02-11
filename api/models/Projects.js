module.exports = {
    attributes: {
        title: "string",
        tasks: "array"
    },

    adapter: 'someMongodbServer',
    tableName: 'Projects'
}