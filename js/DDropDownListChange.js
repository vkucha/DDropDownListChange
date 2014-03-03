$(document).ready(function(){

    $('.ddd-select-text').live('click', function(){
        var th = $(this);
        th.parent('div').find('.ddd-hidden-select-item').toggle();
    });


    $('.ddd-hidden-select-item ul li').live('hover',function(){
        var th = $(this).parent('ul').find('.active').removeClass('active');
    });

    $('.ddd-hidden-select-item ul li').live('click',function(){
        var th = $(this);
        var val = th.attr('data');
        var text = th.text();
        var block = th.parent('ul').parent('div').parent('div');

        block.find('.ddd-select-text').attr('data', val).text(text);

        block.find('.ddd-hidden-select-item').hide();

        block.parent('div.DDropDownListChange-select-block').parent('div.row').find('select').val(val);

        th.addClass('active');
    });

});

