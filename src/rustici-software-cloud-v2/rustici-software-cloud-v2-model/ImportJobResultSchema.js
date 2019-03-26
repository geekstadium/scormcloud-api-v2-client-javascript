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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportResultSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ImportJobResultSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ImportResultSchema);
  }
}(this, function(ApiClient, ImportResultSchema) {
  'use strict';




  /**
   * The ImportJobResultSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportJobResultSchema
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>ImportJobResultSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportJobResultSchema
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ImportJobResultSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportJobResultSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportJobResultSchema} The populated <code>ImportJobResultSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('jobId')) {
        obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('importResult')) {
        obj['importResult'] = ImportResultSchema.constructFromObject(data['importResult']);
      }
    }
    return obj;
  }

  /**
   * @member {String} jobId
   */
  exports.prototype['jobId'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportJobResultSchema.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportResultSchema} importResult
   */
  exports.prototype['importResult'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING",
    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"  };


  return exports;
}));


