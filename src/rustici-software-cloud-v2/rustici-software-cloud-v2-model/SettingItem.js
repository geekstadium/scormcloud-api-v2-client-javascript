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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.SettingItem = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.SettingMetadata);
  }
}(this, function(ApiClient, SettingMetadata) {
  'use strict';




  /**
   * The SettingItem model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingItem
   * @version 2.0 beta
   */

  /**
   * Constructs a new <code>SettingItem</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SettingItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingItem} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingItem} The populated <code>SettingItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('effectiveValue')) {
        obj['effectiveValue'] = ApiClient.convertToType(data['effectiveValue'], 'String');
      }
      if (data.hasOwnProperty('effectiveValueSource')) {
        obj['effectiveValueSource'] = ApiClient.convertToType(data['effectiveValueSource'], 'String');
      }
      if (data.hasOwnProperty('explicitValue')) {
        obj['explicitValue'] = ApiClient.convertToType(data['explicitValue'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = SettingMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The value of this setting that would be used if read at this level, including defaults, fallback, and values set at less specific levels.
   * @member {String} effectiveValue
   */
  exports.prototype['effectiveValue'] = undefined;
  /**
   * The source of this effective value, default, fallback, or the level the value was set at.
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingItem.EffectiveValueSourceEnum} effectiveValueSource
   */
  exports.prototype['effectiveValueSource'] = undefined;
  /**
   * The value of this setting that is explicitly set at this level. If not present, the setting is not specified at this level.
   * @member {String} explicitValue
   */
  exports.prototype['explicitValue'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;


  /**
   * Allowed values for the <code>effectiveValueSource</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EffectiveValueSourceEnum = {
    /**
     * value: "default"
     * @const
     */
    "default": "default",
    /**
     * value: "fallback"
     * @const
     */
    "fallback": "fallback",
    /**
     * value: "base"
     * @const
     */
    "base": "base",
    /**
     * value: "system"
     * @const
     */
    "system": "system",
    /**
     * value: "learningStandard"
     * @const
     */
    "learningStandard": "learningStandard",
    /**
     * value: "application"
     * @const
     */
    "application": "application",
    /**
     * value: "learningStandardForApplication"
     * @const
     */
    "learningStandardForApplication": "learningStandardForApplication",
    /**
     * value: "dispatchDestination"
     * @const
     */
    "dispatchDestination": "dispatchDestination",
    /**
     * value: "course"
     * @const
     */
    "course": "course",
    /**
     * value: "dispatchDestinationForCourse"
     * @const
     */
    "dispatchDestinationForCourse": "dispatchDestinationForCourse",
    /**
     * value: "registration"
     * @const
     */
    "registration": "registration"  };


  return exports;
}));


