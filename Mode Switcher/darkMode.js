const toggleButton = document.querySelector('#modeToggle');

toggleButton.addEventListener('click', switchMode);

function switchMode() {

    document.body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {

        toggleButton.textContent = 'Toggle light Mode';
        localStorage.setItem('mode', 'dark');
    }
    else{
        toggleButton.textContent = 'Toggle dark Mode'; 
        localStorage.setItem('mode', 'light');
    }
}

window.addEventListener('DOMContentLoaded', function(){
    const saveMode = localStorage.getItem('mode');

    if(saveMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Toggle light Mode';
    }
    else{
        toggleButton.textContent = 'Toggle dark Mode';
    }

})