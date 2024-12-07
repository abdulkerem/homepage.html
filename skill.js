
            // Function to set progress for each skill
            function setProgress(circleElement, percentage, progressTextElement) {
                const radius = circleElement.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                circleElement.style.strokeDasharray = `${circumference} ${circumference}`;
                circleElement.style.strokeDashoffset = circumference;
    
                const offset = circumference - (percentage / 100) * circumference;
                circleElement.style.strokeDashoffset = offset;
    
                // Update the text inside the progress bar
                progressTextElement.textContent = `${percentage}%`;
            }
    
            // Get elements for each skill
            const htmlCircle = document.querySelector('#html-progress').previousElementSibling.querySelector('circle');
            const cssCircle = document.querySelector('#css-progress').previousElementSibling.querySelector('circle');
            const jsCircle = document.querySelector('#js-progress').previousElementSibling.querySelector('circle');
            const typescriptCircle = document.querySelector('#typescript-progress').previousElementSibling.querySelector('circle');
            const bootstrapCircle = document.querySelector('#bootstrap-progress').previousElementSibling.querySelector('circle');
            const reactCircle = document.querySelector('#react-progress').previousElementSibling.querySelector('circle');
            const angularCircle = document.querySelector('#angular-progress').previousElementSibling.querySelector('circle');
            const vueCircle = document.querySelector('#vue-progress').previousElementSibling.querySelector('circle');
            const nodeCircle = document.querySelector('#node-progress').previousElementSibling.querySelector('circle');
            const mongoCircle = document.querySelector('#mongo-progress').previousElementSibling.querySelector('circle');
    
            // Set progress for each skill
            setProgress(htmlCircle, 90, document.getElementById('html-progress'));  // 90% HTML
            setProgress(cssCircle, 85, document.getElementById('css-progress'));   // 85% CSS
            setProgress(jsCircle, 80, document.getElementById('js-progress'));     // 80% JavaScript
            setProgress(typescriptCircle, 75, document.getElementById('typescript-progress')); // 75% TypeScript
            setProgress(bootstrapCircle, 80, document.getElementById('bootstrap-progress'));   // 80% Bootstrap
            setProgress(reactCircle, 70, document.getElementById('react-progress')); // 70% React.js
            setProgress(angularCircle, 70, document.getElementById('angular-progress')); // 70% Angular.js
            setProgress(vueCircle, 65, document.getElementById('vue-progress'));     // 65% Vue.js
            setProgress(nodeCircle, 75, document.getElementById('node-progress'));   // 75% Node.js
            setProgress(mongoCircle, 65, document.getElementById('mongo-progress')); // 65% MongoDB
    