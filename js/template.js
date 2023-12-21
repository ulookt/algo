


document.addEventListener('DOMContentLoaded', function() {
    // Existing code to fetch and insert the template content
    fetch('template/template.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('header').innerHTML;
            document.querySelector('main').innerHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('main').innerHTML;
            document.querySelector('footer').innerHTML = new DOMParser().parseFromString(data, 'text/html').querySelector('footer').innerHTML;

            // After the content is loaded, check for the theme toggle element
            const themeToggle = document.querySelector('#theme-toggle');
            if (themeToggle) {
                // Set the initial theme based on saved preference
                const currentTheme = localStorage.getItem('theme') || 'style';
                switchStylesheet(currentTheme);
                themeToggle.checked = currentTheme === 'alternative-style';

                // Add event listener for theme changes
                themeToggle.addEventListener('change', function() {
                    const theme = this.checked ? 'alternative-style' : 'style';
                    switchStylesheet(theme);
                    localStorage.setItem('theme', theme);
                });
            }
        })
        .catch(error => console.error('Error fetching template:', error));

    // Function to switch the stylesheet
    function switchStylesheet(style) {
        const stylesheetLink = document.getElementById('stylesheet');
        if (stylesheetLink) {
            stylesheetLink.href = `css/${style}.css`;
        }
    }
});
