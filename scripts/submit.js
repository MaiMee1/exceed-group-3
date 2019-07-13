const domain = 'https://exceed.superposition.pknn.dev/data/love-shot'
let linkto = null

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      console.log(i);
    }
  }

function handle(page, num) {
    let x = []
    for (let i = 1; i < num + 1; i++) {
        let temp = sessionStorage.getItem(page + '/' + i.toString() + '.html').split(',')
        x.push([parseInt(temp[0]), temp[1]=='true']);
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
    postData({value: Math.floor(Math.random() * 100000)}, domain + '-data-id').then(async function (res) {
        await sleep(100);
        window.location.href = linkto;
    })
    return x[0][0] + x[1][0] + x[2][0] + x[3][0] + x[4][0] + x[5][0] + x[6][0] + x[7][0] + x[8][0]
}

function postData(data = {}, url = 'https://exceed.superposition.pknn.dev/data/love-shot') {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ "data": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
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
}
catch (e) { }

let result = null

if (referer == 1) {
    result = handle('page-1', 9)
    console.log(result)
    if (result < 7) { linkto = "safe.html"; }
    else if (result <= 12) { linkto = "level1.html"; }
    else if (result <= 18) { linkto = "level2.html"; }
    else { linkto = "level3.html"; }
} else if (referer == 2) {
    result = handle('page-2', 9)
    if (result < 7) { linkto = "safe.htmll"; }
    else if (result <= 12) { linkto = "level1.html"; }
    else if (result <= 18) { linkto = "level2.html"; }
    else { linkto = "level3.html"; }
}

postData({value: Math.floor(Math.random() * 100000)}, domain + '-data-lastid')