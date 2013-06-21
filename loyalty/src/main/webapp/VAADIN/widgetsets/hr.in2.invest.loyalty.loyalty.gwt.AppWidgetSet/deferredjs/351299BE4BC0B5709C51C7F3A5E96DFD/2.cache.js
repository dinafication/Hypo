function $runCallbacks_10(){
  var $e0, e, handler;
  while (callbacksHead_10) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_10 = callbacksHead_10.next;
    !callbacksHead_10 && (callbacksTail_10 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelHorizontal_2_classLit, new WidgetMapImpl$3$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelHorizontal_2_classLit, new WidgetMapImpl$3$1_0);
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

function AsyncLoader2_0(){
}

function onLoad_10(){
  instance_11 = new AsyncLoader2_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 2);
  !!$stats && $stats($createStatsEvent('runCallbacks2', 'begin', -1, -1));
  instance_11.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks2', 'end', -1, -1));
}

function AsyncLoader2(){
}

_ = AsyncLoader2_0.prototype = AsyncLoader2.prototype = new Object_0;
_.getClass$ = function getClass_189(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_2_classLit;
}
;
_.runCallbacks = function runCallbacks_10(){
  $runCallbacks_10();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$3$1_0(){
}

function WidgetMapImpl$3$1(){
}

_ = WidgetMapImpl$3$1_0.prototype = WidgetMapImpl$3$1.prototype = new Object_0;
_.get = function get_22(){
  return new VSplitPanelHorizontal_0;
}
;
_.getClass$ = function getClass_520(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$3$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VSplitPanelHorizontal_0(){
  VSplitPanel_0.call(this, 0);
}

function VSplitPanelHorizontal(){
}

_ = VSplitPanelHorizontal_0.prototype = VSplitPanelHorizontal.prototype = new VSplitPanel;
_.getClass$ = function getClass_743(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelHorizontal_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 126:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader2'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$3$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$3$1');
$entry(onLoad_10)();
