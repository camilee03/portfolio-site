$(document).ready(function () {
    const hash = window.location.hash;

    document.getElementById('contact').style.visibility = 'hidden'; 
    document.getElementById('about-me').style.visibility = 'hidden'; 
    document.getElementById('projects').style.visibility = 'hidden'; 
    document.getElementById('home').style.visibility = 'hidden';

    // Check which page we are currently on
    if (hash) { // Any other page should be already zoomed in
        document.getElementById(hash.substring(1)).style.visibility = 'visible'; 
        $(".pages").css({transition: "none"}); // briefly get rid of the transition
        $(".pages").addClass("zoomed-in").show();
        $(".pages").css({transition: "transform 1s ease, width 1s ease, height 1s ease"});

        document.getElementById("button").style.visibility = 'visible';
    } 
    else { // Default page
        // Only show home page
        document.getElementById('home').style.visibility = 'visible';
        document.getElementById("button").style.visibility = 'hidden';
        $(".page").removeClass("zoomed-in").show();
    }

    // zoom in and out 
    $(".zoom").on("click", function (event) {
        event.preventDefault();
        const $current = $(".pages");
        let targetId = $(this).attr("href");

        let visibleId = $(this).attr("href");
        let hiddenId = $(this).attr("href");

        const hash = window.location.hash;
        let showButton = false;

        // zoom out
        if (hash) {
            visibleId = "home";
            hiddenId = hash.substring(1);
            $current.removeClass("zoomed-in");
            targetId = "#"

            document.getElementById("button").style.visibility = 'hidden'; // Hide buttons
        } 
        // zoom in
        else {
            visibleId = "contact";
            hiddenId = "home";
            $current.addClass("zoomed-in");
            targetId = "#contact"

            showButton = true;
        }

        // Change pages
        setTimeout(() => {
            document.getElementById(visibleId).style.visibility = 'visible'; // Show page
            document.getElementById(hiddenId).style.visibility = 'hidden'; // Hide page

            if (showButton) {document.getElementById("button").style.visibility = 'visible'; }
            
            window.location.href = targetId;
            }, 800);
    });

    // slide left and right
    $(".slide").on("click", function (event) {
        let targetId = $(this).attr("href");
        visibleId = targetId.substring(1);
        hiddenId = window.location.hash.substring(1);
        document.getElementById(hiddenId).style.visibility = 'hidden';
        document.getElementById(visibleId).style.visibility = 'visible';
        window.location.href = targetId;
    });
});