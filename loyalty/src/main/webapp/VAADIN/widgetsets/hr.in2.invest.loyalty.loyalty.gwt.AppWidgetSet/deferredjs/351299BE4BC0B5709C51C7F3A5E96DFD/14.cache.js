function $runCallbacks_4(){
  var $e0, e, handler;
  while (callbacksHead_4) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_4 = callbacksHead_4.next;
    !callbacksHead_4 && (callbacksTail_4 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VVideo_2_classLit, new WidgetMapImpl$21$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VVideo_2_classLit, new WidgetMapImpl$21$1_0);
        endWidgetLoading();
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 37)) {
          e = $e0;
          impl_2.error_0(e);
        }
         else 
          throw $e0;
      }
    }
  }
}

function AsyncLoader14_0(){
}

function onLoad_4(){
  instance_5 = new AsyncLoader14_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 14);
  !!$stats && $stats($createStatsEvent('runCallbacks14', 'begin', -1, -1));
  instance_5.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks14', 'end', -1, -1));
}

function AsyncLoader14(){
}

_ = AsyncLoader14_0.prototype = AsyncLoader14.prototype = new Object_0;
_.getClass$ = function getClass_170(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader14_2_classLit;
}
;
_.runCallbacks = function runCallbacks_4(){
  $runCallbacks_4();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$21$1_0(){
}

function WidgetMapImpl$21$1(){
}

_ = WidgetMapImpl$21$1_0.prototype = WidgetMapImpl$21$1.prototype = new Object_0;
_.get = function get_13(){
  return new VVideo_0;
}
;
_.getClass$ = function getClass_511(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$21$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $updateDimensionsWhenMetadataLoaded(this$static, el){
  var self_0 = this$static;
  el.addEventListener('loadedmetadata', function(e){
    $entry(self_0.updateElementDynamicSize(el.videoWidth, el.videoHeight));
  }
  , false);
}

function VVideo_0(){
  this.video = $doc.createElement('video');
  $setMediaElement(this, this.video);
  this.element_0['className'] = 'v-video';
  $updateDimensionsWhenMetadataLoaded(this, this.element_0);
}

function VVideo(){
}

_ = VVideo_0.prototype = VVideo.prototype = new VMediaBase;
_.getClass$ = function getClass_793(){
  return Lcom_vaadin_terminal_gwt_client_ui_VVideo_2_classLit;
}
;
_.getDefaultAltHtml = function getDefaultAltHtml_0(){
  return 'Your browser does not support the <code>video<\/code> element.';
}
;
_.updateElementDynamicSize = function updateElementDynamicSize(w, h_0){
  this.video.style['width'] = w + ($clinit_9() , 'px');
  this.video.style['height'] = h_0 + 'px';
  notifyParentOfSizeChange(this, true);
}
;
_.updateFromUIDL = function updateFromUIDL_56(uidl, client){
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  $updateFromUIDL_9(this, uidl, client);
  'poster' in uidl[1] && (this.video.poster = $translateVaadinUri(this.client, uidl[1]['poster']) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1};
_.video = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader14_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader14'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$21$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$21$1');
$entry(onLoad_4)();
