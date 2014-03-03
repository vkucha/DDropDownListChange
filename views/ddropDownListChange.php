<?php echo CHtml::dropDownList(
    $attribute,
    $data,
    $dataArray,
    array('id'=>$id, 'class'=>'DDropDownListChange-select')); ?>

<div class="DDropDownListChange-select-block" style="width: <?=$width?>;">
    <div class="ddd-select-item">
        <span class="ddd-select-text" data=""></span>
        <div class="ddd-hidden-select-item"  style="width: <?=$width?>;">
            <ul>

            </ul>
        </div>
    </div>
</div>



<script type="text/javascript">
    select($('.DDropDownListChange-select'));
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

</script>