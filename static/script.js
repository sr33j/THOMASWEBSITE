document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.createElement('button');
    messageButton.textContent = "Click me for a fun fact!";
    messageButton.style.display = "block";
    messageButton.style.margin = "20px auto";
    
    const factParagraph = document.createElement('p');
    factParagraph.style.textAlign = "center";

    messageButton.addEventListener('click', function() {
        factParagraph.textContent = "Thomas the Tank Engine was created by Reverend Wilbert Awdry in 1945.";
    });

    document.body.appendChild(messageButton);
    document.body.appendChild(factParagraph);
});