<?$APPLICATION->IncludeComponent(
	"bitrix:menu",
	"vertical_multilevel",
	Array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "section",
		"DELAY" => "N",
		"MAX_LEVEL" => "3",
		"MENU_CACHE_GET_VARS" => array(""),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "left",
		"USE_EXT" => "N"
	)
);?><br>




<?if (!empty($arResult)):?>
    <ul>
    
    <?
    foreach($arResult as $arItem):
    	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
    		continue;
        ?>
		<li class="pushy-link"><a href="<?=$arItem[">" data-bx-app-ex-href="<?=$arItem["LINK"]?>"&gt;<?=$arItem["TEXT"]?></a></li>
    	
    <?endforeach?>
    </ul>

<?endif?>


<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
    <ul class="menu-list">
    
    <?
    foreach($arResult as $arItem):
    	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
    		continue;
        ?>
        
    	<?if($arItem["SELECTED"]):?>
    		<li class="menu-item menu-item--current"><a href="<?=$arItem["LINK"]?>" class="menu-item__link"><?=$arItem["TEXT"]?></a></li>
    	<?else:?>
    		<li class="menu-item"><a class="menu-item__link" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
    	<?endif?>
    	
    <?endforeach?>
    
    </ul>
<?endif?>

<?if (!empty($arResult)):?>
    <ul>
    
    <?
    foreach($arResult as $arItem):
    	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
    		continue;
        ?>
		<li class="pushy-link"><a href="<?=$arItem["LINK"]?>"&gt;<?=$arItem["TEXT"]?></a></li>
    	
    <?endforeach?>
    </ul>

<?endif?>







------

<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<ul id="vertical-multilevel-menu">

<?
$previousLevel = 0;
foreach($arResult as $arItem):?>

	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
		<?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
	<?endif?>

	<?if ($arItem["IS_PARENT"]):?>

		<?if ($arItem["DEPTH_LEVEL"] == 1):?>
			<li><a href="<?=$arItem["LINK"]?>" class="<?if ($arItem["SELECTED"]):?>root-item-selected<?else:?>root-item<?endif?>"><?=$arItem["TEXT"]?></a>
				<ul class="root-item">
		<?else:?>
			<li><a href="<?=$arItem["LINK"]?>" class="parent<?if ($arItem["SELECTED"]):?> item-selected<?endif?>"><?=$arItem["TEXT"]?></a>
				<ul>
		<?endif?>

	<?else:?>

		<?if ($arItem["PERMISSION"] > "D"):?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<li><a href="<?=$arItem["LINK"]?>" class="<?if ($arItem["SELECTED"]):?>root-item-selected<?else:?>root-item<?endif?>"><?=$arItem["TEXT"]?></a></li>
			<?else:?>
				<li><a href="<?=$arItem["LINK"]?>" <?if ($arItem["SELECTED"]):?> class="item-selected"<?endif?>><?=$arItem["TEXT"]?></a></li>
			<?endif?>

		<?else:?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<li><a href="" class="<?if ($arItem["SELECTED"]):?>root-item-selected<?else:?>root-item<?endif?>" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
			<?else:?>
				<li><a href="" class="denied" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
			<?endif?>

		<?endif?>

	<?endif?>

	<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

<?endforeach?>

<?if ($previousLevel > 1)://close last item tags?>
	<?=str_repeat("</ul></li>", ($previousLevel-1) );?>
<?endif?>

</ul>
<?endif?>


<?php
									if ($arParams['SHOW_OLD_PRICE'] === 'Y')
									{
										?>
										<div class="product-item-detail-price-old mb-1"
											id="<?=$itemIds['OLD_PRICE_ID']?>"
											<?=($showDiscount ? '' : 'style="display: none;"')?>><?=($showDiscount ? $price['PRINT_RATIO_BASE_PRICE'] : '')?></div>
										<?php
									}
									?>