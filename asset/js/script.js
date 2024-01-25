$(document).ready(function() {
    // DOM Manipulation
    $("#changeContentButton").click(function() {
        $("#domElement").text("Updated Content with jQuery");
    });

    // Event Handling
    $("#eventHandlingButton").click(function() {
        alert("Button clicked with jQuery");
    });

    // AJAX Requests
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function(result) {
            $("#ajaxContent").text("Loaded data: " + result.title);
        },
        error: function() {
            $("#ajaxContent").text("Error loading data");
        }
    });

    // Rendering Lists
    var items = ["Item 1", "Item 2", "Item 3"];
    $.each(items, function(index, item) {
        $("#itemList").append("<li>" + item + "</li>");
    });

    // Form Handling
    $("#simpleForm").submit(function(event) {
        event.preventDefault();
        var inputVal = $("#textInput").val();
        $("#formOutput").text("You submitted: " + inputVal);
    });

    // Conditional Rendering
    $("#toggleMessage").click(function() {
        $("#conditionalMessage").toggleClass("hidden");
    });

    // Animations
    $("#animateButton").click(function() {
        $("#animatedElement").toggleClass("fadeIn").toggleClass("hidden");
    });
});
