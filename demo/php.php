<?php // phpcs:ignore
/**
 * PHP is fun
 *
 * Monokai Cotalpa VS Code theme.
 *
 * @param String hello Hello.
 * @param Number count Count of hells said.
 * @param Boolean isBye True or False.
 * @return Boolean
 * @package SOP
 * @since 1.0.0
 */

// Header.
get_header();

$ilan    = 'Ilán';
$vivanco = 'Vivanco';

// Display the page to admins and subscribers only.
if ( current_user_can( 'administrator' ) || current_user_can( 'subscriber' ) ) {
	echo 'HELLO!';
} else {
	wp_safe_redirect( 'https://ilanvivanco.com', 302 );
	exit;
}

// Footer.
get_footer();

/**
 * Small Class.
 *
 * @since 1.0.0
 */
class Small extends Size {
	/**
	 * Name.
	 *
	 * @var String
	 */
	public static $name;

	/**
	 * Sum.
	 *
	 * @param Number $num1 First number.
	 * @param Number $num2 First number.
	 * @return Number
	 */
	public static function sum( $num1, $num2 ) {
		return $num1 + $num2;
	}
}

$small = new Small( '400x400' );

// SQL for the win.
$get = "SELECT *
			FROM `wp`.`blog`
			WHERE country='$country'
			AND who='host'
			ORDER BY date DESC";
