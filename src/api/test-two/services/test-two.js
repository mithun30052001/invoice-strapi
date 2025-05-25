'use strict';

/**
 * test-two service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-two.test-two');
