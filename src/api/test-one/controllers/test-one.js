'use strict';

/**
 * test-one controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-one.test-one');
