let base64String = "";
  
export function imageUploaded(fileOfImageToConvert) {
    

    const file = document.querySelector(
        'input[type=file]')['files'][0];
  
    const reader = new FileReader();
    console.log("next");
      
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
  
       const imageBase64Stringsep = base64String;
  
        alert(imageBase64Stringsep);
        console.log(base64String);
    }
    reader.readAsDataURL(file);
}
  
export function displayString() {
    console.log("Base64String about to be printed");
    alert(base64String);
}

