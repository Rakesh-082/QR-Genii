let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
qrImage.crossOrigin = "anonymous";
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("download")

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
        qrImage.crossOrigin = "anonymous";
        imgBox.classList.add("show-img");
        downloadBtn.classList.add("show-btn");
    }
    else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}


function downloadQR() {
    if (qrText.value.length > 0) {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = qrImage.width;
        canvas.height = qrImage.height;
        context.drawImage(qrImage, 0, 0);

        // Convert the canvas to a data URL in PNG format
        let dataURL = canvas.toDataURL('image/png');

        // Create a link element and trigger the download
        let a = document.createElement('a');
        a.href = dataURL;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}

// Call the downloadQR function when the download button is clicked
downloadBtn.addEventListener('click', downloadQR);