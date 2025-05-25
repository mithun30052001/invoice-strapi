'use strict';

/**
 * test-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-one.test-one');
