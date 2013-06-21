function $runCallbacks_14(){
  var $e0, e, handler;
  while (callbacksHead_14) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_14 = callbacksHead_14.next;
    !callbacksHead_14 && (callbacksTail_14 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout_2_classLit, new WidgetMapImpl$33$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout_2_classLit, new WidgetMapImpl$33$1_0);
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

function AsyncLoader23_0(){
}

function onLoad_14(){
  instance_15 = new AsyncLoader23_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 23);
  !!$stats && $stats($createStatsEvent('runCallbacks23', 'begin', -1, -1));
  instance_15.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks23', 'end', -1, -1));
}

function AsyncLoader23(){
}

_ = AsyncLoader23_0.prototype = AsyncLoader23.prototype = new Object_0;
_.getClass$ = function getClass_200(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader23_2_classLit;
}
;
_.runCallbacks = function runCallbacks_14(){
  $runCallbacks_14();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$33$1_0(){
}

function WidgetMapImpl$33$1(){
}

_ = WidgetMapImpl$33$1_0.prototype = WidgetMapImpl$33$1.prototype = new Object_0;
_.get = function get_26(){
  return new VAbsoluteLayout_0;
}
;
_.getClass$ = function getClass_524(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$33$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $add_9(this$static, child){
  $add_0(this$static, child, this$static.canvas);
}

function $getComponent(this$static, element){
  return getPaintableForElement(this$static.client, this$static, element);
}

function $getWrapper(this$static, client, componentUIDL){
  var wrapper;
  wrapper = dynamicCast(this$static.pidToComponentWrappper.get_0(componentUIDL[1]['id']), 140);
  if (!wrapper) {
    wrapper = new VAbsoluteLayout$AbsoluteWrapper_0(this$static, $getPaintable(client, componentUIDL));
    this$static.pidToComponentWrappper.put(componentUIDL[1]['id'], wrapper);
    $add_0(this$static, wrapper, this$static.canvas);
  }
  return wrapper;
}

function $measureForIE6(this$static, cssLength, vertical){
  if (!this$static.measureElement) {
    this$static.measureElement = $doc.createElement('div');
    this$static.measureElement.style['position'] = 'absolute';
    this$static.canvas.appendChild(this$static.measureElement);
  }
  if (vertical) {
    this$static.measureElement.style['height'] = cssLength;
    return this$static.measureElement.offsetHeight || 0;
  }
   else {
    this$static.measureElement.style['width'] = cssLength;
    return this$static.measureElement.offsetWidth || 0;
  }
}

function $relayoutRelativeChildren(this$static){
  var w, widget, widget$iterator;
  for (widget$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); widget$iterator.index_0 < widget$iterator.this$0.size_0 - 1;) {
    widget = $next_2(widget$iterator);
    if (widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[140]) {
      w = dynamicCast(widget, 140);
      $handleComponentRelativeSize_0(this$static.client, w.widget);
      $updateCaptionPosition(w);
    }
  }
}

function $relayoutWrappersForIe6(this$static){
  var wrapper, wrapper$iterator;
  for (wrapper$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); wrapper$iterator.index_0 < wrapper$iterator.this$0.size_0 - 1;) {
    wrapper = $next_2(wrapper$iterator);
    wrapper != null && wrapper.castableTypeMap$ && !!wrapper.castableTypeMap$[140] && $ie6Layout(dynamicCast(wrapper, 140));
  }
}

function VAbsoluteLayout_0(){
  this.children_0 = new WidgetCollection_0(this);
  this.canvas = $doc.createElement('div');
  this.pidToComponentWrappper = new HashMap_0;
  this.clickEventHandler = new VAbsoluteLayout$1_0(this, this);
  this.element_0 = $doc.createElement('div');
  this.element_0['className'] = 'v-absolutelayout';
  this.marginElement = $doc.createElement('div');
  this.canvas.style['position'] = 'relative';
  this.canvas.style['overflow'] = 'hidden';
  this.marginElement.appendChild(this.canvas);
  this.element_0.appendChild(this.marginElement);
}

function VAbsoluteLayout(){
}

_ = VAbsoluteLayout_0.prototype = VAbsoluteLayout.prototype = new ComplexPanel;
_.add_1 = function add_9(child){
  $add_0(this, child, this.canvas);
}
;
_.getAllocatedSpace = function getAllocatedSpace_7(child){
  var h_0, w, wrapper;
  wrapper = dynamicCast(child.getParent(), 140);
  wrapper.left_0 != null && wrapper.right_0 != null?(w = parseInt(wrapper.element_0['offsetWidth']) || 0):wrapper.right_0 != null?(w = (parseInt(wrapper.element_0['offsetWidth']) || 0) + (wrapper.element_0.offsetLeft || 0)):(w = (this.canvas.offsetWidth || 0) - (wrapper.element_0.offsetLeft || 0));
  wrapper.top_0 != null && wrapper.bottom_0 != null?(h_0 = parseInt(wrapper.element_0['offsetHeight']) || 0):wrapper.bottom_0 != null?(h_0 = (wrapper.element_0.offsetTop || 0) + (parseInt(wrapper.element_0['offsetHeight']) || 0)):(h_0 = (this.canvas.offsetHeight || 0) - (wrapper.element_0.offsetTop || 0));
  return new RenderSpace_0(w, h_0);
}
;
_.getClass$ = function getClass_578(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout_2_classLit;
}
;
_.replaceChildComponent = function replaceChildComponent_6(oldComponent, newComponent){
  var w, wrapper, wrapper$iterator;
  for (wrapper$iterator = new WidgetCollection$WidgetIterator_0(this.children_0); wrapper$iterator.index_0 < wrapper$iterator.this$0.size_0 - 1;) {
    wrapper = $next_2(wrapper$iterator);
    w = dynamicCast(wrapper, 140);
    if (w.widget == oldComponent) {
      w.paintable = dynamicCast(newComponent, 26);
      $setWidget(w, newComponent);
      return;
    }
  }
}
;
_.requestLayout = function requestLayout_7(children){
  return true;
}
;
_.setHeight = function setHeight_6(height){
  this.element_0.style['height'] = height;
  this.canvas.style['height'] = height;
  if (!this.rendering) {
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $relayoutWrappersForIe6(this);
    $relayoutRelativeChildren(this);
  }
}
;
_.setStyleName = function setStyleName_4(style){
  this.element_0['className'] = style;
}
;
_.setWidth = function setWidth_11(width){
  this.element_0.style['width'] = width;
  this.canvas.style['width'] = width;
  if (!this.rendering) {
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $relayoutWrappersForIe6(this);
    $relayoutRelativeChildren(this);
  }
}
;
_.updateCaption = function updateCaption_8(component, uidl){
  var parent2;
  parent2 = dynamicCast(dynamicCast(component, 70).getParent(), 140);
  $updateCaption_1(parent2, uidl);
}
;
_.updateFromUIDL = function updateFromUIDL_15(uidl, client){
  var absoluteWrapper, cc, childIterator, componentUIDL, pid, pid$iterator, unrenderedPids, count, outerIter, entry;
  this.rendering = true;
  this.client = client;
  if ($updateComponent(client, this, uidl, true)) {
    this.rendering = false;
    return;
  }
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  unrenderedPids = new HashSet_1($keySet(this.pidToComponentWrappper));
  for (childIterator = new UIDL$1_0(uidl); count = childIterator.this$0.length - 2 , count > childIterator.index_0 + 1;) {
    cc = dynamicCastJso($next_3(childIterator));
    if ($equals_2(cc[0], 'cc')) {
      componentUIDL = cc[2];
      unrenderedPids.map.remove_4(componentUIDL[1]['id']) != null;
      $updateFromUIDL_7($getWrapper(this, client, componentUIDL), cc);
    }
  }
  for (pid$iterator = (outerIter = $keySet(unrenderedPids.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); pid$iterator.val$outerIter.hasNext();) {
    pid = dynamicCast((entry = dynamicCast(pid$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    absoluteWrapper = dynamicCast(this.pidToComponentWrappper.get_0(pid), 140);
    this.pidToComponentWrappper.remove_4(pid);
    !!absoluteWrapper.caption_0 && $removeFromParent_0(absoluteWrapper.caption_0);
    $unregisterPaintable(absoluteWrapper.this$0.client, absoluteWrapper.paintable);
    $removeFromParent_0(absoluteWrapper);
  }
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.client = null;
_.marginElement = null;
_.measureElement = null;
_.rendering = false;
function VAbsoluteLayout$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'layout_click';
}

function VAbsoluteLayout$1(){
}

_ = VAbsoluteLayout$1_0.prototype = VAbsoluteLayout$1.prototype = new LayoutClickEventHandler;
_.getChildComponent = function getChildComponent(element){
  return $getComponent(this.this$0, element);
}
;
_.getClass$ = function getClass_579(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout$1_2_classLit;
}
;
_.registerHandler = function registerHandler(handler, type){
  return $addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
function $ie6Layout(this$static){
  var bottompixels, height, rightPixels, style, width;
  style = this$static.element_0.style;
  if (this$static.bottom_0 != null && this$static.top_0 != null) {
    bottompixels = $measureForIE6(this$static.this$0, this$static.bottom_0, true);
    impl_2.log_0('ALB' + bottompixels);
    height = (this$static.this$0.canvas.offsetHeight || 0) - bottompixels - (this$static.element_0.offsetTop || 0);
    impl_2.log_0('ALB' + height);
    height < 0 && (height = 0);
    style['height'] = height + ($clinit_9() , 'px');
  }
   else {
    style['height'] = '';
  }
  if (this$static.left_0 != null && this$static.right_0 != null) {
    rightPixels = $measureForIE6(this$static.this$0, this$static.right_0, false);
    impl_2.log_0('ALR' + rightPixels);
    width = (this$static.this$0.canvas.offsetWidth || 0) - rightPixels - (this$static.element_0.offsetLeft || 0);
    impl_2.log_0('ALR' + width);
    width < 0 && (width = 0);
    style['width'] = width + ($clinit_9() , 'px');
  }
   else {
    style['width'] = '';
  }
}

function $setPosition_1(this$static, stringAttribute){
  var i, keyValue, properties, style;
  if (this$static.css == null || !$equals_2(this$static.css, stringAttribute)) {
    this$static.css = stringAttribute;
    this$static.top_0 = this$static.right_0 = this$static.bottom_0 = this$static.left_0 = this$static.zIndex_0 = null;
    if (!$equals_2(this$static.css, '')) {
      properties = $split_0(this$static.css, ';', 0);
      for (i = 0; i < properties.length; ++i) {
        keyValue = $split_0(properties[i], ':', 0);
        $equals_2(keyValue[0], 'left')?(this$static.left_0 = keyValue[1]):$equals_2(keyValue[0], 'top')?(this$static.top_0 = keyValue[1]):$equals_2(keyValue[0], 'right')?(this$static.right_0 = keyValue[1]):$equals_2(keyValue[0], 'bottom')?(this$static.bottom_0 = keyValue[1]):$equals_2(keyValue[0], 'z-index') && (this$static.zIndex_0 = keyValue[1]);
      }
    }
    style = this$static.element_0.style;
    this$static.zIndex_0 != null?(style['zIndex'] = this$static.zIndex_0 , undefined):(style['zIndex'] = '' , undefined);
    style['top'] = this$static.top_0;
    style['left'] = this$static.left_0;
    style['right'] = this$static.right_0;
    style['bottom'] = this$static.bottom_0;
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $ie6Layout(this$static);
  }
  $updateCaptionPosition(this$static);
}

function $setWidget_3(this$static, w){
  this$static.paintable = dynamicCast(w, 26);
  $setWidget(this$static, w);
}

function $updateCaption_1(this$static, uidl){
  var captionIsNeeded;
  captionIsNeeded = isNeeded(uidl);
  if (captionIsNeeded) {
    if (!this$static.caption_0) {
      this$static.caption_0 = new VCaption_0(this$static.paintable, this$static.this$0.client);
      $add_9(this$static.this$0, this$static.caption_0);
    }
    this$static.caption_0.updateCaption_0(uidl);
    $updateCaptionPosition(this$static);
  }
   else {
    if (this$static.caption_0) {
      $removeFromParent_0(this$static.caption_0);
      this$static.caption_0 = null;
    }
  }
}

function $updateCaptionPosition(this$static){
  var style;
  if (this$static.caption_0) {
    style = this$static.caption_0.element_0.style;
    style['position'] = 'absolute';
    style['left'] = (this$static.element_0.offsetLeft || 0) + ($clinit_9() , 'px');
    style['top'] = (this$static.element_0.offsetTop || 0) - $getHeight(this$static.caption_0) + 'px';
  }
}

function $updateFromUIDL_7(this$static, componentUIDL){
  var childUIDL;
  $setPosition_1(this$static, componentUIDL[1]['css']);
  this$static.widget != this$static.paintable && $setWidget_3(this$static, dynamicCast(this$static.paintable, 70));
  childUIDL = componentUIDL[2];
  this$static.paintable.updateFromUIDL(childUIDL, this$static.this$0.client);
  'cached' in childUIDL[1] && $handleComponentRelativeSize_0(this$static.this$0.client, dynamicCast(this$static.paintable, 70));
}

function VAbsoluteLayout$AbsoluteWrapper_0(this$0, paintable){
  this.this$0 = this$0;
  this.element_0 = $doc.createElement('div');
  this.paintable = paintable;
  this.element_0['className'] = 'v-absolutelayout-wrapper';
}

function VAbsoluteLayout$AbsoluteWrapper(){
}

_ = VAbsoluteLayout$AbsoluteWrapper_0.prototype = VAbsoluteLayout$AbsoluteWrapper.prototype = new SimplePanel;
_.getClass$ = function getClass_580(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout$AbsoluteWrapper_2_classLit;
}
;
_.setWidget = function setWidget_4(w){
  this.paintable = dynamicCast(w, 26);
  $setWidget(this, w);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1, 76:1, 140:1};
_.bottom_0 = null;
_.caption_0 = null;
_.css = null;
_.left_0 = null;
_.paintable = null;
_.right_0 = null;
_.this$0 = null;
_.top_0 = null;
_.zIndex_0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader23_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader23'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$33$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$33$1'), Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VAbsoluteLayout$1'), Lcom_vaadin_terminal_gwt_client_ui_VAbsoluteLayout$AbsoluteWrapper_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VAbsoluteLayout$AbsoluteWrapper');
$entry(onLoad_14)();
