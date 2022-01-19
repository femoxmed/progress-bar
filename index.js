
let btn = document.querySelector('.btn')
let allProgress = document.querySelectorAll('.progress')

btn.addEventListener('click', function () {
    allProgress.forEach(progress => {
       let progressEl = progress.querySelector('.progress-value')
       let progressBar = progress.querySelector('.progress-bar')
       let value = progressEl.getAttribute('data-value')
       let interval = setInterval(() => {
            value++
            if(value === 100) {     
                value = 100;
                progressBar.style.animationPlayState = 'paused';
                 clearInterval(interval)
            } 
            
            progressEl.textContent = value + '%'

            progressBar.style.width = value + '%'
            progressBar.style.transition = '1s ease'
        }, 100)
    });
})