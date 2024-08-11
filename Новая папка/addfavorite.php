require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

global $APPLICATION;

$arFavorits = unserialize($APPLICATION->get_cookie("UF_FAVORITS"));

$arFavorits[] = ['pid' => $_POST['PID']];

$UF_FAVORITS = serialize($arFavorits);

$APPLICATION->set_cookie("UF_FAVORITS", $UF_FAVORITS);

$application = \Bitrix\Main\Application::getInstance();
$context = $application->getContext();
$context->getResponse()->flush('');


$arFavorits = unserialize($APPLICATION->get_cookie("UF_FAVORITS"));

global $favFilter;
$favFilter = array("=ID" => $arFavorits);
$APPLICATION->IncludeComponent(
	"bitrix:catalog.section", 
	"", 
	array(
		"IBLOCK_TYPE_ID" => "catalog",
		"IBLOCK_ID" => "5",
		"BASKET_URL" => "/personal/cart/",
		"COMPONENT_TEMPLATE" => "",
		"IBLOCK_TYPE" => "catalog",
		"SECTION_ID" => $_REQUEST["SECTION_ID"],
		"SECTION_CODE" => "",
      "FILTER_NAME" => "favFilter",
		...............................................................................
                ...............................................................................
	),
	false
);