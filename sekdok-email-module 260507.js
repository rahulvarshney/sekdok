fetch('').then(res => res.blob()).then(blob => {
    console.log(blob);

    const mime = blob.type;
    const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);
    // Gets blob MIME type (e.g. image/png) and extracts extension
   

    const file = new File([blob], '', {
      type: mime,
  })
    // Creates new File object using blob data, extension and MIME type

    console.log(file);
    const formData = new FormData();
    formData.append('from', 'Secure@740bSecure.com');
    formData.append('to', '');
    formData.append('subject', '');
    formData.append('attachments', file);
    fetch('https://api.forwardemail.net/v1/emails', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('9da96cfb98e5eb19c0b04851:') },
            body: formData
    });


});