// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/files/startup%2Fwd%2Fhello.txt?api-version=2017-01-01.4.0')
  .reply(200, "hello \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 03 Feb 2017 21:59:10 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '285946c4-9cc2-461b-ba1f-9f5f935937fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 03 Feb 2017 21:59:10 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-2322263996_2-20170203t214653z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Fri, 03 Feb 2017 22:00:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-2322263996_2-20170203t214653z/files/startup%2Fwd%2Fhello.txt?api-version=2017-01-01.4.0')
  .reply(200, "hello \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 03 Feb 2017 21:59:10 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '285946c4-9cc2-461b-ba1f-9f5f935937fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 03 Feb 2017 21:59:10 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-2322263996_2-20170203t214653z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Fri, 03 Feb 2017 22:00:23 GMT',
  connection: 'close' });
 return result; }]];