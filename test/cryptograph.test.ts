import * as common from '../src/lambda/common'


test('Encrypts the payload data', () => {

const payload = {
    GUID: "0e225f7d-e9d9-4391-991c-55b93e2d8dab",
    cardType: "driverLicence",
    }

const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
'PUBLIC-KEY\n' +
'V+Sq7fhwkzoOU6C9RwIDAQAB\n' +
'-----END PUBLIC KEY-----';

common.encrypt(payload, publicKey, ['GUID'], 'utf-8');
});



test('Decrypts the payload data', () => {
  const payload = {
      GUID: "0e225f7d-e9d9-4391-991c-55b93e2d8dab",
      cardType: 'SJ6q6cMbqgB6ntHyeAgnPjNWiw927MdrLD/3dJg/Z4LMGcbQb/4Qq/2II8Is6856rnjyEOfQbTogewOTUhyPYMChfe2NocgWzUL0r9q0fP+BPt6gzGOIrOewEVYAP8pXfg46Ga0OfDkwD8/ohnM49Py2tNVx1jCZklJlom3biZM=',
      }

  const privateKey =
  '-----BEGIN RSA PRIVATE KEY-----\n' +
    'PRIVATE-KEY\n' +
    'WJ36LqlrB9qXH7O35oO95cGuFoamZBqZMGP2PXmNS+dw\n' +
    '-----END RSA PRIVATE KEY-----\n';
  
  
  common.decrypt(payload, privateKey, ['GUID'], 'utf-8');  
  });
  

