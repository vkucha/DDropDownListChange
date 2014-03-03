$(document).ready(function(){

    $('.ddd-select-text').live('click',function(){
        var th = $(this);
        var block = th.parent('div.ddd-select-item').find('div.ddd-hidden-select-item');
        if (block.css('display') != 'block') {
            block.show();
        } else {
            block.hide();
        }
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

    $.each($('.DDropDownListChange-select'), function(){
        select($(this));
        console.log($(this));
    });

    $(document).mouseup(function (e) {
        var container = $(".ddd-hidden-select-item");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });

});

function select(th){
//        var selectVal  = th.val();
//        var textVal  = th.find('option[value="2"]').text();
    var block = th.parent('div').find('.ddd-hidden-select-item ul');


    var active = '';
    $.each($(th.find('option')), function(){
        var sVal = $(this).val();
        var sText = $(this).text();
        if ($(this).attr('selected') == 'selected') {
            active = 'active';
            th.parent('div').find('.ddd-select-text').attr('data', sVal).text(sText);

        }
        block.append('<li class="'+active+'" data="'+$(this).attr('value')+'">'+sText+'</li>');
        active = '';
    });
//        console.log(textVal);

//        console.log(textVal);
}