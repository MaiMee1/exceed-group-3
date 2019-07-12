const domain = 'https://exceed.superposition.pknn.dev/data/love-shot'
let cachedIndex = sessionStorage.getItem(window.location.href.split('/').slice(-2).join('/'))[0]

$(document).ready(function () {
    if (cachedIndex != null) {
        $(`input[type=radio]`).eq(cachedIndex).attr('checked', true)
    }

    $('input[type=radio]').click(function () {
        var index = $(this).index('input[type=radio]');

        fetch(domain + '-detector').then(function (response) {
            data = response.json()
            let lie = false
            for (key of ["Heartbeat", "Compass", "Temphumid"]) {
                if (data[key] == 'Lie') {
                    lie = true
                }
            }
            sessionStorage.setItem(window.location.href.split('/').slice(-2).join('/'), [index, lie])
        })
    });

    $('a[type=submit]').click(function () {
        let x = []
        for (let i = 1; i < 10; i++) {
            x.push(sessionStorage.getItem(window.location.href.split('/').slice(-2)[0] + '/' + i.toString() + '.html'));
            console.log(window.location.href.split('/').slice(-2)[0] + '/' + i.toString() + '.html');
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
        }, domain + '-data-')
    });
});

function getDetection(url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    return fetch(url)
        .then(function (response) {
            console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));

            console.log(response.status);
            console.log(response.statusText);
            console.log(response.type);
            console.log(response.url);
        })
        .catch(error => console.error('Error:', error));
}

function generateUnusedURL(baseURL = 'https://exceed.superposition.pknn.dev/data/love-shot-data') {
    let append = 0
    while (true) {
        fetch(baseURL + `${append}`.padStart(3, '0'))
            .then(function (response) {
                append = append + 1
                continue
            })
            .catch(function (error) {
                break
            });
    }
    return baseURL + `${append}`.padStart(3, '0')
}

var t = 0

function getJsonData(url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    fetch(url)
        .then(res => res.json())
        .then(function (myJson) {
            console.log(JSON.stringify(myJson))
            t = myJson;
            console.log(myJson)
        })
        .catch(error => console.error('Error:', error));
    console.log(t)
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
        .catch(error => console.error('Error:', error));
}
