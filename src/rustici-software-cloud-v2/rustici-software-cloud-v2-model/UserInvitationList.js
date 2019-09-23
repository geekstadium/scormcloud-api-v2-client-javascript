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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserInvitationSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.UserInvitationList = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.UserInvitationSchema);
  }
}(this, function(ApiClient, UserInvitationSchema) {
  'use strict';




  /**
   * The UserInvitationList model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserInvitationList</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserInvitationList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationList} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationList} The populated <code>UserInvitationList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userInvitations')) {
        obj['userInvitations'] = ApiClient.convertToType(data['userInvitations'], [UserInvitationSchema]);
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'String');
      }
    }
    return obj;
  }

  /**
   * A list of user invitation objects.
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UserInvitationSchema>} userInvitations
   */
  exports.prototype['userInvitations'] = undefined;
  /**
   * @member {String} more
   */
  exports.prototype['more'] = undefined;



  return exports;
}));

