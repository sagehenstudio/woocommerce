export default {
	$schema: 'https://schemas.wp.org/trunk/block.json',
	apiVersion: 2,
	name: 'woocommerce/product-name',
	title: 'Product name',
	category: 'widgets',
	description: 'The product name.',
	keywords: [ 'products', 'name', 'title' ],
	textdomain: 'default',
	attributes: {
		name: {
			type: 'string',
		},
	},
	usesContext: [ 'productId' ],
	supports: {
		align: false,
		html: false,
		multiple: false,
		reusable: false,
		inserter: false,
		lock: false,
	},
};