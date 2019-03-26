# rustici-software-cloud-v2

RusticiSoftwareCloudV2 - JavaScript client for rustici-software-cloud-v2
REST API used for SCORM Cloud integrations.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0 beta
- Package version: 2.0 beta
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rustici-software-cloud-v2 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your rustici-software-cloud-v2 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('rustici-software-cloud-v2')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');

var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME'
APP_NORMAL.password = 'YOUR PASSWORD'

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = "YOUR ACCESS TOKEN"

var api = new RusticiSoftwareCloudV2.ApplicationManagementApi()

var applicationName = "applicationName_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createApplication(applicationName, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://cloud.scorm.com/api/v2/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**createApplication**](docs/ApplicationManagementApi.md#createApplication) | **PUT** /appManagement/applications/{applicationName} | Create a new application
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**createCredential**](docs/ApplicationManagementApi.md#createCredential) | **POST** /appManagement/{childAppId}/credentials | Create credential
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**createToken**](docs/ApplicationManagementApi.md#createToken) | **POST** /appManagement/token | Create token
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**deleteApplication**](docs/ApplicationManagementApi.md#deleteApplication) | **DELETE** /appManagement/applications/{childAppId} | Delete an application.  If the application contains content, it must first be manually removed before calling this method, else an error will be thrown.
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**deleteCredential**](docs/ApplicationManagementApi.md#deleteCredential) | **DELETE** /appManagement/{childAppId}/credentials/{credentialId} | Removes &#x60;credentialId&#x60; credentials
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**getApplicationConfiguration**](docs/ApplicationManagementApi.md#getApplicationConfiguration) | **GET** /appManagement/configuration | Returns all configuration settings for this level
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**getApplicationList**](docs/ApplicationManagementApi.md#getApplicationList) | **GET** /appManagement/applications | Get list of all applications in this realm.
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**getCredentials**](docs/ApplicationManagementApi.md#getCredentials) | **GET** /appManagement/{childAppId}/credentials | List of credentials
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**setApplicationConfiguration**](docs/ApplicationManagementApi.md#setApplicationConfiguration) | **POST** /appManagement/configuration | Set configuration settings for this level.
*RusticiSoftwareCloudV2.ApplicationManagementApi* | [**updateCredential**](docs/ApplicationManagementApi.md#updateCredential) | **PUT** /appManagement/{childAppId}/credentials/{credentialId} | Update the name or status associated with &#x60;credentialId&#x60;
*RusticiSoftwareCloudV2.AuthenticationApi* | [**getAppToken**](docs/AuthenticationApi.md#getAppToken) | **POST** /oauth/authenticate/application/token | Authenticates for a oauth token
*RusticiSoftwareCloudV2.CourseApi* | [**buildCoursePreviewLaunchLink**](docs/CourseApi.md#buildCoursePreviewLaunchLink) | **POST** /courses/{courseId}/preview | Returns the launch link to use to preview this course
*RusticiSoftwareCloudV2.CourseApi* | [**buildCoursePreviewLaunchLinkWithVersion**](docs/CourseApi.md#buildCoursePreviewLaunchLinkWithVersion) | **POST** /courses/{courseId}/versions/{versionId}/preview | Returns the link to use to preview this course
*RusticiSoftwareCloudV2.CourseApi* | [**createFetchAndImportCourseJob**](docs/CourseApi.md#createFetchAndImportCourseJob) | **POST** /courses/importJobs | Start a job to fetch and import a course.
*RusticiSoftwareCloudV2.CourseApi* | [**createUploadAndImportCourseJob**](docs/CourseApi.md#createUploadAndImportCourseJob) | **POST** /courses/importJobs/upload | Upload a course and start an import job for it.
*RusticiSoftwareCloudV2.CourseApi* | [**deleteCourse**](docs/CourseApi.md#deleteCourse) | **DELETE** /courses/{courseId} | Delete &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**deleteCourseConfigurationSetting**](docs/CourseApi.md#deleteCourseConfigurationSetting) | **DELETE** /courses/{courseId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this course
*RusticiSoftwareCloudV2.CourseApi* | [**deleteCourseTags**](docs/CourseApi.md#deleteCourseTags) | **DELETE** /courses/{courseId}/tags | Delete tags for this course
*RusticiSoftwareCloudV2.CourseApi* | [**deleteCourseVersion**](docs/CourseApi.md#deleteCourseVersion) | **DELETE** /courses/{courseId}/versions/{versionId} | Delete version &#x60;versionId&#x60; of &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**deleteCourseVersionConfigurationSetting**](docs/CourseApi.md#deleteCourseVersionConfigurationSetting) | **DELETE** /courses/{courseId}/versions/{versionId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this course and version.
*RusticiSoftwareCloudV2.CourseApi* | [**getCourse**](docs/CourseApi.md#getCourse) | **GET** /courses/{courseId} | Get information about &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseConfiguration**](docs/CourseApi.md#getCourseConfiguration) | **GET** /courses/{courseId}/configuration | Returns all configuration settings for this course
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseStatements**](docs/CourseApi.md#getCourseStatements) | **GET** /courses/{courseId}/xAPIStatements | Get xAPI statements for &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseTags**](docs/CourseApi.md#getCourseTags) | **GET** /courses/{courseId}/tags | Get the tags for this course
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseVersionConfiguration**](docs/CourseApi.md#getCourseVersionConfiguration) | **GET** /courses/{courseId}/versions/{versionId}/configuration | Returns all configuration settings for this course and version.
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseVersionInfo**](docs/CourseApi.md#getCourseVersionInfo) | **GET** /courses/{courseId}/versions/{versionId} | Get version &#x60;versionId&#x60; of &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseVersionStatements**](docs/CourseApi.md#getCourseVersionStatements) | **GET** /courses/{courseId}/versions/{versionId}/xAPIStatements | Get xAPI statements for version &#x60;versionId&#x60; of &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getCourseVersions**](docs/CourseApi.md#getCourseVersions) | **GET** /courses/{courseId}/versions | Get all versions of &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getCourses**](docs/CourseApi.md#getCourses) | **GET** /courses | Get all courses for &#x60;appId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**getImportJobStatus**](docs/CourseApi.md#getImportJobStatus) | **GET** /courses/importJobs/{importJobId} | Check the status of an import job.
*RusticiSoftwareCloudV2.CourseApi* | [**putCourseTags**](docs/CourseApi.md#putCourseTags) | **PUT** /courses/{courseId}/tags | Set the tags for this course
*RusticiSoftwareCloudV2.CourseApi* | [**putCourseTagsBatch**](docs/CourseApi.md#putCourseTagsBatch) | **PUT** /courses/tags | Sets all of the provided tags on all of the provided courses
*RusticiSoftwareCloudV2.CourseApi* | [**setCourseConfiguration**](docs/CourseApi.md#setCourseConfiguration) | **POST** /courses/{courseId}/configuration | Set configuration settings for this course.
*RusticiSoftwareCloudV2.CourseApi* | [**setCourseTitle**](docs/CourseApi.md#setCourseTitle) | **PUT** /courses/{courseId}/title | Sets the course title for &#x60;courseId&#x60;
*RusticiSoftwareCloudV2.CourseApi* | [**setCourseVersionConfiguration**](docs/CourseApi.md#setCourseVersionConfiguration) | **POST** /courses/{courseId}/versions/{versionId}/configuration | Set configuration settings for this course and version.
*RusticiSoftwareCloudV2.PingApi* | [**pingAppId**](docs/PingApi.md#pingAppId) | **GET** /ping | Get back a message indicating that the API is working.
*RusticiSoftwareCloudV2.RegistrationApi* | [**createNewRegistrationInstance**](docs/RegistrationApi.md#createNewRegistrationInstance) | **POST** /registrations/{registrationId}/instances | Create a new instance for this registration specified by the registration ID
*RusticiSoftwareCloudV2.RegistrationApi* | [**createRegistration**](docs/RegistrationApi.md#createRegistration) | **POST** /registrations | Create a registration.
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistration**](docs/RegistrationApi.md#deleteRegistration) | **DELETE** /registrations/{registrationId} | Delete &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistrationConfigurationSetting**](docs/RegistrationApi.md#deleteRegistrationConfigurationSetting) | **DELETE** /registrations/{registrationId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistrationInstanceConfigurationSetting**](docs/RegistrationApi.md#deleteRegistrationInstanceConfigurationSetting) | **DELETE** /registrations/{registrationId}/instances/{instanceId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this registration instance
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistrationProgress**](docs/RegistrationApi.md#deleteRegistrationProgress) | **DELETE** /registrations/{registrationId}/progress | Delete registration progress (clear registration)
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistrationTags**](docs/RegistrationApi.md#deleteRegistrationTags) | **DELETE** /registrations/{registrationId}/tags | Delete tags for this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**deleteRegistrationsGlobalData**](docs/RegistrationApi.md#deleteRegistrationsGlobalData) | **DELETE** /registrations/{registrationId}/globalData | Delete global data associated with &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationConfiguration**](docs/RegistrationApi.md#getRegistrationConfiguration) | **GET** /registrations/{registrationId}/configuration | Returns all configuration settings for this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationInstanceConfiguration**](docs/RegistrationApi.md#getRegistrationInstanceConfiguration) | **GET** /registrations/{registrationId}/instances/{instanceId}/configuration | Returns all configuration settings for this registration instance
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationInstanceLaunchHistory**](docs/RegistrationApi.md#getRegistrationInstanceLaunchHistory) | **GET** /registrations/{registrationId}/instances/{instanceId}/launchHistory | Returns history of this registration&#39;s launches
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationInstanceProgress**](docs/RegistrationApi.md#getRegistrationInstanceProgress) | **GET** /registrations/{registrationId}/instances/{instanceId} | Get registration progress for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationInstanceStatements**](docs/RegistrationApi.md#getRegistrationInstanceStatements) | **GET** /registrations/{registrationId}/instances/{instanceId}/xAPIStatements | Get xAPI statements for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationInstances**](docs/RegistrationApi.md#getRegistrationInstances) | **GET** /registrations/{registrationId}/instances | Get all the instances of this the registration specified by the registration ID
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationLaunchHistory**](docs/RegistrationApi.md#getRegistrationLaunchHistory) | **GET** /registrations/{registrationId}/launchHistory | Returns history of this registration&#39;s launches
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationLaunchLink**](docs/RegistrationApi.md#getRegistrationLaunchLink) | **POST** /registrations/{registrationId}/launchLink | Returns the link to use to launch this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationProgress**](docs/RegistrationApi.md#getRegistrationProgress) | **GET** /registrations/{registrationId} | Get registration progress for &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationStatements**](docs/RegistrationApi.md#getRegistrationStatements) | **GET** /registrations/{registrationId}/xAPIStatements | Get xAPI statements for &#x60;registrationId&#x60;
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrationTags**](docs/RegistrationApi.md#getRegistrationTags) | **GET** /registrations/{registrationId}/tags | Get the tags for this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**getRegistrations**](docs/RegistrationApi.md#getRegistrations) | **GET** /registrations | Gets a list of registrations including a summary of the status of each registration.
*RusticiSoftwareCloudV2.RegistrationApi* | [**putRegistrationTags**](docs/RegistrationApi.md#putRegistrationTags) | **PUT** /registrations/{registrationId}/tags | Set the tags for this registration
*RusticiSoftwareCloudV2.RegistrationApi* | [**putRegistrationTagsBatch**](docs/RegistrationApi.md#putRegistrationTagsBatch) | **PUT** /registrations/tags | Sets all of the provided tags on all of the provided registrations
*RusticiSoftwareCloudV2.RegistrationApi* | [**registrationExists**](docs/RegistrationApi.md#registrationExists) | **HEAD** /registrations/{registrationId} | Does this registration exist?
*RusticiSoftwareCloudV2.RegistrationApi* | [**setRegistrationConfiguration**](docs/RegistrationApi.md#setRegistrationConfiguration) | **POST** /registrations/{registrationId}/configuration | Set configuration settings for this registration.
*RusticiSoftwareCloudV2.RegistrationApi* | [**setRegistrationInstanceConfiguration**](docs/RegistrationApi.md#setRegistrationInstanceConfiguration) | **POST** /registrations/{registrationId}/instances/{instanceId}/configuration | Set configuration settings for this registration instance.


## Documentation for Models

 - [RusticiSoftwareCloudV2.ActivityResultSchema](docs/ActivityResultSchema.md)
 - [RusticiSoftwareCloudV2.ApplicationListSchema](docs/ApplicationListSchema.md)
 - [RusticiSoftwareCloudV2.ApplicationSchema](docs/ApplicationSchema.md)
 - [RusticiSoftwareCloudV2.ApplicationToken](docs/ApplicationToken.md)
 - [RusticiSoftwareCloudV2.CommentSchema](docs/CommentSchema.md)
 - [RusticiSoftwareCloudV2.CompletionAmountSchema](docs/CompletionAmountSchema.md)
 - [RusticiSoftwareCloudV2.CourseActivitySchema](docs/CourseActivitySchema.md)
 - [RusticiSoftwareCloudV2.CourseListNonPagedSchema](docs/CourseListNonPagedSchema.md)
 - [RusticiSoftwareCloudV2.CourseListSchema](docs/CourseListSchema.md)
 - [RusticiSoftwareCloudV2.CourseReferenceSchema](docs/CourseReferenceSchema.md)
 - [RusticiSoftwareCloudV2.CourseSchema](docs/CourseSchema.md)
 - [RusticiSoftwareCloudV2.CourseTagsBatchSchema](docs/CourseTagsBatchSchema.md)
 - [RusticiSoftwareCloudV2.CreateRegistrationSchema](docs/CreateRegistrationSchema.md)
 - [RusticiSoftwareCloudV2.CredentialCreatedSchema](docs/CredentialCreatedSchema.md)
 - [RusticiSoftwareCloudV2.CredentialListSchema](docs/CredentialListSchema.md)
 - [RusticiSoftwareCloudV2.CredentialRequestSchema](docs/CredentialRequestSchema.md)
 - [RusticiSoftwareCloudV2.CredentialSchema](docs/CredentialSchema.md)
 - [RusticiSoftwareCloudV2.ImportFetchRequestSchema](docs/ImportFetchRequestSchema.md)
 - [RusticiSoftwareCloudV2.ImportJobResultSchema](docs/ImportJobResultSchema.md)
 - [RusticiSoftwareCloudV2.ImportResultSchema](docs/ImportResultSchema.md)
 - [RusticiSoftwareCloudV2.IntegerResultSchema](docs/IntegerResultSchema.md)
 - [RusticiSoftwareCloudV2.ItemValuePairSchema](docs/ItemValuePairSchema.md)
 - [RusticiSoftwareCloudV2.LaunchHistoryListSchema](docs/LaunchHistoryListSchema.md)
 - [RusticiSoftwareCloudV2.LaunchHistorySchema](docs/LaunchHistorySchema.md)
 - [RusticiSoftwareCloudV2.LaunchLinkRequestSchema](docs/LaunchLinkRequestSchema.md)
 - [RusticiSoftwareCloudV2.LaunchLinkSchema](docs/LaunchLinkSchema.md)
 - [RusticiSoftwareCloudV2.LearnerPreferenceSchema](docs/LearnerPreferenceSchema.md)
 - [RusticiSoftwareCloudV2.LearnerSchema](docs/LearnerSchema.md)
 - [RusticiSoftwareCloudV2.LinkSchema](docs/LinkSchema.md)
 - [RusticiSoftwareCloudV2.MessageSchema](docs/MessageSchema.md)
 - [RusticiSoftwareCloudV2.MetadataSchema](docs/MetadataSchema.md)
 - [RusticiSoftwareCloudV2.ObjectiveSchema](docs/ObjectiveSchema.md)
 - [RusticiSoftwareCloudV2.PermissionsSchema](docs/PermissionsSchema.md)
 - [RusticiSoftwareCloudV2.PingSchema](docs/PingSchema.md)
 - [RusticiSoftwareCloudV2.PostBackSchema](docs/PostBackSchema.md)
 - [RusticiSoftwareCloudV2.RegistrationCompletion](docs/RegistrationCompletion.md)
 - [RusticiSoftwareCloudV2.RegistrationListSchema](docs/RegistrationListSchema.md)
 - [RusticiSoftwareCloudV2.RegistrationSchema](docs/RegistrationSchema.md)
 - [RusticiSoftwareCloudV2.RegistrationSuccess](docs/RegistrationSuccess.md)
 - [RusticiSoftwareCloudV2.RegistrationTagsBatchSchema](docs/RegistrationTagsBatchSchema.md)
 - [RusticiSoftwareCloudV2.ResponseError](docs/ResponseError.md)
 - [RusticiSoftwareCloudV2.RuntimeInteractionSchema](docs/RuntimeInteractionSchema.md)
 - [RusticiSoftwareCloudV2.RuntimeObjectiveSchema](docs/RuntimeObjectiveSchema.md)
 - [RusticiSoftwareCloudV2.RuntimeSchema](docs/RuntimeSchema.md)
 - [RusticiSoftwareCloudV2.ScoreSchema](docs/ScoreSchema.md)
 - [RusticiSoftwareCloudV2.SettingItem](docs/SettingItem.md)
 - [RusticiSoftwareCloudV2.SettingListSchema](docs/SettingListSchema.md)
 - [RusticiSoftwareCloudV2.SettingMetadata](docs/SettingMetadata.md)
 - [RusticiSoftwareCloudV2.SettingValidValue](docs/SettingValidValue.md)
 - [RusticiSoftwareCloudV2.SettingsIndividualSchema](docs/SettingsIndividualSchema.md)
 - [RusticiSoftwareCloudV2.SettingsPostSchema](docs/SettingsPostSchema.md)
 - [RusticiSoftwareCloudV2.SharedDataEntrySchema](docs/SharedDataEntrySchema.md)
 - [RusticiSoftwareCloudV2.StaticPropertiesSchema](docs/StaticPropertiesSchema.md)
 - [RusticiSoftwareCloudV2.StringResultSchema](docs/StringResultSchema.md)
 - [RusticiSoftwareCloudV2.TagListSchema](docs/TagListSchema.md)
 - [RusticiSoftwareCloudV2.TagPostSchema](docs/TagPostSchema.md)
 - [RusticiSoftwareCloudV2.TitleSchema](docs/TitleSchema.md)
 - [RusticiSoftwareCloudV2.TokenRequestSchema](docs/TokenRequestSchema.md)
 - [RusticiSoftwareCloudV2.XapiAccount](docs/XapiAccount.md)
 - [RusticiSoftwareCloudV2.XapiActivity](docs/XapiActivity.md)
 - [RusticiSoftwareCloudV2.XapiActivityDefinition](docs/XapiActivityDefinition.md)
 - [RusticiSoftwareCloudV2.XapiAgentGroup](docs/XapiAgentGroup.md)
 - [RusticiSoftwareCloudV2.XapiAttachment](docs/XapiAttachment.md)
 - [RusticiSoftwareCloudV2.XapiContext](docs/XapiContext.md)
 - [RusticiSoftwareCloudV2.XapiContextActivity](docs/XapiContextActivity.md)
 - [RusticiSoftwareCloudV2.XapiInteractionComponent](docs/XapiInteractionComponent.md)
 - [RusticiSoftwareCloudV2.XapiResult](docs/XapiResult.md)
 - [RusticiSoftwareCloudV2.XapiScore](docs/XapiScore.md)
 - [RusticiSoftwareCloudV2.XapiStatement](docs/XapiStatement.md)
 - [RusticiSoftwareCloudV2.XapiStatementReference](docs/XapiStatementReference.md)
 - [RusticiSoftwareCloudV2.XapiStatementResult](docs/XapiStatementResult.md)
 - [RusticiSoftwareCloudV2.XapiVerb](docs/XapiVerb.md)


## Documentation for Authorization


### APP_MANAGEMENT

- **Type**: HTTP basic authentication

### APP_NORMAL

- **Type**: HTTP basic authentication

### LAUNCH_TOKEN

- **Type**: API key
- **API key parameter name**: launchToken
- **Location**: URL query string

### OAUTH

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - read: Grants read access
  - write: Grants write access
  - delete: Grants deletion access
  - admin: Grants read, write, and account management access
  - read:course: Grants read access to course methods
  - write:course: Grants write access to course methods
  - delete:course: Grants deletion access to course methods
  - read:dispatch: Grants read access to dispatch methods
  - write:dispatch: Grants write access to dispatch methods
  - delete:dispatch: Grants deletion access to dispatch methods
  - read:invitation: Grants read access to invitation methods
  - write:invitation: Grants write access to invitation methods
  - delete:invitation: Grants deletion access to invitation methods
  - read:ping: Grants read access to the ping method
  - read:registration: Grants read access to registration methods
  - write:registration: Grants write access to registration methods
  - delete:registration: Grants deletion access to registration methods
  - read:reporting: Grants read access to reporting methods
  - read:xapicredential: Grants read access to xapi credential methods
  - write:xapicredential: Grants write access to xapi credential methods
  - delete:xapicredential: Grants deletion access to xapi credential methods
  - read:xapipipe: Grants read access to xapi pipe methods
  - write:xapipipe: Grants write access to xapi pipe methods
  - delete:xapipipe: Grants deletion access to xapi pipe methods
  - read:appmgmt: Grants read access to app management methods
  - write:appmgmt: Grants write access to app management methods
  - delete:appmgmt: Grants deletion access to app management methods

### URL_TOKEN

- **Type**: API key
- **API key parameter name**: authtoken
- **Location**: URL query string

