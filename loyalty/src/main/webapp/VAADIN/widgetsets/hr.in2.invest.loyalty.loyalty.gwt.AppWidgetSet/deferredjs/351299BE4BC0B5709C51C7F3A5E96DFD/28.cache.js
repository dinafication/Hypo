function $runCallbacks_19(){
  var $e0, e, handler;
  while (callbacksHead_19) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_19 = callbacksHead_19.next;
    !callbacksHead_19 && (callbacksTail_19 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCssLayout_2_classLit, new WidgetMapImpl$42$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCssLayout_2_classLit, new WidgetMapImpl$42$1_0);
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

function AsyncLoader28_0(){
}

function onLoad_19(){
  instance_20 = new AsyncLoader28_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 28);
  !!$stats && $stats($createStatsEvent('runCallbacks28', 'begin', -1, -1));
  instance_20.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks28', 'end', -1, -1));
}

function AsyncLoader28(){
}

_ = AsyncLoader28_0.prototype = AsyncLoader28.prototype = new Object_0;
_.getClass$ = function getClass_215(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader28_2_classLit;
}
;
_.runCallbacks = function runCallbacks_19(){
  $runCallbacks_19();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$42$1_0(){
}

function WidgetMapImpl$42$1(){
}

_ = WidgetMapImpl$42$1_0.prototype = WidgetMapImpl$42$1.prototype = new Object_0;
_.get = function get_36(){
  return new VCssLayout_0;
}
;
_.getClass$ = function getClass_534(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$42$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader28_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader28'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$42$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$42$1');
$entry(onLoad_19)();
