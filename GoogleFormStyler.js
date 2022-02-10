var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function (XHR) {
    var open = XHR.prototype.open;
    XHR.prototype.open = function (method, url, async, user, pass) {
        this._url = url;
        if (url.indexOf("gstatic.com") !== -1 ||
            url.indexOf("docs.google.com") !== -1) {
            url = "https://web.archive.org/web/20210418074901/http://googleformrestyler.apixml.net/corsProxy.aspx?base64Url=" + btoa(url);
        }
        open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest);
(function() {
    var script = document.currentScript ||
        /*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
    var URL = script.getAttribute('form');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onload = function() {
        document.write(xhr.response);
    };
    xhr.send();
})();


}
/*
     FILE ARCHIVED ON 07:49:01 Apr 18, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:46:13 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 147.887
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.075
  RedisCDXSource: 0.469
  esindex: 0.007
  LoadShardBlock: 128.909 (3)
  PetaboxLoader3.datanode: 140.7 (4)
  CDXLines.iter: 16.679 (3)
  load_resource: 127.278
  PetaboxLoader3.resolve: 111.325
*/
