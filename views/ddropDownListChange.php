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



