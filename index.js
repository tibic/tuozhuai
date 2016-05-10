var page = {
    init: function() {
        this.$show = $('#show');
        this.$remove = $('.remove');
        this.initDrag();
        this.addEvents();
    },
    initDrag: function() {
        // 轮播图拖拽
        $('#J_drag_one').draggable({
            connectToSortable: "#show",
            handle: "h5",
            revert: "invalid",
            helper: "clone",
            opacity: 0.7,
            start: function() {
                $('.drag_one').css({
                    'width': '359px',
                    'height': '247px'
                });
            },
            drag: function() {

            },
            stop: function() {

            }
        });
        $('#J_drag_two').draggable({
            connectToSortable: "#show",
            handle: "h5",
            revert: "invalid",
            helper: "clone",
            opacity: 0.7,
            start: function() {
                $('.drag_two .products').css({
                    'width': '359px',
                    'height': 'auto',
                    'overflow': 'hidden'
                });
            },
            drag: function() {

            },
            stop: function() {

            }
        });

        // 高亮
        $('#column1').droppable({
            activeClass: "ui-active",
            hoverClass: "ui-hover",
            drop: function(event, ui) {
                $(this).find(".placeholder").remove();
            }
        });

        // 放置占位符
        $("#show").sortable({
            revert: true,
            placeholder: "ui-state-highlight",
            start: function() {

            },
            stop: function() {
                $(".sort").sortable();
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    spaceBetween: 0,
                });
                for(var i=0;i<$("#show").children().length;i++){
                    var len = $(this).children().eq(i).find('div.remove').length;
                    if(len == 0){
                        $(this).children().eq(i).append('<div class="remove"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></div>');
                    }
                }
            }
        });
    },
    addEvents: function() {
        var self = this;
        self.$show.on('click', '.remove', function() {
            $(this).parent().remove();
        });
    }
}
page.init();
