'use strict';

/**
 * test-one router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-one.test-one');
