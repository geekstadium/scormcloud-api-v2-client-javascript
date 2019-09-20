/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiCredentialSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiCredentialsListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiCredentialSchema);
  }
}(this, function(ApiClient, XapiCredentialSchema) {
  'use strict';




  /**
   * The XapiCredentialsListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialsListSchema
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiCredentialsListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialsListSchema
   * @class
   * @param xapiCredentials {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema>} 
   */
  var exports = function(xapiCredentials) {
    var _this = this;

    _this['xapiCredentials'] = xapiCredentials;

  };

  /**
   * Constructs a <code>XapiCredentialsListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialsListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialsListSchema} The populated <code>XapiCredentialsListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xapiCredentials')) {
        obj['xapiCredentials'] = ApiClient.convertToType(data['xapiCredentials'], [XapiCredentialSchema]);
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema>} xapiCredentials
   */
  exports.prototype['xapiCredentials'] = undefined;
  /**
   * @member {String} more
   */
  exports.prototype['more'] = undefined;



  return exports;
}));


