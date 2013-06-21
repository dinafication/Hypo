function $runCallbacks_18(){
  var $e0, e, handler;
  while (callbacksHead_18) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_18 = callbacksHead_18.next;
    !callbacksHead_18 && (callbacksTail_18 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSlider_2_classLit, new WidgetMapImpl$41$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSlider_2_classLit, new WidgetMapImpl$41$1_0);
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

function AsyncLoader27_0(){
}

function onLoad_18(){
  instance_19 = new AsyncLoader27_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 27);
  !!$stats && $stats($createStatsEvent('runCallbacks27', 'begin', -1, -1));
  instance_19.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks27', 'end', -1, -1));
}

function AsyncLoader27(){
}

_ = AsyncLoader27_0.prototype = AsyncLoader27.prototype = new Object_0;
_.getClass$ = function getClass_212(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader27_2_classLit;
}
;
_.runCallbacks = function runCallbacks_18(){
  $runCallbacks_18();
}
;
_.castableTypeMap$ = {};
function HTML_2(){
  HTML_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, '', true);
  this.element_0.style['whiteSpace'] = 'nowrap';
}

_ = HTML_2.prototype = HTML.prototype;
function WidgetMapImpl$41$1_0(){
}

function WidgetMapImpl$41$1(){
}

_ = WidgetMapImpl$41$1_0.prototype = WidgetMapImpl$41$1.prototype = new Object_0;
_.get = function get_35(){
  return new VSlider_0;
}
;
_.getClass$ = function getClass_533(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$41$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $buildBase(this$static){
  var domProperty, p, styleAttribute, parent_0;
  styleAttribute = this$static.vertical?'height':'width';
  domProperty = this$static.vertical?'offsetHeight':'offsetWidth';
  p = (parent_0 = this$static.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  if ((parseInt(p[domProperty]) || 0) > 50) {
    this$static.vertical?$setHeight_1(this$static):(this$static.base.style[styleAttribute] = '' , undefined);
  }
   else {
    this$static.base.style[styleAttribute] = '50px';
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VSlider$4_0(this$static, domProperty, styleAttribute));
  }
}

function $buildHandle(this$static){
  var baseS, domProperty, handleAttribute, range, s, styleAttribute;
  styleAttribute = this$static.vertical?'height':'width';
  handleAttribute = this$static.vertical?'marginTop':'marginLeft';
  domProperty = this$static.vertical?'offsetHeight':'offsetWidth';
  this$static.handle.style[handleAttribute] = '0';
  if (this$static.scrollbarStyle) {
    s = ~~Math.max(Math.min(__parseAndValidateDouble($getPropertyString(this$static.base, domProperty)) / 100 * this$static.handleSize, 2147483647), -2147483648);
    if (this$static.handleSize == -1) {
      baseS = __parseAndValidateInt($getPropertyString(this$static.base, domProperty));
      range = (this$static.max_0 - this$static.min_0) * (this$static.resolution + 1) * 3;
      s = ~~Math.max(Math.min(baseS - range, 2147483647), -2147483648);
    }
    s < 3 && (s = 3);
    this$static.handle.style[styleAttribute] = s + 'px';
  }
   else {
    this$static.handle.style[styleAttribute] = '';
  }
  this$static.handle.style['visibility'] = 'visible';
}

function $handleNavigation_2(this$static, keycode, ctrl, shift){
  var a_0;
  if (ctrl) {
    return false;
  }
  if (keycode == 38 && this$static.vertical || keycode == 39 && !this$static.vertical) {
    if (shift) {
      for (a_0 = 0; a_0 < this$static.acceleration; ++a_0) {
        $setValue_2(this$static, new Double_0(this$static.value_0.value_0 + Math.pow(10, -this$static.resolution)), false);
      }
      ++this$static.acceleration;
    }
     else {
      $setValue_2(this$static, new Double_0(this$static.value_0.value_0 + Math.pow(10, -this$static.resolution)), false);
    }
    return true;
  }
   else if (keycode == 40 && this$static.vertical || keycode == 37 && !this$static.vertical) {
    if (shift) {
      for (a_0 = 0; a_0 < this$static.acceleration; ++a_0) {
        $setValue_2(this$static, new Double_0(this$static.value_0.value_0 - Math.pow(10, -this$static.resolution)), false);
      }
      ++this$static.acceleration;
    }
     else {
      $setValue_2(this$static, new Double_0(this$static.value_0.value_0 - Math.pow(10, -this$static.resolution)), false);
    }
    return true;
  }
  return false;
}

function $processBaseEvent(this$static, event_0){
  if ($eventGetTypeInt(event_0.type) == 4) {
    if (!this$static.disabled_0 && !this$static.readonly && !this$static.dragging) {
      $setValueByEvent(this$static, event_0, true);
      event_0.cancelBubble = true;
    }
  }
   else if ($eventGetTypeInt(event_0.type) == 4 && this$static.dragging) {
    this$static.dragging = false;
    releaseCapture(this$static.element_0);
    $setValueByEvent(this$static, event_0, true);
  }
}

function $processHandleEvent(this$static, event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 1048576:
      if (!this$static.disabled_0 && !this$static.readonly) {
        $clinit_53();
        $focus(this$static.element_0);
        $show_5(this$static.feedbackPopup);
        this$static.dragging = true;
        this$static.handle['className'] = 'v-slider-handle v-slider-handle-active';
        setCapture(this$static.element_0);
        event_0.preventDefault();
        event_0.cancelBubble = true;
        event_0.stopPropagation();
        impl_2.log_0('Slider move start');
      }

      break;
    case 64:
    case 2097152:
      if (this$static.dragging) {
        impl_2.log_0('Slider move');
        $setValueByEvent(this$static, event_0, false);
        this$static.vertical?$setPopupPosition_0(this$static.feedbackPopup, ($getAbsoluteLeft(this$static.handle) | 0) + (this$static.handle.offsetWidth || 0), ($getAbsoluteTop(this$static.handle) | 0) + ~~((this$static.handle.offsetHeight || 0) / 2) - ~~((parseInt(this$static.feedbackPopup.element_0['offsetHeight']) || 0) / 2)):$setPopupPosition_0(this$static.feedbackPopup, ($getAbsoluteLeft(this$static.handle) | 0) + ~~((this$static.handle.offsetWidth || 0) / 2) - ~~((parseInt(this$static.feedbackPopup.element_0['offsetWidth']) || 0) / 2), ($getAbsoluteTop(this$static.handle) | 0) - (parseInt(this$static.feedbackPopup.element_0['offsetHeight']) || 0));
        event_0.stopPropagation();
      }

      break;
    case 4194304:
      $hide(this$static.feedbackPopup, false);
      runIE7ZeroSizedBodyFix();
    case 8:
      impl_2.log_0('Slider move end');
      this$static.dragging = false;
      this$static.handle['className'] = 'v-slider-handle';
      releaseCapture(this$static.element_0);
      $setValueByEvent(this$static, event_0, true);
      event_0.stopPropagation();
  }
}

function $setFeedbackValue(this$static, value){
  var currentValue;
  currentValue = '' + value;
  this$static.resolution == 0 && (currentValue = '' + ~~Math.max(Math.min((new Double_0(value)).value_0, 2147483647), -2147483648));
  this$static.feedback.setText(currentValue);
}

function $setHeight_1(this$static){
  var h_0;
  this$static.base.style['height'] = '0';
  this$static.base.style['overflow'] = 'hidden';
  h_0 = parseInt(this$static.element_0['offsetHeight']) || 0;
  h_0 < 50 && (h_0 = 50);
  this$static.base.style['height'] = h_0 + 'px';
  this$static.base.style['overflow'] = '';
}

function $setValue_2(this$static, value, updateToServer){
  var baseSize, domProperty, handleSize, p, range, styleAttribute, v, valueRange;
  if (!value) {
    return;
  }
  value.value_0 < this$static.min_0?(value = new Double_0(this$static.min_0)):value.value_0 > this$static.max_0 && (value = new Double_0(this$static.max_0));
  styleAttribute = this$static.vertical?'marginTop':'marginLeft';
  domProperty = this$static.vertical?'offsetHeight':'offsetWidth';
  handleSize = __parseAndValidateInt($getPropertyString(this$static.handle, domProperty));
  baseSize = __parseAndValidateInt($getPropertyString(this$static.base, domProperty)) - 2;
  range = baseSize - handleSize;
  v = value.value_0;
  if (this$static.resolution > 0) {
    v = toDouble(fromDouble(round0(v * Math.pow(10, this$static.resolution))));
    v = v / Math.pow(10, this$static.resolution);
  }
   else {
    v = toDouble(fromDouble(Math.round(v)));
  }
  valueRange = this$static.max_0 - this$static.min_0;
  p = 0;
  valueRange > 0 && (p = range * ((v - this$static.min_0) / valueRange));
  p < 0 && (p = 0);
  this$static.vertical && (p = range - p - ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))?1:0));
  this$static.handle.style[styleAttribute] = toString_7(fromDouble(Math.round(p))) + 'px';
  this$static.value_0 = new Double_0(v);
  $setFeedbackValue(this$static, v);
  updateToServer && $addVariableToQueue(this$static.client, this$static.id_0, 'value', '' + this$static.value_0.value_0, this$static.immediate, 100);
}

function $setValueByEvent(this$static, event_0, updateToServer){
  var baseOffset, baseSize, coord, handleSize, v;
  coord = this$static.vertical?($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientY:event_0.clientY || 0):($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientX:event_0.clientX || 0);
  if (this$static.vertical) {
    handleSize = this$static.handle.offsetHeight || 0;
    baseSize = this$static.base.offsetHeight || 0;
    baseOffset = ($getAbsoluteTop(this$static.base) | 0) - ($doc.body.scrollTop || 0) - ~~(handleSize / 2);
  }
   else {
    handleSize = this$static.handle.offsetWidth || 0;
    baseSize = this$static.base.offsetWidth || 0;
    baseOffset = ($getAbsoluteLeft(this$static.base) | 0) - $getScrollLeft($doc.body) + ~~(handleSize / 2);
  }
  this$static.vertical?(v = (baseSize - (coord - baseOffset)) / (baseSize - handleSize) * (this$static.max_0 - this$static.min_0) + this$static.min_0):(v = (coord - baseOffset) / (baseSize - handleSize) * (this$static.max_0 - this$static.min_0) + this$static.min_0);
  v < this$static.min_0?(v = this$static.min_0):v > this$static.max_0 && (v = this$static.max_0);
  $setValue_2(this$static, new Double_0(v), updateToServer);
}

function $updateFeedbackPosition(this$static){
  this$static.vertical?$setPopupPosition_0(this$static.feedbackPopup, ($getAbsoluteLeft(this$static.handle) | 0) + (this$static.handle.offsetWidth || 0), ($getAbsoluteTop(this$static.handle) | 0) + ~~((this$static.handle.offsetHeight || 0) / 2) - ~~((parseInt(this$static.feedbackPopup.element_0['offsetHeight']) || 0) / 2)):$setPopupPosition_0(this$static.feedbackPopup, ($getAbsoluteLeft(this$static.handle) | 0) + ~~((this$static.handle.offsetWidth || 0) / 2) - ~~((parseInt(this$static.feedbackPopup.element_0['offsetWidth']) || 0) / 2), ($getAbsoluteTop(this$static.handle) | 0) - (parseInt(this$static.feedbackPopup.element_0['offsetHeight']) || 0));
}

function $updateValueToServer(this$static){
  $addVariableToQueue(this$static.client, this$static.id_0, 'value', '' + this$static.value_0.value_0, this$static.immediate, 100);
}

function VSlider_0(){
  this.element_0 = $doc.createElement('div');
  this.setTabIndex(0);
  this.feedback = new HTML_2;
  this.feedbackPopup = new VSlider$1_0(this);
  this.delayedValueUpdater = new VLazyExecutor_0(100, new VSlider$2_0(this));
  this.base = $doc.createElement('div');
  this.handle = $doc.createElement('div');
  this.smaller = $doc.createElement('div');
  this.bigger = $doc.createElement('div');
  this.element_0['className'] = 'v-slider';
  this.base['className'] = 'v-slider-base';
  this.handle['className'] = 'v-slider-handle';
  this.smaller['className'] = 'v-slider-smaller';
  this.bigger['className'] = 'v-slider-bigger';
  this.element_0.appendChild(this.bigger);
  this.element_0.appendChild(this.smaller);
  this.element_0.appendChild(this.base);
  this.base.appendChild(this.handle);
  this.smaller.style['display'] = 'none';
  this.bigger.style['display'] = 'none';
  this.handle.style['visibility'] = 'hidden';
  this.eventsToSink == -1?sinkEvents(this.element_0, 15866876 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 15866876);
  setStyleName(this.feedbackPopup.getStyleElement(), 'v-slider-feedback', true);
  $setWidget_0(this.feedbackPopup, this.feedback);
}

function VSlider(){
}

_ = VSlider_0.prototype = VSlider.prototype = new SimpleFocusablePanel;
_.getClass$ = function getClass_731(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSlider_2_classLit;
}
;
_.iLayout = function iLayout_3(){
  this.vertical && $setHeight_1(this);
  $setValue_2(this, this.value_0, false);
}
;
_.onBrowserEvent = function onBrowserEvent_40(event_0){
  var targ, dir;
  if (this.disabled_0 || this.readonly) {
    return;
  }
  targ = event_0.target;
  if ($eventGetTypeInt(event_0.type) == 131072) {
    dir = Math.round(-event_0.wheelDelta / 40) || 0;
    dir < 0?$setValue_2(this, new Double_0(this.value_0.value_0 + Math.pow(10, -this.resolution)), false):$setValue_2(this, new Double_0(this.value_0.value_0 - Math.pow(10, -this.resolution)), false);
    $trigger_0(this.delayedValueUpdater);
    event_0.preventDefault();
    event_0.cancelBubble = true;
  }
   else if (this.dragging || targ == this.handle) {
    $processHandleEvent(this, event_0);
  }
   else if (targ == this.smaller) {
    $setValue_2(this, new Double_0(this.value_0.value_0 - Math.pow(10, -this.resolution)), true);
  }
   else if (targ == this.bigger) {
    $setValue_2(this, new Double_0(this.value_0.value_0 + Math.pow(10, -this.resolution)), true);
  }
   else if ($eventGetTypeInt(event_0.type) == 124) {
    $processBaseEvent(this, event_0);
  }
   else if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko && $eventGetTypeInt(event_0.type) == 256 || !(!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isGecko && $eventGetTypeInt(event_0.type) == 128) {
    if ($handleNavigation_2(this, event_0.keyCode || 0, !!event_0.ctrlKey, !!event_0.shiftKey)) {
      $show_5(this.feedbackPopup);
      $trigger_0(this.delayedValueUpdater);
      event_0.preventDefault();
      event_0.cancelBubble = true;
    }
  }
   else 
    targ == this.element_0 && $eventGetTypeInt(event_0.type) == 2048?$show_5(this.feedbackPopup):targ == this.element_0 && $eventGetTypeInt(event_0.type) == 4096?($hide(this.feedbackPopup, false) , runIE7ZeroSizedBodyFix()):$eventGetTypeInt(event_0.type) == 4 && $show_5(this.feedbackPopup);
  $clinit_67();
  if (event_0.type.indexOf('touch') != -1) {
    event_0.preventDefault();
    event_0.stopPropagation();
  }
}
;
_.updateFromUIDL = function updateFromUIDL_46(uidl, client){
  var style;
  this.client = client;
  this.id_0 = uidl[1]['id'];
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.immediate = Boolean(uidl[1]['immediate']);
  this.disabled_0 = Boolean(uidl[1]['disabled']);
  this.readonly = Boolean(uidl[1]['readonly']);
  this.vertical = 'vertical' in uidl[1];
  this.arrows = 'arrows' in uidl[1];
  style = '';
  'style' in uidl[1] && (style = uidl[1]['style']);
  this.scrollbarStyle = style.indexOf('scrollbar') > -1;
  if (this.arrows) {
    this.smaller.style['display'] = 'block';
    this.bigger.style['display'] = 'block';
  }
  this.vertical?setStyleName(this.element_0, 'v-slider-vertical', true):setStyleName(this.element_0, 'v-slider-vertical', false);
  this.min_0 = uidl[1]['min'];
  this.max_0 = uidl[1]['max'];
  this.resolution = uidl[1]['resolution'];
  this.value_0 = new Double_0(uidl[1]['v']['value']);
  $setFeedbackValue(this, this.value_0.value_0);
  this.handleSize = uidl[1]['hsize'];
  $buildBase(this);
  if (this.vertical) {
    $buildHandle(this);
    $setValue_2(this, this.value_0, false);
  }
   else {
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VSlider$3_0(this));
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 25:1, 26:1, 33:1, 69:1, 70:1, 75:1, 76:1, 124:1, 126:1, 131:1, 132:1};
_.acceleration = 1;
_.arrows = false;
_.base = null;
_.bigger = null;
_.client = null;
_.disabled_0 = false;
_.dragging = false;
_.handle = null;
_.handleSize = 0;
_.id_0 = null;
_.immediate = false;
_.max_0 = 0;
_.min_0 = 0;
_.readonly = false;
_.resolution = 0;
_.scrollbarStyle = false;
_.smaller = null;
_.value_0 = null;
_.vertical = false;
function $show_5(this$static){
  $show_0(this$static);
  $updateFeedbackPosition(this$static.this$0);
}

function VSlider$1_0(this$0){
  this.this$0 = this$0;
  VOverlay_1.call(this, true, false);
}

function VSlider$1(){
}

_ = VSlider$1_0.prototype = VSlider$1.prototype = new VOverlay;
_.getClass$ = function getClass_732(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSlider$1_2_classLit;
}
;
_.show = function show_4(){
  $show_0(this);
  $updateFeedbackPosition(this.this$0);
}
;
_.castableTypeMap$ = {9:1, 10:1, 11:1, 12:1, 13:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 33:1, 69:1, 70:1, 72:1, 75:1, 76:1, 77:1};
_.this$0 = null;
function VSlider$2_0(this$0){
  this.this$0 = this$0;
}

function VSlider$2(){
}

_ = VSlider$2_0.prototype = VSlider$2.prototype = new Object_0;
_.execute_0 = function execute_55(){
  $updateValueToServer(this.this$0);
  this.this$0.acceleration = 1;
}
;
_.getClass$ = function getClass_733(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSlider$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$0 = null;
function VSlider$3_0(this$0){
  this.this$0 = this$0;
}

function VSlider$3(){
}

_ = VSlider$3_0.prototype = VSlider$3.prototype = new Object_0;
_.execute_0 = function execute_56(){
  $buildHandle(this.this$0);
  $setValue_2(this.this$0, this.this$0.value_0, false);
}
;
_.getClass$ = function getClass_734(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSlider$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VSlider$4_0(this$0, val$domProperty, val$styleAttribute){
  this.this$0 = this$0;
  this.val$domProperty = val$domProperty;
  this.val$styleAttribute = val$styleAttribute;
}

function VSlider$4(){
}

_ = VSlider$4_0.prototype = VSlider$4.prototype = new Object_0;
_.execute_0 = function execute_57(){
  var p, parent_0;
  p = (parent_0 = this.this$0.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  if ((parseInt(p[this.val$domProperty]) || 0) > 55) {
    this.this$0.vertical?$setHeight_1(this.this$0):(this.this$0.base.style[this.val$styleAttribute] = '' , undefined);
    $setValue_2(this.this$0, this.this$0.value_0, false);
  }
}
;
_.getClass$ = function getClass_735(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSlider$4_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$domProperty = null;
_.val$styleAttribute = null;
function Double_0(value){
  this.value_0 = value;
}

function compare_0(x, y){
  if (isNaN(x)) {
    return isNaN(y)?0:1;
  }
   else if (isNaN(y)) {
    return -1;
  }
  return x < y?-1:x > y?1:0;
}

function Double(){
}

_ = Double_0.prototype = Double.prototype = new Number_0;
_.compareTo$ = function compareTo_2(b){
  return compare_0(this.value_0, dynamicCast(b, 121).value_0);
}
;
_.equals$ = function equals_7(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[121] && dynamicCast(o, 121).value_0 == this.value_0;
}
;
_.getClass$ = function getClass_854(){
  return Ljava_lang_Double_2_classLit;
}
;
_.hashCode$ = function hashCode_7(){
  return ~~Math.max(Math.min(this.value_0, 2147483647), -2147483648);
}
;
_.toString$ = function toString_22(){
  return '' + this.value_0;
}
;
_.castableTypeMap$ = {30:1, 32:1, 109:1, 121:1};
_.value_0 = 0;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader27_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader27'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$41$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$41$1'), Lcom_vaadin_terminal_gwt_client_ui_VSlider$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSlider$1'), Lcom_vaadin_terminal_gwt_client_ui_VSlider$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSlider$2'), Lcom_vaadin_terminal_gwt_client_ui_VSlider$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSlider$3'), Lcom_vaadin_terminal_gwt_client_ui_VSlider$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSlider$4'), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double');
$entry(onLoad_18)();
