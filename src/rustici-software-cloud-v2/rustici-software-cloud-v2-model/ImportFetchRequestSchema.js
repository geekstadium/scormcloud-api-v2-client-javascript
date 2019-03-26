/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0 beta
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ImportFetchRequestSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImportFetchRequestSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>ImportFetchRequestSchema</code>.
   * Request to import a course by downloading it from a url
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema
   * @class
   * @param url {String} URL path to the .zip package to download to import this course
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;
  };

  /**
   * Constructs a <code>ImportFetchRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema} The populated <code>ImportFetchRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL path to the .zip package to download to import this course
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


