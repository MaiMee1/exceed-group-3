const domain = 'https://exceed.superposition.pknn.dev/data/love-shot'
let linkto = null

function handle(page, num) {
    let x = []
    for (let i = 1; i < num + 1; i++) {
        x.push(sessionStorage.getItem(page + '/' + i.toString() + '.html'));
        console.log(page + '/' + i.toString() + '.html');
    }
    console.log(x)
    postData({
        1: x[0],
        2: x[1],
        3: x[2],
        4: x[3],
        5: x[4],
        6: x[5],
        7: x[6],
        8: x[7],
        9: x[8]
    }, domain + '-data-000')
    return x.reduce((a, b) => a + b, 0)
}

function postData(data = {}, url = 'https://exceed.superposition.pknn.dev/data/love-shot-data-000') {
    console.log('tried posting ' + JSON.stringify(data))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({ "data": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then(function (response) {window.location.href = linkto})
        .catch(error => console.error('Error:', error));
}


let url = window.location.href
let referer = null
try {
    let maps = url.split('?')[1].split('&')

    for (const keyvalue of maps) {
        let temp = keyvalue.split('=')
        let key = temp[0]
        if (key == 'ref') {
            referer = temp[1]
        }
    }
    console.log(1)
}
catch (e) { }

let result = null

if (referer == 1) {
    result = handle('page-1', 9)
    if (result > 7) { linkto = "result/highrish.html"; }
    else { linkto = "result/highrish.html"; }
} else if (referer == 2) {
    result = handle('page-2', 9)
    if (result > 7) { linkto = "result/highrish.html"; }
    else { linkto = "result/highrish.html"; }
}

