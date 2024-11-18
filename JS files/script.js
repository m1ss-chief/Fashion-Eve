function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showMeasurementForm() {
    document.getElementById('selection-form').style.display = 'none';
    document.getElementById('measurement-form').style.display = 'block';
}
