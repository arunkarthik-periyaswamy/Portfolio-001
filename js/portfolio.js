document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById("theme-toggle");
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");
    const root = document.getElementById("root");

    function toggleTheme() {
        if (root.classList.contains("dark")) {
            root.classList.remove('dark');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        } else {
            root.classList.add('dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});
