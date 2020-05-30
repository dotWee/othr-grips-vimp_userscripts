var downloadButtonSupported = /^https?:\/\/([a-zA-Z\d-]+\.){0,}elearning\.uni-regensburg\.de/.test(window.location.href);
if (downloadButtonSupported) {
    // get all iframes
    var frames = document.getElementsByTagName("iframe");

    // for each iframe
    for (var frameID = 0; frameID < frames.length; ++frameID) {
        var frameSRC = frames[frameID].src;

        // check if is video
        if (/^https?:\/\/([a-zA-Z\d-]+\.){0,}vimp\.oth-regensburg\.de\/media/.test(frameSRC)) {

            // if yes, parse the video key
            var frameURL = new URL(frameSRC);
            var frameKEY = frameURL.searchParams.get('key');

            // if video key if defined
            if (!!frameKEY) {
                frames[frameID].parentElement.innerHTML += '<br><a class="btn btn-primary downloadMedia" href="https://vimp.oth-regensburg.de/media/download/format/none/key/' + frameKEY + '.mp4"><i class="icon-cloud-download"></i> Download</a>';
                alert('added button');
            } else {
                alert('couldnt parse key from url: ' + frameSRC);
            }

            console.log(frameKEY);
        }
    }
}