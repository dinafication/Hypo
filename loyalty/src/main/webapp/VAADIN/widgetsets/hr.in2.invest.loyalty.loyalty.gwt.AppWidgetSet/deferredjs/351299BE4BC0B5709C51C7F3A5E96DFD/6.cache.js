function $runCallbacks_35(){
  var $e0, e, handler;
  while (callbacksHead_35) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_35 = callbacksHead_35.next;
    !callbacksHead_35 && (callbacksTail_35 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAudio_2_classLit, new WidgetMapImpl$9$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAudio_2_classLit, new WidgetMapImpl$9$1_0);
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

function AsyncLoader6_0(){
}

function onLoad_35(){
  instance_36 = new AsyncLoader6_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 6);
  !!$stats && $stats($createStatsEvent('runCallbacks6', 'begin', -1, -1));
  instance_36.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks6', 'end', -1, -1));
}

function AsyncLoader6(){
}

_ = AsyncLoader6_0.prototype = AsyncLoader6.prototype = new Object_0;
_.getClass$ = function getClass_264(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2_classLit;
}
;
_.runCallbacks = function runCallbacks_35(){
  $runCallbacks_35();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$9$1_0(){
}

function WidgetMapImpl$9$1(){
}

_ = WidgetMapImpl$9$1_0.prototype = WidgetMapImpl$9$1.prototype = new Object_0;
_.get = function get_55(){
  return new VAudio_0;
}
;
_.getClass$ = function getClass_553(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$9$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VAudio_0(){
  this.audio = $doc.createElement('audio');
  $setMediaElement(this, this.audio);
  this.element_0['className'] = 'v-audio';
}

function VAudio(){
}

_ = VAudio_0.prototype = VAudio.prototype = new VMediaBase;
_.getClass$ = function getClass_585(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAudio_2_classLit;
}
;
_.getDefaultAltHtml = function getDefaultAltHtml(){
  return 'Your browser does not support the <code>audio<\/code> element.';
}
;
_.updateFromUIDL = function updateFromUIDL_19(uidl, client){
  var style;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  $updateFromUIDL_9(this, uidl, client);
  style = this.audio.style;
  Boolean(uidl[1]['ctrl']) && (style['height'] == null || $equals_2('', style['height'])) && (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isChrome?(style['height'] = 32 + ($clinit_9() , 'px') , undefined):(style['height'] = 25 + ($clinit_9() , 'px') , undefined));
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1};
_.audio = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader6'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$9$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$9$1');
$entry(onLoad_35)();
