const express = require('express');
const authRoute = require('./auth.route');
const lopRoute = require('./lop.route');
const userRoute = require('./user.route');
const dongxeRoute = require('./dongxe.route');
const mucphiRoute = require('./mucphi.route');
const loaidichvuRoute = require('./loaidichvu.route');
const nhacungcapRoute = require('./nhacungcap.route');
const productcategoriesRoute = require('./productcategories.route');
const productRoute = require('./product.route');
const sizeRoute = require('./size.route');
const studentRoute = require('./student.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();


const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/sizes',
    route: sizeRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/productcategories',
    route: productcategoriesRoute,
  },
  {
    path: '/nhacungcaps',
    route: nhacungcapRoute,
  },
  {
    path: '/loaidichvus',
    route: loaidichvuRoute,
  },
  {
    path: '/mucphis',
    route: mucphiRoute,
  },
  {
    path: '/dongxes',
    route: dongxeRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
