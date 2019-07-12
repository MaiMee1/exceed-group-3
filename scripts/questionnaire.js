let cachedIndex = sessionStorage.getItem(window.location.href.split('/').slice(-2).join('/'))

$(document).ready(function () {
    if (cachedIndex != null) {
        $(`input[type=radio]`).eq(cachedIndex).attr('checked', true)
    }

    $('input[type=radio]').click(function () {
        var index = $(this).index('input[type=radio]');
        console.log(index, window.location.href.split('/').slice(-2).join('/'));
        sessionStorage.setItem(window.location.href.split('/').slice(-2).join('/'), index)
    });

    $('#test').click(function() {
        getDetection()
    })
});

function getDetection(url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    return fetch(url)
        .then(res => res.headers)
        .then(function (header) {
            console.log(header.get('Date'));
        })
        .catch(error => console.error('Error:', error));
}

function generateUnusedURL(baseURL = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    while (true) {
        fetch(url)
        .then(res => res.json())
        .then(function (myJson) {
            console.log(JSON.stringify(myJson))
            newData = myJson;
        })
        .catch(error => console.error('Error:', error));
        break
    }
}

function getData(url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    return fetch(url)
        .then(res => res.json())
        .then(function (myJson) {
            console.log(JSON.stringify(myJson))
            newData = myJson;
        })
        .catch(error => console.error('Error:', error));
}

function postData(data = {}, url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
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

