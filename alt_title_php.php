<!-- MODX -->

<?php
if (empty($input)) {
    return;
}

$pattern = '/<img([^>]*)>/i';
preg_match_all($pattern, $input, $matches);

if (isset($matches[0]) && count($matches[0]) > 0) {
    $counter = 1;
    foreach ($matches[0] as $match) {
        $new_match = $match;

        if (strpos($match, 'alt=""') !== false) {
            $new_match = str_replace('alt=""', 'alt="' . $modx->resource->get('pagetitle') . ' - ' . $counter . '"', $new_match);
        }
        if (strpos($match, 'alt=') === false) {
            $new_match = str_replace('<img', '<img alt="' . $modx->resource->get('pagetitle') . ' - ' . $counter . '"', $new_match);
        }

        if (strpos($match, 'title=""') !== false) {
            $new_match = str_replace('title=""', 'title="' . $modx->resource->get('pagetitle') . ' - ' . $counter . '"', $new_match);
        }
        if (strpos($match, 'title=') === false) {
            $new_match = str_replace('<img', '<img title="' . $modx->resource->get('pagetitle') . ' - ' . $counter . '"', $new_match);
        }

        // Replace original match with the new match
        $input = str_replace($match, $new_match, $input);

        $counter++;
    }
}

echo $input;

?>

<?php
function setAltTitle($content)
{
    $pattern = '/<img([^>]*)>/i';
    preg_match_all($pattern, $content, $matches);

    if (isset($matches[0]) && count($matches[0]) > 0) {
        $counter = 1;
		foreach ($matches[0] as $match) {
			$new_match = $match;

			if (strpos($match, 'alt=""') !== false) {
				$new_match = str_replace('alt=""', 'alt="Изображение - ' . $counter . '"', $new_match);
			}
			if (strpos($match, 'alt=') === false) {
				$new_match = str_replace('<img', '<img alt="Изображение - ' . $counter . '"', $new_match);
			}

			if (strpos($match, 'title=""') !== false) {
				$new_match = str_replace('title=""', 'title="Изображение - ' . $counter . '"', $new_match);
			}
			if (strpos($match, 'title=') === false) {
				$new_match = str_replace('<img', '<img title="Изображение - ' . $counter . '"', $new_match);
			}

			// Replace original match with the new match
			$input = str_replace($match, $new_match, $input);

			$counter++;
		}
    }

    return $content;
}






function add_alt_title_to_images($content)
{
    global $post;

    $pattern = '/<img([^>]*)>/i';
    preg_match_all($pattern, $content, $matches);

    if (isset($matches[0]) && count($matches[0]) > 0) {
        foreach ($matches[0] as $match) {
            if (strpos($match, 'alt=""') != false) {
                $new_match = str_replace('alt=""', 'alt="Изображение" title="Изображение"', $match);
                $content = str_replace($match, $new_match, $content);
            }

            if (strpos($match, 'alt=') === false) {
                $new_match = str_replace('<img', '<img alt="Изображение" title="Изображение"', $match);
                $content = str_replace($match, $new_match, $content);
            }

            if (strpos($match, 'title=') === false) {
                $new_match = str_replace('<img', '<img title="Изображение"', $match);
                $content = str_replace($match, $new_match, $content);
            }
        }
    }

    return $content;
}

add_filter('the_content', 'add_alt_title_to_images');