//toolbar菜单Action
const toolbarActions = [
    {
        key: '001',
        title: 'Search',
        icon: require('../../../img/toolbar_menu_search.png'),
        show: 'always'
    }, {
        key: '002',
        title: 'Content',
        icon: require('../../../img/toolbar_menu_filter.png'),
        show: 'always'
    }, {
        key: '003',
        title: 'Language',
        icon: require('../../../img/toolbar_menu_language.png'),
        show: 'always'
    }
];

//内容选择类表
const contentChoiceList = [
    {
        typeId: 't001',
        type: 'content',
        name: 'Tech',
        selected: false
    },
    {
        typeId: 't002',
        type: 'content',
        name: 'News',
        selected: false
    }, {
        typeId: 't003',
        type: 'content',
        name: 'Business',
        selected: false
    }, {
        typeId: 't004',
        type: 'content',
        name: 'Health',
        selected: false
    }, {
        typeId: 't005',
        type: 'content',
        name: 'Gaming',
        selected: false
    }, {
        typeId: 't006',
        type: 'content',
        name: 'Design',
        selected: false
    }, {
        typeId: 't007',
        type: 'content',
        name: 'Fashion',
        selected: false
    }, {
        typeId: 't008',
        type: 'content',
        name: 'Cooking',
        selected: false
    }, {
        typeId: 't009',
        type: 'content',
        name: 'Comics',
        selected: false
    }, {
        typeId: 't010',
        type: 'content',
        name: 'DIY',
        selected: false
    }, {
        typeId: 't011',
        type: 'content',
        name: 'Sport',
        selected: false
    }, {
        typeId: 't012',
        type: 'content',
        name: 'Cinema',
        selected: false
    }, {
        typeId: 't013',
        type: 'content',
        name: 'Youtube',
        selected: false
    }, {
        typeId: 't014',
        type: 'content',
        name: 'Funny',
        selected: false
    }, {
        typeId: 't015',
        type: 'content',
        name: 'Esty',
        selected: false
    }
];

//语言选择列表
const languagedChoiceList = [
    {
        typeId: 'l001',
        type: 'language',
        name: 'English',
        selected: true
    }, {
        typeId: 'l002',
        type: 'language',
        name: '日语',
        selected: false
    }, {
        typeId: 'l003',
        type: 'language',
        name: '中文',
        selected: false
    }
];

const publisherList = [
    {
        publisherId: 'p001',
        type: 't001',
        language: 'l001',
        name: 'The Tech-mock',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p002',
        type: 't001',
        language: 'l001',
        name: 'Engadget',
        subscribeNum: '1348433 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p003',
        type: 't001',
        language: 'l001',
        name: 'Lifehacker',
        subscribeNum: '934275 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p004',
        type: 't001',
        language: 'l001',
        name: 'ReadWrite-mock',
        subscribeNum: '254332 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p005',
        type: 't001',
        language: 'l001',
        name: 'Digital Trends',
        subscribeNum: '145694 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p006',
        type: 't001',
        language: 'l001',
        name: 'Business Insider',
        subscribeNum: '331892 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p007',
        type: 't001',
        language: 'l003',
        name: '月光博客',
        subscribeNum: '254321 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p008',
        type: 't001',
        language: 'l003',
        name: '36氪',
        subscribeNum: '125345 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p009',
        type: 't001',
        language: 'l001',
        name: 'TechCrunch-mock',
        subscribeNum: '994287 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p101',
        type: 't002',
        language: 'l001',
        name: 'The News',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p102',
        type: 't002',
        language: 'l001',
        name: 'Engadget',
        subscribeNum: '1348433 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p103',
        type: 't002',
        language: 'l001',
        name: 'Lifehacker-mock',
        subscribeNum: '934274 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p104',
        type: 't002',
        language: 'l001',
        name: 'ReadWrite',
        subscribeNum: '254332 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p105',
        type: 't002',
        language: 'l001',
        name: 'Digital Trends',
        subscribeNum: '145694 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p106',
        type: 't002',
        language: 'l001',
        name: 'Business Insider',
        subscribeNum: '331892 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p107',
        type: 't002',
        language: 'l003',
        name: '今日头条',
        subscribeNum: '254321 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p108',
        type: 't002',
        language: 'l003',
        name: '腾讯新闻',
        subscribeNum: '125345 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p109',
        type: 't002',
        language: 'l001',
        name: 'TechCrunch',
        subscribeNum: '994287 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p201',
        type: 't003',
        language: 'l001',
        name: 'The Business',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p202',
        type: 't003',
        language: 'l001',
        name: 'The New York Times',
        subscribeNum: '1348433 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p203',
        type: 't003',
        language: 'l001',
        name: 'OZY-mock',
        subscribeNum: '934273 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p204',
        type: 't003',
        language: 'l001',
        name: 'ABC News',
        subscribeNum: '254332 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p205',
        type: 't003',
        language: 'l001',
        name: 'FOX News',
        subscribeNum: '145694 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p206',
        type: 't003',
        language: 'l001',
        name: 'NRP News',
        subscribeNum: '331892 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p207',
        type: 't003',
        language: 'l003',
        name: '财经周刊',
        subscribeNum: '254321 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p208',
        type: 't003',
        language: 'l003',
        name: '交易时刻',
        subscribeNum: '125345 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p209',
        type: 't003',
        language: 'l001',
        name: 'BBC',
        subscribeNum: '994287 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p301',
        type: 't004',
        language: 'l001',
        name: 'zen habits',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p302',
        type: 't004',
        language: 'l001',
        name: 'Skinnytaste-mock',
        subscribeNum: '1348433 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p303',
        type: 't004',
        language: 'l001',
        name: 'Lifehacker',
        subscribeNum: '934273 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p304',
        type: 't004',
        language: 'l001',
        name: 'Marks Daily Apple ',
        subscribeNum: '254332 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p305',
        type: 't004',
        language: 'l001',
        name: 'Oh She Glows',
        subscribeNum: '145694 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p306',
        type: 't004',
        language: 'l001',
        name: 'Health',
        subscribeNum: '331892 subscribers ',
        isSubscribed: false
    }, {
        publisherId: 'p307',
        type: 't004',
        language: 'l003',
        name: '健康之路',
        subscribeNum: '254321 subscribers',
        isSubscribed: false
    },
    {
        publisherId: 'p308',
        type: 't004',
        language: 'l003',
        name: '星星点灯',
        subscribeNum: '125345 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p309',
        type: 't004',
        language: 'l001',
        name: 'NYT -mock',
        subscribeNum: '994287 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p401',
        type: 't005',
        language: 'l001',
        name: 'The Gaming',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p402',
        type: 't005',
        language: 'l001',
        name: 'Polygon',
        subscribeNum: '1348433 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p403',
        type: 't005',
        language: 'l001',
        name: 'Kotaku',
        subscribeNum: '934273 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p404',
        type: 't005',
        language: 'l001',
        name: 'Joystiq',
        subscribeNum: '254332 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p505',
        type: 't005',
        language: 'l001',
        name: 'IndieGames',
        subscribeNum: '145694 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p606',
        type: 't005',
        language: 'l001',
        name: 'Game Life',
        subscribeNum: '331892 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p607',
        type: 't005',
        language: 'l003',
        name: '电竞世界',
        subscribeNum: '254321 subscribers',
        isSubscribed: false
    }, {
        publisherId: 'p608',
        type: 't005',
        language: 'l003',
        name: '一起游戏',
        subscribeNum: '125345 subscribers',
        isSubscribed: false
    }
    , {
        publisherId: 'p609',
        type: 't005',
        language: 'l001',
        name: 'Penny Arcade',
        subscribeNum: '994287 subscribers',
        isSubscribed: false
    }
];

export {
    toolbarActions,
    contentChoiceList,
    languagedChoiceList,
    publisherList
}
