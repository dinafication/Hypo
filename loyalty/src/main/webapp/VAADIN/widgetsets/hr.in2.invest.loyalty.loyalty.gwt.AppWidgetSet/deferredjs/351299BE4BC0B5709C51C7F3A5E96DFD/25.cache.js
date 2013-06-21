function $runCallbacks_16(){
  var $e0, e, handler;
  while (callbacksHead_16) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_16 = callbacksHead_16.next;
    !callbacksHead_16 && (callbacksTail_16 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VForm_2_classLit, new WidgetMapImpl$37$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VForm_2_classLit, new WidgetMapImpl$37$1_0);
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

function AsyncLoader25_0(){
}

function onLoad_16(){
  instance_17 = new AsyncLoader25_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 25);
  !!$stats && $stats($createStatsEvent('runCallbacks25', 'begin', -1, -1));
  instance_17.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks25', 'end', -1, -1));
}

function AsyncLoader25(){
}

_ = AsyncLoader25_0.prototype = AsyncLoader25.prototype = new Object_0;
_.getClass$ = function getClass_206(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader25_2_classLit;
}
;
_.runCallbacks = function runCallbacks_16(){
  $runCallbacks_16();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$37$1_0(){
}

function WidgetMapImpl$37$1(){
}

_ = WidgetMapImpl$37$1_0.prototype = WidgetMapImpl$37$1.prototype = new Object_0;
_.get = function get_30(){
  return new VForm_0;
}
;
_.getClass$ = function getClass_528(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$37$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $updateSize_0(this$static){
  var offsetHeight2, offsetHeight3;
  $updateSize(this$static.renderInformation, this$static.element_0);
  this$static.renderInformation.contentArea.height_0 = this$static.renderInformation.renderedSize.getHeight() - (offsetHeight2 = this$static.fieldSet.offsetHeight || 0 , offsetHeight3 = this$static.fieldContainer.offsetHeight || 0 , offsetHeight2 - offsetHeight3);
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this$static.element_0.style['overflow'] = 'hidden' , undefined);
  this$static.renderInformation.contentArea.width_0 = this$static.renderInformation.renderedSize.getWidth() - this$static.borderPaddingHorizontal;
}

function VForm_0(){
  this.children_0 = new WidgetCollection_0(this);
  this.legend = $doc.createElement('legend');
  this.caption_0 = $doc.createElement('span');
  this.errorIndicatorElement = $doc.createElement('div');
  this.desc = $doc.createElement('div');
  this.errorMessage = new VErrorMessage_0;
  this.fieldContainer = $doc.createElement('div');
  this.footerContainer = $doc.createElement('div');
  this.fieldSet = $doc.createElement('fieldset');
  this.renderInformation = new RenderInformation_0;
  this.element_0 = $doc.createElement('div');
  this.element_0.appendChild(this.fieldSet);
  this.element_0['className'] = 'v-form';
  this.fieldSet.appendChild(this.legend);
  this.legend.appendChild(this.caption_0);
  this.errorIndicatorElement.className = 'v-errorindicator';
  this.errorIndicatorElement.style['display'] = ($clinit_4() , 'none');
  this.errorIndicatorElement.textContent = ' ';
  this.desc.className = 'v-form-description';
  this.fieldSet.appendChild(this.desc);
  this.fieldSet.appendChild(this.fieldContainer);
  this.errorMessage.element_0.style.display = 'none';
  this.errorMessage.getStyleElement()['className'] = 'v-form-errormessage';
  this.fieldSet.appendChild(this.errorMessage.element_0);
  this.fieldSet.appendChild(this.footerContainer);
}

function VForm(){
}

_ = VForm_0.prototype = VForm.prototype = new ComplexPanel;
_.getAllocatedSpace = function getAllocatedSpace_11(child){
  if (child == this.lo) {
    return this.renderInformation.contentArea;
  }
   else if (child == this.footer) {
    return new RenderSpace_0(this.renderInformation.contentArea.getWidth(), 0);
  }
   else {
    impl_2.error_1('Invalid child requested RenderSpace information');
    return null;
  }
}
;
_.getClass$ = function getClass_635(){
  return Lcom_vaadin_terminal_gwt_client_ui_VForm_2_classLit;
}
;
_.onKeyDown = function onKeyDown_4(event_0){
  $handleKeyboardEvent(this.shortcutHandler, event_0.nativeEvent, null);
}
;
_.replaceChildComponent = function replaceChildComponent_10(oldComponent, newComponent){
  if (!(!!oldComponent && (oldComponent == this.lo || oldComponent == this.footer))) {
    throw new IllegalArgumentException_1('Old component is not inside this Container');
  }
  $remove_2(this, oldComponent);
  if (oldComponent == this.lo) {
    this.lo = dynamicCast(newComponent, 24);
    $add_0(this, dynamicCast(this.lo, 70), this.fieldContainer);
  }
   else {
    this.footer = dynamicCast(newComponent, 24);
    $add_0(this, dynamicCast(this.footer, 70), this.footerContainer);
  }
}
;
_.requestLayout = function requestLayout_11(child){
  if (this.height_0 != null && !$equals_2('', this.height_0) && this.width_0 != null && !$equals_2('', this.width_0)) {
    return true;
  }
  return !$updateSize(this.renderInformation, this.element_0);
}
;
_.setHeight = function setHeight_13(height){
  if ($equals_2(this.height_0, height)) {
    return;
  }
  this.height_0 = height;
  this.element_0.style['height'] = height;
  $updateSize_0(this);
}
;
_.setWidth = function setWidth_19(width){
  var dow, ow;
  if (this.borderPaddingHorizontal < 0) {
    ow = parseInt(this.element_0['offsetWidth']) || 0;
    dow = this.desc.offsetWidth || 0;
    this.borderPaddingHorizontal = ow - dow;
  }
  if (equals_3(this.width_0, width)) {
    return;
  }
  this.width_0 = width;
  this.element_0.style['width'] = width;
  $updateSize_0(this);
  !this.rendering && $equals_2(this.height_0, '') && ($clinit_67() , updateRelativeChildrenAndSendSizeUpdateEvent_0(this.client, this, dynamicCast(this, 26)) , undefined);
}
;
_.updateCaption = function updateCaption_12(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_29(uidl, client){
  var childUidl, errorUidl, layoutUidl, legendEmpty, newFooter, newLo, parent_0, parent_1;
  this.rendering = true;
  this.client = client;
  this.id_0 = uidl[1]['id'];
  if ($updateComponent(client, this, uidl, false)) {
    this.rendering = false;
    return;
  }
  legendEmpty = true;
  if ('caption' in uidl[1]) {
    this.caption_0.textContent = uidl[1]['caption'] || '';
    legendEmpty = false;
  }
   else {
    this.caption_0.textContent = '';
  }
  if ('icon' in uidl[1]) {
    if (!this.icon) {
      this.icon = new Icon_0(client);
      $insertFirst(this.legend, this.icon.element_0);
    }
    $setUri(this.icon, uidl[1]['icon']);
    legendEmpty = false;
  }
   else {
    !!this.icon && this.legend.removeChild(this.icon.element_0);
  }
  legendEmpty?$setStyleName(this, getStylePrimaryName(this.element_0) + '-nocaption', true):$setStyleName(this, getStylePrimaryName(this.element_0) + '-nocaption', false);
  if ('error' in uidl[1]) {
    errorUidl = uidl[1]['error'];
    $updateFromUIDL_6(this.errorMessage, errorUidl);
    this.errorMessage.element_0.style.display = '';
  }
   else {
    this.errorMessage.element_0.style.display = 'none';
  }
  if ('description' in uidl[1]) {
    this.desc.innerHTML = uidl[1]['description'] || '';
    !(parent_0 = this.desc.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0) && $insertAfter(this.fieldSet, this.desc, this.legend);
  }
   else {
    this.desc.innerHTML = '';
    !!(parent_1 = this.desc.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1) && this.fieldSet.removeChild(this.desc);
  }
  $updateSize_0(this);
  if (uidl.length - 2 > 1 && !$equals_2(uidl[3][0], 'actions')) {
    newFooter = dynamicCast($getPaintable(client, uidl[3]), 24);
    if (!this.footer) {
      $add_0(this, dynamicCast(newFooter, 70), this.footerContainer);
      this.footer = newFooter;
    }
     else if (newFooter != this.footer) {
      $remove_2(this, dynamicCast(this.footer, 70));
      $unregisterPaintable(client, this.footer);
      $add_0(this, dynamicCast(newFooter, 70), this.footerContainer);
    }
    this.footer = newFooter;
    this.footer.updateFromUIDL(uidl[3], client);
    $updateSize_0(this);
  }
   else {
    if (this.footer) {
      $remove_2(this, dynamicCast(this.footer, 70));
      $unregisterPaintable(client, this.footer);
      $updateSize_0(this);
    }
  }
  layoutUidl = uidl[2];
  newLo = dynamicCast($getPaintable(client, layoutUidl), 24);
  if (!this.lo) {
    this.lo = newLo;
    $add_0(this, dynamicCast(this.lo, 70), this.fieldContainer);
  }
   else if (this.lo != newLo) {
    $unregisterPaintable(client, this.lo);
    $remove_2(this, dynamicCast(this.lo, 70));
    this.lo = newLo;
    $add_0(this, dynamicCast(this.lo, 70), this.fieldContainer);
  }
  this.lo.updateFromUIDL(layoutUidl, client);
  $updateSize_0(this);
  $runDescendentsLayout(client, this);
  if (uidl.length - 2 > 1) {
    childUidl = $getChildByTagName(uidl, 'actions');
    if (childUidl) {
      if (!this.shortcutHandler) {
        this.shortcutHandler = new ShortcutActionHandler_0(this.id_0, client);
        this.keyDownRegistration = $addDomHandler(this, this, ($clinit_19() , $clinit_19() , TYPE_5));
      }
      $updateActionMap(this.shortcutHandler, childUidl);
    }
  }
   else if (this.shortcutHandler) {
    $removeHandler(this.keyDownRegistration.real);
    this.shortcutHandler = null;
    this.keyDownRegistration = null;
  }
  this.rendering = false;
}
;
_.castableTypeMap$ = {7:1, 10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.borderPaddingHorizontal = -1;
_.client = null;
_.footer = null;
_.height_0 = '';
_.icon = null;
_.id_0 = null;
_.keyDownRegistration = null;
_.lo = null;
_.rendering = false;
_.shortcutHandler = null;
_.width_0 = '';
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader25_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader25'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$37$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$37$1');
$entry(onLoad_16)();
