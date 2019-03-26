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
    root.RusticiSoftwareCloudV2.XapiAccount = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XapiAccount model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>XapiAccount</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#4124-account-object
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount
   * @class
   * @param homePage {String} 
   * @param name {String} 
   */
  var exports = function(homePage, name) {
    var _this = this;

    _this['homePage'] = homePage;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>XapiAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount} The populated <code>XapiAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('homePage')) {
        obj['homePage'] = ApiClient.convertToType(data['homePage'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} homePage
   */
  exports.prototype['homePage'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


