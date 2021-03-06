<?php 

//Enable jQuery
wp_enqueue_script('jquery');

//Remove automatically added <p> tag on pages

function remove_p_tags_on_pages() {
	if (is_page()) {
	remove_filter( 'the_content', 'wpautop' );
	}
}
add_action('wp_head', 'remove_p_tags_on_pages');

//Remove default Headway styling
function remove_content_styling() {
  remove_theme_support('headway-content-styling-css');
}
add_action('headway_setup_child_theme', 'remove_content_styling');

//Register menus menu
function register_my_menus() {
	register_nav_menus(
		array(
			'wfc-main-nav' => __( 'WFC Main Nav' ),
			'wfc-mobile-nav' => __( 'WFC Mobile Nav' )			
		)
	);
}
add_action( 'init', 'register_my_menus' );

//Add search function to mobile nav
function add_search_box($items, $args) {

	if ($args->theme_location == 'wfc-mobile-nav') {
	
        /*ob_start();
        get_search_form();
        $searchform = ob_get_contents();
        ob_end_clean();*/

        $search_args = 'Search Wildflower News';

        $items .= '<li id="mobile-search" class="menu-item menu-item-type-post_type menu-item-object-page">' . headway_get_search_form($search_args) . '</li>';
    }
    return $items;
	
}
add_filter('wp_nav_menu_items','add_search_box', 10, 2);

//Add social media icons to mobile nav
function add_social_icons($items, $args) {

	$icons = '<ul id="mobile-social-icons-wrap">
				<li><a href="http://www.facebook.com/wildflowercenter" target="_blank"><i class="fa fa-facebook"></i></a></li>
				<li><a href="http://twitter.com/WildflowerCtr" target="_blank"><i class="fa fa-twitter"></i></a></li>
				<li><a href="http://instagram.com/wildflowercenter" target="_blank"><i class="fa fa-instagram"></i></a></li>
				<li><a href="https://www.pinterest.com/wildflowerctr/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
				<li><a href="http://www.flickr.com/photos/wildflowercenter" target="_blank"><i class="fa fa-flickr"></i></a></li>
				</ul>';

	if ($args->theme_location == 'wfc-mobile-nav') {
		$items .= '<li id="mobile-social-icons" class="menu-item menu-item-type-post_type menu-item-object-page">' . $icons . '</li>';
	}
	return $items;
}
add_filter('wp_nav_menu_items','add_social_icons', 10, 2);

//Add categories above titles
function add_categories_above_title() {
	if ( is_front_page() || is_page('1801')) {
	?>
		<div class="post-category"><?php the_category(); ?></div>
	<?php
	}
}

add_action('headway_before_entry_title', 'add_categories_above_title');

//Add social media share bar to single posts
function insert_tumblr_script() {
	echo '<script type="text/javascript" src="http://platform.tumblr.com/v1/share.js"></script>';
}

function add_tags() {
	$check_if_home_page = is_home();	

	//Only display 
	if (!$check_if_home_page == 1) {
		the_tags('<div id="post_tags"><strong>Tags:</strong> ', ' • ', '</div>');		
	}		
}

add_action('headway_after_entry_content', 'add_tags');

function add_sharebar_to_posts() {
	//if ( is_single() && !is_single('0') ) {		
	if ( is_singular('post') ) {		
		add_action('wp_footer', 'insert_tumblr_script');
	?>
	<div class="post-sharebar-wrapper">
		<ul id="post-sharebar">
			<li><a href="mailto:?subject=Wildflower Center article: <?php echo ucwords(get_the_title()); ?>&body=I read this and wanted to share: <?php echo ucwords(get_the_title()); ?> (<?php echo urlencode(the_permalink()); ?>)" title="E-Mail this"><i class="fa fa-envelope sharebar-icons"></i><span class="social-media-name">E-Mail</span></a></li>
			<li><a href="https://www.facebook.com/sharer.php?u=<?php the_permalink();?>&amp;t=<?php the_title(); ?>" title="Share on Facebook" target="_blank"><i class="fa fa-facebook sharebar-icons"></i><span class="social-media-name">Facebook</span></a></li>
			<li><a href="https://twitter.com/home/?status=<?php the_title(); ?> - <?php the_permalink(); ?>" title="Tweet this" target="_blank"><i class="fa fa-twitter sharebar-icons"></i><span class="social-media-name">Twitter</span></a></li>
			<li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;title=<?php the_title(); ?>&amp;url=<?php the_permalink(); ?>" title="Share on LinkedIn" target="_blank"><i class="fa fa-linkedin sharebar-icons"></i><span class="social-media-name">LinkedIn</span></a></li>
			<li><a href="https://plus.google.com/share?url=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-google-plus sharebar-icons"></i><span class="social-media-name">Google+</span></a></li>
			<li><a href="https://www.tumblr.com/share/" title="Share on Tumblr" target="_blank"><i class="fa fa-tumblr sharebar-icons"></i><span class="social-media-name">Tumblr</span></a></li>
		</ul>
	</div>
	<?php
	}
}

add_action('headway_before_entry_content', 'add_sharebar_to_posts');
add_action('headway_after_entry_content', 'add_sharebar_to_posts');

function insert_post_nav_script() {
	if (is_singular('post')) {
		echo '<script type="text/javascript" src="../wp-content/themes/wildflowercenter/js/postNav.min.js"></script>';
	}
}

add_action('wp_footer', 'insert_post_nav_script');



?>