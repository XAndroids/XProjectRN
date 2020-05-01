const express = require('express');
const {publisherList, contentChoiceList, languagedChoiceList} = require('./MockData.js');

class MockServer {
    constructor() {
        this.app = express();
        this.server = null;
    }

    setPublisherLength(length) {
        this.publishLength = length;
    }

    resetPublisherLength() {
        this.publishLength = null;
    }

    init() {
        const router = express.Router();
        router.route('/publishers').get((req, res) => {
            let returnPublisherList = this.publishLength ? publisherList.slice(0, this.publishLength) : publisherList;
            setTimeout(() => {
                res.json({
                    publisherList: returnPublisherList,
                    contentChoiceList: contentChoiceList,
                    languagedChoiceList: languagedChoiceList
                })
            }, 3000)
        });
        this.app.use('/', router);

        this.server = this.app.listen(9001);
        console.log('MockServer listening on port 9001!');
    }


    close() {
        this.server.close();
        console.log('MockServer close!');
    }
}

// new MockServer().init();

module.exports = MockServer;
