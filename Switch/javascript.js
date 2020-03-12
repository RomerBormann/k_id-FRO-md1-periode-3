const alleVlakjes = document.querySelectorAll('.vlak');
const rimpel = document.createElement('div');
rimpel.classList = 'rimpel';


for (let i = 0; i < alleVlakjes.length; i++) {
    alleVlakjes[i].addEventListener('click', function (e) {
        e.preventDefault();
        let x = e.pageX - this.offsetLeft - 50;
        let y = e.pageY - this.offsetTop - 50;
        rimpel.style.left = x + 'px';
        rimpel.style.top = y + 'px';
        e.target.append(rimpel);
        rimpel.classList.add('groeien');

        if (this.getElementsByTagName('input')[0]) {
            let deCB = this.getElementsByTagName('input')[0];
            deCB.checked = !deCB.checked;

        }

    });
}