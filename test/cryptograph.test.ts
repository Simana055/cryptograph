import * as common from '../src/lambda/common'


test('Encrypts the payload data', () => {

const payload = {
    GUID: "0e225f7d-e9d9-4391-991c-55b93e2d8dab",
    cardType: "driverLicence",
    }

const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqsK35mdlMl6Y2RcKH3WWt5hVW\n' +
'1rS22vOF3FGT5Cc5syJUcK3u9SbM3uf3MxSofQA+lHQ4zllta8NI5iQKUHcWQRab\n' +
'KVfGHMifKZrM4Atd2sEzQkJ2EmhdPeaezPlUA4jn1UrcU3McWyCf4k1GMUhxWUBJ\n' +
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
    'MIICXQIBAAKBgQCqsK35mdlMl6Y2RcKH3WWt5hVW1rS22vOF3FGT5Cc5syJUcK3u\n' +
    '9SbM3uf3MxSofQA+lHQ4zllta8NI5iQKUHcWQRabKVfGHMifKZrM4Atd2sEzQkJ2\n' +
    'EmhdPeaezPlUA4jn1UrcU3McWyCf4k1GMUhxWUBJV+Sq7fhwkzoOU6C9RwIDAQAB\n' +
    'AoGBAKQGeIi9QUYLDNxmmRN6u/UqfyMd3DdDnHTsTTBzNQaLj9fZGCvjRU/mfL7e\n' +
    'RWHMDWoVusHD+cfeoKDzF3sZ6/TR4PYJ2s9zJc/saFH01Tg4Oa0ti6nHwEx4i+D9\n' +
    'qEdGGHHneYzfEs4e6VC9ut9HLs7WW+7eXy3XaWHaBky7m2IBAkEA4Ux09iBYFotm\n' +
    '6/7KX660E3WFbC615auCCL4e06l5jiHJ5mE+gS3OW+CJWsLcjlzWm3Rr6NVgWm0X\n' +
    'TyXGoQytgQJBAMHzNIWAzeQz25/0c+APvApTkUFD9IRWFAHdoEifDvWgpMAchBJZ\n' +
    '7u2WJtd9rV+18pI9443phwTo5LgdlexQ3scCQD2cbPfJzI0Nvi2XVbxoyDHyF3SI\n' +
    'KZIPHtZJN6DmXalysAXiXfdxkVcqxiUd2LbNyJpmcgQQJfNUleU9DV6JWwECQQCM\n' +
    'ah4xNUJan6y2jk1B/0I9G6lC3gbttEAB5clAKl+zNt1v9HUtsAyJ17ZBNszJSTnX\n' +
    '5JSVTmehB1dncIv1LctLAkANOy0BlN96hwrLZiVunaCeY6u8Kqv8EfW17JPKNyK1\n' +
    'WJ36LqlrB9qXH7O35oO95cGuFoamZBqZMGP2PXmNS+dw\n' +
    '-----END RSA PRIVATE KEY-----\n';
  
  
  common.decrypt(payload, privateKey, ['GUID'], 'utf-8');  
  });
  

