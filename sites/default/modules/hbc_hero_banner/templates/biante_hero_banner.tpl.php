<div id="hero-banner-carousel" class="owl-carousel">

<?php
// For each slide.
foreach ($slides as $slide):
    // Banner image image style.
    $img_style = image_style_url('banner_image', $slide['image']);
    // Renderable image.
    $img = theme('image', array( 'path' => $img_style, ));
    print '<div class="slide">';
    print $img;
    // If show title is checked, show that title.
    if ($slide['show_title'] == 1) {
        print '<div class="slide-title"><p>'.t($slide['title']).'</p></div>';
    }
    print '<div class="slide-body">'.$slide['body'].'</div>';
    print l(
        $slide['cta']['title'], $slide['cta']['url'], array(
            'attributes' => array(
                'class' => array('slide-cta'),
            )
        )
    );

    print '</div>';

endforeach;
?>
</div>
<a class="banner-btn banner-prev" href="#" >Previous</a>
<a class="banner-btn banner-next" href="#" >Next</a>

