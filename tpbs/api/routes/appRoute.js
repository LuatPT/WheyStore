'use strict';
module.exports = function (app) {
  let productsCtrl = require('../controllers/productController');
  let categorysCtrl = require('../controllers/categoryController');
  let loginCtrl = require('../controllers/loginController');
  let cartCtrl = require('../controllers/cartController');
  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get_all_products)
    .post(productsCtrl.create_new_product);
  //Product_id phải đặt tên đúng với productController
  app.route('/products/:product_id')
    .get(productsCtrl.get_detail_product)
    .put(productsCtrl.update_product)
    .delete(productsCtrl.delete_product);

  app.route('/categorys')
    .get(categorysCtrl.get_all_categorys)
    .post(categorysCtrl.create_new_category);
  //category_id phải đặt tên đúng với productController
  app.route('/categorys/:category_id')
    .get(categorysCtrl.get_detail_category)
    .put(categorysCtrl.update_category)
    .delete(categorysCtrl.delete_category);

  //Login
  app.route('/login')
    .post(loginCtrl.login_account);

  app.route('/carts')
    .get(cartCtrl.get_all_carts)
    .post(cartCtrl.create_new_cart);

  app.route('/carts/:cart_id')
    .get(cartCtrl.get_detail_cart)
    .put(cartCtrl.update_cart)
    .delete(cartCtrl.delete_cart);
};