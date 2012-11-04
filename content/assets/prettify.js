$(document).ready( function() {
    // Grab all code snippets and paint it to highlight syntax
    $("pre code").each( function(idx) {
        CodeMirror.runMode($(this).text(), "text/x-charm++", $(this).get(0));
    })
    .addClass("cm-s-lesser-dark")
    .children("span.cm-charmkeyword").css("color", "#dd5ef3");

    // Enable top pull-down menu functionality
    //$(".navigation")
    //.append('<span id="pulldowntab" class="navsymbol">&raquo;</span>')
    //.click( function() { $("ul.manual-toc").fadeToggle(); $("#pulldowntab").toggle(); } )
    //.mouseleave( function() { $("ul.manual-toc").fadeOut('slow'); $("#pulldowntab").fadeIn('slow'); } )
    //.css('cursor','pointer');

    // Since js is enabled, fix the positioning for navmenu
    $("#navmenu").css("top", "2em").hide();

    // Enable navigation menu functionality
	$("#navholder")
	.mouseenter( function() { $("#navmenu").fadeIn('slow'); } )
	.mouseleave( function() { $("#navmenu").fadeOut('fast'); } );

} )

