'use strict';
module.exports = function (app) {
  let productsCtrl = require('../controllers/productController');
  let categorysCtrl = require('../controllers/categoryController');
  let loginCtrl = require('../controllers/loginController');
  let cartCtrl = require('../controllers/cartController');
  let mailCtrl = require('../controllers/mailController');
  let rateCtrl = require('../controllers/rateController');
  let postCtrl = require('../controllers/postController');
  let userCtrl = require('../controllers/userController');
  let trainerCtrl = require('../controllers/trainerController');
  let voucherCtrl = require('../controllers/voucherController');
  // todoList Routes
  app
    .route('/api/v1/products/:page/:per_page')
    .get(productsCtrl.get_all_products);
  app.route('/api/v1/products').post(productsCtrl.create_new_product);
  //Product_id phải đặt tên đúng với productController
  app
    .route('/api/v1/products/:product_id')
    .get(productsCtrl.get_detail_product)
    .put(productsCtrl.update_product)
    .delete(productsCtrl.delete_product);

  app
    .route('/api/v1/categorys')
    .get(categorysCtrl.get_all_categorys)
    .post(categorysCtrl.create_new_category);
  //category_id phải đặt tên đúng với productController
  app
    .route('/api/v1/categorys/:category_id')
    .get(categorysCtrl.get_detail_category)
    .put(categorysCtrl.update_category)
    .delete(categorysCtrl.delete_category);

  app.route('/api/v1/users').get(userCtrl.get_all_users);
  app.route('/api/v1/users/:user_id')
    .get(userCtrl.get_detail_user)
    .put(userCtrl.update_user)
    .delete(userCtrl.delete_user)
  //Login
  app.route('/api/v1/login').post(loginCtrl.login_account);
  //Register
  app.route('/api/v1/register').post(loginCtrl.register_account);
  app
    .route('/api/v1/carts')
    .get(cartCtrl.get_all_carts)
    .post(cartCtrl.create_new_cart);

  app
    .route('/api/v1/carts/:cart_id')
    .get(cartCtrl.get_detail_cart)
    .put(cartCtrl.update_cart)
    .delete(cartCtrl.delete_cart);
  // Post
  app
    .route('/api/v1/posts')
    .get(postCtrl.get_new_posts)
    .post(postCtrl.create_new_post)
  app
    .route('/api/v1/posts/:post_id')
    .get(postCtrl.get_detail_post)
    .put(postCtrl.update_post)
    .delete(postCtrl.delete_post)
  app
    .route('/api/v1/allposts')
    .get(postCtrl.get_all_posts)
  //Rate function
  app
    .route('/api/v1/rates/')
    .post(rateCtrl.create_new_rate);
  // app
  //   .route('/api/v1/rates/:rate_id')
  //   .put(rateCtrl.update_rate)
  //   .delete(rateCtrl.delete_rate);

  app
    .route('/api/v1/rate/:product_id')
    .get(rateCtrl.get_rate_by_product)
  app
    .route('/api/v1/avgrate/:product_id')
    .get(rateCtrl.get_avg_rate_by_product)

  //Trainer
  app
    .route('/api/v1/trainers')
    .get(trainerCtrl.get_all_trainer)
    .post(trainerCtrl.create_new_trainer)
  app
    .route('/api/v1/trainers/:trainer_id')
    .get(trainerCtrl.get_detail_trainer)
    .put(trainerCtrl.update_trainer)
    .delete(trainerCtrl.delete_trainer)
  //Other

  app.route('/api/v1/cart/:user_id').get(cartCtrl.get_detail_cart_by_userId);
  app.route('/api/v1/cartss/:product_id').get(cartCtrl.check_exist_product);

  app.route('/api/v1/mail').post(mailCtrl.send_mail);
  //Voucher function
  app
    .route('/api/v1/voucher/:voucher_code')
    .get(voucherCtrl.check_voucher);
};
