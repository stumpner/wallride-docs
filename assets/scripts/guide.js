$(function () {
    $("a[href^='#']").click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop: position}, speed, 'swing');
        return false;
    });

    $('table').wrap($('<div class="table-responsive"></div>'));

    // PrismJS
    var languages = ['bash', 'java', 'javascript', 'xml', 'html', 'css', 'sql', 'text'];
    languages.forEach(function(language) {
        $('pre.' + language).each(function(i, pre) {
            $(pre).removeClass(language);
            $('code', pre).addClass('language-' + language);
        });
    });
    Prism.highlightAll();
});
