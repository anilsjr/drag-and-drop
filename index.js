
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.style.backgroundColor = '#e9ecef';
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.style.backgroundColor = '#f8f9fa';
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropZone.style.backgroundColor = '#f8f9fa';
        fileInput.files = event.dataTransfer.files;
    });

    function uploadFile() {
        if (fileInput.files.length === 0) {
            alert("Please select a file first!");
            return;
        }
        alert("File ready to be uploaded: " + fileInput.files[0].name);
}