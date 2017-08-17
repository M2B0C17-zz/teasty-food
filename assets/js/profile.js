$(document).ready(function() {
    // Initialize collapse button
    $(".button-collapse").sideNav();
});

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var span = document.getElementById('list');
            span.innerHTML = '<img class="prof-pic" src="' + e.target.result + '" title="' + escape(theFile.name) + '"/>';

            localStorage.setItem('img', e.target.result);
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

if(localStorage.img) { 
    var span = document.getElementById('list');
    span.innerHTML = '<img class="prof-pic" src="'+ localStorage.img +'" title="test"/>';
}