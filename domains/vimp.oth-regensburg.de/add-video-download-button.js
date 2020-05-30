/* #### Host: vimp.oth-regensburg.de/video/* ##### 

    Button parent selector:     #siteContent > article > div.wrap.col-xs-12.col-sm-6.col-md-9.col-lg-9.col-xlg-9 > section.details > div:nth-child(1) > div.buttonpane.clearfix

    Download button code:       <a class="btn btn-primary downloadMedia" href="https://vimp.oth-regensburg.de/media/download/format/none/key/73f4834fbbe5f8dedd9f85f8a5fc5420.mp4"><i class="icon-cloud-download"></i> Download</a>

    Download button selector:   #siteContent > article > div.wrap.col-xs-12.col-sm-6.col-md-9.col-lg-9.col-xlg-9 > section.details > div:nth-child(1) > div.buttonpane.clearfix > a
*/

// check if host + path match *vimp.oth-regensburg.de/videos*
var downloadButtonSupported = /^https?:\/\/([a-zA-Z\d-]+\.){0,}oth-regensburg\.de/.test(window.location.href);
if (downloadButtonSupported) {
    var downloadButtonParentSelector = document.querySelector('#siteContent > article > div.wrap.col-xs-12.col-sm-6.col-md-9.col-lg-9.col-xlg-9 > section.details > div:nth-child(1) > div.buttonpane.clearfix');
    if (downloadButtonParentSelector !== null) {
        // element exists

        // check if download button already exists
        var downloadButtonSelector = document.querySelector('#siteContent > article > div.wrap.col-xs-12.col-sm-6.col-md-9.col-lg-9.col-xlg-9 > section.details > div:nth-child(1) > div.buttonpane.clearfix > a');
        if (downloadButtonSelector !== null) {
            // button already exists
            // alert('button already exists');
        } else {
            var videoKey = window.location.pathname.split('/').slice(-1)[0];

            downloadButtonParentSelector.innerHTML += '<a class="btn btn-primary downloadMedia" href="https://vimp.oth-regensburg.de/media/download/format/none/key/' + videoKey + '.mp4"><i class="icon-cloud-download"></i> Download</a>';
            // alert('added button');
        }
    }

} else {
    // alert('url not supported');
}