<div id="hero-banner-carousel" class="owl-carousel">
<?php
// For each slide.
foreach ($slides as $slide):
//    // Banner image image style.
    $img_style = image_style_url('hbc_hero_banner', $slide['image']);
//    // Renderable image.
    $img = theme('image', array( 'path' => $img_style, ));
    print '<div class="slide">';

//    // If show title is checked, show that title.
//    if ($slide['show_title'] == 1) {
    print '<div class="slide-title">'.t($slide['title']).'</div>';
//    }
    print '<div class="slide-body">'.$slide['body'].'</div>';
    print '<div class="slide-cta-wrapper">';
    print l(
        $slide['cta']['title'], $slide['cta']['url'], array(
            'attributes' => array(
                'class' => array('slide-cta'),
            )
        )
    );
    print "</div>";
    print $img;
    print '</div>';
endforeach;
?>
</div>
<a class="banner-btn banner-prev" href="#" >Previous</a>
<a class="banner-btn banner-next" href="#" >Next</a>

