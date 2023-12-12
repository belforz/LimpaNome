$(function () {

    // CONFIG
    let visibilityIds = ['#counters_1', '#counters_2', '#counters_3'];
    let counterClass = '.contador';
    let defaultSpeed = 3000;

    // END CONFIG

    //init if it becomes visible by scrolling
    $(window).on('scroll', function () {
        getVisibilityStatus();
    });

    //init if it's visible by page loading
    getVisibilityStatus();

    function getVisibilityStatus() {
        let elValFromTop = [];
        let windowHeight = $(window).height();
        let windowScrollValFromTop = $(this).scrollTop();

        visibilityIds.forEach(function (item, index) {
            try {
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }

            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = parseFloat($(this).attr('data-TargetNum'));
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index);
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if (easing == undefined) easing = "swing";
        $(className).animate({
            count: num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(now.toFixed(0));
                } else {
                    $(this).text(now.toFixed(0));
                }
            },
            complete: doCount
        });
    }
});
