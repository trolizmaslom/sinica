function autocompleteInit(){
    var input = $( "#search" );
    if(input.length > 0){
        input.autocomplete({
            source: availableTags,
            classes: {
                "ui-autocomplete": "search-style"
            }
        });
    }
}
$(document).ready(function(){
    autocompleteInit();
});