// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools?api-version=2017-01-01.4.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D44C7F360EF00A\",\"lastModified\":\"2017-02-03T21:54:21.7588746Z\",\"creationTime\":\"2017-02-03T21:45:49.6652031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:45:49.6652031Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2017-02-03T21:54:21.7588746Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"password\":\"2ec114e8-fd74-4981-b398-669f389eebef\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://jstesteastus2.eastus2.batch.azure.com/pools?api-version=2017-01-01.4.0&maxresults=1&$skiptoken=WATV2:lvphofZL2O/t3vrmVpsYVaz9tL3KWzIRY%5EyZX/AYhn2rCLXrtcWgYcMwDE/klus%5EuH%5ECdMEer91UkE%5E2E%5EDAnERiomF2Y2IuJQjcyzFh0/vVdEnbsM0DY4hYArxeGv6ERJfokn65KZ3OcTkhQETib66ijCj32apq9Ft0ljCvF0XHc1rr5/FaLrjdo7/CSwzu/0AjI1xFL7OQ8NdRpYaBpR60/tPxmFnwRp57QJo20KpgZ2bKkxaIZh7Wey224qHqg26Yx4ENJ9xc8wDBH1IjHKgMfowLZ4p6Q0syqgKY9Xw=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '16540754-359a-4ba3-9c04-c597c624ff5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools?api-version=2017-01-01.4.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D44C7F360EF00A\",\"lastModified\":\"2017-02-03T21:54:21.7588746Z\",\"creationTime\":\"2017-02-03T21:45:49.6652031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:45:49.6652031Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2017-02-03T21:54:21.7588746Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"password\":\"2ec114e8-fd74-4981-b398-669f389eebef\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://jstesteastus2.eastus2.batch.azure.com/pools?api-version=2017-01-01.4.0&maxresults=1&$skiptoken=WATV2:lvphofZL2O/t3vrmVpsYVaz9tL3KWzIRY%5EyZX/AYhn2rCLXrtcWgYcMwDE/klus%5EuH%5ECdMEer91UkE%5E2E%5EDAnERiomF2Y2IuJQjcyzFh0/vVdEnbsM0DY4hYArxeGv6ERJfokn65KZ3OcTkhQETib66ijCj32apq9Ft0ljCvF0XHc1rr5/FaLrjdo7/CSwzu/0AjI1xFL7OQ8NdRpYaBpR60/tPxmFnwRp57QJo20KpgZ2bKkxaIZh7Wey224qHqg26Yx4ENJ9xc8wDBH1IjHKgMfowLZ4p6Q0syqgKY9Xw=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '16540754-359a-4ba3-9c04-c597c624ff5e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools?api-version=2017-01-01.4.0&maxresults=1&$skiptoken=WATV2:lvphofZL2O/t3vrmVpsYVaz9tL3KWzIRY%5EyZX/AYhn2rCLXrtcWgYcMwDE/klus%5EuH%5ECdMEer91UkE%5E2E%5EDAnERiomF2Y2IuJQjcyzFh0/vVdEnbsM0DY4hYArxeGv6ERJfokn65KZ3OcTkhQETib66ijCj32apq9Ft0ljCvF0XHc1rr5/FaLrjdo7/CSwzu/0AjI1xFL7OQ8NdRpYaBpR60/tPxmFnwRp57QJo20KpgZ2bKkxaIZh7Wey224qHqg26Yx4ENJ9xc8wDBH1IjHKgMfowLZ4p6Q0syqgKY9Xw=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D44C7F368F8F27\",\"lastModified\":\"2017-02-03T21:54:22.6018087Z\",\"creationTime\":\"2017-02-03T21:54:22.1629319Z\",\"state\":\"upgrading\",\"stateTransitionTime\":\"2017-02-03T21:54:22.6018087Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-02-03T21:54:22.2919382Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.32_201605-01\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5efd6d91-4ca9-4191-b330-e8465f182c47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools?api-version=2017-01-01.4.0&maxresults=1&$skiptoken=WATV2:lvphofZL2O/t3vrmVpsYVaz9tL3KWzIRY%5EyZX/AYhn2rCLXrtcWgYcMwDE/klus%5EuH%5ECdMEer91UkE%5E2E%5EDAnERiomF2Y2IuJQjcyzFh0/vVdEnbsM0DY4hYArxeGv6ERJfokn65KZ3OcTkhQETib66ijCj32apq9Ft0ljCvF0XHc1rr5/FaLrjdo7/CSwzu/0AjI1xFL7OQ8NdRpYaBpR60/tPxmFnwRp57QJo20KpgZ2bKkxaIZh7Wey224qHqg26Yx4ENJ9xc8wDBH1IjHKgMfowLZ4p6Q0syqgKY9Xw=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D44C7F368F8F27\",\"lastModified\":\"2017-02-03T21:54:22.6018087Z\",\"creationTime\":\"2017-02-03T21:54:22.1629319Z\",\"state\":\"upgrading\",\"stateTransitionTime\":\"2017-02-03T21:54:22.6018087Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-02-03T21:54:22.2919382Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.32_201605-01\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5efd6d91-4ca9-4191-b330-e8465f182c47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:23 GMT',
  connection: 'close' });
 return result; }]];