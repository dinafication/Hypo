function $runCallbacks_27(){
  var $e0, e, handler;
  while (callbacksHead_27) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_27 = callbacksHead_27.next;
    !callbacksHead_27 && (callbacksTail_27 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPanel_2_classLit, new WidgetMapImpl$49$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPanel_2_classLit, new WidgetMapImpl$49$1_0);
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

function AsyncLoader35_0(){
}

function onLoad_27(){
  instance_28 = new AsyncLoader35_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 35);
  !!$stats && $stats($createStatsEvent('runCallbacks35', 'begin', -1, -1));
  instance_28.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks35', 'end', -1, -1));
}

function AsyncLoader35(){
}

_ = AsyncLoader35_0.prototype = AsyncLoader35.prototype = new Object_0;
_.getClass$ = function getClass_239(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader35_2_classLit;
}
;
_.runCallbacks = function runCallbacks_27(){
  $runCallbacks_27();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$49$1_0(){
}

function WidgetMapImpl$49$1(){
}

_ = WidgetMapImpl$49$1_0.prototype = WidgetMapImpl$49$1.prototype = new Object_0;
_.get = function get_43(){
  return new VPanel_0;
}
;
_.getClass$ = function getClass_541(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$49$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $detectContainerBorders(this$static){
  this$static.contentNode.style['overflow'] = 'hidden';
  this$static.borderPaddingHorizontal = measureHorizontalBorder(this$static.contentNode);
  this$static.borderPaddingVertical = measureVerticalBorder(this$static.contentNode);
  this$static.contentNode.style['overflow'] = 'auto';
  this$static.captionPaddingHorizontal = measureHorizontalPaddingAndBorder(this$static.captionNode, 26);
  this$static.captionMarginLeft = measureMarginLeft(this$static.captionNode);
  this$static.contentMarginLeft = measureMarginLeft(this$static.contentNode);
}

function $getTouchScrollDelegate(this$static){
  !this$static.touchScrollDelegate && (this$static.touchScrollDelegate = new TouchScrollDelegate_0(initValues(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {30:1, 35:1}, 0, [this$static.contentNode])));
  return this$static.touchScrollDelegate;
}

function $handleError(this$static, uidl){
  if ('error' in uidl[1]) {
    if (!this$static.errorIndicatorElement) {
      this$static.errorIndicatorElement = $doc.createElement('span');
      this$static.errorIndicatorElement['className'] = 'v-errorindicator';
      sinkEvents(this$static.errorIndicatorElement, 124);
      this$static.eventsToSink == -1?sinkEvents(this$static.element_0, 124 | (this$static.element_0.__eventBits || 0)):(this$static.eventsToSink |= 124);
    }
    this$static.captionNode.insertBefore(this$static.errorIndicatorElement, this$static.captionText);
  }
   else if (this$static.errorIndicatorElement) {
    this$static.captionNode.removeChild(this$static.errorIndicatorElement);
    this$static.errorIndicatorElement = null;
  }
}

function $runHacks(this$static, runGeckoFix){
  var availWidth, captionWidth, contentMarginLeft, layoutWidth, parentPadding, parentWidthExcludingPadding, width;
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && this$static.width_0 != null && !$equals_2(this$static.width_0, '')) {
    this$static.captionNode.style['width'] = '1px';
    parentPadding = measureHorizontalPaddingAndBorder(this$static.element_0, 0);
    parentWidthExcludingPadding = (this$static.element_0.offsetWidth || 0) - parentPadding;
    setWidthExcludingPaddingAndBorder_0(this$static.captionNode, parentWidthExcludingPadding - (this$static.captionMarginLeft < 0 && $detectContainerBorders(this$static) , this$static.captionMarginLeft), 26, false);
    contentMarginLeft = (this$static.contentMarginLeft < 0 && $detectContainerBorders(this$static) , this$static.contentMarginLeft);
    setWidthExcludingPaddingAndBorder_0(this$static.contentNode, parentWidthExcludingPadding - contentMarginLeft, 2, false);
  }
  if (((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isIE || $isFF2((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40))) && (this$static.width_0 == null || $equals_2(this$static.width_0, ''))) {
    captionWidth = (this$static.captionText.offsetWidth || 0) + (this$static.captionMarginLeft < 0 && $detectContainerBorders(this$static) , this$static.captionMarginLeft) + (this$static.captionPaddingHorizontal < 0 && $detectContainerBorders(this$static) , this$static.captionPaddingHorizontal);
    layoutWidth = dynamicCast(this$static.layout, 70).getOffsetWidth() + (this$static.borderPaddingHorizontal < 0 && $detectContainerBorders(this$static) , this$static.borderPaddingHorizontal);
    width = layoutWidth;
    captionWidth > layoutWidth && (width = captionWidth);
    $isIE7((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) && setWidthExcludingPaddingAndBorder_0(this$static.captionNode, width - (this$static.captionMarginLeft < 0 && $detectContainerBorders(this$static) , this$static.captionMarginLeft), 26, false);
    this$static.element_0.style['width'] = width + 'px';
  }
  if (runGeckoFix && (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isGecko) {
    if (this$static.width_0 == null || $equals_2(this$static.width_0, '')) {
      if (!this$static.geckoCaptionMeter) {
        this$static.geckoCaptionMeter = $doc.createElement('div');
        this$static.captionNode.appendChild(this$static.geckoCaptionMeter);
      }
      captionWidth = parseInt(this$static.captionText['offsetWidth']) || 0;
      availWidth = parseInt(this$static.geckoCaptionMeter['offsetWidth']) || 0;
      captionWidth == availWidth?$setWidth_8(this$static, (parseInt(this$static.element_0['offsetWidth']) || 0) + 'px'):(this$static.captionNode.style['width'] = '' , undefined);
    }
  }
  $runDescendentsLayout(this$static.client, this$static);
  runWebkitOverflowAutoFix(this$static.contentNode);
}

function $setIconUri(this$static, uidl, client){
  var iconUri;
  iconUri = 'icon' in uidl[1]?uidl[1]['icon']:null;
  if (iconUri == null) {
    if (this$static.icon) {
      this$static.captionNode.removeChild(this$static.icon.element_0);
      this$static.icon = null;
    }
  }
   else {
    if (!this$static.icon) {
      this$static.icon = new Icon_0(client);
      $insertChild(this$static.captionNode, this$static.icon.element_0, 0);
    }
    $setUri(this$static.icon, iconUri);
  }
}

function $setStyleName_5(this$static, style){
  if (!$equals_2(style, this$static.previousStyleName)) {
    this$static.element_0['className'] = style;
    $detectContainerBorders(this$static);
    this$static.previousStyleName = style;
  }
}

function $setWidth_8(this$static, width){
  if ($equals_2(this$static.width_0, width)) {
    return;
  }
  this$static.width_0 = width;
  this$static.element_0.style['width'] = width;
  if (!this$static.rendering) {
    $runHacks(this$static, true);
    $equals_2(this$static.height_0, '') && updateRelativeChildrenAndSendSizeUpdateEvent(this$static.client, this$static);
  }
}

function VPanel_0(){
  var captionWrap;
  this.element_0 = $doc.createElement('div');
  this.captionNode = $doc.createElement('div');
  this.captionText = $doc.createElement('span');
  this.bottomDecoration = $doc.createElement('div');
  this.contentNode = $doc.createElement('div');
  this.renderInformation = new RenderInformation_0;
  this.clickEventHandler = new VPanel$1_0(this, this);
  captionWrap = $doc.createElement('div');
  captionWrap.appendChild(this.captionNode);
  this.captionNode.appendChild(this.captionText);
  captionWrap.className = 'v-panel-captionwrap';
  this.captionNode.className = 'v-panel-caption';
  this.contentNode.className = 'v-panel-content';
  this.bottomDecoration.className = 'v-panel-deco';
  this.element_0.appendChild(captionWrap);
  this.contentNode.tabIndex = -1;
  this.element_0.appendChild(this.contentNode);
  this.element_0.appendChild(this.bottomDecoration);
  $setStyleName_5(this, 'v-panel');
  sinkEvents(this.element_0, 128);
  sinkEvents(this.contentNode, 15745024);
  this.contentNode.style['position'] = 'relative';
  this.element_0.style['overflow'] = 'hidden';
  $addHandler(this, new VPanel$2_0(this), ($clinit_31() , $clinit_31() , TYPE_17));
}

function VPanel(){
}

_ = VPanel_0.prototype = VPanel.prototype = new SimplePanel;
_.focus_0 = function focus_14(){
  this.contentNode.focus();
}
;
_.getAllocatedSpace = function getAllocatedSpace_15(child){
  var h_0, w;
  w = 0;
  h_0 = 0;
  if (this.width_0 != null && !$equals_2(this.width_0, '')) {
    w = (parseInt(this.element_0['offsetWidth']) || 0) - (this.borderPaddingHorizontal < 0 && $detectContainerBorders(this) , this.borderPaddingHorizontal);
    w < 0 && (w = 0);
  }
  if (this.height_0 != null && !$equals_2(this.height_0, '')) {
    h_0 = (this.contentNode.offsetHeight || 0) - (this.borderPaddingVertical < 0 && $detectContainerBorders(this) , this.borderPaddingVertical);
    h_0 < 0 && (h_0 = 0);
  }
  return new RenderSpace_2(w, h_0, true);
}
;
_.getClass$ = function getClass_670(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement_6(){
  return this.contentNode;
}
;
_.getShortcutActionHandler = function getShortcutActionHandler_1(){
  return this.shortcutHandler;
}
;
_.onAttach = function onAttach_7(){
  $onAttach(this);
  $detectContainerBorders(this);
}
;
_.onBrowserEvent = function onBrowserEvent_33(event_0){
  var newscrollLeft, newscrollTop, target, type;
  $onBrowserEvent(this, event_0);
  target = event_0.target;
  type = $eventGetTypeInt(event_0.type);
  if (type == 128 && !!this.shortcutHandler) {
    $handleKeyboardEvent(this.shortcutHandler, event_0, null);
    return;
  }
  if (type == 16384) {
    newscrollTop = parseInt(this.contentNode['scrollTop']) || 0;
    newscrollLeft = parseInt(this.contentNode['scrollLeft']) || 0;
    if (!!this.client && (newscrollLeft != this.scrollLeft_0 || newscrollTop != this.scrollTop_0)) {
      this.scrollLeft_0 = newscrollLeft;
      this.scrollTop_0 = newscrollTop;
      $addVariableToQueue(this.client, this.id_0, 'scrollTop', '' + this.scrollTop_0, false, 105);
      $addVariableToQueue(this.client, this.id_0, 'scrollLeft', '' + this.scrollLeft_0, false, 105);
    }
  }
   else 
    $isOrHasChild(this.captionNode, target) && !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.replaceChildComponent = function replaceChildComponent_14(oldComponent, newComponent){
  if (oldComponent != this.layout) {
    return;
  }
  $setWidget(this, newComponent);
  this.layout = dynamicCast(newComponent, 26);
}
;
_.requestLayout = function requestLayout_15(child){
  $handleComponentRelativeSize_0(this.client, dynamicCast(this.layout, 70));
  if (this.height_0 != null && this.height_0 != '' && this.width_0 != null && this.width_0 != '') {
    return true;
  }
  $runHacks(this, false);
  return !$updateSize(this.renderInformation, this.element_0);
}
;
_.setHeight = function setHeight_20(height){
  var containerHeight, targetHeight, parent_0;
  this.height_0 = height;
  this.element_0.style['height'] = height;
  if (height != null && !$equals_2('', height)) {
    targetHeight = parseInt(this.element_0['offsetHeight']) || 0;
    containerHeight = targetHeight - ((parent_0 = this.captionNode.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).offsetHeight || 0) - (this.bottomDecoration.offsetHeight || 0) - (this.borderPaddingVertical < 0 && $detectContainerBorders(this) , this.borderPaddingVertical);
    containerHeight < 0 && (containerHeight = 0);
    this.contentNode.style['height'] = containerHeight + 'px';
  }
   else {
    this.contentNode.style['height'] = '';
  }
  this.rendering || $runHacks(this, true);
}
;
_.setStyleName = function setStyleName_6(style){
  $setStyleName_5(this, style);
}
;
_.setWidth = function setWidth_28(width){
  $setWidth_8(this, width);
}
;
_.updateCaption = function updateCaption_16(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_39(uidl, client){
  var captionBaseClass, captionClass, childUidl, cnt, contentClass, decoClass, hasCaption, i, layoutUidl, newLayout, styles;
  this.rendering = true;
  if (!('cached' in uidl[1])) {
    this.contentNode.className = 'v-panel-content';
    this.bottomDecoration.className = 'v-panel-deco';
    this.captionNode.className = 'v-panel-caption';
    hasCaption = false;
    if ('caption' in uidl[1] && !$equals_2(uidl[1]['caption'], '')) {
      this.captionText.innerHTML = uidl[1]['caption'] || '';
      hasCaption = true;
    }
     else {
      this.captionText.innerHTML = '';
      this.captionNode.className = 'v-panel-nocaption';
    }
    if ('style' in uidl[1]) {
      styles = $split_0(uidl[1]['style'], ' ', 0);
      captionBaseClass = 'v-panel' + (hasCaption?'-caption':'-nocaption');
      captionClass = captionBaseClass;
      contentClass = 'v-panel-content';
      decoClass = 'v-panel-deco';
      for (i = 0; i < styles.length; ++i) {
        captionClass += ' ' + captionBaseClass + '-' + styles[i];
        contentClass += ' v-panel-content-' + styles[i];
        decoClass += ' v-panel-deco-' + styles[i];
      }
      this.captionNode.className = captionClass;
      this.contentNode.className = contentClass;
      this.bottomDecoration.className = decoClass;
    }
  }
  if ($updateComponent(client, this, uidl, false)) {
    this.rendering = false;
    return;
  }
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  this.client = client;
  this.id_0 = uidl[1]['id'];
  $setIconUri(this, uidl, client);
  $handleError(this, uidl);
  layoutUidl = uidl[2];
  newLayout = $getPaintable(client, layoutUidl);
  if (newLayout != this.layout) {
    !!this.layout && $unregisterPaintable(client, this.layout);
    $setWidget(this, dynamicCast(newLayout, 70));
    this.layout = newLayout;
  }
  this.layout.updateFromUIDL(layoutUidl, client);
  if (uidl.length - 2 > 1) {
    cnt = uidl.length - 2;
    for (i = 1; i < cnt; ++i) {
      childUidl = uidl[i + 2];
      if ($equals_2(childUidl[0], 'actions')) {
        !this.shortcutHandler && (this.shortcutHandler = new ShortcutActionHandler_0(this.id_0, client));
        $updateActionMap(this.shortcutHandler, childUidl);
      }
    }
  }
  if (Boolean(uidl[1]['v']) && 'scrollTop' in uidl[1]['v'] && uidl[1]['v']['scrollTop'] != this.scrollTop_0) {
    this.scrollTop_0 = uidl[1]['v']['scrollTop'];
    this.contentNode.scrollTop = this.scrollTop_0;
    this.scrollTop_0 = this.contentNode.scrollTop || 0;
  }
  if (Boolean(uidl[1]['v']) && 'scrollLeft' in uidl[1]['v'] && uidl[1]['v']['scrollLeft'] != this.scrollLeft_0) {
    this.scrollLeft_0 = uidl[1]['v']['scrollLeft'];
    $setScrollLeft(this.contentNode, this.scrollLeft_0);
    this.scrollLeft_0 = $getScrollLeft(this.contentNode);
  }
  $runHacks(this, false);
  Boolean(uidl[1]['v']) && 'tabindex' in uidl[1]['v'] && (this.contentNode.tabIndex = uidl[1]['v']['tabindex'] , undefined);
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 24:1, 25:1, 26:1, 29:1, 33:1, 69:1, 70:1, 75:1, 76:1};
_.borderPaddingHorizontal = -1;
_.borderPaddingVertical = -1;
_.captionMarginLeft = -1;
_.captionPaddingHorizontal = -1;
_.client = null;
_.contentMarginLeft = -1;
_.errorIndicatorElement = null;
_.geckoCaptionMeter = null;
_.height_0 = null;
_.icon = null;
_.id_0 = null;
_.layout = null;
_.previousStyleName = null;
_.rendering = false;
_.scrollLeft_0 = 0;
_.scrollTop_0 = 0;
_.shortcutHandler = null;
_.touchScrollDelegate = null;
_.width_0 = '';
function VPanel$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'click';
}

function VPanel$1(){
}

_ = VPanel$1_0.prototype = VPanel$1.prototype = new ClickEventHandler;
_.getClass$ = function getClass_671(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPanel$1_2_classLit;
}
;
_.registerHandler = function registerHandler_4(handler, type){
  return $addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
function VPanel$2_0(this$0){
  this.this$0 = this$0;
}

function VPanel$2(){
}

_ = VPanel$2_0.prototype = VPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_672(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPanel$2_2_classLit;
}
;
_.onTouchStart = function onTouchStart_4(event_0){
  $onTouchStart($getTouchScrollDelegate(this.this$0), event_0);
}
;
_.castableTypeMap$ = {12:1, 53:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader35_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader35'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$49$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$49$1'), Lcom_vaadin_terminal_gwt_client_ui_VPanel$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPanel$1'), Lcom_vaadin_terminal_gwt_client_ui_VPanel$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPanel$2');
$entry(onLoad_27)();
