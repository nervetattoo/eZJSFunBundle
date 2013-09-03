var $app = $('#app-container');
$app.html('<h1>Galleries</h1><div id="dropzone" class="well"></div>');

$drop = $('#dropzone');

var renderImage = function(e) {
};

$drop.on('dragover', function(e) {
    $drop.addClass('hover');
    return false;
});
$drop.on('dragend', function(e) {
    $drop.removeClass('hover');
    return false;
});
$drop.on('drop', function(e) {
    e.preventDefault();
    var files = e.originalEvent.dataTransfer.files;
    var reader = new FileReader;
    var file;
    reader.onloadend = function(e) {
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = function() {
            window.URL.revokeObjectURL(img.src);
        };
        $drop.append(img);
    };
    for (var i = 0, l = files.length; i < l; i++) {
        file = files[i];
        if (file.name.match(/\.(jpg|png|gif)$/)) {
            reader.readAsBinaryString(file);
        }
    }
    return false;
});
