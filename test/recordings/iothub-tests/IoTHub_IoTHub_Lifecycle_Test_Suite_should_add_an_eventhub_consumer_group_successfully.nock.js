// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f992baf6-0808-4c6c-b61a-750753653d88',
  'x-ms-correlation-request-id': 'f992baf6-0808-4c6c-b61a-750753653d88',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221334Z:f992baf6-0808-4c6c-b61a-750753653d88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f992baf6-0808-4c6c-b61a-750753653d88',
  'x-ms-correlation-request-id': 'f992baf6-0808-4c6c-b61a-750753653d88',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221334Z:f992baf6-0808-4c6c-b61a-750753653d88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:34 GMT',
  connection: 'close' });
 return result; }]];