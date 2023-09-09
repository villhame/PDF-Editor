function mergePDFs() {
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];

    if (!file1 || !file2) {
        alert('Please select two PDF files.');
        return;
    }

    const mergedPDF = new Blob([file1, file2], { type: 'application/pdf' });
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = URL.createObjectURL(mergedPDF);
    downloadLink.style.display = 'block';
}
