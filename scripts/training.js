const q1 = () =>{
    alert('โรคซึมเศร้าเป็นโรคที่เกี่ยวกับความผิดปกติของสารเคมีในสมอง จึงสามารถสรุปได้ว่าโรคซึมเศร้าเป็นโรคที่ต้องมีการดูแลอย่างใกล้ชิด');
}

const rightans = () =>{
    alert('คุณตอบถูกยินดีด้วย!');
}

const page_changer= (score) =>{
    console.log('text')
    if (score >= 19) {
        document.getElementById('submit').href = '../../quiz1.html'
    } else; {
        document.getElementById('submit').href = '../../quiz1.html'
    }
}