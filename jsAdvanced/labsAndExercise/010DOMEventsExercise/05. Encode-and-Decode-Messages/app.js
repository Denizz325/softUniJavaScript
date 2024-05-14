//Някъде има грешка



function encodeAndDecodeMessages() { 
    const Btns = document.querySelectorAll('button');
    const encodeBtn = Btns[0].addEventListener('click', onEncode);
    const decodeBtn = Btns[1].addEventListener('click', onDecode);

    let decodeMessage = '';
    let encodeMessage = '';

    function onEncode(ev) {
        const parent = ev.target.parentNode;
        const message = parent.querySelector('textarea');
        

        for (let i = 0; i < message.value.length; i++) {
            let char = message.value.charAt(i);
            let asciiValue = char.charCodeAt(0) + 1;   
            let shiftedValue = String.fromCharCode(asciiValue);

            
            decodeMessage += shiftedValue;      
        }

        parent.parentNode.querySelectorAll('textarea')[1].value = decodeMessage;
        message.value = '';

    }

    function onDecode(ev) {
        const parent = ev.target.parentNode;
        const message = parent.querySelector('textarea');
        

        for (let i = 0; i < message.value.length; i++) {
            let char = message.value.charAt(i);
            let asciiValue = char.charCodeAt(0) - 1;   
            let shiftedValue = String.fromCharCode(asciiValue);

            
            encodeMessage += shiftedValue;      
        }

        parent.parentNode.querySelectorAll('textarea')[1].value = encodeMessage;
        

    }

}