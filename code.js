function main() {
    $('.gogapp-container').hide();
    
    $('#grid-btn').on('click', function(){
        $('.gogapp-container').toggle();
    });

}
$(document).ready(main);

