function $runCallbacks_34(){
  var $e0, e, handler;
  while (callbacksHead_34) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_34 = callbacksHead_34.next;
    !callbacksHead_34 && (callbacksTail_34 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VScrollTable_2_classLit, new WidgetMapImpl$6$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VScrollTable_2_classLit, new WidgetMapImpl$6$1_0);
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

function AsyncLoader5_0(){
}

function onLoad_34(){
  instance_35 = new AsyncLoader5_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 5);
  !!$stats && $stats($createStatsEvent('runCallbacks5', 'begin', -1, -1));
  instance_35.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks5', 'end', -1, -1));
}

function AsyncLoader5(){
}

_ = AsyncLoader5_0.prototype = AsyncLoader5.prototype = new Object_0;
_.getClass$ = function getClass_261(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_2_classLit;
}
;
_.runCallbacks = function runCallbacks_34(){
  $runCallbacks_34();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$6$1_0(){
}

function WidgetMapImpl$6$1(){
}

_ = WidgetMapImpl$6$1_0.prototype = WidgetMapImpl$6$1.prototype = new Object_0;
_.get = function get_52(){
  return new VScrollTable_0;
}
;
_.getClass$ = function getClass_550(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$6$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader5'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$6$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$6$1');
$entry(onLoad_34)();
