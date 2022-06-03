function lockedProfile() {
    [...document.querySelectorAll('.profile > button')].forEach(b => {
        b.addEventListener('click', showMore)
    })

    function showMore(event) {
        let profile = event.currentTarget.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;

        if (isActive) {
            let info = [...profile.querySelectorAll('div')]
                .find(p => p.id.includes('HiddenFields'));

            if (event.currentTarget.textContent === 'Show more') {
                event.currentTarget.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                event.currentTarget.textContent = 'Show more';
                info.style.display = '';
            }
        }
    }
}