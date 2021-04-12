$(document).ready(function() {

    $("a.prlink").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".container").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});