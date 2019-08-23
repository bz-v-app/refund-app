/*
	email:helang.love@qq.com
	copy:helang
*/

;$.extend({
    selectDate: function(el, info, cbFn) {
        var createDateData = function(start, end) {
            var dateData = [{
                data: []
            }];
            var hArr = [
                {
                    "id": 0,
                    "value": "0时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 1,
                    "value": "1时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 2,
                    "value": "2时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 3,
                    "value": "3时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 4,
                    "value": "4时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 5,
                    "value": "5时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 6,
                    "value": "6时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 7,
                    "value": "7时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 8,
                    "value": "8时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 9,
                    "value": "9时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 10,
                    "value": "10时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 11,
                    "value": "11时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 12,
                    "value": "12时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 13,
                    "value": "13时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 14,
                    "value": "14时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 15,
                    "value": "15时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 16,
                    "value": "16时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 17,
                    "value": "17时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 18,
                    "value": "18时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 19,
                    "value": "19时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 20,
                    "value": "20时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 21,
                    "value": "21时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 22,
                    "value": "22时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                },
                {
                    "id": 23,
                    "value": "23时",
                    "childs": [
                        {
                            "id": 0,
                            "value": "0分"
                        },
                        {
                            "id": 30,
                            "value": "30分"
                        }
                    ]
                }
            ]
            var returnDayLen = function(year, month) {
                if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    return 31
                } else if (month == 2) {
                    if (year % 4 == 0 && year % 100 != 0) {
                        return 29
                    } else if (year % 400 == 0) {
                        return 29
                    } else {
                        return 28
                    }
                } else {
                    return 30
                }
            };
            for (var x = start; x <= end; x++) {
                var data = {
                    id: x,
                    value: x + "年",
                    childs: []
                };
                for (var y = 1; y <= 12; y++) {
                    var dayArr = [];
                    var len = returnDayLen(x, y);
                    for (var z = 1; z <= len; z++) {
                        dayArr.push({
                            id: z,
                            value: z + "日",
                            childs: hArr
                        })
                    }
                    data.childs.push({
                        id: y,
                        value: y + "月",
                        childs: dayArr
                    })
                }
                dateData[0].data.push(data)
            }
            return dateData
        };
        var infoData = {}
            , now = new Date();
        if (!info.start || !info.end || info.end < info.start) {
            infoData.start = now.getFullYear() - 60;
            infoData.end = now.getFullYear()
        } else {
            infoData.start = info.start;
            infoData.end = info.end
        }
        if (!info.select || info.select.length !== 3) {
            infoData.select = [info.select[0] - infoData.start, now.getMonth(), now.getDate() - 1, now.getHours(), 0]
        } else {
            infoData.select = [info.select[0] - infoData.start, info.select[1] - 1, info.select[2] - 1, info.select[3] - 1]
        }
        var selectDate = new MobileSelect({
            trigger: el,
            title: info.title || '手势拖动选择日期',
            wheels: createDateData(infoData.start, infoData.end),
            position: infoData.select,
            callback: function(item, data) {
                console.warn(data)
                var dateInfo = {
                    year: data[0].id,
                    month: data[1].id,
                    day: data[2].id,
                    hours: data[3].id,
                    minutes: data[4].id,
                };
                cbFn && cbFn(dateInfo)
            }
        })
    },
    selectDateSimple: function(el, info, cbFn) {
        var createDateData = function(start, end) {
            var dateData = [{
                data: []
            }, {
                data: []
            }];
            for (var i = start; i <= end; i++) {
                dateData[0].data.push({
                    id: i,
                    value: i + "年"
                })
            }
            for (var j = 1; j <= 12; j++) {
                dateData[1].data.push({
                    id: j,
                    value: j + "月"
                })
            }
            return dateData
        };
        var infoData = {}
            , now = new Date();
        if (!info.start || !info.end || info.end < info.start) {
            infoData.start = now.getFullYear() - 60;
            infoData.end = now.getFullYear()
        } else {
            infoData.start = info.start;
            infoData.end = info.end
        }
        if (!info.select || info.select.length != 2) {
            infoData.select = [infoData.end - infoData.start, now.getMonth(), now.getDate() - 1]
        } else {
            infoData.select = [info.select[0] - infoData.start, info.select[1] - 1]
        }
        var selectDate = new MobileSelect({
            trigger: el,
            title: info.title || '手势拖动选择日期',
            wheels: createDateData(infoData.start, infoData.end),
            position: infoData.select,
            callback: function(item, data) {
                var dateInfo = {
                    year: data[0].id,
                    month: data[1].id,
                };
                cbFn && cbFn(dateInfo)
            }
        })
    }
});
