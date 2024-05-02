
function newItem(){
    let inputValue = $('#input').val();
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $('<li></li>').text(inputValue);
        $('#list').append(li);
    
        li.on("dblclick", function() {
            li.toggleClass("strike");
        });
        
        let crossOutButton = $("<button></button>").addClass("X").text("X");
        li.append(crossOutButton);
        
        crossOutButton.on("click", function() {
            li.addClass("delete");
        });
        
        $('#list').sortable();
        $('#input').val('');
    } 
    
}

$('#input').on('keypress', function (e) {
    if (e.which == 13) { 
        newItem();
        return false;
    }
});