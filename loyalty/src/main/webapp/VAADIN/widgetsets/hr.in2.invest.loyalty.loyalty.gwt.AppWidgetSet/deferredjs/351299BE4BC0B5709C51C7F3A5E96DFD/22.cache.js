function $runCallbacks_13(){
  var $e0, e, handler;
  while (callbacksHead_13) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_13 = callbacksHead_13.next;
    !callbacksHead_13 && (callbacksTail_13 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCustomLayout_2_classLit, new WidgetMapImpl$32$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VCustomLayout_2_classLit, new WidgetMapImpl$32$1_0);
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

function AsyncLoader22_0(){
}

function onLoad_13(){
  instance_14 = new AsyncLoader22_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 22);
  !!$stats && $stats($createStatsEvent('runCallbacks22', 'begin', -1, -1));
  instance_14.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks22', 'end', -1, -1));
}

function AsyncLoader22(){
}

_ = AsyncLoader22_0.prototype = AsyncLoader22.prototype = new Object_0;
_.getClass$ = function getClass_197(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader22_2_classLit;
}
;
_.runCallbacks = function runCallbacks_13(){
  $runCallbacks_13();
}
;
_.castableTypeMap$ = {};
function getComputedStyle_1(el, p){
  try {
    if (el.currentStyle) {
      return el.currentStyle[p];
    }
     else if (window.getComputedStyle) {
      var view = el.ownerDocument.defaultView;
      return view.getComputedStyle(el, null).getPropertyValue(p);
    }
     else {
      return '';
    }
  }
   catch (e) {
    return '';
  }
}

function WidgetMapImpl$32$1_0(){
}

function WidgetMapImpl$32$1(){
}

_ = WidgetMapImpl$32$1_0.prototype = WidgetMapImpl$32$1.prototype = new Object_0;
_.get = function get_25(){
  return new VCustomLayout_0;
}
;
_.getClass$ = function getClass_523(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$32$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $extractBodyAndScriptsFromTemplate(this$static, html){
  var endOfBody, endOfPrevScript, j_0, lc, nextPosToCheck, res, scriptStart, startOfBody;
  html = $replaceAll(html, '_UID_', this$static.pid + '__');
  this$static.scripts = '';
  endOfPrevScript = 0;
  lc = html.toLowerCase();
  res = '';
  scriptStart = lc.indexOf('<script', 0);
  while (scriptStart > 0) {
    res += html.substr(endOfPrevScript, scriptStart - endOfPrevScript);
    scriptStart = lc.indexOf('>', scriptStart);
    j_0 = lc.indexOf('<\/script>', scriptStart);
    this$static.scripts += html.substr(scriptStart + 1, j_0 - (scriptStart + 1)) + ';';
    nextPosToCheck = endOfPrevScript = j_0 + 9;
    scriptStart = lc.indexOf('<script', nextPosToCheck);
  }
  res += html.substr(endOfPrevScript, html.length - endOfPrevScript);
  html = res;
  lc = res.toLowerCase();
  startOfBody = lc.indexOf('<body');
  if (startOfBody < 0) {
    res = res;
  }
   else {
    startOfBody = lc.indexOf('>', startOfBody) + 1;
    endOfBody = lc.indexOf('<\/body>', startOfBody);
    endOfBody > startOfBody?(res = html.substr(startOfBody, endOfBody - startOfBody)):(res = html.substr(startOfBody, html.length - startOfBody));
  }
  return res;
}

function $getLocation(this$static, w){
  var i, location_0, outerIter, entry;
  for (i = (outerIter = $keySet(this$static.locationToWidget).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); i.val$outerIter.hasNext();) {
    location_0 = dynamicCast((entry = dynamicCast(i.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    if (maskUndefined(this$static.locationToWidget.get_0(location_0)) === (w == null?null:w)) {
      return location_0;
    }
  }
  return null;
}

function $iLayoutJS(el){
  if (el && el.iLayoutJS) {
    try {
      el.iLayoutJS();
      return true;
    }
     catch (e) {
      return false;
    }
  }
   else {
    return false;
  }
}

function $initImgElements(this$static){
  var i, img, nodeList;
  nodeList = this$static.element_0.getElementsByTagName('IMG');
  for (i = 0; i < nodeList.length; ++i) {
    img = nodeList[i];
    $maybeInitializeEventSystem();
    $sinkEventsImpl(img, 32768);
  }
}

function $initializeHTML(this$static, uidl, client){
  var newTemplate, newTemplateContents, relImgPrefix, template, themeUri;
  newTemplateContents = uidl[1]['templateContents'];
  newTemplate = uidl[1]['template'];
  this$static.currentTemplateName = null;
  this$static.hasTemplateContents = false;
  if (newTemplate != null) {
    template = dynamicCast(client.resourcesMap.get_0('layouts/' + newTemplate + '.html'), 1);
    template == null?(template = '<em>Layout file layouts/' + newTemplate + '.html is missing. Components will be drawn for debug purposes.<\/em>'):(this$static.currentTemplateName = newTemplate);
  }
   else {
    this$static.hasTemplateContents = true;
    template = newTemplateContents;
  }
  template = $extractBodyAndScriptsFromTemplate(this$static, template);
  themeUri = client.configuration.themeUri_0;
  relImgPrefix = themeUri + '/layouts/';
  template = $replaceAll(template, '<((?:img)|(?:IMG))\\s([^>]*)src="((?![a-z]+:)[^/][^"]+)"', '<$1 $2src="' + relImgPrefix + '$3"');
  template = $replaceAll(template, '<((?:img)|(?:IMG))\\s([^>]*)src=[^"]((?![a-z]+:)[^/][^ />]+)[ />]', '<$1 $2src="' + relImgPrefix + '$3"');
  template = $replaceAll(template, '(<[^>]+style="[^"]*url\\()((?![a-z]+:)[^/][^"]+)(\\)[^>]*>)', '$1 ' + relImgPrefix + '$2 $3');
  this$static.element_0.innerHTML = template || '';
  this$static.locationToElement.clear_0();
  $scanForLocations(this$static, this$static.element_0);
  $initImgElements(this$static);
  this$static.elementWithNativeResizeFunction = $getFirstChildElement(this$static.element_0);
  !this$static.elementWithNativeResizeFunction && (this$static.elementWithNativeResizeFunction = this$static.element_0);
  $publishResizedFunction(this$static, this$static.elementWithNativeResizeFunction);
}

function $isLarger(newSize, currentSize){
  var currentSizePx, larger, newSizePx;
  if ($equals_2(newSize, '') || $equals_2(currentSize, '')) {
    return false;
  }
  if (!(newSize.lastIndexOf('px') != -1 && newSize.lastIndexOf('px') == newSize.length - 'px'.length) || !(currentSize.lastIndexOf('px') != -1 && currentSize.lastIndexOf('px') == currentSize.length - 'px'.length)) {
    return false;
  }
  newSizePx = __parseAndValidateInt(newSize.substr(0, newSize.length - 2 - 0));
  currentSizePx = __parseAndValidateInt(currentSize.substr(0, currentSize.length - 2 - 0));
  larger = newSizePx > currentSizePx;
  return larger;
}

function $publishResizedFunction(this$static, element){
  var self_0 = this$static;
  element.notifyChildrenOfSizeChange = function(){
    self_0.notifyChildrenOfSizeChange_0();
  }
  ;
}

function $remove_8(this$static, w){
  var cw, location_0;
  $unregisterPaintable(this$static.client, dynamicCast(w, 26));
  location_0 = $getLocation(this$static, w);
  location_0 != null && this$static.locationToWidget.remove_4(location_0);
  cw = dynamicCast(this$static.widgetToCaptionWrapper.get_0(w), 147);
  if (cw) {
    this$static.widgetToCaptionWrapper.remove_4(w);
    return $remove_2(this$static, cw);
  }
   else if (w) {
    return $remove_2(this$static, w);
  }
  return false;
}

function $scanForLocations(this$static, elem){
  var fs, i, len, location_0, x, y, originalHeight, originalOffsetHeight, padding, widthGuess;
  location_0 = elem.getAttribute('location') || '';
  if ($equals_2('', location_0)) {
    len = $getChildCount(elem);
    for (i = 0; i < len; ++i) {
      $scanForLocations(this$static, $getChild(elem, i));
    }
  }
   else {
    this$static.locationToElement.put(location_0, elem);
    elem.innerHTML = '';
    x = measureHorizontalPaddingAndBorder(elem, 0);
    y = ($clinit_67() , originalHeight = elem.style['height'] , originalOffsetHeight = elem.offsetHeight || 0 , widthGuess = originalOffsetHeight , originalOffsetHeight < 1 && (widthGuess = 1) , elem.style['height'] = widthGuess + 'px' , padding = (elem.offsetHeight || 0) - widthGuess , elem.style['height'] = originalHeight , padding);
    fs = new RenderInformation$FloatSize_0(x, y);
    this$static.locationToExtraSize.put(location_0, fs);
  }
}

function $setWidget_4(this$static, widget, location_0){
  var elem, previous;
  if (!widget) {
    return;
  }
  elem = dynamicCastJso(this$static.locationToElement.get_0(location_0));
  if (!elem && !(this$static.currentTemplateName == null && !this$static.hasTemplateContents)) {
    throw new IllegalArgumentException_1('No location ' + location_0 + ' found');
  }
  previous = dynamicCast(this$static.locationToWidget.get_0(location_0), 70);
  if (previous == widget) {
    return;
  }
  !!previous && $remove_8(this$static, previous);
  !(this$static.currentTemplateName == null && !this$static.hasTemplateContents) || (elem = this$static.element_0);
  $removeFromParent_0(widget);
  $add_7(this$static.children_0, widget);
  elem.appendChild(widget.element_0);
  $setParent(widget, this$static);
  this$static.locationToWidget.put(location_0, widget);
}

function $updateRelativeSizedComponents(this$static, relativeWidth, relativeHeight){
  var relativeSize, relativeSizeWidgets, widget, widget$iterator, outerIter, old, outerIter_0, entry;
  relativeSizeWidgets = new HashSet_0;
  for (widget$iterator = (outerIter = $values_0(this$static.locationToWidget).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); widget$iterator.val$outerIter.hasNext();) {
    widget = dynamicCast(dynamicCast(widget$iterator.val$outerIter.next_0(), 58).getValue(), 70);
    relativeSize = this$static.client.idToPaintableDetail[widget.element_0.tkPid].relativeSize;
    if (relativeSize) {
      if (relativeWidth && relativeSize.width_0 >= 0 || relativeHeight && relativeSize.height_0 >= 0) {
        old = relativeSizeWidgets.map.put(widget, relativeSizeWidgets);
        widget.element_0.style['position'] = 'absolute';
      }
    }
  }
  for (widget$iterator = (outerIter_0 = $keySet(relativeSizeWidgets.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_0)); widget$iterator.val$outerIter.hasNext();) {
    widget = dynamicCast((entry = dynamicCast(widget$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 70);
    $handleComponentRelativeSize_0(this$static.client, widget);
    widget.element_0.style['position'] = '';
  }
}

function VCustomLayout_0(){
  this.children_0 = new WidgetCollection_0(this);
  this.locationToElement = new HashMap_0;
  this.locationToWidget = new HashMap_0;
  this.widgetToCaptionWrapper = new HashMap_0;
  this.locationToExtraSize = new HashMap_0;
  this.element_0 = $doc.createElement('div');
  this.element_0.style['border'] = 'none';
  this.element_0.style['margin'] = '0';
  this.element_0.style['padding'] = '0';
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (this.element_0.style['position'] = 'relative' , undefined);
  this.element_0['className'] = 'v-customlayout';
}

function eval_1(script){
  try {
    script != null && eval('{ var document = $doc; var window = $wnd; ' + script + '}');
  }
   catch (e) {
  }
}

_ = VCustomLayout_0.prototype = VCustomLayout.prototype;
_.add_1 = function add_10(w){
  throw new UnsupportedOperationException_0;
}
;
_.getAllocatedSpace = function getAllocatedSpace_10(child){
  var extra, pe, parent_0, overflow;
  pe = (parent_0 = child.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  extra = dynamicCast(this.locationToExtraSize.get_0($getLocation(this, child)), 148);
  return new RenderSpace_2((pe.offsetWidth || 0) - ~~Math.max(Math.min(extra.width_0, 2147483647), -2147483648), (pe.offsetHeight || 0) - ~~Math.max(Math.min(extra.height_0, 2147483647), -2147483648), ($clinit_67() , overflow = getComputedStyle_1(pe, 'overflow') , overflow != null && ($equals_2(overflow, 'auto') || $equals_2(overflow, 'scroll'))));
}
;
_.getClass$ = function getClass_607(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCustomLayout_2_classLit;
}
;
_.iLayout = function iLayout_0(){
  $iLayoutJS($getFirstChildElement(this.element_0));
}
;
_.notifyChildrenOfSizeChange_0 = function notifyChildrenOfSizeChange(){
  $runDescendentsLayout(this.client, this);
}
;
_.onBrowserEvent = function onBrowserEvent_18(event_0){
  $onBrowserEvent(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 32768) {
    notifyParentOfSizeChange(this, true);
    event_0.cancelBubble = true;
  }
}
;
_.onDetach = function onDetach_8(){
  $onDetach(this);
  !!this.elementWithNativeResizeFunction && (this.elementWithNativeResizeFunction.notifyChildrenOfSizeChange = null , undefined);
}
;
_.remove_2 = function remove_12(w){
  return $remove_8(this, w);
}
;
_.replaceChildComponent = function replaceChildComponent_9(from, to){
  var location_0;
  location_0 = $getLocation(this, from);
  if (location_0 == null) {
    throw new IllegalArgumentException_0;
  }
  $setWidget_4(this, to, location_0);
}
;
_.requestLayout = function requestLayout_10(child){
  $updateRelativeSizedComponents(this, true, true);
  if ($equals_2(this.width_0, '') || $equals_2(this.height_0, '')) {
    return false;
  }
  return true;
}
;
_.setHeight = function setHeight_10(height){
  var shrinking;
  if ($equals_2(this.height_0, height)) {
    return;
  }
  shrinking = true;
  $isLarger(height, this.height_0) && (shrinking = false);
  this.height_0 = height;
  this.element_0.style['height'] = height;
  shrinking && $updateRelativeSizedComponents(this, false, true);
}
;
_.setWidth = function setWidth_16(width){
  var shrinking;
  if ($equals_2(this.width_0, width)) {
    return;
  }
  shrinking = true;
  $isLarger(width, this.width_0) && (shrinking = false);
  this.element_0.style['width'] = width;
  this.width_0 = width;
  shrinking && $updateRelativeSizedComponents(this, true, false);
}
;
_.updateCaption = function updateCaption_11(component, uidl){
  var loc, wrapper;
  wrapper = dynamicCast(this.widgetToCaptionWrapper.get_0(component), 147);
  if (isNeeded(uidl)) {
    if (!wrapper) {
      loc = $getLocation(this, dynamicCast(component, 70));
      $remove_2(this, dynamicCast(component, 70));
      wrapper = new VCaptionWrapper_0(component, this.client);
      $add_0(this, wrapper, dynamicCastJso(this.locationToElement.get_0(loc)));
      this.widgetToCaptionWrapper.put(component, wrapper);
    }
    wrapper.caption_0.updateCaption_0(uidl);
    wrapper.element_0.style.display = !Boolean(uidl[1]['invisible'])?'':'none';
  }
   else {
    if (wrapper) {
      loc = $getLocation(this, dynamicCast(component, 70));
      $remove_2(this, wrapper);
      $add_0(this, dynamicCast(wrapper.widget, 70), dynamicCastJso(this.locationToElement.get_0(loc)));
      this.widgetToCaptionWrapper.remove_4(component);
    }
  }
}
;
_.updateFromUIDL = function updateFromUIDL_23(uidl, client){
  var $e0, child, i, iterator, location_0, oldWidget, oldWidgets, uidlForChild, count, outerIter, entry;
  this.client = client;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.pid = uidl[1]['id'];
  !(this.currentTemplateName == null && !this.hasTemplateContents) || $initializeHTML(this, uidl, client);
  eval_1(this.scripts);
  this.scripts = null;
  $iLayoutJS($getFirstChildElement(this.element_0));
  $runDescendentsLayout(client, this);
  oldWidgets = new HashSet_0;
  oldWidgets.addAll($values_0(this.locationToWidget));
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    uidlForChild = dynamicCastJso($next_3(i));
    if ($equals_2(uidlForChild[0], 'location')) {
      location_0 = uidlForChild[1]['name'];
      child = $getPaintable(client, uidlForChild[2]);
      try {
        $setWidget_4(this, dynamicCast(child, 70), location_0);
        child.updateFromUIDL(uidlForChild[2], client);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (!instanceOf($e0, 146))
          throw $e0;
      }
      oldWidgets.map.remove_4(child) != null;
    }
  }
  for (iterator = (outerIter = $keySet(oldWidgets.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); iterator.val$outerIter.hasNext();) {
    oldWidget = dynamicCast((entry = dynamicCast(iterator.val$outerIter.next_0(), 58) , entry.getKey()), 70);
    oldWidget.isAttached() && $remove_8(this, oldWidget);
  }
  $iLayoutJS($getFirstChildElement(this.element_0));
  $runDescendentsLayout(client, this);
}
;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader22_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader22'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$32$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$32$1');
$entry(onLoad_13)();
