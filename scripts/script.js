function getData(url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}

function postData(data = {}, url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    console.log('tried posting ' + JSON.stringify(data))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({"data": data}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}

