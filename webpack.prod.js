/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

const merge                   = require('webpack-merge');
const TerserPlugin            = require('terser-webpack-plugin');
const common                  = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'production',
   optimization: {
      minimizer: [
        new TerserPlugin(),
      ]
   },
   devtool: 'none',
   performance: {hints: false}
});
