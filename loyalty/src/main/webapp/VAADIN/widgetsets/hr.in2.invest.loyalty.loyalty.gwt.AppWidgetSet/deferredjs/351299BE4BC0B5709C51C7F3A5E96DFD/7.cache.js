function $runCallbacks_36(){
  var $e0, e, handler;
  while (callbacksHead_36) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_36 = callbacksHead_36.next;
    !callbacksHead_36 && (callbacksTail_36 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VMenuBar_2_classLit, new WidgetMapImpl$10$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VMenuBar_2_classLit, new WidgetMapImpl$10$1_0);
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

function AsyncLoader7_0(){
}

function onLoad_36(){
  instance_37 = new AsyncLoader7_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 7);
  !!$stats && $stats($createStatsEvent('runCallbacks7', 'begin', -1, -1));
  instance_37.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks7', 'end', -1, -1));
}

function AsyncLoader7(){
}

_ = AsyncLoader7_0.prototype = AsyncLoader7.prototype = new Object_0;
_.getClass$ = function getClass_267(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_2_classLit;
}
;
_.runCallbacks = function runCallbacks_36(){
  $runCallbacks_36();
}
;
_.castableTypeMap$ = {};
function $addAutoHidePartner(this$static, partner){
  !this$static.autoHidePartners && (this$static.autoHidePartners = new ArrayList_0);
  $add_12(this$static.autoHidePartners, partner);
}

function WidgetMapImpl$10$1_0(){
}

function WidgetMapImpl$10$1(){
}

_ = WidgetMapImpl$10$1_0.prototype = WidgetMapImpl$10$1.prototype = new Object_0;
_.get = function get_1(){
  return new VMenuBar_0;
}
;
_.getClass$ = function getClass_499(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$10$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $addItem_3(this$static, item){
  if ($indexOf_1(this$static.items, item, 0) != -1) {
    return;
  }
  this$static.containerElement.appendChild(item.element_0);
  item.parentMenu = this$static;
  $setSelected_0(item, false);
  $add_12(this$static.items, item);
}

function $addItem_4(this$static, item){
  if ($indexOf_1(this$static.items, item, 0) != -1) {
    return;
  }
  $insertChild(this$static.containerElement, item.element_0, 0);
  item.parentMenu = this$static;
  $setSelected_0(item, false);
  $add_13(this$static.items, 0, item);
}

function $adjustPopupHeight(this$static, top_0){
  var availableHeight, contentWidth, missingHeight, moveUpBy, style;
  availableHeight = (($clinit_50() , $doc.body).offsetHeight || 0) - top_0 - 10;
  missingHeight = (parseInt(this$static.popup.element_0['offsetHeight']) || 0) - availableHeight;
  if (missingHeight > 0) {
    moveUpBy = top_0 - 10 < missingHeight?top_0 - 10:missingHeight;
    top_0 -= moveUpBy;
    missingHeight -= moveUpBy;
    availableHeight += moveUpBy;
    if (missingHeight > 0) {
      contentWidth = parseInt(this$static.visibleChildMenu.element_0['offsetWidth']) || 0;
      style = this$static.popup.element_0.style;
      style['height'] = availableHeight + ($clinit_9() , 'px');
      style['overflowY'] = ($clinit_7() , 'scroll');
      $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))?(style['paddingRight'] = getNativeScrollbarSize() + 'px' , undefined):(style['width'] = contentWidth + getNativeScrollbarSize() + 'px' , undefined);
      this$static.popup.updateShadowSizeAndPosition();
    }
  }
  return top_0;
}

function $buildItemHTML(this$static, item){
  var bgStyle, itemHTML, itemText;
  itemHTML = new StringBuffer_0;
  if ('separator' in item[1]) {
    itemHTML.impl.string += '<span>---<\/span>';
  }
   else {
    if (item.length - 2 > 0) {
      bgStyle = '';
      this$static.submenuIcon != null && (bgStyle = ' style="background-image: url(' + escapeAttribute(this$static.submenuIcon) + '); text-indent: -999px; width: 1em;"');
      itemHTML.impl.string += '<span class="v-menubar-submenu-indicator"' + bgStyle + '>&#x25BA;<\/span>';
    }
    itemHTML.impl.string += '<span class="v-menubar-menuitem-caption">';
    'icon' in item[1] && $append_0(itemHTML, '<img src="' + escapeAttribute($translateVaadinUri(this$static.client, item[1]['icon'])) + '" class="v-icon" alt="" />');
    itemText = item[1]['text'];
    this$static.htmlContentAllowed || (itemText = escapeHTML(itemText));
    itemHTML.impl.string += itemText;
    itemHTML.impl.string += '<\/span>';
  }
  return itemHTML.impl.string;
}

function $clearItems_1(this$static){
  var e;
  e = this$static.containerElement;
  while ($getChildCount(e) > 0) {
    e.removeChild($getChild(e, 0));
  }
  $clear_6(this$static.items);
}

function $getConsumedWidth(this$static){
  var item, item$iterator, w;
  w = 0;
  for (item$iterator = new AbstractList$IteratorImpl_0(this$static.items); item$iterator.i < item$iterator.this$0_0.size_1();) {
    item = dynamicCast($next_5(item$iterator), 157);
    $indexOf_1(this$static.collapsedRootItems.items, item, 0) != -1 || (w += parseInt(item.element_0['offsetWidth']) || 0);
  }
  return w;
}

function $handleNavigation_0(this$static, keycode, ctrl, shift){
  var command, idx, root, selected;
  if (keycode == 9) {
    $setSelected(this$static, null);
    $hideChildren(this$static);
    this$static.menuVisible = false;
    return false;
  }
  if (ctrl || shift || !this$static.enabled) {
    return false;
  }
  if (keycode == 37) {
    if (!this$static.selected_0) {
      $setSelected(this$static, dynamicCast($get_4(this$static.items, this$static.items.size_0 - 1), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 37, false, false);
    }
     else if (!this$static.visibleChildMenu && !this$static.parentMenu) {
      idx = $indexOf_1(this$static.items, this$static.selected_0, 0);
      idx > 0?$setSelected(this$static, dynamicCast($get_4(this$static.items, idx - 1), 157)):$setSelected(this$static, dynamicCast($get_4(this$static.items, this$static.items.size_0 - 1), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 37, false, false);
    }
     else if (this$static.visibleChildMenu) {
      $handleNavigation_0(this$static.visibleChildMenu, 37, false, false);
    }
     else if (!this$static.parentMenu.parentMenu) {
      root = this$static.parentMenu;
      $setSelected(root.selected_0.subMenu, null);
      $hideChildren(root);
      idx = $indexOf_1(root.items, root.selected_0, 0);
      idx = idx > 0?idx:root.items.size_0;
      selected = dynamicCast($get_4(root.items, --idx), 157);
      while (selected.isSeparator || !selected.enabled) {
        idx = idx > 0?idx:root.items.size_0;
        selected = dynamicCast($get_4(root.items, --idx), 157);
      }
      $setSelected(root, selected);
      $openMenuAndFocusFirstIfPossible(this$static, selected);
    }
     else {
      $setSelected(this$static.parentMenu.selected_0.subMenu, null);
      $hideChildren(this$static.parentMenu);
    }
    return true;
  }
   else if (keycode == 39) {
    if (!this$static.selected_0) {
      $setSelected(this$static, dynamicCast($get_4(this$static.items, 0), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 39, false, false);
    }
     else if (!this$static.visibleChildMenu && !this$static.parentMenu) {
      idx = $indexOf_1(this$static.items, this$static.selected_0, 0);
      idx < this$static.items.size_0 - 1?$setSelected(this$static, dynamicCast($get_4(this$static.items, idx + 1), 157)):$setSelected(this$static, dynamicCast($get_4(this$static.items, 0), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 39, false, false);
    }
     else if (!this$static.visibleChildMenu && !!this$static.selected_0.subMenu) {
      $showChildMenu(this$static, this$static.selected_0);
      this$static.menuVisible = true;
      $handleNavigation_0(this$static.visibleChildMenu, 39, false, false);
    }
     else if (!this$static.visibleChildMenu) {
      root = this$static.parentMenu;
      while (root.parentMenu) {
        root = root.parentMenu;
      }
      $hideChildren(root);
      idx = $indexOf_1(root.items, root.selected_0, 0);
      idx = idx < root.items.size_0 - 1?idx:-1;
      selected = dynamicCast($get_4(root.items, ++idx), 157);
      while (selected.isSeparator || !selected.enabled) {
        idx = idx < root.items.size_0 - 1?idx:-1;
        selected = dynamicCast($get_4(root.items, ++idx), 157);
      }
      $setSelected(root, selected);
      $openMenuAndFocusFirstIfPossible(this$static, selected);
    }
     else 
      !!this$static.visibleChildMenu && $handleNavigation_0(this$static.visibleChildMenu, 39, false, false);
    return true;
  }
   else if (keycode == 38) {
    if (!this$static.selected_0) {
      $setSelected(this$static, dynamicCast($get_4(this$static.items, this$static.items.size_0 - 1), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 38, false, false);
    }
     else if (this$static.visibleChildMenu) {
      $handleNavigation_0(this$static.visibleChildMenu, 38, false, false);
    }
     else {
      idx = $indexOf_1(this$static.items, this$static.selected_0, 0);
      idx > 0?$setSelected(this$static, dynamicCast($get_4(this$static.items, idx - 1), 157)):$setSelected(this$static, dynamicCast($get_4(this$static.items, this$static.items.size_0 - 1), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 38, false, false);
    }
    return true;
  }
   else if (keycode == 40) {
    if (!this$static.selected_0) {
      $selectFirstItem_0(this$static);
    }
     else if (!this$static.visibleChildMenu && !this$static.parentMenu) {
      $openMenuAndFocusFirstIfPossible(this$static, this$static.selected_0);
    }
     else if (this$static.visibleChildMenu) {
      $handleNavigation_0(this$static.visibleChildMenu, 40, false, false);
    }
     else {
      idx = $indexOf_1(this$static.items, this$static.selected_0, 0);
      idx < this$static.items.size_0 - 1?$setSelected(this$static, dynamicCast($get_4(this$static.items, idx + 1), 157)):$setSelected(this$static, dynamicCast($get_4(this$static.items, 0), 157));
      $isSelectable(this$static.selected_0) || $handleNavigation_0(this$static, 40, false, false);
    }
    return true;
  }
   else if (keycode == 27) {
    $setSelected(this$static, null);
    $hideChildren(this$static);
    this$static.menuVisible = false;
  }
   else if (keycode == 13) {
    if (!this$static.selected_0) {
      $selectFirstItem_0(this$static);
    }
     else if (this$static.visibleChildMenu) {
      $handleNavigation_0(this$static.visibleChildMenu, 13, false, false);
      this$static.menuVisible = false;
    }
     else if (!this$static.visibleChildMenu && !!this$static.selected_0.subMenu) {
      $openMenuAndFocusFirstIfPossible(this$static, this$static.selected_0);
    }
     else {
      command = this$static.selected_0.command;
      !!command && $onMenuClick(command.this$0.hostReference, command.val$itemId);
      $setSelected(this$static, null);
      $hideParents(this$static, true);
    }
  }
  return false;
}

function $hideChildren(this$static){
  if (this$static.visibleChildMenu) {
    $hideChildren(this$static.visibleChildMenu);
    this$static.popup.hide();
  }
}

function $hideParents(this$static, autoClosed){
  if (this$static.visibleChildMenu) {
    this$static.popup.hide();
    $setSelected(this$static, null);
    this$static.menuVisible = !autoClosed;
  }
  !!this$static.parentMenu && $hideParents(this$static.parentMenu, autoClosed);
}

function $iLayout_0(this$static, iconLoadEvent){
  var availableWidth, collapse, diff, expand, moreItemWidth, morePresent, overflow, usedWidth, widthAvailable, widthBefore, widthGrowth, widthNeeded, widthReduced;
  if ((this$static.items.size_0 > 1 || !!this$static.collapsedRootItems && this$static.collapsedRootItems.items.size_0 > 0) && this$static.element_0.style['width'] != null && !!this$static.moreItem) {
    morePresent = $indexOf_1(this$static.items, this$static.moreItem, 0) != -1;
    $addItem_3(this$static, this$static.moreItem);
    moreItemWidth = parseInt(this$static.moreItem.element_0['offsetWidth']) || 0;
    morePresent || $removeItem_0(this$static, this$static.moreItem);
    if (this$static.paddingWidth == -1) {
      widthBefore = this$static.element_0.clientWidth;
      this$static.element_0.style['padding'] = '0';
      this$static.paddingWidth = widthBefore - this$static.element_0.clientWidth;
      this$static.element_0.style['padding'] = '';
    }
    overflow = '';
    if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
      overflow = this$static.element_0.style['overflow'];
      this$static.element_0.style['overflow'] = 'hidden';
    }
    availableWidth = this$static.element_0.clientWidth - this$static.paddingWidth;
    $isIE6((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) && (this$static.element_0.style['overflow'] = overflow , undefined);
    usedWidth = $getConsumedWidth(this$static);
    diff = availableWidth - usedWidth;
    $removeItem_0(this$static, this$static.moreItem);
    if (diff < 0) {
      widthNeeded = usedWidth - availableWidth;
      morePresent || (widthNeeded += moreItemWidth);
      widthReduced = 0;
      while (widthReduced < widthNeeded && this$static.items.size_0 > 0) {
        collapse = dynamicCast($get_4(this$static.items, this$static.items.size_0 - 1), 157);
        widthReduced += parseInt(collapse.element_0['offsetWidth']) || 0;
        $removeItem_0(this$static, collapse);
        $addItem_4(this$static.collapsedRootItems, collapse);
      }
    }
     else if (this$static.collapsedRootItems.items.size_0 > 0) {
      widthAvailable = diff + moreItemWidth;
      widthGrowth = 0;
      while (widthAvailable > widthGrowth && this$static.collapsedRootItems.items.size_0 > 0) {
        expand = dynamicCast($get_4(this$static.collapsedRootItems.items, 0), 157);
        $removeItem_0(this$static.collapsedRootItems, expand);
        $addItem_3(this$static, expand);
        widthGrowth += parseInt(expand.element_0['offsetWidth']) || 0;
        this$static.collapsedRootItems.items.size_0 > 0 && (widthAvailable -= moreItemWidth);
        if (widthGrowth > widthAvailable) {
          $removeItem_0(this$static, expand);
          $addItem_4(this$static.collapsedRootItems, expand);
        }
         else {
          widthAvailable = diff;
        }
        $isIE6((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) && $reloadImages(expand.element_0);
      }
    }
    this$static.collapsedRootItems.items.size_0 > 0 && $addItem_3(this$static, this$static.moreItem);
  }
  !!this$static.popup && this$static.popup.show();
  iconLoadEvent && notifyParentOfSizeChange(this$static, false);
}

function $itemClick(this$static, item){
  if (item.command) {
    $setSelected(this$static, null);
    !!this$static.visibleChildMenu && $hideChildren(this$static.visibleChildMenu);
    $hideParents(this$static, true);
    this$static.menuVisible = false;
    $scheduleDeferred_0(($clinit_1() , INSTANCE), item.command);
  }
   else {
    if (!!item.subMenu && item.subMenu != this$static.visibleChildMenu) {
      $setSelected(this$static, item);
      $showChildMenu(this$static, item);
      this$static.menuVisible = true;
    }
     else if (!this$static.subMenu) {
      $setSelected(this$static, null);
      $hideChildren(this$static);
      this$static.menuVisible = false;
    }
  }
}

function $itemOut(this$static, item){
  if (this$static.visibleChildMenu != item.subMenu) {
    !!this$static.visibleChildMenu && this$static.visibleChildMenu != item.subMenu && this$static.popup.hide();
    $setSelected(this$static, null);
  }
   else 
    !this$static.visibleChildMenu && $setSelected(this$static, null);
}

function $itemOver_1(this$static, item){
  if ((this$static.openRootOnHover || this$static.subMenu || this$static.menuVisible) && !item.isSeparator) {
    $setSelected(this$static, item);
    if (!this$static.subMenu && this$static.openRootOnHover && !this$static.menuVisible) {
      this$static.menuVisible = true;
      prepare(this$static);
    }
  }
  this$static.menuVisible && this$static.visibleChildMenu != item.subMenu && !!this$static.popup && this$static.popup.hide();
  this$static.menuVisible && !!item.subMenu && this$static.visibleChildMenu != item.subMenu && $showChildMenu(this$static, item);
}

function $onMenuClick(this$static, clickedItemId){
  this$static.uidlId != null && !!this$static.client && $addVariableToQueue(this$static.client, this$static.uidlId, 'clickedId', '' + clickedItemId, true, 105);
}

function $onShow(this$static){
  if (this$static.selected_0) {
    $setSelected_0(this$static.selected_0, false);
    this$static.selected_0 = null;
  }
  this$static.menuVisible = true;
}

function $openMenuAndFocusFirstIfPossible(this$static, menuItem){
  var parentMenu, subMenu;
  subMenu = menuItem.subMenu;
  if (!subMenu) {
    return;
  }
  parentMenu = menuItem.parentMenu;
  $showChildMenu(parentMenu, menuItem);
  this$static.menuVisible = true;
  $selectFirstItem_0(subMenu);
}

function $reloadImages(root){
  var e, i, imgElements, src;
  imgElements = root.getElementsByTagName('img');
  for (i = 0; i < imgElements.length; ++i) {
    e = imgElements[i];
    src = e.getAttribute('src') || '';
    e.setAttribute('src', src);
  }
}

function $removeItem_0(this$static, item){
  var index;
  if ($indexOf_1(this$static.items, item, 0) != -1) {
    index = $indexOf_1(this$static.items, item, 0);
    this$static.containerElement.removeChild($getChild(this$static.containerElement, index));
    $remove_16(this$static.items, index);
  }
}

function $selectFirstItem_0(this$static){
  var i, item;
  for (i = 0; i < this$static.items.size_0; ++i) {
    item = dynamicCast($get_4(this$static.items, i), 157);
    if (!item.isSeparator && item.enabled) {
      $setSelected(this$static, item);
      break;
    }
  }
}

function $setSelected(this$static, item){
  item != this$static.selected_0 && !!this$static.selected_0 && $setSelected_0(this$static.selected_0, false);
  !!item && $setSelected_0(item, true);
  this$static.selected_0 = item;
}

function $showChildMenu(this$static, item){
  var left, top_0;
  if (this$static.subMenu) {
    left = ($getAbsoluteLeft(item.parentMenu.element_0) | 0) + (parseInt(item.parentMenu.element_0['offsetWidth']) || 0);
    top_0 = $getAbsoluteTop(item.element_0) | 0;
  }
   else {
    left = $getAbsoluteLeft(item.element_0) | 0;
    top_0 = ($getAbsoluteTop(item.parentMenu.element_0) | 0) + (parseInt(item.parentMenu.element_0['offsetHeight']) || 0);
  }
  $showChildMenuAt(this$static, item, top_0, left);
}

function $showChildMenuAt(this$static, item, top_0, left){
  this$static.popup = new VOverlay_1(true, false);
  this$static.popup.setStyleName('v-menubar-popup');
  $setWidget_0(this$static.popup, item.subMenu);
  $addHandler(this$static.popup, this$static, TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
  $addAutoHidePartner(this$static.popup, item.element_0);
  this$static.popup.setPopupPosition(0, 0);
  $onShow(item.subMenu);
  this$static.visibleChildMenu = item.subMenu;
  item.subMenu.parentMenu = this$static;
  this$static.popup.show();
  if (left + (parseInt(this$static.popup.element_0['offsetWidth']) || 0) >= (($clinit_50() , $doc.body).offsetWidth || 0) - 10) {
    this$static.subMenu?(left = ($getAbsoluteLeft(item.parentMenu.element_0) | 0) - (parseInt(this$static.popup.element_0['offsetWidth']) || 0) - 10):(left = ($doc.body.offsetWidth || 0) - (parseInt(this$static.popup.element_0['offsetWidth']) || 0) - 10);
    left < 10 && (left = 10);
  }
  top_0 = $adjustPopupHeight(this$static, top_0);
  this$static.popup.setPopupPosition(left, top_0);
  if ($isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.popup.element_0.style['zoom'] = '';
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VMenuBar$3_0(this$static));
  }
}

function VMenuBar_0(){
  VMenuBar_1.call(this, false, null);
  $addDomHandler(this, this, ($clinit_18() , $clinit_18() , TYPE_4));
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko?$addDomHandler(this, this, ($clinit_20() , $clinit_20() , TYPE_6)):$addDomHandler(this, this, ($clinit_19() , $clinit_19() , TYPE_5));
}

function VMenuBar_1(subMenu, parentMenu){
  this.element_0 = $doc.createElement('div');
  this.setTabIndex(0);
  this.hostReference = this;
  this.iconLoadedExecutioner = new VLazyExecutor_0(100, new VMenuBar$1_0(this));
  this.items = new ArrayList_0;
  this.popup = null;
  this.visibleChildMenu = null;
  this.containerElement = this.element_0;
  if (subMenu) {
    this.element_0['className'] = 'v-menubar-submenu';
    this.parentMenu = parentMenu;
  }
   else {
    this.element_0['className'] = 'v-menubar';
  }
  this.subMenu = subMenu;
  this.eventsToSink == -1?sinkEvents(this.element_0, 32817 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 32817);
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function VMenuBar(){
}

_ = VMenuBar_1.prototype = VMenuBar_0.prototype = VMenuBar.prototype = new SimpleFocusablePanel;
_.getClass$ = function getClass_653(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar_2_classLit;
}
;
_.getContainerElement = function getContainerElement_5(){
  return this.containerElement;
}
;
_.getSubPartElement = function getSubPartElement_2(subPart){
  var index, item;
  index = __parseAndValidateInt(subPart.substr(4, subPart.length - 4));
  item = dynamicCast($get_4(this.items, index), 157);
  return item.element_0;
}
;
_.getSubPartName = function getSubPartName_2(subElement){
  var i, itemCount, menuItemRoot, name_0;
  if (!$isOrHasChild(this.element_0, subElement)) {
    return null;
  }
  menuItemRoot = subElement;
  while (!!menuItemRoot && !!$getParentElement(menuItemRoot) && $getParentElement(menuItemRoot) != this.element_0) {
    menuItemRoot = $getParentElement(menuItemRoot);
  }
  itemCount = this.items.size_0;
  for (i = 0; i < itemCount; ++i) {
    if (dynamicCast($get_4(this.items, i), 157).element_0 == menuItemRoot) {
      name_0 = 'item' + i;
      return name_0;
    }
  }
  return null;
}
;
_.iLayout = function iLayout_1(){
  $iLayout_0(this, false);
}
;
_.onBrowserEvent = function onBrowserEvent_29(e){
  var i, item, parent_0, targetElement, targetItem;
  $onBrowserEvent(this, e);
  if ($eventGetTypeInt(e.type) == 32768) {
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && doIE6PngFix(e.target);
    parent_0 = this.parentMenu;
    parent_0?$trigger_0(parent_0.iconLoadedExecutioner):$trigger_0(this.iconLoadedExecutioner);
    return;
  }
  targetElement = e.target;
  targetItem = null;
  for (i = 0; i < this.items.size_0; ++i) {
    item = dynamicCast($get_4(this.items, i), 157);
    $isOrHasChild(item.element_0, targetElement) && (targetItem = item);
  }
  !targetItem && !!this.client?($handleTooltipEvent(this.client.tooltip, e, this, null) , undefined):!!targetItem && ($onBrowserEvent(targetItem, e) , !!targetItem.client && ($handleTooltipEvent(targetItem.client.tooltip, e, $findRootMenu(targetItem), targetItem) , undefined));
  if (targetItem) {
    switch ($eventGetTypeInt(e.type)) {
      case 1:
        this.enabled && targetItem.enabled && $itemClick(this, targetItem);
        if (this.subMenu) {
          parent_0 = this.parentMenu;
          while (parent_0.parentMenu) {
            parent_0 = parent_0.parentMenu;
          }
          $clinit_53();
          $focus(parent_0.element_0);
        }

        break;
      case 16:
        $clinit();
        !!INSTANCE_2 && $cancel_0(INSTANCE_2);
        this.enabled && targetItem.enabled && $itemOver_1(this, targetItem);
        break;
      case 32:
        $itemOut(this, targetItem);
        $clinit();
        !!INSTANCE_2 && !!INSTANCE_2.activeRoot && $schedule(INSTANCE_2, 750);
    }
  }
   else if (this.subMenu && $eventGetTypeInt(e.type) == 1 && this.subMenu) {
    parent_0 = this.parentMenu;
    while (parent_0.parentMenu) {
      parent_0 = parent_0.parentMenu;
    }
    $clinit_53();
    $focus(parent_0.element_0);
  }
}
;
_.onClose = function onClose_4(event_0){
  $hideChildren(this);
  if (event_0.autoClosed) {
    $hideParents(this, true);
    this.menuVisible = false;
  }
  this.visibleChildMenu = null;
  this.popup = null;
}
;
_.onDetach = function onDetach_11(){
  $onDetach(this);
  if (!this.subMenu) {
    $setSelected(this, null);
    $hideChildren(this);
    this.menuVisible = false;
  }
}
;
_.onFocus = function onFocus_6(event_0){
}
;
_.onKeyDown = function onKeyDown_5(event_0){
  $handleNavigation_0(this, event_0.nativeEvent.keyCode || 0, !!event_0.nativeEvent.ctrlKey || !!event_0.nativeEvent.metaKey, !!event_0.nativeEvent.shiftKey) && (event_0.nativeEvent.preventDefault() , undefined);
}
;
_.onKeyPress = function onKeyPress_1(event_0){
  $handleNavigation_0(this, event_0.nativeEvent.keyCode || 0, !!event_0.nativeEvent.ctrlKey || !!event_0.nativeEvent.metaKey, !!event_0.nativeEvent.shiftKey) && (event_0.nativeEvent.preventDefault() , undefined);
}
;
_.onLoad_0 = function onLoad_46(){
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $reloadImages(this.element_0);
}
;
_.setWidth = function setWidth_26(width){
  var paddingBorder, requestedPixelWidth, w;
  if (equals_3(this.width_0, width)) {
    return;
  }
  this.width_0 = width;
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && width.lastIndexOf('px') != -1 && width.lastIndexOf('px') == width.length - 'px'.length) {
    requestedPixelWidth = __parseAndValidateInt(width.substr(0, width.length - 2 - 0));
    paddingBorder = measureHorizontalPaddingAndBorder(this.element_0, 0);
    w = requestedPixelWidth - paddingBorder;
    w < 0 && (w = 0);
    this.element_0.style['width'] = w + ($clinit_9() , 'px');
  }
   else {
    setWidthExcludingPaddingAndBorder(this, width, 0);
  }
  if (!this.subMenu) {
    $hideChildren(this);
    $setSelected(this, null);
    this.menuVisible = false;
  }
}
;
_.updateFromUIDL = function updateFromUIDL_36(uidl, client){
  var cmd, currentItem, currentMenu, hasCheckableItem, item, itemHTML, itemHasCommand, itemId, itemIsCheckable, iteratorStack, itr, menuItem, menuItem$iterator, menuStack, moreItemText, moreItemUIDL, options, style, style$array, style$index, style$max, uidlItems, componentDetail, item_0;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.htmlContentAllowed = 'usehtml' in uidl[1];
  this.openRootOnHover = Boolean(uidl[1]['ormoh']);
  this.enabled = !Boolean(uidl[1]['disabled']);
  this.client = client;
  this.uidlId = uidl[1]['id'];
  this.items.size_0 == 0 || $clearItems_1(this);
  options = uidl[2];
  'submenuIcon' in options[1]?(this.submenuIcon = $translateVaadinUri(client, uidl[2][1]['submenuIcon'])):(this.submenuIcon = null);
  if ('width' in uidl[1]) {
    moreItemUIDL = options[2];
    itemHTML = new StringBuffer_0;
    'icon' in moreItemUIDL[1] && $append_0(itemHTML, '<img src="' + escapeAttribute($translateVaadinUri(client, moreItemUIDL[1]['icon'])) + '" class="v-icon" alt="" />');
    moreItemText = moreItemUIDL[1]['text'];
    $equals_2('', moreItemText) && (moreItemText = '&#x25BA;');
    itemHTML.impl.string += moreItemText;
    this.moreItem = new VMenuBar$CustomMenuItem_0;
    $setHTML_2(this.moreItem, itemHTML.impl.string);
    this.moreItem.command = null;
    this.collapsedRootItems = new VMenuBar_1(true, dynamicCast((componentDetail = client.idToPaintableDetail[this.uidlId] , !componentDetail?null:componentDetail.component), 156));
    this.moreItem.subMenu = this.collapsedRootItems;
    setStyleName(this.moreItem.getStyleElement(), 'v-menubar-more-menuitem', true);
  }
  uidlItems = uidl[3];
  itr = new UIDL$1_0(uidlItems);
  iteratorStack = new Stack_0;
  menuStack = new Stack_0;
  currentMenu = this;
  while (itr.hasNext()) {
    item = dynamicCastJso(itr.next_0());
    itemId = item[1]['id'];
    itemHasCommand = 'command' in item[1];
    itemIsCheckable = 'checked' in item[1];
    itemHTML = $buildItemHTML(this, item);
    cmd = null;
    'separator' in item[1] || (itemHasCommand || itemIsCheckable) && (cmd = new VMenuBar$2_0(this, itemId));
    currentItem = (item_0 = new VMenuBar$CustomMenuItem_0 , item_0.element_0.innerHTML = itemHTML || '' , sinkOnloadForImages(item_0.element_0) , item_0.command = cmd , $addItem_3(currentMenu, item_0) , item_0);
    $updateFromUIDL_16(currentItem, item, client);
    if (item.length - 2 > 0) {
      $add_12(menuStack.arrayList, currentMenu);
      $add_12(iteratorStack.arrayList, itr);
      itr = new UIDL$1_0(item);
      currentMenu = new VMenuBar_1(true, currentMenu);
      if ('style' in uidl[1]) {
        for (style$array = $split_0(uidl[1]['style'], ' ', 0) , style$index = 0 , style$max = style$array.length; style$index < style$max; ++style$index) {
          style = style$array[style$index];
          $setStyleName(currentMenu, getStylePrimaryName(currentMenu.getStyleElement()) + '-' + style, true);
        }
      }
      currentItem.subMenu = currentMenu;
    }
    while (!itr.hasNext() && iteratorStack.arrayList.size_0 != 0) {
      hasCheckableItem = false;
      for (menuItem$iterator = new AbstractList$IteratorImpl_0(currentMenu.items); menuItem$iterator.i < menuItem$iterator.this$0_0.size_1();) {
        menuItem = dynamicCast($next_5(menuItem$iterator), 157);
        hasCheckableItem = hasCheckableItem || menuItem.checkable;
      }
      hasCheckableItem?$setStyleName(currentMenu, getStylePrimaryName(currentMenu.getStyleElement()) + '-check-column', true):$setStyleName(currentMenu, getStylePrimaryName(currentMenu.getStyleElement()) + '-check-column', false);
      itr = dynamicCast($pop(iteratorStack), 158);
      currentMenu = dynamicCast($pop(menuStack), 156);
    }
  }
  $iLayout_0(this, false);
}
;
_.castableTypeMap$ = {6:1, 7:1, 9:1, 10:1, 12:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 25:1, 26:1, 33:1, 43:1, 69:1, 70:1, 75:1, 76:1, 126:1, 128:1, 131:1, 132:1, 156:1};
_.client = null;
_.collapsedRootItems = null;
_.containerElement = null;
_.enabled = true;
_.htmlContentAllowed = false;
_.items = null;
_.menuVisible = false;
_.moreItem = null;
_.openRootOnHover = false;
_.paddingWidth = -1;
_.parentMenu = null;
_.popup = null;
_.selected_0 = null;
_.subMenu = false;
_.submenuIcon = null;
_.uidlId = null;
_.visibleChildMenu = null;
_.width_0 = 'notinited';
function VMenuBar$1_0(this$0){
  this.this$0 = this$0;
}

function VMenuBar$1(){
}

_ = VMenuBar$1_0.prototype = VMenuBar$1.prototype = new Object_0;
_.execute_0 = function execute_36(){
  $iLayout_0(this.this$0, true);
}
;
_.getClass$ = function getClass_654(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$0 = null;
function VMenuBar$2_0(this$0, val$itemId){
  this.this$0 = this$0;
  this.val$itemId = val$itemId;
}

function VMenuBar$2(){
}

_ = VMenuBar$2_0.prototype = VMenuBar$2.prototype = new Object_0;
_.execute_0 = function execute_37(){
  $onMenuClick(this.this$0.hostReference, this.val$itemId);
}
;
_.getClass$ = function getClass_655(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$itemId = 0;
function VMenuBar$3_0(this$0){
  this.this$0 = this$0;
}

function VMenuBar$3(){
}

_ = VMenuBar$3_0.prototype = VMenuBar$3.prototype = new Object_0;
_.execute_0 = function execute_38(){
  if (!this.this$0.popup) {
    return;
  }
  (this.this$0.popup.element_0.style['width'] == null || this.this$0.popup.element_0.style['width'] == '') && this.this$0.popup.setWidth((parseInt(this.this$0.popup.element_0['offsetWidth']) || 0) + 'px');
  this.this$0.popup.element_0.style['zoom'] = '1';
}
;
_.getClass$ = function getClass_656(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function $findRootMenu(this$static){
  var menubar_0;
  menubar_0 = this$static.parentMenu;
  while (menubar_0.parentMenu) {
    menubar_0 = menubar_0.parentMenu;
  }
  return menubar_0;
}

function $isSelectable(this$static){
  return !this$static.isSeparator && this$static.enabled;
}

function $setCheckable(this$static, checkable){
  if (checkable && !this$static.isSeparator) {
    this$static.checkable = true;
  }
   else {
    $setChecked(this$static, false);
    this$static.checkable = false;
  }
}

function $setChecked(this$static, checked){
  if (this$static.checkable && !this$static.isSeparator) {
    this$static.checked_0 = checked;
    if (checked) {
      $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-checked', true);
      $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-unchecked', false);
    }
     else {
      $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-unchecked', true);
      $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-checked', false);
    }
  }
   else {
    this$static.checked_0 = false;
  }
}

function $setEnabled_1(this$static, enabled){
  this$static.enabled = enabled;
  enabled?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-disabled', false):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-disabled', true);
}

function $setHTML_2(this$static, html){
  this$static.element_0.innerHTML = html || '';
  sinkOnloadForImages(this$static.element_0);
}

function $setSelected_0(this$static, selected){
  if (selected && !this$static.isSeparator && this$static.enabled) {
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected', true);
    if (this$static.checkable) {
      if (this$static.checked_0) {
        $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-unchecked', false);
        $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-checked', true);
      }
       else {
        $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-checked', false);
        $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-unchecked', true);
      }
    }
  }
   else {
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected', false);
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-checked', false);
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected-unchecked', false);
  }
}

function $setSeparator(this$static, separator){
  this$static.isSeparator = separator;
  if (separator) {
    this$static.element_0['className'] = 'v-menubar-separator';
  }
   else {
    this$static.element_0['className'] = 'v-menubar-menuitem';
    $setEnabled_1(this$static, this$static.enabled);
  }
}

function $updateFromUIDL_16(this$static, uidl, client){
  var description, info, itemStyle, root, componentDetail;
  this$static.client = client;
  $setSeparator(this$static, 'separator' in uidl[1]);
  this$static.enabled = !('disabled' in uidl[1]);
  !('disabled' in uidl[1])?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-disabled', false):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-disabled', true);
  if (!this$static.isSeparator && 'checked' in uidl[1]) {
    $setCheckable(this$static, true);
    $setChecked(this$static, Boolean(uidl[1]['checked']));
  }
   else {
    $setCheckable(this$static, false);
  }
  if ('style' in uidl[1]) {
    itemStyle = uidl[1]['style'];
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-' + itemStyle, true);
  }
  if ('description' in uidl[1]) {
    description = uidl[1]['description'];
    info = new TooltipInfo_1(description);
    root = $findRootMenu(this$static);
    componentDetail = client.idToPaintableDetail[dynamicCast(root, 70).element_0.tkPid];
    $putAdditionalTooltip(componentDetail, this$static, info);
  }
}

function VMenuBar$CustomMenuItem_0(){
  this.element_0 = $doc.createElement('span');
  this.element_0.innerHTML = '';
  sinkOnloadForImages(this.element_0);
  this.command = null;
  $setSelected_0(this, false);
  this.element_0['className'] = 'v-menubar-menuitem';
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function VMenuBar$CustomMenuItem(){
}

_ = VMenuBar$CustomMenuItem_0.prototype = VMenuBar$CustomMenuItem.prototype = new Widget;
_.getClass$ = function getClass_657(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$CustomMenuItem_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_30(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, $findRootMenu(this), this) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 157:1};
_.checkable = false;
_.checked_0 = false;
_.client = null;
_.command = null;
_.enabled = true;
_.isSeparator = false;
_.parentMenu = null;
_.subMenu = null;
function $run_0(this$static){
  $hideChildren(this$static.activeRoot);
  $setSelected(this$static.activeRoot, null);
  this$static.activeRoot.menuVisible = false;
  this$static.activeRoot = null;
}

function VMenuBar$LazyCloser_0(){
}

function prepare(vMenuBar){
  $clinit();
  !INSTANCE_2 && (INSTANCE_2 = new VMenuBar$LazyCloser_0);
  if (INSTANCE_2.activeRoot == vMenuBar) {
    $cancel_0(INSTANCE_2);
  }
   else if (INSTANCE_2.activeRoot) {
    $cancel_0(INSTANCE_2);
    $run_0(INSTANCE_2);
  }
  INSTANCE_2.activeRoot = vMenuBar;
}

function VMenuBar$LazyCloser(){
}

_ = VMenuBar$LazyCloser_0.prototype = VMenuBar$LazyCloser.prototype = new Timer;
_.getClass$ = function getClass_658(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$LazyCloser_2_classLit;
}
;
_.run = function run_24(){
  $run_0(this);
}
;
_.castableTypeMap$ = {65:1};
_.activeRoot = null;
var INSTANCE_2 = null;
function EmptyStackException_0(){
  $fillInStackTrace();
}

function EmptyStackException(){
}

_ = EmptyStackException_0.prototype = EmptyStackException.prototype = new RuntimeException;
_.getClass$ = function getClass_897(){
  return Ljava_util_EmptyStackException_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 36:1, 37:1, 112:1};
_ = Vector.prototype;
_.add_2 = function add_21(o){
  return $add_12(this.arrayList, o);
}
;
_.add_3 = function add_22(index, o){
  $add_13(this.arrayList, index, o);
}
;
_.addAll = function addAll_2(c){
  return $addAll_0(this.arrayList, c);
}
;
_.contains = function contains_7(elem){
  return $indexOf_1(this.arrayList, elem, 0) != -1;
}
;
_.get_1 = function get_64(index){
  return $get_4(this.arrayList, index);
}
;
_.getClass$ = function getClass_910(){
  return Ljava_util_Vector_2_classLit;
}
;
_.isEmpty = function isEmpty_6(){
  return this.arrayList.size_0 == 0;
}
;
_.iterator_0 = function iterator_20(){
  return new AbstractList$IteratorImpl_0(this.arrayList);
}
;
_.remove_5 = function remove_43(index){
  return $remove_16(this.arrayList, index);
}
;
_.size_1 = function size_13(){
  return this.arrayList.size_0;
}
;
_.toArray = function toArray_7(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_8(a_0){
  return $toArray_1(this.arrayList, a_0);
}
;
_.toString$ = function toString_36(){
  return $toString_0(this.arrayList);
}
;
function $pop(this$static){
  var sz;
  sz = this$static.arrayList.size_0;
  if (sz > 0) {
    return $remove_16(this$static.arrayList, sz - 1);
  }
   else {
    throw new EmptyStackException_0;
  }
}

function Stack_0(){
  this.arrayList = new ArrayList_0;
}

function Stack(){
}

_ = Stack_0.prototype = Stack.prototype = new Vector;
_.getClass$ = function getClass_911(){
  return Ljava_util_Stack_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 33:1, 67:1, 68:1, 183:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader7'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$10$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$10$1'), Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMenuBar$1'), Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMenuBar$2'), Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMenuBar$3'), Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$CustomMenuItem_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMenuBar$CustomMenuItem'), Lcom_vaadin_terminal_gwt_client_ui_VMenuBar$LazyCloser_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMenuBar$LazyCloser'), Ljava_util_EmptyStackException_2_classLit = createForClass('java.util.', 'EmptyStackException'), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector'), Ljava_util_Stack_2_classLit = createForClass('java.util.', 'Stack');
$entry(onLoad_36)();
