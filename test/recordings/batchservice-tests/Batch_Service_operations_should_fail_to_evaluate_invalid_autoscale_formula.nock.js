// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2017-01-01.4.0', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2017-02-03T21:54:21.7494084Z\",\"results\":\"$TargetDedicated=2;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e2848f04-ffd8-4f5f-aa52-a192f0ffcd01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Fri, 03 Feb 2017 21:54:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2017-01-01.4.0', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2017-02-03T21:54:21.7494084Z\",\"results\":\"$TargetDedicated=2;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e2848f04-ffd8-4f5f-aa52-a192f0ffcd01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Fri, 03 Feb 2017 21:54:21 GMT',
  connection: 'close' });
 return result; }]];