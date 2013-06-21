function $runCallbacks_12(){
  var $e0, e, handler;
  while (callbacksHead_12) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_12 = callbacksHead_12.next;
    !callbacksHead_12 && (callbacksTail_12 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAccordion_2_classLit, new WidgetMapImpl$30$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VAccordion_2_classLit, new WidgetMapImpl$30$1_0);
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

function AsyncLoader21_0(){
}

function onLoad_12(){
  instance_13 = new AsyncLoader21_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 21);
  !!$stats && $stats($createStatsEvent('runCallbacks21', 'begin', -1, -1));
  instance_13.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks21', 'end', -1, -1));
}

function AsyncLoader21(){
}

_ = AsyncLoader21_0.prototype = AsyncLoader21.prototype = new Object_0;
_.getClass$ = function getClass_194(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader21_2_classLit;
}
;
_.runCallbacks = function runCallbacks_12(){
  $runCallbacks_12();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$30$1_0(){
}

function WidgetMapImpl$30$1(){
}

_ = WidgetMapImpl$30$1_0.prototype = WidgetMapImpl$30$1.prototype = new Object_0;
_.get = function get_23(){
  return new VAccordion_0;
}
;
_.getClass$ = function getClass_521(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$30$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $close_0(this$static, item){
  if (!item.open_0) {
    return;
  }
  $close_1(item);
  this$static.activeTabIndex = -1;
  this$static.openTab = null;
}

function $iLayout(this$static){
  var captionWidth, maxWidth, si, w, w$iterator, widgetWidth;
  if (!this$static.openTab) {
    return;
  }
  if (this$static.width_0 == null || $equals_2(this$static.width_0, '')) {
    maxWidth = 40;
    for (w$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); w$iterator.index_0 < w$iterator.this$0.size_0 - 1;) {
      w = $next_2(w$iterator);
      si = dynamicCast(w, 141);
      captionWidth = $getCaptionWidth(si);
      captionWidth > maxWidth && (maxWidth = captionWidth);
    }
    widgetWidth = $getFirstChildElement(this$static.openTab.content_0).offsetWidth || 0;
    widgetWidth > maxWidth && (maxWidth = widgetWidth);
    this$static.element_0.style['width'] = maxWidth + 'px';
    $setWidth_6(this$static.openTab, maxWidth);
  }
  runWebkitOverflowAutoFix(this$static.openTab.content_0);
}

function $isDynamicHeight(this$static){
  return this$static.height_0 == null || $equals_2(this$static.height_0, '');
}

function $moveStackItemIfNeeded(this$static, item, newIndex, tabUidl){
  var i, itemWidget, oldIndex, oldItem, oldWidget, tabContent, tabContentUIDL, w;
  tabContent = null;
  if (tabUidl.length - 2 > 0) {
    tabContentUIDL = tabUidl[2];
    tabContent = $getPaintable(this$static.client, tabContentUIDL);
  }
  itemWidget = $getComponent_0(item);
  if (tabContent) {
    if (tabContent != itemWidget) {
      oldIndex = -1;
      oldItem = null;
      for (i = 0; i < this$static.children_0.size_0; ++i) {
        w = $get_0(this$static.children_0, i);
        oldItem = dynamicCast(w, 141);
        if (tabContent == $getComponent_0(oldItem)) {
          oldIndex = i;
          break;
        }
      }
      if (oldIndex != -1 && oldIndex > newIndex) {
        $insert(this$static, oldItem, this$static.element_0, newIndex, true);
        return oldItem;
      }
    }
  }
   else {
    oldWidget = $getComponent_0(item);
    if (oldWidget) {
      item = new VAccordion$StackItem_0(this$static);
      $insert(this$static, item, this$static.element_0, newIndex, true);
    }
  }
  return item;
}

function $onSelectTab(this$static, item){
  var index;
  index = $indexOf(this$static.children_0, item);
  if (index != this$static.activeTabIndex && !this$static.disabled_0 && !this$static.readonly && !this$static.disabledTabKeys.map.containsKey($get_4(this$static.tabKeys, index))) {
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-loading', true);
    $addVariableToQueue(this$static.client, this$static.id_0, 'selected', $escapeVariableValue('' + dynamicCast($get_4(this$static.tabKeys, index), 1)), true, 115);
  }
}

function $open_0(this$static, itemIndex){
  var alreadyOpen, item;
  item = dynamicCast($get_0(this$static.children_0, itemIndex), 141);
  alreadyOpen = false;
  !!this$static.openTab && this$static.openTab.open_0 && (this$static.openTab == item?(alreadyOpen = true):$close_1(this$static.openTab));
  if (!alreadyOpen) {
    item.open_0 = true;
    item.content_0.style['top'] = (item.captionNode.offsetHeight || 0) + 'px';
    item.content_0.style['left'] = '0px';
    item.content_0.style['visibility'] = '';
    $setStyleName(item, getStylePrimaryName(item.element_0) + '-open', true);
    this$static.activeTabIndex = itemIndex;
    this$static.openTab = item;
  }
  $updateOpenTabSize(this$static);
}

function $updateOpenTabSize(this$static){
  var item, offsetHeight, spaceForOpenItem, usedPixels, w, w$iterator;
  if (!this$static.openTab) {
    this$static.renderSpace.height_0 = 0;
    this$static.renderSpace.width_0 = 0;
    return;
  }
  if (this$static.width_0 == null || $equals_2(this$static.width_0, '')) {
    this$static.renderSpace.width_0 = 0;
  }
   else {
    w = parseInt(this$static.element_0['offsetWidth']) || 0;
    $setWidth_6(this$static.openTab, w);
    this$static.renderSpace.width_0 = w;
  }
  if (this$static.height_0 == null || $equals_2(this$static.height_0, '')) {
    this$static.renderSpace.height_0 = 0;
    $setHeightFromWidget(this$static.openTab);
  }
   else {
    usedPixels = 0;
    for (w$iterator = new WidgetCollection$WidgetIterator_0(this$static.children_0); w$iterator.index_0 < w$iterator.this$0.size_0 - 1;) {
      w = $next_2(w$iterator);
      item = dynamicCast(w, 141);
      item == this$static.openTab?(usedPixels += item.captionNode.offsetHeight || 0):(usedPixels += parseInt(item.element_0['offsetHeight']) || 0);
    }
    offsetHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
    spaceForOpenItem = offsetHeight - usedPixels;
    spaceForOpenItem < 0 && (spaceForOpenItem = 0);
    this$static.renderSpace.height_0 = spaceForOpenItem;
    $setHeight_0(this$static.openTab, spaceForOpenItem);
  }
}

function VAccordion_0(){
  VTabsheetBase_0.call(this, 'v-accordion');
  this.paintables = new HashSet_0;
  this.lazyUpdateMap = new HashMap_0;
  this.renderSpace = new RenderSpace_2(0, 0, true);
  this.renderInformation = new RenderInformation_0;
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this.element_0.style['zoom'] = '1' , undefined);
}

function VAccordion(){
}

_ = VAccordion_0.prototype = VAccordion.prototype = new VTabsheetBase;
_.getAllocatedSpace = function getAllocatedSpace_8(child){
  return this.renderSpace;
}
;
_.getClass$ = function getClass_582(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAccordion_2_classLit;
}
;
_.getPaintableIterator = function getPaintableIterator(){
  var outerIter;
  return outerIter = $keySet(this.paintables.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter);
}
;
_.getTab = function getTab(index){
  if (index < this.children_0.size_0) {
    return dynamicCast($getPaintable_0(dynamicCast($get_0(this.children_0, index), 141)), 26);
  }
  return null;
}
;
_.getTabCount = function getTabCount(){
  return this.children_0.size_0;
}
;
_.iLayout = function iLayout(){
  $iLayout(this);
}
;
_.removeTab = function removeTab(index){
  var item;
  item = dynamicCast($get_0(this.children_0, index), 141);
  $remove_2(this, item);
}
;
_.renderTab = function renderTab(tabUidl, index, selected, hidden){
  var item, itemIndex;
  if (this.children_0.size_0 <= index) {
    item = new VAccordion$StackItem_0(this);
    this.children_0.size_0 == 0 && $setStyleName(item, getStylePrimaryName(item.getStyleElement()) + '-first', true);
    itemIndex = this.children_0.size_0;
    $add_0(this, item, this.element_0);
  }
   else {
    item = dynamicCast($get_0(this.children_0, index), 141);
    item = $moveStackItemIfNeeded(this, item, index, tabUidl);
    itemIndex = index;
  }
  item.caption_0.updateCaption_0(tabUidl);
  item.element_0.style.display = !hidden?'':'none';
  selected && (this.selectedUIDLItemIndex = itemIndex);
  tabUidl.length - 2 > 0 && this.lazyUpdateMap.put(item, tabUidl[2]);
}
;
_.replaceChildComponent = function replaceChildComponent_7(oldComponent, newComponent){
  var item, w, w$iterator;
  for (w$iterator = new WidgetCollection$WidgetIterator_0(this.children_0); w$iterator.index_0 < w$iterator.this$0.size_0 - 1;) {
    w = $next_2(w$iterator);
    item = dynamicCast(w, 141);
    if ((item.children_0.size_0 > 1?$get_0(item.children_0, 1):null) == oldComponent) {
      $replacePaintable(item, dynamicCast(newComponent, 26));
      return;
    }
  }
}
;
_.requestLayout = function requestLayout_8(child){
  var paintable, paintable$iterator;
  if (!(this.height_0 == null || $equals_2(this.height_0, '')) && !(this.width_0 == null || $equals_2(this.width_0, ''))) {
    for (paintable$iterator = child.iterator_0(); paintable$iterator.hasNext();) {
      paintable = dynamicCast(paintable$iterator.next_0(), 26);
      $handleComponentRelativeSize_0(this.client, dynamicCast(paintable, 70));
    }
    return true;
  }
  $updateOpenTabSize(this);
  if ($updateSize(this.renderInformation, this.element_0)) {
    $iLayout(this);
    $runDescendentsLayout(this.client, this);
    return false;
  }
   else {
    return true;
  }
}
;
_.setHeight = function setHeight_7(height){
  setHeightExcludingPaddingAndBorder(this, height, 2);
  this.height_0 = height;
  this.rendering || $updateOpenTabSize(this);
}
;
_.setWidth = function setWidth_12(width){
  if ($equals_2(this.width_0, width)) {
    return;
  }
  setWidthExcludingPaddingAndBorder(this, width, 2);
  this.width_0 = width;
  if (!this.rendering) {
    $updateOpenTabSize(this);
    if (this.height_0 == null || $equals_2(this.height_0, '')) {
      updateRelativeChildrenAndSendSizeUpdateEvent_0(this.client, this.openTab, this);
      $updateOpenTabSize(this);
    }
    (this.height_0 == null || $equals_2(this.height_0, '')) && $setHeightFromWidget(this.openTab);
    $iLayout(this);
  }
}
;
_.updateCaption = function updateCaption_9(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_17(uidl, client){
  var item, iterator, selectedItem, selectedTabUIDL, outerIter, entry;
  this.rendering = true;
  this.selectedUIDLItemIndex = -1;
  $updateFromUIDL_8(this, uidl, client);
  if (this.selectedUIDLItemIndex >= 0) {
    selectedItem = dynamicCast($get_0(this.children_0, this.selectedUIDLItemIndex), 141);
    selectedTabUIDL = dynamicCastJso(this.lazyUpdateMap.remove_4(selectedItem));
    $open_0(this, this.selectedUIDLItemIndex);
    $setContent(selectedItem, selectedTabUIDL);
  }
   else 
    !Boolean(uidl[1]['cached']) && !!this.openTab && $close_0(this, this.openTab);
  $iLayout(this);
  if (this.lazyUpdateMap.size_1() > 0) {
    for (iterator = (outerIter = $keySet(this.lazyUpdateMap).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); iterator.val$outerIter.hasNext();) {
      item = dynamicCast((entry = dynamicCast(iterator.val$outerIter.next_0(), 58) , entry.getKey()), 141);
      $setContent(item, dynamicCastJso(this.lazyUpdateMap.get_0(item)));
    }
    this.lazyUpdateMap.clear_0();
  }
  $updateSize(this.renderInformation, this.element_0);
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 126:1};
_.height_0 = null;
_.openTab = null;
_.rendering = false;
_.selectedUIDLItemIndex = -1;
_.width_0 = '';
function $close_1(this$static){
  this$static.content_0.style['visibility'] = 'hidden';
  this$static.content_0.style['top'] = '-100000px';
  this$static.content_0.style['left'] = '-100000px';
  $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-open', false);
  $setHeight_0(this$static, -1);
  this$static.element_0.style['width'] = '';
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this$static.element_0.style['zoom'] = '1' , undefined);
  this$static.open_0 = false;
}

function $getCaptionWidth(this$static){
  var captionWidth, padding;
  if (!this$static.caption_0) {
    return 0;
  }
  captionWidth = this$static.caption_0.getRequiredWidth();
  padding = measureHorizontalPaddingAndBorder(this$static.caption_0.element_0, 18);
  return captionWidth + padding;
}

function $getComponent_0(this$static){
  if (this$static.children_0.size_0 < 2) {
    return null;
  }
  return $get_0(this$static.children_0, 1);
}

function $getPaintable_0(this$static){
  return this$static.children_0.size_0 > 1?$get_0(this$static.children_0, 1):null;
}

function $replacePaintable(this$static, newPntbl){
  if (this$static.children_0.size_0 > 1) {
    $unregisterPaintable(this$static.this$0.client, dynamicCast($get_0(this$static.children_0, 1), 26));
    this$static.this$0.paintables.map.remove_4($get_0(this$static.children_0, 1)) != null;
    $remove_2(this$static, $get_0(this$static.children_0, 1));
  }
  $add_0(this$static, dynamicCast(newPntbl, 70), this$static.content_0);
  $add_14(this$static.this$0.paintables, newPntbl);
}

function $setContent(this$static, contentUidl){
  var newPntbl;
  newPntbl = $getPaintable(this$static.this$0.client, contentUidl);
  if (!(this$static.children_0.size_0 > 1?$get_0(this$static.children_0, 1):null)) {
    $add_0(this$static, dynamicCast(newPntbl, 70), this$static.content_0);
    $add_14(this$static.this$0.paintables, newPntbl);
  }
   else 
    (this$static.children_0.size_0 > 1?$get_0(this$static.children_0, 1):null) != newPntbl && $replacePaintable(this$static, newPntbl);
  newPntbl.updateFromUIDL(contentUidl, this$static.this$0.client);
  Boolean(contentUidl[1]['cached']) && $handleComponentRelativeSize_0(this$static.this$0.client, dynamicCast(newPntbl, 70));
  this$static.open_0 && $isDynamicHeight(this$static.this$0) && $setHeightFromWidget(this$static);
}

function $setHeight_0(this$static, height){
  if (height == -1) {
    this$static.element_0.style['height'] = '';
    this$static.content_0.style['height'] = '0px';
  }
   else {
    this$static.element_0.style['height'] = height + (this$static.captionNode.offsetHeight || 0) + 'px';
    this$static.content_0.style['height'] = height + 'px';
    this$static.content_0.style['top'] = (this$static.captionNode.offsetHeight || 0) + 'px';
  }
}

function $setHeightFromWidget(this$static){
  var paintable, paintableHeight;
  paintable = this$static.children_0.size_0 > 1?$get_0(this$static.children_0, 1):null;
  if (!paintable) {
    return;
  }
  paintableHeight = paintable.element_0.offsetHeight || 0;
  $setHeight_0(this$static, paintableHeight);
}

function $setWidth_6(this$static, width){
  width == -1?(this$static.element_0.style['width'] = '' , undefined):(this$static.element_0.style['width'] = width + 'px' , undefined);
}

function VAccordion$StackItem_0(this$0){
  this.this$0 = this$0;
  this.children_0 = new WidgetCollection_0(this);
  this.content_0 = $doc.createElement('div');
  this.captionNode = $doc.createElement('div');
  this.element_0 = $doc.createElement('div');
  this.caption_0 = new VCaption_0(null, this$0.client);
  $addDomHandler(this.caption_0, this, ($clinit_15() , $clinit_15() , TYPE_1));
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this.captionNode.__listener = this;
    sinkEvents(this.captionNode, 1);
  }
  $add_0(this, this.caption_0, this.captionNode);
  this.captionNode.appendChild(this.caption_0.element_0);
  this.element_0.appendChild(this.captionNode);
  this.element_0.appendChild(this.content_0);
  this.element_0['className'] = 'v-accordion-item';
  this.content_0['className'] = 'v-accordion-item-content';
  this.captionNode['className'] = 'v-accordion-item-caption';
  $close_1(this);
}

function VAccordion$StackItem(){
}

_ = VAccordion$StackItem_0.prototype = VAccordion$StackItem.prototype = new ComplexPanel;
_.getClass$ = function getClass_583(){
  return Lcom_vaadin_terminal_gwt_client_ui_VAccordion$StackItem_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_15(event_0){
  $onSelectTab(this.this$0, this);
}
;
_.onClick = function onClick_15(event_0){
  $onSelectTab(this.this$0, this);
}
;
_.setVisible = function setVisible_3(visible){
  this.element_0.style.display = visible?'':'none';
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 39:1, 69:1, 70:1, 75:1, 141:1};
_.caption_0 = null;
_.open_0 = false;
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader21_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader21'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$30$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$30$1'), Lcom_vaadin_terminal_gwt_client_ui_VAccordion$StackItem_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VAccordion$StackItem');
$entry(onLoad_12)();
