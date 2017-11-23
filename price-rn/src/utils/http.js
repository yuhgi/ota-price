let baseUrl;

export function setBaseUrl(url){
    baseUrl = url;
}

function getUrl(url){
    if(typeof url !== 'string') {return;}
    if(url.startsWith('http')){
        return url;
    }else{
        return baseUrl+url;
    }
}

export function get(url){
    return fetch(getUrl(url),{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json());
}

export function post(){
    return fetch(getUrl(url),{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json());
}