function $runCallbacks_31(){
  var $e0, e, handler;
  while (callbacksHead_31) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_31 = callbacksHead_31.next;
    !callbacksHead_31 && (callbacksTail_31 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VNativeButton_2_classLit, new WidgetMapImpl$55$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VNativeButton_2_classLit, new WidgetMapImpl$55$1_0);
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

function AsyncLoader39_0(){
}

function onLoad_31(){
  instance_32 = new AsyncLoader39_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 39);
  !!$stats && $stats($createStatsEvent('runCallbacks39', 'begin', -1, -1));
  instance_32.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks39', 'end', -1, -1));
}

function AsyncLoader39(){
}

_ = AsyncLoader39_0.prototype = AsyncLoader39.prototype = new Object_0;
_.getClass$ = function getClass_251(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader39_2_classLit;
}
;
_.runCallbacks = function runCallbacks_31(){
  $runCallbacks_31();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$55$1_0(){
}

function WidgetMapImpl$55$1(){
}

_ = WidgetMapImpl$55$1_0.prototype = WidgetMapImpl$55$1.prototype = new Object_0;
_.get = function get_50(){
  return new VNativeButton_0;
}
;
_.getClass$ = function getClass_548(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$55$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader39_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader39'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$55$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$55$1');
$entry(onLoad_31)();
