export default {
    "appenders":[
        {
            "type":"console",
            "category":"console"
        },
        {
            "type":"file",
            "filename":"logs/error/error.log",
            "maxLogSize":1048576,
            "backups":10,
            "category":"errorLogger"
        },
        {
            "type":"dateFile",
            "filename":"logs/access/access",
            "pattern":"-yy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "category":"acccessLogger"
        }
    ],
    "replaceConsole":true,
    "levels":{
        "INFO":"INFO",
        "ERROR":"ERROR",
        "DEBUG":"DEBUG"
    }
}