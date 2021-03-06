const l = require("../dependence/lodash.js");
const math = require("../dependence/math.js");
const moment = require("../dependence/moment");
const c = console.log;
const {
  getOwnPropertyNames,
  getPrototypeOf,
} = Object;
const {
  max,
  trunc,
  random,
  floor,
  sqrt,
} = Math;
const type = Function.prototype.call.bind(Object.prototype.toString);

const generatorLabelValue1 = (arr, actionPayloadData) => {
  let ret = [];
  arr.forEach(v => {
    ret.push({
      label: v[0],
      value: actionPayloadData[v[1]],
    });
  });

  return ret.filter(v => v.value !== '' && v.value !== null);
};


const exampleOfArr1 = [['电话', 'phone'], ['邮箱', 'email'], ['地址', 'address']];
const exampleOfArr2 = [['电话', 'phone', 'isMore', 'true'], ['邮箱', 'email'], ['地址', 'address']];
const exampleOfArr3 = [['电话', 'phone', {
  isMore: true,
}], ['邮箱', 'email'], ['地址', 'address']];

const exampleOfProperty = {
  phone: 1359828190,
  email: 'apple@163.com',
  address: null
};


const generatorLabelValue2 = (arr, actionPayloadData, option) => {
  let ret = [];
  arr.forEach(v => {
    let item = {};
    if (v.length === 4) {
      item[v[2]] = v[3]
    }
    item.label = v[0];
    item.key = v[1];
    item.value = actionPayloadData[v[1]];
    ret.push({
      ...item
    });
  });

  return ret;
};

const generatorLabelValue3 = (arr, actionPayloadData, option) => {
  let ret = [];
  arr.forEach(v => {
    let item = {};
    if (v.length === 3) {
      item = Object.assign(item, v[2])
    }
    item.label = v[0];
    item.key = v[1];
    item.value = actionPayloadData[v[1]];
    ret.push({
      ...item
    });
  });

  return ret;
};

const generatorLabelValue = generatorLabelValue3;
const exampleOfArr = exampleOfArr3;

c(generatorLabelValue(exampleOfArr3, exampleOfProperty));

const TAB_TITLE = [
  {
    label: 'day',
    name: '日榜',
    type: 0,
  },
  {
    label: 'week',
    name: '周榜',
    type: 1,
  },
  {
    label: 'month',
    name: '月榜',
    type: 2,
  },
  {
    label: 'hot',
    name: '热榜',
    type: 3,
  },
  {
    label: 'new',
    name: '新榜',
    type: 4,
  },
];

const generatorImagePath = (name, path = '../images/') => name + ': "' + path + name + '",';

// const generatorImagePathArr = (nameArr, path = '../images/') => {
//   let ret = {};
//   nameArr.forEach(v => {
//     ret[v] = path + v;
//   });
//   return ret;
// };

// const generatorImagePathArr = (nameArr, path = '../images/') => {
//   let ret = {};
//   nameArr.forEach(v => {
//     ret[v] = path + v + '_gray.png';
//   });
//   return ret;
// };

const generatorImagePathArr = (nameArr, path = '../images/') => {
  let ret = {};
  nameArr.forEach(v => {
    ret[v] = path + v + '_hot.png';
  });
  return ret;
};

// c(generatorImagePathArr(['productListTabImg', 'closeImg']));
c(generatorImagePathArr(TAB_TITLE.map(v => v.label)));

c(generatorImagePath('productListTabImg'));

const extendNotNull = (source, target) => {
  let ret = {};
  for (let k in target) {
    if (target[k] !== null) {
      ret[k] = target[k]
    } else {
      ret[k] = source[k]
    }
  }

  return ret;
};

const longitude = '23.1665';
c(parseFloat(longitude) === Number(longitude));

c(type(Number()));
c(Number());

const generatorKeyValue = (keyArr, actionPayloadData) => {
  let ret = [];

  actionPayloadData.forEach(v => {
    let obj = {};
    keyArr.forEach(val => {
      obj[val] = v[val]
    });
    ret.push(obj)
  });

  return ret;
};

c(generatorKeyValue(['type', 'label'], TAB_TITLE));

const generateArrayEveryFourItem = arr => {
  let ret = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i % 4 === 0) {
      ret.push(arr.splice(0, 4))
    }
  }

  return ret;
};

let testArr = [9];
testArr.push([80, 80]);
c(testArr);

c(generateArrayEveryFourItem(l.range(0, 22)));


const checkboxSelectedArray = (selected, newSelected) => {
  let res;
  // is a array
  if (Array.isArray(selected)) {
    res = selected.slice();
    const idx = selected.indexOf(newSelected);
    if (idx > -1) {
      // if already has selected, remove it
      res.splice(idx, 1);
    } else {
      // add newSelected
      res = selected.concat(newSelected);
    }
  } else {
    // create a array and add newSelected
    res = [].concat(newSelected);
  }

  return res;
};

c(checkboxSelectedArray([], 8));
c(checkboxSelectedArray([8, 18], 8));
c(checkboxSelectedArray([80, 18], 8));

const generateAbsoluteObj = arr => {
  let ret = {};
  arr.forEach(v => {
    ret[v] = true
  });

  return ret;
};

c(generateAbsoluteObj([2, 38, 0, 10])['0']);
c(generateAbsoluteObj([2, 38, 0, 10])['20']);

const setActive = (arr, classificationId) => {
  arr.forEach(v => {
    v.forEach(val => {
      if (val['classificationId'] === classificationId) {
        val.active = true
      }
    })
  });
  return arr;
};

const type3Arr = [
  [
    {
      classificationId: 80,
      name: 'a',
    },
    {
      classificationId: 70,
      name: 'a',
    },
    {
      classificationId: 50,
      name: 'a',
    },
    {
      classificationId: 83,
      name: 'a',
    },
  ],
  [
    {
      classificationId: 180,
      name: 'ao',
    },
    {
      classificationId: 170,
      name: 'app',
    },
    {
      classificationId: 150,
      name: 'j',
    },
    {
      classificationId: 183,
      name: 'bkk',
    },
  ],
];
c(setActive(type3Arr, 70));

const toggleActive = (arr, classificationId) => {
  arr.forEach(v => {
    v.forEach(val => {
      if (val['classificationId'] === classificationId) {
        val.active = !val.active;
      }
    })
  });
  return arr;
};

// c(toggleActive(type3Arr, 70))
c(toggleActive(type3Arr, 150));
c(toggleActive(type3Arr, 150));

const resetActive = arr => {
  arr.forEach(v => {
    v.forEach(val => {
      val.active = false;
    })
  });
  return arr;
};
c(resetActive(type3Arr));

c([].concat(...type3Arr));

const omit = (o, keysArr) => {
  let ret = {};
  for (let k in o) {
    if (keysArr.indexOf(k) === -1) {
      ret[k] = o[k]
    }
  }
  return ret;
};

c(omit(TAB_TITLE[0], ['type', 'label']));

const pick = (o, keysArr) => {
  let ret = {};
  for (let k in o) {
    if (keysArr.indexOf(k) > -1) {
      ret[k] = o[k]
    }
  }
  return ret;
};

c(pick(TAB_TITLE[0], ['type', 'label']));

c([...[8, 2]]);

const userInfoImage = key => ([
  key,
  {
    image: `../images/${key}.png`,
  },
]);

const USERINFO_ARR = [
  [
    '职位',
    'position',
  ],
  [
    '手机',
    'mobileNum',
  ],
  [
    '电话',
    'telephoneNum',
  ],
  [
    '微信号',
    'wechatNum',
  ],
  [
    'qq号',
    'qq',
  ],
  [
    '邮箱',
    'email',
  ],
];
c(userInfoImage('qq'));

c(l.upperCase('advertisement'))


const QQ_MAP_DOMAIN = 'http://apis.map.qq.com/';
const QQ_MAP_BASE_URL = 'ws/geocoder/v1/';

const QQ_MAP_KEY = 'UZEBZ-56XLX-TR54J-73IBB-RVFZ2-47FF2';
/**
 * 根据经纬度取得位置中文信息
 */
const qqMapGetLocationByDegree = (payload) =>
  Server.list(combineURL(QQ_MAP_DOMAIN, QQ_MAP_BASE_URL), payload);
// 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=UZEBZ-56XLX-TR54J-73IBB-RVFZ2-47FF2';

/**
 * 根据位置中文取得经纬度
 */
const qqMapGetLocationByName = (payload) =>
  Server.qqMap(payload);
// 'http://apis.map.qq.com/ws/geocoder/v1/?address=' + text + '&key=UZEBZ-56XLX-TR54J-73IBB-RVFZ2-47FF2';
c(l.snakeCase('fromShareProductId'))

