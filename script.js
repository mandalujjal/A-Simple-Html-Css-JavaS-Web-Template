
        // Function to toggle between light and dark mode
        function toggleLightMode() {
            const body = document.body;
            const darkModeEnabled = body.classList.toggle('light-mode');
            // Save light mode preference in localStorage
            if (darkModeEnabled) {
                localStorage.setItem('light-mode', 'enabled');
                document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-moon"></i> '; // Change button text to moon icon
            } else {
                localStorage.removeItem('light-mode');
                document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i> '; // Change button text to sun icon
            }
        }

        // Check if light mode is enabled on page load
        function applySavedLightMode() {
            const lightModeEnabled = localStorage.getItem('light-mode') === 'enabled';
            if (lightModeEnabled) {
                document.body.classList.add('light-mode');
                document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-moon"></i> '; // Change button text to moon icon
            }
        }

        // Add event listener to dark mode button
        document.getElementById('darkModeToggle').addEventListener('click', toggleLightMode);

        // Apply light mode if saved
        applySavedLightMode();


        function toggleDetails(element) {
            const details = element.nextElementSibling;
        
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                details.classList.add('expanded'); // Add expanded class
                element.innerText = "Show Less";
            } else {
                details.style.display = "none";
                details.classList.remove('expanded'); // Remove expanded class
                element.innerText = "Learn More";
            }
        }
        