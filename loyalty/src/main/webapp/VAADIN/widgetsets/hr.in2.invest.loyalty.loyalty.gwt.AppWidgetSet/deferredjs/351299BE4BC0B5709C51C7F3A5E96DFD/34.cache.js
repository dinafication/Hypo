function $runCallbacks_26(){
  var $e0, e, handler;
  while (callbacksHead_26) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_26 = callbacksHead_26.next;
    !callbacksHead_26 && (callbacksTail_26 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VLink_2_classLit, new WidgetMapImpl$48$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VLink_2_classLit, new WidgetMapImpl$48$1_0);
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

function AsyncLoader34_0(){
}

function onLoad_26(){
  instance_27 = new AsyncLoader34_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 34);
  !!$stats && $stats($createStatsEvent('runCallbacks34', 'begin', -1, -1));
  instance_27.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks34', 'end', -1, -1));
}

function AsyncLoader34(){
}

_ = AsyncLoader34_0.prototype = AsyncLoader34.prototype = new Object_0;
_.getClass$ = function getClass_236(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader34_2_classLit;
}
;
_.runCallbacks = function runCallbacks_26(){
  $runCallbacks_26();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$48$1_0(){
}

function WidgetMapImpl$48$1(){
}

_ = WidgetMapImpl$48$1_0.prototype = WidgetMapImpl$48$1.prototype = new Object_0;
_.get = function get_42(){
  return new VLink_0;
}
;
_.getClass$ = function getClass_540(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$48$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VLink_0(){
  HTML_0.call(this);
  this.anchor = $doc.createElement('a');
  this.captionElement = $doc.createElement('span');
  this.element_0.appendChild(this.anchor);
  this.anchor.appendChild(this.captionElement);
  $addDomHandler(this, this, ($clinit_15() , $clinit_15() , TYPE_1));
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
  this.element_0['className'] = 'v-link';
}

function VLink(){
}

_ = VLink_0.prototype = VLink.prototype = new HTML;
_.getClass$ = function getClass_650(){
  return Lcom_vaadin_terminal_gwt_client_ui_VLink_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_28(event_0){
  var target;
  target = event_0.target;
  $eventGetTypeInt(event_0.type) == 32768 && notifyParentOfSizeChange(this, true);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
  (target == this.captionElement || target == this.anchor || !!this.icon && target == this.icon.element_0) && $onBrowserEvent(this, event_0);
  this.enabled || (event_0.preventDefault() , undefined);
}
;
_.onClick = function onClick_21(event_0){
  var e, features;
  if (this.enabled && !this.readonly) {
    this.target_0 == null && (this.target_0 = '_self');
    switch (this.borderStyle) {
      case 2:
        features = 'menubar=no,location=no,status=no';
        break;
      case 1:
        features = 'menubar=yes,location=no,status=no';
        break;
      default:features = '';
    }
    this.targetWidth > 0 && (features += (features.length > 0?',':'') + 'width=' + this.targetWidth);
    this.targetHeight > 0 && (features += (features.length > 0?',':'') + 'height=' + this.targetHeight);
    if (features.length > 0) {
      e = currentEvent;
      if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
        $wnd.open(this.src_0, this.target_0, features);
        e.preventDefault();
      }
    }
  }
}
;
_.updateFromUIDL = function updateFromUIDL_35(uidl, client){
  if ($updateComponent(client, this, uidl, false)) {
    return;
  }
  this.client = client;
  this.enabled = !('disabled' in uidl[1]);
  this.readonly = 'readonly' in uidl[1];
  if ('name' in uidl[1]) {
    this.target_0 = uidl[1]['name'];
    this.anchor.setAttribute('target', this.target_0);
  }
  if ('src' in uidl[1]) {
    this.src_0 = $translateVaadinUri(client, uidl[1]['src']);
    this.anchor.setAttribute('href', this.src_0);
  }
  'border' in uidl[1]?$equals_2('none', uidl[1]['border'])?(this.borderStyle = 2):(this.borderStyle = 1):(this.borderStyle = 0);
  this.targetHeight = 'targetHeight' in uidl[1]?uidl[1]['targetHeight']:-1;
  this.targetWidth = 'targetWidth' in uidl[1]?uidl[1]['targetWidth']:-1;
  this.captionElement.textContent = uidl[1]['caption'] || '';
  if ('error' in uidl[1]) {
    if (!this.errorIndicatorElement) {
      this.errorIndicatorElement = $doc.createElement('div');
      this.errorIndicatorElement['className'] = 'v-errorindicator';
    }
    $insertChild(this.element_0, this.errorIndicatorElement, 0);
  }
   else 
    !!this.errorIndicatorElement && (this.errorIndicatorElement.style['display'] = 'none' , undefined);
  if ('icon' in uidl[1]) {
    if (!this.icon) {
      this.icon = new Icon_0(client);
      this.anchor.insertBefore(this.icon.element_0, this.captionElement);
    }
    $setUri(this.icon, uidl[1]['icon']);
  }
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 39:1, 69:1, 70:1};
_.borderStyle = 0;
_.client = null;
_.enabled = false;
_.errorIndicatorElement = null;
_.icon = null;
_.readonly = false;
_.src_0 = null;
_.target_0 = null;
_.targetHeight = 0;
_.targetWidth = 0;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader34_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader34'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$48$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$48$1');
$entry(onLoad_26)();
