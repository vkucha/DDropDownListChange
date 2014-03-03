<?php

class DDropDownListChange extends CWidget {

    public $model;
    public $data;
    public $dataArray;
    public $attribute;
    public $id;
    public $width = '200px';

    public function init(){

    }

    public function run(){
        $dir = dirname(__FILE__);
        $assets = Yii::app()->getAssetManager()->publish($dir);

        $script = Yii::app()->clientScript;
        $script->registerCoreScript('jquery');
        $script->registerScriptFile($assets . '/js/DDropDownListChange.js');
        $script->registerCssFile($assets.'/css/DDropDownListChange.css');






        $this->render('ddropDownListChange', array(
            'model'=>$this->model,
            'data'=>$this->data,
            'attribute'=>$this->attribute,
            'id'=>$this->id,
            'width'=>$this->width,
            'dataArray'=>$this->dataArray,
        ));

    }
}