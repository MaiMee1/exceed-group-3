const TRUTH = 0;
const LIE = 1;

let statistics = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
]

function updateStat(result) {
    for (const question in result) {
        const number = Number.parseInt(question);
        const choice = result[question][0];
        const truthValue = result[question][1] ? 0 : 1;
        statistics[choice][truthValue][number - 1] += 1;
    }
}

async function updateGraph() {
    const numberLast = await fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-lastid')
    const numberNew = await fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-id');
    const idNew = await numberNew.json();
    const idLast = await numberLast.json();
    
    const statUpdate = await fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-update');
    const temp = await statUpdate.json();
    statistics = temp["stats"]
    console.log(idNew)
    console.log(idLast)
    if (idNew["value"] != idLast["value"]) {
        console.log("changestat")
        const result = await fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-000');
        const data = await result.json();
        updateStat(data);
    }
    const options = {
        chart: {
            renderTo: 'graph',
            type: 'column'
        },
        colors: ['#86d780', '#eb8181'],

        title: {
            text: 'สถิติการทำแบบสอบถาม'
        },

        xAxis: {
            categories: ['ข้อ1', 'ข้อ2', 'ข้อ3', 'ข้อ4', 'ข้อ5', 'ข้อ6', 'ข้อ7', 'ข้อ8', 'ข้อ9']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'จำนวนที่ทำแบบทดสอบ(ครั้ง)'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'รวม: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },



        // * คือโกหก
        series: [{
            name: '1*',
            data: statistics[0][1],
            stack: 'ตัวเลือก1'
        }, {
            name: '1',
            data: statistics[0][0],
            stack: 'ตัวเลือก1'
        }, {
            name: '2*',
            data: statistics[1][1],
            stack: 'ตัวเลือก2'
        }, {
            name: '2',
            data: statistics[1][0],
            stack: 'ตัวเลือก2'
        }, {
            name: '3*',
            data: statistics[2][1],
            stack: 'ตัวเลือก3'
        }, {
            name: '3',
            data: statistics[2][0],
            stack: 'ตัวเลือก3'
        }, {
            name: '4*',
            data: statistics[3][1],
            stack: 'ตัวเลือก4'
        }, {
            name: '4',
            data: statistics[3][0],
            stack: 'ตัวเลือก4'
        }]
    };
    var chart = new Highcharts.Chart(options)
    postStat();
    updateID(idNew);
    

}

function updateID(idNew) {
    console.log('tried posting', idNew)
    fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-lastid', {
            method: 'POST',
            body: JSON.stringify({
                'data':  idNew
                
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}


function postStat() {
    fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-update', {
            method: 'POST',
            body: JSON.stringify({
                'data': {
                    "stats": statistics
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
};

function resetStat() {
    fetch('https://exceed.superposition.pknn.dev/data/love-shot-data-update', {
            method: 'POST',
            body: JSON.stringify({
                'data': {
                    "stats": [
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        ],
                        [
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        ],
                    ]
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

// resetStat();
updateGraph();