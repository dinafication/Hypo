function $runCallbacks_17(){
  var $e0, e, handler;
  while (callbacksHead_17) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_17 = callbacksHead_17.next;
    !callbacksHead_17 && (callbacksTail_17 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPopupView_2_classLit, new WidgetMapImpl$38$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPopupView_2_classLit, new WidgetMapImpl$38$1_0);
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

function AsyncLoader26_0(){
}

function onLoad_17(){
  instance_18 = new AsyncLoader26_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 26);
  !!$stats && $stats($createStatsEvent('runCallbacks26', 'begin', -1, -1));
  instance_18.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks26', 'end', -1, -1));
}

function AsyncLoader26(){
}

_ = AsyncLoader26_0.prototype = AsyncLoader26.prototype = new Object_0;
_.getClass$ = function getClass_209(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader26_2_classLit;
}
;
_.runCallbacks = function runCallbacks_17(){
  $runCallbacks_17();
}
;
_.castableTypeMap$ = {};
function $updateCaption_0(this$static, uidl){
  this$static.caption_0.updateCaption_0(uidl);
  this$static.element_0.style.display = !Boolean(uidl[1]['invisible'])?'':'none';
}

function WidgetMapImpl$38$1_0(){
}

function WidgetMapImpl$38$1(){
}

_ = WidgetMapImpl$38$1_0.prototype = WidgetMapImpl$38$1.prototype = new Object_0;
_.get = function get_31(){
  return new VPopupView_0;
}
;
_.getClass$ = function getClass_529(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$38$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $preparePopup(popup){
  $setVisible_0(popup, false);
  popup.hiding = false;
  $show_0(popup);
}

function $showPopup(this$static, popup){
  var hostHorizontalCenter, hostVerticalCenter, left, offsetHeight, offsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  windowTop = $getAbsoluteTop(($clinit_50() , get(null)).element_0) | 0;
  windowLeft = $getAbsoluteLeft(get(null).element_0) | 0;
  windowRight = windowLeft + (parseInt(get(null).element_0['offsetWidth']) || 0);
  windowBottom = windowTop + (parseInt(get(null).element_0['offsetHeight']) || 0);
  offsetWidth = parseInt(popup.element_0['offsetWidth']) || 0;
  offsetHeight = parseInt(popup.element_0['offsetHeight']) || 0;
  hostHorizontalCenter = ($getAbsoluteLeft(this$static.element_0) | 0) + ~~((parseInt(this$static.element_0['offsetWidth']) || 0) / 2);
  hostVerticalCenter = ($getAbsoluteTop(this$static.element_0) | 0) + ~~((parseInt(this$static.element_0['offsetHeight']) || 0) / 2);
  left = hostHorizontalCenter - ~~(offsetWidth / 2);
  top_0 = hostVerticalCenter - ~~(offsetHeight / 2);
  left + offsetWidth > windowRight && (left -= left + offsetWidth - windowRight);
  top_0 + offsetHeight > windowBottom && (top_0 -= top_0 + offsetHeight - windowBottom);
  left < 0 && (left = 0);
  top_0 < 0 && (top_0 = 0);
  $setPopupPosition_0(popup, left, top_0);
  $setVisible_0(popup, true);
}

function $updateState(this$static, visible){
  this$static.uidlId != null && !!this$static.client && this$static.attached && $addVariableToQueue(this$static.client, this$static.uidlId, 'popupVisibility', visible?'true':'false', true, 98);
}

function VPopupView_0(){
  HTML_0.call(this);
  this.loading = new Label_0;
  this.popup = new VPopupView$CustomPopup_0(this);
  this.element_0['className'] = 'v-popupview';
  this.popup.getStyleElement()['className'] = 'v-popupview-popup';
  this.loading.getStyleElement()['className'] = 'v-popupview-loading';
  $setTextOrHtml(this.directionalTextHelper, '', true);
  $setWidget_0(this.popup, this.loading);
  $addDomHandler(this, new VPopupView$1_0(this), ($clinit_15() , $clinit_15() , TYPE_1));
  $addHandler(this.popup, new VPopupView$2_0(this), TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
  this.popup.isAnimationEnabled = true;
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function VPopupView(){
}

_ = VPopupView_0.prototype = VPopupView.prototype = new HTML;
_.getAllocatedSpace = function getAllocatedSpace_16(child){
  var popupExtra, height, ipe, pe, width;
  popupExtra = (pe = this.popup.element_0 , ipe = $getFirstChildElement(this.popup.element_0) , width = getRequiredWidth(pe) - getRequiredWidth(ipe) , height = getRequiredHeight(pe) - getRequiredHeight(ipe) , new RenderInformation$Size_0(width, height));
  return new RenderSpace_0(($clinit_50() , parseInt(get(null).element_0['offsetWidth']) || 0) - popupExtra.getWidth(), (parseInt(get(null).element_0['offsetHeight']) || 0) - popupExtra.getHeight());
}
;
_.getClass$ = function getClass_683(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupView_2_classLit;
}
;
_.iterator_0 = function iterator_5(){
  return new VPopupView$3_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_35(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.onDetach = function onDetach_12(){
  this.popup.hide_0(false);
  $onDetach(this);
}
;
_.replaceChildComponent = function replaceChildComponent_15(oldComponent, newComponent){
  $setWidget_0(this.popup, newComponent);
  this.popup.popupComponentWidget = newComponent;
}
;
_.requestLayout = function requestLayout_16(child){
  $updateShadowSizeAndPosition(this.popup, 1);
  return true;
}
;
_.updateCaption = function updateCaption_17(component, uidl){
  if (isNeeded(uidl)) {
    if (this.popup.captionWrapper) {
      $updateCaption_0(this.popup.captionWrapper, uidl);
    }
     else {
      this.popup.captionWrapper = new VCaptionWrapper_0(component, this.client);
      $setWidget_0(this.popup, this.popup.captionWrapper);
      $updateCaption_0(this.popup.captionWrapper, uidl);
    }
  }
   else {
    !!this.popup.captionWrapper && $setWidget_0(this.popup, this.popup.popupComponentWidget);
  }
  this.popup.popupComponentWidget = dynamicCast(component, 70);
  this.popup.popupComponentPaintable = component;
}
;
_.updateFromUIDL = function updateFromUIDL_42(uidl, client){
  var i, popupUIDL, primaryName, styleBuf, styles;
  if ($updateComponent(client, this, uidl, false)) {
    return;
  }
  this.client = client;
  this.uidlId = uidl[1]['id'];
  this.hostPopupVisible = Boolean(uidl[1]['v']['popupVisibility']);
  $setTextOrHtml(this.directionalTextHelper, uidl[1]['html'], true);
  'hideOnMouseOut' in uidl[1] && (this.popup.hideOnMouseOut = Boolean(uidl[1]['hideOnMouseOut']) , undefined);
  if (this.hostPopupVisible) {
    popupUIDL = uidl[2];
    $preparePopup(this.popup);
    $updateFromUIDL_18(this.popup, popupUIDL, client);
    if ('style' in uidl[1]) {
      styles = $split_0(uidl[1]['style'], ' ', 0);
      styleBuf = new StringBuffer_0;
      primaryName = getStylePrimaryName(this.popup.getStyleElement());
      styleBuf.impl.string += primaryName;
      for (i = 0; i < styles.length; ++i) {
        styleBuf.impl.string += ' ';
        styleBuf.impl.string += primaryName;
        styleBuf.impl.string += '-';
        styleBuf.impl.string += styles[i];
      }
      $setStyleName_0(this.popup, styleBuf.impl.string);
    }
     else {
      $setStyleName_0(this.popup, getStylePrimaryName(this.popup.getStyleElement()));
    }
    $showPopup(this, this.popup);
  }
   else {
    this.popup.hide_0(false);
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1};
_.client = null;
_.hostPopupVisible = false;
_.popup = null;
_.uidlId = null;
function VPopupView$1_0(this$0){
  this.this$0 = this$0;
}

function VPopupView$1(){
}

_ = VPopupView$1_0.prototype = VPopupView$1.prototype = new Object_0;
_.getClass$ = function getClass_684(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupView$1_2_classLit;
}
;
_.onClick = function onClick_25(event_0){
  $updateState(this.this$0, true);
}
;
_.castableTypeMap$ = {12:1, 39:1};
_.this$0 = null;
function VPopupView$2_0(this$0){
  this.this$0 = this$0;
}

function VPopupView$2(){
}

_ = VPopupView$2_0.prototype = VPopupView$2.prototype = new Object_0;
_.getClass$ = function getClass_685(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupView$2_2_classLit;
}
;
_.onClose = function onClose_6(event_0){
  $updateState(this.this$0, false);
}
;
_.castableTypeMap$ = {9:1, 12:1};
_.this$0 = null;
function $next_4(this$static){
  if (this$static.pos != 0) {
    throw new NoSuchElementException_0;
  }
  ++this$static.pos;
  return this$static.this$0.popup;
}

function VPopupView$3_0(this$0){
  this.this$0 = this$0;
}

function VPopupView$3(){
}

_ = VPopupView$3_0.prototype = VPopupView$3.prototype = new Object_0;
_.getClass$ = function getClass_686(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupView$3_2_classLit;
}
;
_.hasNext = function hasNext_4(){
  return this.pos == 0;
}
;
_.next_0 = function next_5(){
  return $next_4(this);
}
;
_.remove_1 = function remove_13(){
  throw new UnsupportedOperationException_0;
}
;
_.castableTypeMap$ = {158:1};
_.pos = 0;
_.this$0 = null;
function $checkForRTE(this$static, popupComponentWidget2){
  var hw, iterator;
  if (popupComponentWidget2 != null && popupComponentWidget2.castableTypeMap$ && !!popupComponentWidget2.castableTypeMap$[162]) {
    $synchronizeContentToServer(dynamicCast(popupComponentWidget2, 162));
  }
   else if (popupComponentWidget2 != null && popupComponentWidget2.castableTypeMap$ && !!popupComponentWidget2.castableTypeMap$[21]) {
    hw = dynamicCast(popupComponentWidget2, 21);
    iterator = hw.iterator_0();
    while (iterator.hasNext()) {
      $checkForRTE(this$static, dynamicCast(iterator.next_0(), 70));
    }
  }
}

function $hide_2(this$static, autoClosed){
  this$static.hiding = true;
  $syncChildren(this$static);
  !!this$static.popupComponentPaintable && $unregisterPaintable(this$static.this$0.client, this$static.popupComponentPaintable);
  !!this$static.popupComponentWidget && this$static.popupComponentWidget != this$static.this$0.loading && $remove_9(this$static, this$static.popupComponentWidget);
  this$static.hasHadMouseOver = false;
  $hide(this$static, autoClosed);
  runIE7ZeroSizedBodyFix();
}

function $remove_9(this$static, w){
  this$static.popupComponentPaintable = null;
  this$static.popupComponentWidget = null;
  this$static.captionWrapper = null;
  return $remove_4(this$static, w);
}

function $syncChildren(this$static){
  var $e0, e, e$iterator, outerIter, entry;
  instanceOf(this$static.popupComponentWidget, 122)?dynamicCast(this$static.popupComponentWidget, 122).setFocus(false):$checkForRTE(this$static, this$static.popupComponentWidget);
  for (e$iterator = (outerIter = $keySet(this$static.activeChildren.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); e$iterator.val$outerIter.hasNext();) {
    e = dynamicCastJso((entry = dynamicCast(e$iterator.val$outerIter.next_0(), 58) , entry.getKey()));
    try {
      e && e.blur && e.blur();
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 112))
        throw $e0;
    }
  }
  this$static.activeChildren.map.clear_0();
}

function $updateFromUIDL_18(this$static, uidl, client){
  var newPopupComponent;
  newPopupComponent = $getPaintable(client, uidl[2]);
  if (newPopupComponent != this$static.popupComponentPaintable) {
    $setWidget_0(this$static, dynamicCast(newPopupComponent, 70));
    this$static.popupComponentWidget = dynamicCast(newPopupComponent, 70);
    this$static.popupComponentPaintable = newPopupComponent;
  }
  this$static.popupComponentPaintable.updateFromUIDL(uidl[2], client);
}

function VPopupView$CustomPopup_0(this$0){
  this.this$0 = this$0;
  VOverlay_1.call(this, true, false);
  this.activeChildren = new HashSet_0;
}

function VPopupView$CustomPopup(){
}

_ = VPopupView$CustomPopup_0.prototype = VPopupView$CustomPopup.prototype = new VOverlay;
_.getClass$ = function getClass_687(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupView$CustomPopup_2_classLit;
}
;
_.getContainerElement = function getContainerElement_7(){
  return $getFirstChildElement(this.element_0);
}
;
_.getParent = function getParent_0(){
  return !this.attached || this.hiding?this.parent_0:this.this$0;
}
;
_.hide_0 = function hide_5(autoClosed){
  $hide_2(this, autoClosed);
}
;
_.onDetach = function onDetach_13(){
  $onDetach(this);
  $removeShadowIfPresent(this);
  this.hiding = false;
}
;
_.onEventPreview = function onEventPreview_5(event_0){
  var eventTargetsPopup, target, type;
  target = event_0.target;
  eventTargetsPopup = $isOrHasChild(this.element_0, target);
  type = $eventGetTypeInt(event_0.type);
  eventTargetsPopup && type == 256 && $add_14(this.activeChildren, target);
  eventTargetsPopup && type == 64 && (this.hasHadMouseOver = true);
  if (!eventTargetsPopup && type == 64) {
    if (this.hasHadMouseOver && this.hideOnMouseOut) {
      $hide_2(this, false);
      return true;
    }
  }
  if (!eventTargetsPopup && type == 512 && (event_0.keyCode || 0) == 9) {
    if (this.hideOnMouseOut) {
      $hide_2(this, false);
      return true;
    }
  }
  return true;
}
;
_.remove_2 = function remove_14(w){
  return this.popupComponentPaintable = null , this.popupComponentWidget = null , this.captionWrapper = null , $remove_4(this, w);
}
;
_.show = function show_3(){
  this.hiding = false;
  $show_0(this);
}
;
_.castableTypeMap$ = {9:1, 10:1, 11:1, 12:1, 13:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 33:1, 69:1, 70:1, 72:1, 75:1, 76:1, 77:1};
_.captionWrapper = null;
_.hasHadMouseOver = false;
_.hideOnMouseOut = true;
_.hiding = false;
_.popupComponentPaintable = null;
_.popupComponentWidget = null;
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader26_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader26'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$38$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$38$1'), Lcom_vaadin_terminal_gwt_client_ui_VPopupView$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupView$1'), Lcom_vaadin_terminal_gwt_client_ui_VPopupView$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupView$2'), Lcom_vaadin_terminal_gwt_client_ui_VPopupView$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupView$3'), Lcom_vaadin_terminal_gwt_client_ui_VPopupView$CustomPopup_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupView$CustomPopup');
$entry(onLoad_17)();
