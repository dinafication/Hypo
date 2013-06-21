function $runCallbacks_5(){
  var $e0, e, handler;
  while (callbacksHead_5) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_5 = callbacksHead_5.next;
    !callbacksHead_5 && (callbacksTail_5 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VEmbedded_2_classLit, new WidgetMapImpl$22$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VEmbedded_2_classLit, new WidgetMapImpl$22$1_0);
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

function AsyncLoader15_0(){
}

function onLoad_5(){
  instance_6 = new AsyncLoader15_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 15);
  !!$stats && $stats($createStatsEvent('runCallbacks15', 'begin', -1, -1));
  instance_6.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks15', 'end', -1, -1));
}

function AsyncLoader15(){
}

_ = AsyncLoader15_0.prototype = AsyncLoader15.prototype = new Object_0;
_.getClass$ = function getClass_173(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader15_2_classLit;
}
;
_.runCallbacks = function runCallbacks_5(){
  $runCallbacks_5();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$22$1_0(){
}

function WidgetMapImpl$22$1(){
}

_ = WidgetMapImpl$22$1_0.prototype = WidgetMapImpl$22$1.prototype = new Object_0;
_.get = function get_14(){
  return new VEmbedded_0;
}
;
_.getClass$ = function getClass_512(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$22$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $createFlashEmbed(this$static, uidl){
  var html, name_0, name$iterator, parameters, entrySet, outerIter, entry, entrySet_0, outerIter_0, entry_0;
  html = new StringBuilder_0;
  html.impl.string += '<object ';
  'classid' in uidl[1]?$append_3(html, 'classid="' + escapeAttribute(uidl[1]['classid']) + '" '):(html.impl.string += 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' , html);
  'codebase' in uidl[1]?$append_3(html, 'codebase="' + escapeAttribute(uidl[1]['codebase']) + '" '):(html.impl.string += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ' , html);
  $append_3(html, 'width="' + escapeAttribute(this$static.width_0) + '" ');
  $append_3(html, 'height="' + escapeAttribute(this$static.height_0) + '" ');
  html.impl.string += 'type="application/x-shockwave-flash" ';
  'codetype' in uidl[1] && $append_3(html, 'codetype="' + escapeAttribute(uidl[1]['codetype']) + '" ');
  'standby' in uidl[1] && $append_3(html, 'standby="' + escapeAttribute(uidl[1]['standby']) + '" ');
  'archive' in uidl[1] && $append_3(html, 'archive="' + escapeAttribute(uidl[1]['archive']) + '" ');
  html.impl.string += '>';
  parameters = getParameters(uidl);
  parameters.get_0('movie') == null && parameters.put('movie', $getSrc(uidl, this$static.client));
  for (name$iterator = (outerIter = (entrySet = parameters.entrySet_0() , new AbstractMap$1_0(parameters, entrySet)).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); name$iterator.val$outerIter.hasNext();) {
    name_0 = dynamicCast((entry = dynamicCast(name$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    html.impl.string += '<param ';
    $append_3(html, 'name="' + escapeAttribute(name_0) + '" ');
    $append_3(html, 'value="' + escapeAttribute(dynamicCast(parameters.get_0(name_0), 1)) + '" ');
    html.impl.string += '/>';
  }
  html.impl.string += '<embed ';
  $append_3(html, 'src="' + escapeAttribute($getSrc(uidl, this$static.client)) + '" ');
  $append_3(html, 'width="' + escapeAttribute(this$static.width_0) + '" ');
  $append_3(html, 'height="' + escapeAttribute(this$static.height_0) + '" ');
  html.impl.string += 'type="application/x-shockwave-flash" ';
  for (name$iterator = (outerIter_0 = (entrySet_0 = parameters.entrySet_0() , new AbstractMap$1_0(parameters, entrySet_0)).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_0)); name$iterator.val$outerIter.hasNext();) {
    name_0 = dynamicCast((entry_0 = dynamicCast(name$iterator.val$outerIter.next_0(), 58) , entry_0.getKey()), 1);
    $append_3(html, escapeAttribute(name_0));
    html.impl.string += '=';
    $append_3(html, '"' + escapeAttribute(dynamicCast(parameters.get_0(name_0), 1)) + '"');
  }
  html.impl.string += '><\/embed>';
  html.impl.string += '<\/object>';
  return html.impl.string;
}

function $getSrc(uidl, client){
  var url;
  url = $translateVaadinUri(client, uidl[1]['src']);
  if (url == null) {
    return '';
  }
  return url;
}

function VEmbedded_0(){
  HTML_0.call(this);
  this.clickEventHandler = new VEmbedded$1_0(this, this);
  this.element_0['className'] = 'v-embedded';
}

function getParameters(uidl){
  var child, childIterator, childUIDL, name_0, parameters, value, count;
  parameters = new HashMap_0;
  childIterator = new UIDL$1_0(uidl);
  while (count = childIterator.this$0.length - 2 , count > childIterator.index_0 + 1) {
    child = $next_3(childIterator);
    if (instanceOfJso(child)) {
      childUIDL = dynamicCastJso(child);
      if ($equals_2(childUIDL[0], 'embeddedparam')) {
        name_0 = childUIDL[1]['name'];
        value = childUIDL[1]['value'];
        parameters.put(name_0, value);
      }
    }
  }
  return parameters;
}

function VEmbedded(){
}

_ = VEmbedded_0.prototype = VEmbedded.prototype = new HTML;
_.getClass$ = function getClass_623(){
  return Lcom_vaadin_terminal_gwt_client_ui_VEmbedded_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_21(event_0){
  $onBrowserEvent(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 32768) {
    $equals_2('image', this.type_0) && ((this.width_0 == null || $equals_2(this.width_0, '')) && (this.element_0.style['width'] = ($getFirstChildElement(this.element_0).offsetWidth || 0) + ($clinit_9() , 'px') , undefined) , (this.height_0 == null || $equals_2(this.height_0, '')) && (this.element_0.style['height'] = ($getFirstChildElement(this.element_0).offsetHeight || 0) + ($clinit_9() , 'px') , undefined));
    notifyParentOfSizeChange(this, true);
  }
  $handleTooltipEvent(this.client.tooltip, event_0, this, null);
}
;
_.onDetach = function onDetach_9(){
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && !!this.browserElement && (this.browserElement.setAttribute('src', 'about:blank') , undefined);
  $onDetach(this);
}
;
_.setHeight = function setHeight_11(height){
  this.height_0 = height;
  this.element_0.style['height'] = height;
}
;
_.setWidth = function setWidth_17(width){
  var newHeight, oldHeight;
  this.width_0 = width;
  if (this.height_0 == null || $equals_2(this.height_0, '')) {
    oldHeight = parseInt(this.element_0['offsetHeight']) || 0;
    this.element_0.style['width'] = width;
    newHeight = parseInt(this.element_0['offsetHeight']) || 0;
    oldHeight != newHeight && notifyParentOfSizeChange(this, false);
  }
   else {
    this.element_0.style['width'] = width;
  }
}
;
_.updateFromUIDL = function updateFromUIDL_27(uidl, client){
  var clearBrowserElement, created, data, e, el, h_0, mime, n, nodes, obj, parameters, style, w;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.client = client;
  clearBrowserElement = true;
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  if ('type' in uidl[1]) {
    this.type_0 = uidl[1]['type'];
    if ($equals_2(this.type_0, 'image')) {
      setStyleName(this.element_0, 'v-embedded-image', true);
      el = null;
      created = false;
      nodes = this.element_0.childNodes;
      if (!!nodes && nodes.length == 1) {
        n = nodes[0];
        if (n.nodeType == 1) {
          e = n;
          $equals_2(e.tagName, 'IMG') && (el = e);
        }
      }
      if (!el) {
        $setTextOrHtml(this.directionalTextHelper, '', true);
        el = $doc.createElement('img');
        created = true;
        $addPngFix(el);
        $maybeInitializeEventSystem();
        $sinkEventsImpl(el, 32768);
      }
      style = el.style;
      w = uidl[1]['width'];
      w != null?(style['width'] = w , undefined):(style['width'] = '' , undefined);
      h_0 = uidl[1]['height'];
      h_0 != null?(style['height'] = h_0 , undefined):(style['height'] = '' , undefined);
      el['src'] = $getSrc(uidl, client);
      created && this.element_0.appendChild(el);
      this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
    }
     else if ($equals_2(this.type_0, 'browser')) {
      setStyleName(this.element_0, 'v-embedded-browser', true);
      if (!this.browserElement) {
        $setTextOrHtml(this.directionalTextHelper, '<iframe width="100%" height="100%" frameborder="0" allowTransparency="true" src="" name="' + uidl[1]['id'] + '"><\/iframe>', true);
        this.browserElement = $getFirstChildElement(this.element_0);
      }
      this.browserElement.setAttribute('src', $getSrc(uidl, client));
      clearBrowserElement = false;
    }
     else {
      impl_2.log_0("Unknown Embedded type '" + this.type_0 + "'");
    }
  }
   else if ('mimetype' in uidl[1]) {
    mime = uidl[1]['mimetype'];
    if ($equals_2(mime, 'application/x-shockwave-flash')) {
      setStyleName(this.element_0, 'v-embedded-flash', true);
      $setTextOrHtml(this.directionalTextHelper, $createFlashEmbed(this, uidl), true);
    }
     else if ($equals_2(mime, 'image/svg+xml')) {
      setStyleName(this.element_0, 'v-embedded-svg', true);
      parameters = getParameters(uidl);
      parameters.get_0('data') == null?(data = $getSrc(uidl, client)):(data = 'data:image/svg+xml,' + dynamicCast(parameters.get_0('data'), 1));
      $setTextOrHtml(this.directionalTextHelper, '', true);
      obj = $doc.createElement('object');
      obj.type = mime;
      obj.data = data;
      this.width_0 != null && (obj.style['width'] = '100%' , undefined);
      this.height_0 != null && (obj.style['height'] = '100%' , undefined);
      'classid' in uidl[1] && (obj.setAttribute('classid', uidl[1]['classid']) , undefined);
      'codebase' in uidl[1] && (obj.setAttribute('codebase', uidl[1]['codebase']) , undefined);
      'codetype' in uidl[1] && (obj.setAttribute('codetype', uidl[1]['codetype']) , undefined);
      'archive' in uidl[1] && (obj.setAttribute('archive', uidl[1]['archive']) , undefined);
      'standby' in uidl[1] && (obj.setAttribute('standby', uidl[1]['standby']) , undefined);
      this.element_0.appendChild(obj);
    }
     else {
      impl_2.log_0("Unknown Embedded mimetype '" + mime + "'");
    }
  }
   else {
    impl_2.log_0('Unknown Embedded; no type or mimetype attribute');
  }
  clearBrowserElement && (this.browserElement = null);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1, 169:1};
_.browserElement = null;
_.client = null;
_.height_0 = null;
_.type_0 = null;
_.width_0 = null;
function VEmbedded$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'click';
}

function VEmbedded$1(){
}

_ = VEmbedded$1_0.prototype = VEmbedded$1.prototype = new ClickEventHandler;
_.getClass$ = function getClass_624(){
  return Lcom_vaadin_terminal_gwt_client_ui_VEmbedded$1_2_classLit;
}
;
_.registerHandler = function registerHandler_1(handler, type){
  return $addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader15_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader15'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$22$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$22$1'), Lcom_vaadin_terminal_gwt_client_ui_VEmbedded$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VEmbedded$1');
$entry(onLoad_5)();
