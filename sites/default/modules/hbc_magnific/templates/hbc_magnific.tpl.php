<div id="hbc-gallery-wrapper" class="">
  <?php

  foreach ($gallerys as $gallery):

    $img_style_thumb = image_style_url('gallery_thumbnail', $gallery['image']);
    $img_style_gallery = image_style_url('gallery_image', $gallery['image']);

    $img = theme('image', array(
      'path' => $img_style_thumb,
      'alt' => $gallery['alt'],
      'title' => $gallery['image_title'],
      'name' => $gallery['image_by'],
    ));
    print '<a href="'.$img_style_gallery.'" title="'.$gallery['image_title'].'" name="'.$gallery['image_by'].'">';
    print $img;
    print '</a>';
  endforeach;
  ?>
</div>