const express = require('express');
const {publisherList, contentChoiceList, languagedChoiceList} = require('./MockData.js');

class MockServer {
    constructor() {
        this.app = express();
        this.server = null;
    }

    init() {
        const router = express.Router();
        router.route('/publishers').get((req, res) => {
            setTimeout(() => {
                res.json({
                    publisherList: publisherList,
                    contentChoiceList: contentChoiceList,
                    languagedChoiceList: languagedChoiceList
                })
            }, 3000)
        });
        this.app.use('/', router);
        this.server = this.app.listen(9001, () => {
            console.log('MockServer listening on port 9001!');
        });
    }

    close() {
        this.server.close();
    }
}

let mockServer = new MockServer();
mockServer.init();

module.exports = MockServer;

