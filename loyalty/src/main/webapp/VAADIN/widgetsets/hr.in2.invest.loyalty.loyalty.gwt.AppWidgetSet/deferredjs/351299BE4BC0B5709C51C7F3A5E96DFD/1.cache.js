function $runCallbacks(){
  var $e0, e, handler;
  while (callbacksHead) {
    handler = sUncaughtExceptionHandler;
    callbacksHead = callbacksHead.next;
    !callbacksHead && (callbacksTail = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VFormLayout_2_classLit, new WidgetMapImpl$2$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VFormLayout_2_classLit, new WidgetMapImpl$2$1_0);
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

function AsyncLoader1_0(){
}

function onLoad(){
  instance_0 = new AsyncLoader1_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 1);
  !!$stats && $stats($createStatsEvent('runCallbacks1', 'begin', -1, -1));
  instance_0.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks1', 'end', -1, -1));
}

function AsyncLoader1(){
}

_ = AsyncLoader1_0.prototype = AsyncLoader1.prototype = new Object_0;
_.getClass$ = function getClass_156(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit;
}
;
_.runCallbacks = function runCallbacks(){
  $runCallbacks();
}
;
_.castableTypeMap$ = {};
function $setWidth_0(this$static, row, width){
  $prepareCell(this$static.this$0, row, 2);
  this$static.this$0.bodyElem.rows[row].cells[2]['width'] = width;
}

function WidgetMapImpl$2$1_0(){
}

function WidgetMapImpl$2$1(){
}

_ = WidgetMapImpl$2$1_0.prototype = WidgetMapImpl$2$1.prototype = new Object_0;
_.get = function get_11(){
  return new VFormLayout_0;
}
;
_.getClass$ = function getClass_509(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$2$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $getStylesFromUIDL(uidl){
  var name_0, name$index, name$max, styles, stylesnames;
  styles = new ArrayList_0;
  if ('style' in uidl[1]) {
    stylesnames = $split_0(uidl[1]['style'], ' ', 0);
    for (name$index = 0 , name$max = stylesnames.length; name$index < name$max; ++name$index) {
      name_0 = stylesnames[name$index];
      setCheck(styles.array, styles.size_0++, name_0);
    }
  }
  'disabled' in uidl[1] && (setCheck(styles.array, styles.size_0++, 'v-disabled') , true);
  return dynamicCast($toArray_1(styles, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, styles.size_0, 0)), 59);
}

function VFormLayout_0(){
  this.element_0 = $doc.createElement('div');
  this.element_0['className'] = 'v-formlayout';
  this.table = new VFormLayout$VFormLayoutTable_0(this);
  $setWidget(this, this.table);
}

function VFormLayout(){
}

_ = VFormLayout_0.prototype = VFormLayout.prototype = new SimplePanel;
_.getAllocatedSpace = function getAllocatedSpace_12(child){
  var availableWidth, width;
  width = 0;
  if (!$equals_2(this.width_0, '')) {
    availableWidth = parseInt(this.element_0['offsetWidth']) || 0;
    width = $getAllocatedWidth(this.table, child, availableWidth);
  }
  return new RenderSpace_2(width, 0, false);
}
;
_.getClass$ = function getClass_636(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFormLayout_2_classLit;
}
;
_.replaceChildComponent = function replaceChildComponent_11(oldComponent, newComponent){
  $replaceChildComponent_0(this.table, oldComponent, newComponent);
}
;
_.requestLayout = function requestLayout_12(child){
  if ($equals_2(this.height_0, '') || $equals_2(this.width_0, '')) {
    return false;
  }
  return true;
}
;
_.setHeight = function setHeight_14(height){
  if ($equals_2(this.height_0, height)) {
    return;
  }
  this.height_0 = height;
  this.element_0.style['height'] = height;
}
;
_.setWidth = function setWidth_20(width){
  if ($equals_2(this.width_0, width)) {
    return;
  }
  this.width_0 = width;
  this.element_0.style['width'] = width;
  if (!this.rendering) {
    $setContentWidths(this.table);
    $equals_2(this.height_0, '') && ($clinit_67() , updateRelativeChildrenAndSendSizeUpdateEvent_0(this.client, this, dynamicCast(this, 26)) , undefined);
  }
}
;
_.updateCaption = function updateCaption_13(component, uidl){
  $updateCaption_4(this.table, component, uidl);
}
;
_.updateFromUIDL = function updateFromUIDL_30(uidl, client){
  this.rendering = true;
  this.client = client;
  if ($updateComponent(client, this, uidl, true)) {
    this.rendering = false;
    return;
  }
  $updateFromUIDL_14(this.table, uidl, client);
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 76:1};
_.client = null;
_.height_0 = '';
_.rendering = false;
_.table = null;
_.width_0 = '';
function $setStyles(this$static, styles){
  var style, style$index, style$max, styleName;
  styleName = 'v-caption';
  if (styles != null) {
    for (style$index = 0 , style$max = styles.length; style$index < style$max; ++style$index) {
      style = styles[style$index];
      $equals_2('v-disabled', style) && (styleName += ' ' + style);
      styleName += ' v-caption-' + style;
    }
  }
  this$static.element_0['className'] = styleName;
}

function $updateCaption_3(this$static, uidl){
  var c, isEmpty;
  this$static.element_0.style.display = !Boolean(uidl[1]['invisible'])?'':'none';
  $setStyles(this$static, $getStylesFromUIDL(uidl));
  isEmpty = true;
  if ('icon' in uidl[1]) {
    if (!this$static.icon) {
      this$static.icon = new Icon_0(this$static.client);
      $insertChild(this$static.element_0, this$static.icon.element_0, 0);
    }
    $setUri(this$static.icon, uidl[1]['icon']);
    isEmpty = false;
  }
   else {
    if (this$static.icon) {
      this$static.element_0.removeChild(this$static.icon.element_0);
      this$static.icon = null;
    }
  }
  if ('caption' in uidl[1]) {
    if (!this$static.captionText) {
      this$static.captionText = $doc.createElement('span');
      $insertChild(this$static.element_0, this$static.captionText, !this$static.icon?0:1);
    }
    c = uidl[1]['caption'];
    c == null?(c = ''):(isEmpty = false);
    this$static.captionText.textContent = c || '';
  }
  'description' in uidl[1] && (this$static.captionText?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-hasdescription', true):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-hasdescription', false));
  if (Boolean(uidl[1]['required'])) {
    if (!this$static.requiredFieldIndicator) {
      this$static.requiredFieldIndicator = $doc.createElement('span');
      this$static.requiredFieldIndicator.textContent = '*';
      this$static.requiredFieldIndicator['className'] = 'v-required-field-indicator';
      this$static.element_0.appendChild(this$static.requiredFieldIndicator);
    }
  }
   else {
    if (this$static.requiredFieldIndicator) {
      this$static.element_0.removeChild(this$static.requiredFieldIndicator);
      this$static.requiredFieldIndicator = null;
    }
  }
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    if (isEmpty) {
      this$static.element_0.style['height'] = '0px';
      this$static.element_0.style['overflow'] = 'hidden';
    }
     else {
      this$static.element_0.style['height'] = '';
      this$static.element_0.style['overflow'] = '';
    }
  }
}

function VFormLayout$Caption_0(component, client){
  HTML_0.call(this);
  this.client = client;
  this.owner = component;
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function VFormLayout$Caption(){
}

_ = VFormLayout$Caption_0.prototype = VFormLayout$Caption.prototype = new HTML;
_.getClass$ = function getClass_637(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$Caption_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_25(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this.owner, null) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 150:1};
_.captionText = null;
_.client = null;
_.icon = null;
_.owner = null;
_.requiredFieldIndicator = null;
function $updateFromUIDL_13(this$static, uidl, component){
  this$static.owner = component;
  if ('error' in uidl[1] && !Boolean(uidl[1]['hideErrors'])) {
    if (!this$static.errorIndicatorElement) {
      this$static.errorIndicatorElement = $doc.createElement('div');
      this$static.errorIndicatorElement.innerHTML = '&nbsp;';
      this$static.errorIndicatorElement['className'] = 'v-errorindicator';
      this$static.element_0.appendChild(this$static.errorIndicatorElement);
    }
  }
   else if (this$static.errorIndicatorElement) {
    this$static.element_0.removeChild(this$static.errorIndicatorElement);
    this$static.errorIndicatorElement = null;
  }
}

function VFormLayout$ErrorFlag_0(this$0){
  this.this$0 = this$0;
  HTML_0.call(this);
  this.element_0['className'] = 'v-formlayout-error-indicator';
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function VFormLayout$ErrorFlag(){
}

_ = VFormLayout$ErrorFlag_0.prototype = VFormLayout$ErrorFlag.prototype = new HTML;
_.getClass$ = function getClass_638(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$ErrorFlag_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_26(event_0){
  $onBrowserEvent(this, event_0);
  !!this.owner && ($handleTooltipEvent(this.this$0.client.tooltip, event_0, this.owner, null) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 151:1};
_.errorIndicatorElement = null;
_.owner = null;
_.this$0 = null;
function $getAllocatedWidth(this$static, child, availableWidth){
  var caption, error, width, parent_0, parent_1;
  caption = dynamicCast(this$static.componentToCaption.get_0(child), 150);
  error = dynamicCast(this$static.componentToError.get_0(child), 151);
  width = availableWidth;
  !!caption && (width -= (parent_0 = caption.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).offsetWidth || 0);
  !!error && (width -= (parent_1 = error.element_0.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1).offsetWidth || 0);
  return width;
}

function $replaceChildComponent_0(this$static, oldComponent, newComponent){
  var candidate, error, i, newCap, oldCap;
  for (i = 0; i < this$static.bodyElem.rows.length; ++i) {
    candidate = ($checkCellBounds(this$static, i, 2) , $getWidgetImpl(this$static, i, 2));
    if (oldComponent == candidate) {
      oldCap = dynamicCast(this$static.componentToCaption.get_0(oldComponent), 150);
      newCap = new VFormLayout$Caption_0(dynamicCast(newComponent, 26), this$static.this$0.client);
      $addDomHandler(newCap, this$static, ($clinit_15() , $clinit_15() , TYPE_1));
      $setStyleName_0(newCap, $getPropertyString(oldCap.getStyleElement(), 'className'));
      this$static.componentToCaption.put(dynamicCast(newComponent, 26), newCap);
      error = dynamicCast(this$static.componentToError.get_0(newComponent), 151);
      if (!error) {
        error = new VFormLayout$ErrorFlag_0(this$static.this$0);
        this$static.componentToError.put(dynamicCast(newComponent, 26), error);
      }
      $setWidget_1(this$static, i, 0, newCap);
      $setWidget_1(this$static, i, 1, error);
      $setWidget_1(this$static, i, 2, newComponent);
      break;
    }
  }
}

function $setContentWidth(this$static, row){
  var width;
  width = '';
  $equals_2(this$static.this$0.width_0, '') || (width = '100%');
  $setWidth_0(this$static.cellFormatter, row, width);
}

function $setContentWidths(this$static){
  var row;
  for (row = 0; row < this$static.bodyElem.rows.length; ++row) {
    $setContentWidth(this$static, row);
  }
}

function $updateCaption_4(this$static, component, uidl){
  var c, e;
  c = dynamicCast(this$static.componentToCaption.get_0(component), 150);
  !!c && $updateCaption_3(c, uidl);
  e = dynamicCast(this$static.componentToError.get_0(component), 151);
  !!e && $updateFromUIDL_13(e, uidl, component);
}

function $updateFromUIDL_14(this$static, uidl, client){
  var caption, childUidl, error, i, it, margin, margins, oldComponent, p, p$iterator, rowstyles, count, count_0, outerIter, entry;
  margins = new VMarginInfo_0(uidl[1]['margins']);
  margin = this$static.element_0;
  setStyleName(margin, 'v-formlayout-margin-top', (margins.bitMask & 1) == 1);
  setStyleName(margin, 'v-formlayout-margin-right', (margins.bitMask & 2) == 2);
  setStyleName(margin, 'v-formlayout-margin-bottom', (margins.bitMask & 4) == 4);
  setStyleName(margin, 'v-formlayout-margin-left', (margins.bitMask & 8) == 8);
  setStyleName(margin, 'v-formlayout-spacing', 'spacing' in uidl[1]);
  i = 0;
  for (it = new UIDL$1_0(uidl); count = it.this$0.length - 2 , count > it.index_0 + 1; ++i) {
    $prepareCell(this$static, i, 1);
    childUidl = dynamicCastJso($next_3(it));
    p = $getPaintable(client, childUidl);
    caption = dynamicCast(this$static.componentToCaption.get_0(p), 150);
    if (!caption) {
      caption = new VFormLayout$Caption_0(p, client);
      $addDomHandler(caption, this$static, ($clinit_15() , $clinit_15() , TYPE_1));
      this$static.componentToCaption.put(p, caption);
    }
    error = dynamicCast(this$static.componentToError.get_0(p), 151);
    if (!error) {
      error = new VFormLayout$ErrorFlag_0(this$static.this$0);
      this$static.componentToError.put(p, error);
    }
    $prepareCell(this$static, i, 2);
    oldComponent = dynamicCast(($checkCellBounds(this$static, i, 2) , $getWidgetImpl(this$static, i, 2)), 26);
    if (!oldComponent) {
      $setWidget_1(this$static, i, 2, dynamicCast(p, 70));
    }
     else if (oldComponent != p) {
      $unregisterPaintable(client, oldComponent);
      $setWidget_1(this$static, i, 2, dynamicCast(p, 70));
    }
    $setStyleName_1(this$static.cellFormatter, i, 2, 'v-formlayout-contentcell');
    $setStyleName_1(this$static.cellFormatter, i, 0, 'v-formlayout-captioncell');
    $setWidget_1(this$static, i, 0, caption);
    $setContentWidth(this$static, i);
    $setStyleName_1(this$static.cellFormatter, i, 1, 'v-formlayout-errorcell');
    $setWidget_1(this$static, i, 1, error);
    p.updateFromUIDL(childUidl, client);
    rowstyles = 'v-formlayout-row';
    i == 0 && (rowstyles += ' v-formlayout-firstrow');
    (count_0 = it.this$0.length - 2 , count_0 > it.index_0 + 1) || (rowstyles += ' v-formlayout-lastrow');
    $setStyleName_2(this$static.rowFormatter, i, rowstyles);
  }
  while (this$static.bodyElem.rows.length > i) {
    p = dynamicCast(($checkCellBounds(this$static, i, 2) , $getWidgetImpl(this$static, i, 2)), 26);
    $unregisterPaintable(client, p);
    this$static.componentToCaption.remove_4(p);
    $removeRow(this$static, i);
  }
  for (p$iterator = (outerIter = $keySet(this$static.componentToCaption).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); p$iterator.val$outerIter.hasNext();) {
    p = dynamicCast((entry = dynamicCast(p$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 26);
    $handleComponentRelativeSize_0(client, dynamicCast(p, 70));
  }
}

function VFormLayout$VFormLayoutTable_0(this$0){
  this.this$0 = this$0;
  FlexTable_0.call(this);
  this.componentToCaption = new HashMap_0;
  this.componentToError = new HashMap_0;
  this.element_0['cellPadding'] = '0';
  this.element_0['cellSpacing'] = '0';
}

function VFormLayout$VFormLayoutTable(){
}

_ = VFormLayout$VFormLayoutTable_0.prototype = VFormLayout$VFormLayoutTable.prototype = new FlexTable;
_.getClass$ = function getClass_639(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$VFormLayoutTable_2_classLit;
}
;
_.onClick = function onClick_20(event_0){
  var caption;
  caption = dynamicCast(event_0.source, 150);
  !!caption.owner && (instanceOf(caption.owner, 25)?dynamicCast(caption.owner, 25).focus_0():instanceOf(caption.owner, 122) && dynamicCast(caption.owner, 122).setFocus(true));
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 39:1, 69:1, 70:1, 75:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader1'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$2$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$2$1'), Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$Caption_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFormLayout$Caption'), Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$ErrorFlag_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFormLayout$ErrorFlag'), Lcom_vaadin_terminal_gwt_client_ui_VFormLayout$VFormLayoutTable_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFormLayout$VFormLayoutTable');
$entry(onLoad)();
