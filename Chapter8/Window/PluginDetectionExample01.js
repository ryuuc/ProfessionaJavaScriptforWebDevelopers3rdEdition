function hasPlugin(name){
    name=name.toLowerCase();
    for(var i =0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
            return true;
        }
    }
    return false;
}

alert(hasPlugin("Flash"));
alert(hasPlugin("QuickTime"));


function hasIEPlugin(name){
    try{
        new ActiveXObeject(name);
        return true;
    }catch(ex){
        return false;
    }
}

alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));