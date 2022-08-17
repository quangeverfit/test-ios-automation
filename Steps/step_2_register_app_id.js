//POSST https://api.appstoreconnect.apple.com/v1/bundleIds

/*BODY{"data":{
    "type": "bundleIds",
    "attributes": {
        "name": "Everfit White Label App",
        "identifier": "io.everfit.wl_test_app",
        "platform": "UNIVERSAL",
        "seedId": "5V8T8D2Q32"
    }
}}*/

/*RESPONSE {
    "data": {
        "type": "bundleIds",
        "id": "HK527MZZTW",
        "attributes": {
            "name": "Everfit White Label App",
            "identifier": "io.everfit.wl_test_app",
            "platform": "UNIVERSAL",
            "seedId": "5V8T8D2Q32"
        },
        "relationships": {
            "bundleIdCapabilities": {
                "meta": {
                    "paging": {
                        "total": 0,
                        "limit": 2147483647
                    }
                },
                "data": [
                    {
                        "type": "bundleIdCapabilities",
                        "id": "HK527MZZTW_IN_APP_PURCHASE"
                    }
                ],
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/bundleIds/HK527MZZTW/relationships/bundleIdCapabilities",
                    "related": "https://api.appstoreconnect.apple.com/v1/bundleIds/HK527MZZTW/bundleIdCapabilities"
                }
            },
            "profiles": {
                "meta": {
                    "paging": {
                        "total": 0,
                        "limit": 2147483647
                    }
                },
                "data": [],
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/bundleIds/HK527MZZTW/relationships/profiles",
                    "related": "https://api.appstoreconnect.apple.com/v1/bundleIds/HK527MZZTW/profiles"
                }
            }
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/bundleIds/HK527MZZTW"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/bundleIds"
    }
}*/
