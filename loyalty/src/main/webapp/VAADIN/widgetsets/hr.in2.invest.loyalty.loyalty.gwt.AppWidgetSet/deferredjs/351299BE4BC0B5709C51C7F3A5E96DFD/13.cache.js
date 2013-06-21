function $runCallbacks_3(){
  var $e0, e, handler;
  while (callbacksHead_3) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_3 = callbacksHead_3.next;
    !callbacksHead_3 && (callbacksTail_3 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VProgressIndicator_2_classLit, new WidgetMapImpl$19$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VProgressIndicator_2_classLit, new WidgetMapImpl$19$1_0);
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

function AsyncLoader13_0(){
}

function onLoad_3(){
  instance_4 = new AsyncLoader13_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 13);
  !!$stats && $stats($createStatsEvent('runCallbacks13', 'begin', -1, -1));
  instance_4.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks13', 'end', -1, -1));
}

function AsyncLoader13(){
}

_ = AsyncLoader13_0.prototype = AsyncLoader13.prototype = new Object_0;
_.getClass$ = function getClass_167(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader13_2_classLit;
}
;
_.runCallbacks = function runCallbacks_3(){
  $runCallbacks_3();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$19$1_0(){
}

function WidgetMapImpl$19$1(){
}

_ = WidgetMapImpl$19$1_0.prototype = WidgetMapImpl$19$1.prototype = new Object_0;
_.get = function get_10(){
  return new VProgressIndicator_0;
}
;
_.getClass$ = function getClass_508(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$19$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VProgressIndicator_0(){
  this.wrapper = $doc.createElement('div');
  this.indicator = $doc.createElement('div');
  this.element_0 = $doc.createElement('div');
  this.element_0.appendChild(this.wrapper);
  this.element_0['className'] = 'v-progressindicator';
  this.wrapper.appendChild(this.indicator);
  this.indicator.className = 'v-progressindicator-indicator';
  this.wrapper.className = 'v-progressindicator-wrapper';
  this.poller = new VProgressIndicator$Poller_0(this);
}

function VProgressIndicator(){
}

_ = VProgressIndicator_0.prototype = VProgressIndicator.prototype = new Widget;
_.getClass$ = function getClass_688(){
  return Lcom_vaadin_terminal_gwt_client_ui_VProgressIndicator_2_classLit;
}
;
_.onAttach = function onAttach_8(){
  $onAttach(this);
  this.pollerSuspendedDueDetach && $scheduleRepeating(this.poller, this.interval);
}
;
_.onDetach = function onDetach_14(){
  $onDetach(this);
  if (this.interval > 0) {
    $cancel_0(this.poller);
    this.pollerSuspendedDueDetach = true;
  }
}
;
_.setVisible = function setVisible_4(visible){
  this.element_0.style.display = visible?'':'none';
  visible || $cancel_0(this.poller);
}
;
_.updateFromUIDL = function updateFromUIDL_43(uidl, client){
  var $e0, f, size;
  this.client = client;
  Boolean(uidl[1]['cached']) || $cancel_0(this.poller);
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.indeterminate = Boolean(uidl[1]['indeterminate']);
  if (this.indeterminate) {
    setStyleName(this.element_0, 'v-progressindicator-indeterminate', true);
    setStyleName(this.element_0, 'v-progressindicator-indeterminate-disabled', Boolean(uidl[1]['disabled']));
  }
   else {
    try {
      f = parseFloat_0(uidl[1]['state']);
      size = Math.round(100 * f);
      this.indicator.style['width'] = size + '%';
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 112))
        throw $e0;
    }
  }
  if (!Boolean(uidl[1]['disabled'])) {
    this.interval = uidl[1]['pollinginterval'];
    $scheduleRepeating(this.poller, this.interval);
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1};
_.client = null;
_.indeterminate = false;
_.interval = 0;
_.poller = null;
_.pollerSuspendedDueDetach = false;
function VProgressIndicator$Poller_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VProgressIndicator$Poller(){
}

_ = VProgressIndicator$Poller_0.prototype = VProgressIndicator$Poller.prototype = new Timer;
_.getClass$ = function getClass_689(){
  return Lcom_vaadin_terminal_gwt_client_ui_VProgressIndicator$Poller_2_classLit;
}
;
_.run = function run_30(){
  !this.this$0.client.hasActiveRequest && isAttachedAndDisplayed(this.this$0) && $sendPendingVariableChanges(this.this$0.client);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader13_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader13'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$19$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$19$1'), Lcom_vaadin_terminal_gwt_client_ui_VProgressIndicator$Poller_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VProgressIndicator$Poller');
$entry(onLoad_3)();
