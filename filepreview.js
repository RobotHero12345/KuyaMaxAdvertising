document.getElementById('file-upload').addEventListener('change', function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
                var imagePreview = document.getElementById('file-preview');
                imagePreview.style.display = 'block';
                imagePreview.src = e.target.result;
        }
        
        if (file) {
                reader.readAsDataURL(file);
        }
});