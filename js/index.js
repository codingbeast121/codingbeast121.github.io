

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')

})


function copyText() {
    // Get the text element and button
    var textToCopy = document.getElementById('textToCopy');
    var button = document.querySelector('button');

    // Create a range and selection
    var range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges(); // Clear any existing selections
    window.getSelection().addRange(range);

    try {
        // Execute the copy command
        document.execCommand('copy');
        
        // Change button text to "Copied"
        button.textContent = 'Copied';
        
        // Change button text back to "Copy Text" after 2 seconds
        setTimeout(function() {
            button.textContent = 'Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text:', err);
    }

    // Clear the selection
    window.getSelection().removeAllRanges();
}

