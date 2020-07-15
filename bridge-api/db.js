const bridges = require('./bridges.json');

module.exports = {

    all: () => bridges.map(bridge => ({
       id: bridge.id,
       name: bridghe.name 
    })),

    byId: (id) => bridges.find(bridge => bridge.id === id)
};