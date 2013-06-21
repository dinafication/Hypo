function $runCallbacks_28(){
  var $e0, e, handler;
  while (callbacksHead_28) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_28 = callbacksHead_28.next;
    !callbacksHead_28 && (callbacksTail_28 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCheckBox_2_classLit, new WidgetMapImpl$50$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCheckBox_2_classLit, new WidgetMapImpl$50$1_0);
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

function AsyncLoader36_0(){
}

function onLoad_28(){
  instance_29 = new AsyncLoader36_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 36);
  !!$stats && $stats($createStatsEvent('runCallbacks36', 'begin', -1, -1));
  instance_29.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks36', 'end', -1, -1));
}

function AsyncLoader36(){
}

_ = AsyncLoader36_0.prototype = AsyncLoader36.prototype = new Object_0;
_.getClass$ = function getClass_242(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader36_2_classLit;
}
;
_.runCallbacks = function runCallbacks_28(){
  $runCallbacks_28();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$50$1_0(){
}

function WidgetMapImpl$50$1(){
}

_ = WidgetMapImpl$50$1_0.prototype = WidgetMapImpl$50$1.prototype = new Object_0;
_.get = function get_45(){
  return new VCheckBox_0;
}
;
_.getClass$ = function getClass_543(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$50$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader36_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader36'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$50$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$50$1');
$entry(onLoad_28)();
