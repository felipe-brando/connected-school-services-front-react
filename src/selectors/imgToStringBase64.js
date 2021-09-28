let base64String = "";

export function convertImgtoBase64(ImageFileToConvert) {


   const file = ImageFileToConvert

   

    const reader = new FileReader();
    console.log("next");

    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        const imageBase64Stringsep = base64String;

        console.log('img: ', imageBase64Stringsep);
        console.log('bs :', base64String);
    }
    reader.readAsDataURL(file);
}

export function displayString() {
    console.log("Base64String about to be printed");
    alert(base64String);
}

