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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiInteractionComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiActivityDefinition = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiInteractionComponent);
  }
}(this, function(ApiClient, XapiInteractionComponent) {
  'use strict';




  /**
   * The XapiActivityDefinition model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivityDefinition
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiActivityDefinition</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#activity-definition
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivityDefinition
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>XapiActivityDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivityDefinition} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivityDefinition} The populated <code>XapiActivityDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], {'String': 'String'});
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('moreInfo')) {
        obj['moreInfo'] = ApiClient.convertToType(data['moreInfo'], 'String');
      }
      if (data.hasOwnProperty('interactionType')) {
        obj['interactionType'] = ApiClient.convertToType(data['interactionType'], 'String');
      }
      if (data.hasOwnProperty('correctResponsesPattern')) {
        obj['correctResponsesPattern'] = ApiClient.convertToType(data['correctResponsesPattern'], ['String']);
      }
      if (data.hasOwnProperty('choices')) {
        obj['choices'] = ApiClient.convertToType(data['choices'], [XapiInteractionComponent]);
      }
      if (data.hasOwnProperty('scale')) {
        obj['scale'] = ApiClient.convertToType(data['scale'], [XapiInteractionComponent]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], [XapiInteractionComponent]);
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], [XapiInteractionComponent]);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [XapiInteractionComponent]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Object.<String, String>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} moreInfo
   */
  exports.prototype['moreInfo'] = undefined;
  /**
   * @member {String} interactionType
   */
  exports.prototype['interactionType'] = undefined;
  /**
   * @member {Array.<String>} correctResponsesPattern
   */
  exports.prototype['correctResponsesPattern'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent>} choices
   */
  exports.prototype['choices'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent>} scale
   */
  exports.prototype['scale'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent>} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent>} target
   */
  exports.prototype['target'] = undefined;
  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiInteractionComponent>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * @member {Object.<String, Object>} extensions
   */
  exports.prototype['extensions'] = undefined;



  return exports;
}));


