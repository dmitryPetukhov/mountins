document.addEventListener('DOMContentLoaded', function() {
    const m = document.querySelectorAll('.mountains img');
    document.body.addEventListener('mousemove', function(e) {
        m.forEach(function(item) {
            if (item.className.indexOf('m1') > -1) {
                item.style.left   = (e.clientX / 100 - 50) + 'px';
                item.style.bottom = (e.clientY / 80 - 50) + 'px';
                item.style.transform = 'rotate(' + (e.clientX / 400 - 3) + 'deg)';
            }
            if (item.className.indexOf('m2') > -1) {
                item.style.left   = (e.clientX / 150 - 300) + 'px';
                item.style.bottom = (e.clientY / 120 - 50) + 'px';
                item.style.transform = 'rotate(' + (e.clientX / 400 - 3) + 'deg)';
            }
        });
    });
});


