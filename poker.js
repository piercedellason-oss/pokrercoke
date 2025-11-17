// =======================================================
// FUNCTION: showPage(pageName)
// Hides all pages, then shows the selected one.
// Called when navigation buttons are clicked.
// =======================================================
function showPage(pageName) {

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('visible');
    });

    // Show the selected page
    document.getElementById(pageName).classList.add('visible');
}

// =======================================================
// FUNCTION: showCombo(name)
// Displays the description of the selected poker hand.
// Triggered when a user clicks a hand in the list.
// =======================================================
function showCombo(name) {

    // Dictionary of poker hand descriptions
    const descriptions = {
        "Royal Flush": "A, K, Q, J, 10 — all of the same suit. The highest possible hand.",
        "Straight Flush": "Five cards in a row, all of the same suit.",
        "Four of a Kind": "Four cards of the same rank.",
        "Full House": "Three of a kind plus a pair.",
        "Flush": "Five cards of the same suit.",
        "Straight": "Five cards in a row.",
        "Three of a Kind": "Three cards of the same rank.",
        "Two Pair": "Two different pairs.",
        "One Pair": "Two cards of the same rank.",
        "High Card": "No combination — highest card wins."
    };

    // Update the text on the page
    document.getElementById("comboText").textContent = descriptions[name];
}