function $runCallbacks_33(){
  var $e0, e, handler;
  while (callbacksHead_33) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_33 = callbacksHead_33.next;
    !callbacksHead_33 && (callbacksTail_33 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VOrderedLayout_2_classLit, new WidgetMapImpl$56$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VOrderedLayout_2_classLit, new WidgetMapImpl$56$1_0);
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

function AsyncLoader40_0(){
}

function onLoad_33(){
  instance_34 = new AsyncLoader40_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 40);
  !!$stats && $stats($createStatsEvent('runCallbacks40', 'begin', -1, -1));
  instance_34.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks40', 'end', -1, -1));
}

function AsyncLoader40(){
}

_ = AsyncLoader40_0.prototype = AsyncLoader40.prototype = new Object_0;
_.getClass$ = function getClass_257(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader40_2_classLit;
}
;
_.runCallbacks = function runCallbacks_33(){
  $runCallbacks_33();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$56$1_0(){
}

function WidgetMapImpl$56$1(){
}

_ = WidgetMapImpl$56$1_0.prototype = WidgetMapImpl$56$1.prototype = new Object_0;
_.get = function get_51(){
  return new VOrderedLayout_0;
}
;
_.getClass$ = function getClass_549(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$56$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VOrderedLayout_0(){
  $clinit_73();
  VOrderedLayout_1.call(this, 'v-orderedlayout', 0);
  this.allowOrientationUpdate = true;
}

_ = VOrderedLayout_0.prototype = VOrderedLayout.prototype;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader40_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader40'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$56$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$56$1');
$entry(onLoad_33)();
