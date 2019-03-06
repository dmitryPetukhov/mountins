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
window.onload = function(){
    let m = document.querySelector('.fly')
    setTimeout(function(){
        m.style.display = 'none';
    },5000);

    let n = document.querySelector('.fly2')
    setTimeout(function(){
        n.style.display = 'inline-block';
    },7000);

    let a = document.querySelector('.fly2')
    setTimeout(function(){
        a.style.display = 'none';
    }, 12000);
}


