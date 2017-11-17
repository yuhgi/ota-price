
export function getKey(scenes,routeName){
    let key;
    for( let scene of scenes ){
        if(scene.route.routeName === routeName){
            key = scene.route.key;
            break;
        }
    }
    return key;
}