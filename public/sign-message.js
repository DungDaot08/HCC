/*
 * JavaScript client-side example using jsrsasign
 */

// #########################################################
// #             WARNING   WARNING   WARNING               #
// #########################################################
// #                                                       #
// # This file is intended for demonstration purposes      #
// # only.                                                 #
// #                                                       #
// # It is the SOLE responsibility of YOU, the programmer  #
// # to prevent against unauthorized access to any signing #
// # functions.                                            #
// #                                                       #
// # Organizations that do not protect against un-         #
// # authorized signing will be black-listed to prevent    #
// # software piracy.                                      #
// #                                                       #
// # -QZ Industries, LLC                                   #
// #                                                       #
// #########################################################

/**
 * Depends:
 *     - jsrsasign-latest-all-min.js
 *     - qz-tray.js
 *
 * Steps:
 *
 *     1. Include jsrsasign 10.9.0 into your web page
 *        <script src="https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/11.1.0/jsrsasign-all-min.js"></script>
 *
 *     2. Update the privateKey below with contents from private-key.pem
 *
 *     3. Include this script into your web page
 *        <script src="path/to/sign-message.js"></script>
 *
 *     4. Remove or comment out any other references to "setSignaturePromise"
 *
 *     5. IMPORTANT: Before deploying to production, copy "jsrsasign-all-min.js"
 *        to the web server.  Don't trust the CDN above to be available.
 */
var privateKey = "-----BEGIN PRIVATE KEY-----\n" +
"MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDD4whifmlNe2ar\n" +
"aKJhzYB8UrlU2F5FlbFHrcRNVHOL6Fwd2Lscsj8b53zJAC1g9/zHrX2P9B0LamuO\n" +
"kPtVM65nku+GtyOsZcSzkpBRLC4lQ458ueddrsxs5eMYlS8bBQMmORbsXhkLRX+z\n" +
"anqVQuLypUeBI3kN0xP5rsJiSmNBxCu/ouOp4bSnnwIKpKY4bblNQjXjb4jCPXCJ\n" +
"a0DVkVIgkuZJ6uN1znmPXOO6SNcSZsXqAx+qPBZm2p1yIYV1oS3VA2k75ssGgY0V\n" +
"ywYTGOvMR4iLh+Ipg8m7VUYe+1E6HJEXwaQj4Zx3dvAJ/vV6ujdSPbTQoiIpqrqR\n" +
"JZzaXxDxAgMBAAECggEAEvJrxjMZ9l+gP6YgRrt82QmbWYSQIcTn39oD6cLoZjj0\n" +
"aAKlnpHzHrzWSg7VVNLHxXyXb4waHxeNDb4iQUx9axFAT9R5A9zYGNJtWRyf3gTZ\n" +
"zGCi62HT7hiSTbdoVgG3G0RcXkJ/w6JWRsFe1/8fOn8YGnqW4+ptvTHVJXKyhRLM\n" +
"EQTGMgqdDHs8fMbWNtSSx9njcD0zZGn8bGzXJgIReHE1EhqutLQccX5xWIIUpDsj\n" +
"xOQ2yxpemg0r6PZt2FpYyIybg0uY+b7j5biwZ72H4cFcdBlxFJtiyqvdZ9gpPKeC\n" +
"+wJ1haomDllLCxsf1jElDYOXvuI0QLsSpyQNyIZqwQKBgQDs2JmzGwzXduyji4lj\n" +
"XhHRg99r35SoAfnqWBS9uk94UKX1hvoclNXY3ZExhby4qsaCQt+kmj7VDsCMrBxs\n" +
"liqI+gV4AiBqTG2SxMRcbTQVQjjNPVrI8uNE02CEoofo08KktCfxMh/9aeb1LYGy\n" +
"76k4+Aj21VvitpkDBId7tD9rGQKBgQDTunUW68PRZNzQn68cVtV6z55YXeM2TUXK\n" +
"1Jp/RqmKO7nVNNYCY/y9tPNHoaZxlct543luu3UCKkYq21RXExFQDSJd8iCq5m0U\n" +
"0x9fhjwVsJMvjhHAKaUGs23d+CB+icdr8agipOByPvq954HyaCJZZM0amvVZ8dMG\n" +
"K4tQLIlnmQKBgQCnnEVxLcRxutSOjJIGwyyi88sqAQinuPZOtFTBS9cvkwtPbV0U\n" +
"2vNXTL2SqU079ocS6hZw20N57b2wD6Dx63dghmdWXVLpRvsIMb2wlwuTu9CM1k2o\n" +
"BdN2Aoy8cHTz/OAzRNc7Zrii0s5CVhkCM36zNTzKyYUENSqlqw/iKFX1CQKBgQCe\n" +
"6dLaSkimEEMgHspKxe3jCJO7lXRlHGhmzV3Ma5fyldNr8AU0tCFNrdPvDqgjlp+r\n" +
"M43AC9jNsDcMEaTi2f/jiogh5QqZ2utCdxeUFedhDC/cwJAYH+mp9uBees7Ayt6v\n" +
"6SgeIIwJk7WU9X72Fyy41cyPzICcasHNXr9ohJT4+QKBgQDq6Qabms+IZhlS2Zsq\n" +
"nBl2OfpSXnIdPfj/t0tc3rw9CrCcfO0atcp8qCM9LhwUhWiXnuCtmMYerjL1qaOc\n" +
"RBIKC0JDaAfygr1FvhVuMf8E1AubCdRce21f+6YinaeR/g8qkMHmhuvfYOll+JVp\n" +
"c8Hh5EyWaedkgYdddmffYS1eWw==\n" +
"-----END PRIVATE KEY-----\n";

qz.security.setSignatureAlgorithm("SHA512"); // Since 2.1
qz.security.setSignaturePromise(function(toSign) {
    return function(resolve, reject) {
        try {
            var pk = KEYUTIL.getKey(privateKey);
            var sig = new KJUR.crypto.Signature({"alg": "SHA512withRSA"});  // Use "SHA1withRSA" for QZ Tray 2.0 and older
            sig.init(pk); 
            sig.updateString(toSign);
            var hex = sig.sign();
            console.log("DEBUG: \n\n" + stob64(hextorstr(hex)));
            resolve(stob64(hextorstr(hex)));
        } catch (err) {
            console.error(err);
            reject(err);
        }
    };
});
