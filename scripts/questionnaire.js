const domain = 'https://exceed.superposition.pknn.dev/data/love-shot'
let cachedData = sessionStorage.getItem(window.location.href.split('/').slice(-2).join('/'))
console.log(cachedData)

$(document).ready(function () {
    try {
        if (cachedData[0] != null) {
            $(`input[type=radio]`).eq(cachedData[0]).attr('checked', true)
        }
    }
    catch (e) {
        //
    }

    $('input[type=radio]').click(function () {
        var index = $(this).index('input[type=radio]');

        $('.button').addClass('is-loading')

        fetch(domain + '-detector').then(function (response) {
            data = response.json()
            let lie = false
            for (key of ["Heartbeat", "Compass", "Temphumid"]) {
                if (data[key] == 'Lie') {
                    lie = true
                }
            }
            sessionStorage.setItem(window.location.href.split('/').slice(-2).join('/'), [index, lie])
            $('.button').removeClass('is-loading')

        })
    });

    $('a[type=submit]').click(function () {
        //
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
