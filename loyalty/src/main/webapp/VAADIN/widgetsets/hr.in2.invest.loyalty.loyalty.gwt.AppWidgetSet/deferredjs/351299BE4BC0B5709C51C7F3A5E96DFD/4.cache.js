function $runCallbacks_32(){
  var $e0, e, handler;
  while (callbacksHead_32) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_32 = callbacksHead_32.next;
    !callbacksHead_32 && (callbacksTail_32 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea_2_classLit, new WidgetMapImpl$5$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea_2_classLit, new WidgetMapImpl$5$1_0);
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

function AsyncLoader4_0(){
}

function onLoad_32(){
  instance_33 = new AsyncLoader4_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 4);
  !!$stats && $stats($createStatsEvent('runCallbacks4', 'begin', -1, -1));
  instance_33.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks4', 'end', -1, -1));
}

function AsyncLoader4(){
}

_ = AsyncLoader4_0.prototype = AsyncLoader4.prototype = new Object_0;
_.getClass$ = function getClass_255(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_2_classLit;
}
;
_.runCallbacks = function runCallbacks_32(){
  $runCallbacks_32();
}
;
_.castableTypeMap$ = {};
function $eventGetToElement(evt){
  if ($equals_2(evt.type, 'mouseover')) {
    return evt.target;
  }
  if ($equals_2(evt.type, 'mouseout')) {
    return evt.relatedTarget;
  }
  return null;
}

function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(this$static.element_0);
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    this$static.onClickCancel();
  }
}

function $getFaceFromID(this$static, id){
  switch (id) {
    case 1:
      return !this$static.down && (this$static.down = new CustomButton$2_0(this$static, this$static.up, 'down', 1) , undefined) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2_0(this$static, (!this$static.down && (this$static.down = new CustomButton$2_0(this$static, this$static.up, 'down', 1) , undefined) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && (this$static.upHovering = new CustomButton$2_0(this$static, this$static.up, 'up-hovering', 2) , undefined) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && (this$static.upDisabled = new CustomButton$2_0(this$static, this$static.up, 'up-disabled', 4) , undefined) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2_0(this$static, (!this$static.down && (this$static.down = new CustomButton$2_0(this$static, this$static.up, 'down', 1) , undefined) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw new IllegalStateException_1(id + ' is not a known face id.');
  }
}

function $onClick(this$static){
  var evt;
  this$static.allowClick = true;
  evt = $createMouseEvent($doc, 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  this$static.element_0.dispatchEvent(evt);
  this$static.allowClick = false;
}

function $setCurrentFace(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $setStyleDependentName(this$static, this$static.curFace.val$name, false);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name);
    !this$static.element_0['disabled'] && (pressed = (newFace.val$faceID & 1) == 1 , this$static.element_0.setAttribute('aria-pressed', pressed?'true':'false') , undefined);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && this$static.element_0.removeChild(this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    this$static.element_0.appendChild(this$static.curFaceElement);
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $toggleDown(this$static){
  var newFaceID, newFace;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 1;
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

function $toggleHover(this$static){
  var newFaceID, newFace;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID) ^ 2;
  newFaceID &= -5;
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

function CustomButton_0(upImage){
  this.element_0 = ($clinit_43() , createFocusable0(($clinit_53() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
  this.eventsToSink == -1?sinkEvents(this.element_0, 7165 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 7165);
  this.up = new CustomButton$2_0(this, null, 'up', 0);
  this.element_0['className'] = 'gwt-CustomButton';
  this.element_0.setAttribute('role', 'button');
  $setImage(this.up, upImage);
}

_ = CustomButton.prototype;
_.getClass$ = function getClass_312(){
  return Lcom_google_gwt_user_client_ui_CustomButton_2_classLit;
}
;
_.getTabIndex = function getTabIndex_1(){
  return $getTabIndex(($clinit_43() , this.element_0));
}
;
_.onAttach = function onAttach_2(){
  !this.curFace && $setCurrentFace(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var keyCode, to, type;
  if (this.element_0['disabled']) {
    return;
  }
  type = $eventGetTypeInt(event_0.type);
  switch (type) {
    case 1:
      if (!this.allowClick) {
        event_0.stopPropagation();
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        $focus(($clinit_43() , this.element_0));
        this.onClickStart();
        setCapture(this.element_0);
        this.isCapturing = true;
        event_0.preventDefault();
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element_0);
        (2 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $eventGetButton(event_0) == 1 && this.onClick_0();
      }

      break;
    case 64:
      this.isCapturing && (event_0.preventDefault() , undefined);
      break;
    case 32:
      to = $eventGetToElement(event_0);
      if ($isOrHasChild(this.element_0, event_0.target) && (!to || !$isOrHasChild(this.element_0, to))) {
        this.isCapturing && this.onClickCancel();
        (2 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleHover(this);
      }

      break;
    case 16:
      if ($isOrHasChild(this.element_0, event_0.target)) {
        (2 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleHover(this);
        this.isCapturing && this.onClickStart();
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        this.onClickCancel();
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        this.onClickCancel();
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.keyCode || 0) & 65535;
    switch (type) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          this.onClickStart();
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          this.onClick_0();
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          this.onClickStart();
          this.onClick_0();
        }

    }
  }
}
;
_.onClick_0 = function onClick(){
  $onClick(this);
}
;
_.onClickCancel = function onClickCancel(){
}
;
_.onClickStart = function onClickStart(){
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $cleanupCaptureState(this);
  (2 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleHover(this);
}
;
_.setEnabled = function setEnabled_1(enabled){
  var newFaceID, newFace, pressed;
  if (!this.element_0['disabled'] != enabled) {
    newFaceID = (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID) ^ 4;
    newFaceID &= -3;
    newFace = $getFaceFromID(this, newFaceID);
    $setCurrentFace(this, newFace);
    this.element_0['disabled'] = !enabled;
    if (enabled) {
      pressed = ((!this.curFace && $setCurrentFace(this, this.up) , this.curFace).val$faceID & 1) == 1;
      this.element_0.setAttribute('aria-pressed', pressed?'true':'false');
    }
     else {
      $cleanupCaptureState(this);
      this.element_0.removeAttribute('aria-pressed');
    }
  }
}
;
_.setFocus = function setFocus_1(focused){
  focused?$focus(($clinit_43() , this.element_0)):$blur(($clinit_43() , this.element_0));
}
;
_.setTabIndex = function setTabIndex_1(index){
  ($clinit_43() , this.element_0).tabIndex = index;
}
;
function $getFace(this$static){
  if (!this$static.face) {
    if (!this$static.delegateTo) {
      this$static.face = $doc.createElement('div');
      return this$static.face;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face;
  }
}

function $setImage(this$static, image){
  this$static.face = image.element_0;
  !!this$static.this$0.curFace && $getFace(this$static.this$0.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

function CustomButton$Face(){
}

_ = CustomButton$Face.prototype = new Object_0;
_.getClass$ = function getClass_313(){
  return Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit;
}
;
_.toString$ = function toString_9(){
  return this.val$name;
}
;
_.castableTypeMap$ = {};
_.delegateTo = null;
_.face = null;
_.this$0 = null;
function CustomButton$2_0(this$0, $anonymous0, val$name, val$faceID){
  this.val$name = val$name;
  this.val$faceID = val$faceID;
  this.this$0 = this$0;
  this.delegateTo = $anonymous0;
}

function CustomButton$2(){
}

_ = CustomButton$2_0.prototype = CustomButton$2.prototype = new CustomButton$Face;
_.getClass$ = function getClass_314(){
  return Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit;
}
;
_.castableTypeMap$ = {};
_.val$faceID = 0;
_.val$name = null;
function Image_2(resource){
  $clinit_46();
  this.state = new Image$ClippedState_0(this, resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
  this.element_0['className'] = 'gwt-Image';
}

_ = Image_2.prototype = Image_0.prototype;
function Image$ClippedState_0(image, url, left, top_0, width, height){
  var tmp, style;
  $replaceElement(image, (tmp = $doc.createElement('span') , tmp.innerHTML = (style = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px' , "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='" + $moduleBase + "clear.cache.gif' style='" + style + "' border='0'>") || '' , $getFirstChildElement(tmp)));
  image.eventsToSink == -1?sinkEvents(image.element_0, 133333119 | (image.element_0.__eventBits || 0)):(image.eventsToSink |= 133333119);
}

_ = Image$ClippedState_0.prototype = Image$ClippedState.prototype;
_.getClass$ = function getClass_340(){
  return Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit;
}
;
_.getImageElement = function getImageElement(image){
  return image.element_0;
}
;
function PushButton_0(upImage){
  $clinit_42();
  CustomButton_0.call(this, upImage);
  this.element_0['className'] = 'gwt-PushButton';
}

function PushButton(){
}

_ = PushButton_0.prototype = PushButton.prototype = new CustomButton;
_.getClass$ = function getClass_358(){
  return Lcom_google_gwt_user_client_ui_PushButton_2_classLit;
}
;
_.onClick_0 = function onClick_0(){
  (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
  $onClick(this);
}
;
_.onClickCancel = function onClickCancel_0(){
  (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0 && $toggleDown(this);
}
;
_.onClickStart = function onClickStart_0(){
  (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) <= 0 && $toggleDown(this);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
function $getFormatter(this$static){
  if (this$static.impl) {
    return this$static.impl;
  }
  return null;
}

function $setFocus_0(this$static, focused){
  this$static.attached && $setFocus_1(this$static.impl, focused);
}

function $setHTML_0(this$static, html){
  $setHTML_1(this$static.impl, html);
}

function RichTextArea_0(){
  $clinit_42();
  this.impl = new RichTextAreaImplSafari_0;
  this.element_0 = this.impl.elem;
  this.element_0['className'] = 'gwt-RichTextArea';
}

function RichTextArea(){
}

_ = RichTextArea_0.prototype = RichTextArea.prototype = new FocusWidget;
_.getClass$ = function getClass_360(){
  return Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit;
}
;
_.onAttach = function onAttach_3(){
  $onAttach_0(this);
  $initElement(this.impl);
}
;
_.onDetach = function onDetach_3(){
  $onDetach(this);
  $uninitElement(this.impl);
}
;
_.setEnabled = function setEnabled_2(enabled){
  $setEnabled(this.impl, enabled);
}
;
_.setFocus = function setFocus_2(focused){
  this.attached && $setFocus_1(this.impl, focused);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
function $clinit_48(){
  $clinit_48 = nullMethod;
  LARGE = new RichTextArea$FontSize_0(5);
  MEDIUM = new RichTextArea$FontSize_0(4);
  SMALL = new RichTextArea$FontSize_0(3);
  X_LARGE = new RichTextArea$FontSize_0(6);
  X_SMALL = new RichTextArea$FontSize_0(2);
  XX_LARGE = new RichTextArea$FontSize_0(7);
  XX_SMALL = new RichTextArea$FontSize_0(1);
}

function RichTextArea$FontSize_0(number){
  this.number = number;
}

function RichTextArea$FontSize(){
}

_ = RichTextArea$FontSize_0.prototype = RichTextArea$FontSize.prototype = new Object_0;
_.getClass$ = function getClass_361(){
  return Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit;
}
;
_.toString$ = function toString_10(){
  return '' + this.number;
}
;
_.castableTypeMap$ = {99:1};
_.number = 0;
var LARGE, MEDIUM, SMALL, XX_LARGE, XX_SMALL, X_LARGE, X_SMALL;
function $clinit_49(){
  $clinit_49 = nullMethod;
  CENTER = new RichTextArea$Justification_0('Center');
  FULL = new RichTextArea$Justification_0('Full');
  LEFT_0 = new RichTextArea$Justification_0('Left');
  RIGHT_0 = new RichTextArea$Justification_0('Right');
}

function RichTextArea$Justification_0(tag){
  this.tag = tag;
}

function RichTextArea$Justification(){
}

_ = RichTextArea$Justification_0.prototype = RichTextArea$Justification.prototype = new Object_0;
_.getClass$ = function getClass_362(){
  return Lcom_google_gwt_user_client_ui_RichTextArea$Justification_2_classLit;
}
;
_.toString$ = function toString_11(){
  return 'Justify ' + this.tag;
}
;
_.castableTypeMap$ = {};
_.tag = null;
var CENTER, FULL, LEFT_0, RIGHT_0;
function $setDown(this$static, down){
  down != (1 & (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID)) > 0 && $toggleDown(this$static);
}

function ToggleButton_0(upImage){
  $clinit_42();
  CustomButton_0.call(this, upImage);
  this.element_0['className'] = 'gwt-ToggleButton';
}

function ToggleButton(){
}

_ = ToggleButton_0.prototype = ToggleButton.prototype = new CustomButton;
_.getClass$ = function getClass_371(){
  return Lcom_google_gwt_user_client_ui_ToggleButton_2_classLit;
}
;
_.onClick_0 = function onClick_1(){
  $toggleDown(this);
  $onClick(this);
  fire_2(this, ($clinit_95() , (1 & (!this.curFace && $setCurrentFace(this, this.up) , this.curFace.val$faceID)) > 0?TRUE:FALSE));
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
function RichTextAreaImpl(){
}

_ = RichTextAreaImpl.prototype = new Object_0;
_.createElement_0 = function createElement(){
  return $doc.createElement('textarea');
}
;
_.getClass$ = function getClass_384(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
_.elem = null;
function $execCommand(this$static, cmd, param){
  var $e0;
  if (this$static.isReady) {
    this$static.initializing?(this$static.isPendingFocus = true):(this$static.elem.contentWindow.focus() , undefined);
    try {
      this$static.elem.contentWindow.document.execCommand(cmd, false, param);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 57))
        throw $e0;
    }
  }
}

function $initElement(this$static){
  var _this = this$static;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    _this.elem.contentWindow.document.designMode = 'On';
    _this.onElementInitialized();
  }
  ), 1);
}

function $queryCommandState(this$static, cmd){
  var $e0;
  if (this$static.isReady) {
    this$static.initializing?(this$static.isPendingFocus = true):(this$static.elem.contentWindow.focus() , undefined);
    try {
      return !!this$static.elem.contentWindow.document.queryCommandState(cmd);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 57)) {
        return false;
      }
       else 
        throw $e0;
    }
  }
  return false;
}

function $setEnabled(this$static, enabled){
  var elem;
  !this$static.beforeInitPlaceholder?(elem = this$static.elem , elem.contentWindow.document.designMode = enabled?'On':'Off' , undefined):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

function $setEnabledImpl(this$static, enabled){
  var elem = this$static.elem;
  elem.contentWindow.document.designMode = enabled?'On':'Off';
}

function $setFocus_1(this$static, focused){
  this$static.initializing?(this$static.isPendingFocus = focused):(focused?this$static.elem.contentWindow.focus():this$static.elem.contentWindow.blur() , undefined);
}

function $setHTML_1(this$static, html){
  !this$static.beforeInitPlaceholder?(this$static.elem.contentWindow.document.body.innerHTML = html , undefined):(this$static.beforeInitPlaceholder.innerHTML = html || '' , undefined);
}

function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $setJustification(this$static, justification){
  justification == ($clinit_49() , CENTER)?$execCommand(this$static, 'JustifyCenter', null):justification == FULL?$execCommand(this$static, 'JustifyFull', null):justification == LEFT_0?$execCommand(this$static, 'JustifyLeft', null):justification == RIGHT_0 && $execCommand(this$static, 'JustifyRight', null);
}

function $uninitElement(this$static){
  var enabled, html, elem, wnd, elem_0, elem_1;
  this$static.isReady = false;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  elem = this$static.elem;
  wnd = elem.contentWindow;
  wnd.removeEventListener('keydown', elem.__gwt_handler, true);
  wnd.removeEventListener('keyup', elem.__gwt_handler, true);
  wnd.removeEventListener('keypress', elem.__gwt_handler, true);
  wnd.removeEventListener('mousedown', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseup', elem.__gwt_handler, true);
  wnd.removeEventListener('mousemove', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseover', elem.__gwt_handler, true);
  wnd.removeEventListener('mouseout', elem.__gwt_handler, true);
  wnd.removeEventListener('click', elem.__gwt_handler, true);
  elem.__gwt_handler = null;
  elem.onfocus = null;
  elem.onblur = null;
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
  enabled = !this$static.beforeInitPlaceholder?(elem_0 = this$static.elem , elem_0.contentWindow.document.designMode.toUpperCase() == 'ON'):!this$static.beforeInitPlaceholder['disabled'];
  this$static.beforeInitPlaceholder = $doc.createElement('div');
  this$static.beforeInitPlaceholder.innerHTML = html || '';
  !this$static.beforeInitPlaceholder?(elem_1 = this$static.elem , elem_1.contentWindow.document.designMode = enabled?'On':'Off' , undefined):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

function RichTextAreaImplStandard(){
}

_ = RichTextAreaImplStandard.prototype = new RichTextAreaImpl;
_.createElement_0 = function createElement_0(){
  return $doc.createElement('iframe');
}
;
_.getClass$ = function getClass_385(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit;
}
;
_.onElementInitialized = function onElementInitialized(){
  var elem;
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  this.isReady = true;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, this.beforeInitPlaceholder.innerHTML);
    $setEnabledImpl(this, !this.beforeInitPlaceholder?(elem = this.elem , elem.contentWindow.document.designMode.toUpperCase() == 'ON'):!this.beforeInitPlaceholder['disabled']);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    this.initializing?(this.isPendingFocus = true):(this.elem.contentWindow.focus() , undefined);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.castableTypeMap$ = {};
_.initializing = false;
_.isPendingFocus = false;
_.isReady = false;
function $hookEvents(this$static){
  var elem = this$static.elem;
  var wnd = elem.contentWindow;
  elem.__gwt_handler = function(evt){
    elem.__listener && isMyListener(elem.__listener) && dispatchEvent_0(evt, elem, elem.__listener);
  }
  ;
  wnd.addEventListener('keydown', elem.__gwt_handler, true);
  wnd.addEventListener('keyup', elem.__gwt_handler, true);
  wnd.addEventListener('keypress', elem.__gwt_handler, true);
  wnd.addEventListener('mousedown', elem.__gwt_handler, true);
  wnd.addEventListener('mouseup', elem.__gwt_handler, true);
  wnd.addEventListener('mousemove', elem.__gwt_handler, true);
  wnd.addEventListener('mouseover', elem.__gwt_handler, true);
  wnd.addEventListener('mouseout', elem.__gwt_handler, true);
  wnd.addEventListener('click', elem.__gwt_handler, true);
  wnd.onfocus = function(evt){
    elem.__listener && dispatchEvent_0(evt, elem, elem.__listener);
  }
  ;
  wnd.onblur = function(evt){
    elem.__listener && dispatchEvent_0(evt, elem, elem.__listener);
  }
  ;
}

function RichTextAreaImplSafari_0(){
  this.elem = this.createElement_0();
  this.beforeInitPlaceholder = $doc.createElement('div');
}

function RichTextAreaImplSafari(){
}

_ = RichTextAreaImplSafari_0.prototype = RichTextAreaImplSafari.prototype = new RichTextAreaImplStandard;
_.getClass$ = function getClass_386(){
  return Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplSafari_2_classLit;
}
;
_.castableTypeMap$ = {};
_ = VWindow.prototype;
_.getShortcutActionHandler = function getShortcutActionHandler(){
  return this.shortcutHandler;
}
;
_ = VView.prototype;
_.getShortcutActionHandler = function getShortcutActionHandler_0(){
  return this.actionHandler;
}
;
function WidgetMapImpl$5$1_0(){
}

function WidgetMapImpl$5$1(){
}

_ = WidgetMapImpl$5$1_0.prototype = WidgetMapImpl$5$1.prototype = new Object_0;
_.get = function get_44(){
  return new VRichTextArea_0;
}
;
_.getClass$ = function getClass_542(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$5$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $createRTAComponents(this$static){
  this$static.rta = new RichTextArea_0;
  this$static.rta.element_0.style['width'] = '100%';
  $addDomHandler(this$static.rta, this$static, ($clinit_13() , $clinit_13() , TYPE));
  $addDomHandler(this$static.rta, this$static, ($clinit_19() , $clinit_19() , TYPE_5));
  this$static.formatter = new VRichTextToolbar_0(this$static.rta);
}

function $detectExtraSizes_0(this$static){
  var clone, parent_0, parent_1;
  clone = ($clinit_67() , this$static.element_0.cloneNode(false));
  clone.setAttribute('id', '');
  clone.style['visibility'] = 'hidden';
  clone.style['position'] = 'absolute';
  clone.style['width'] = '10px';
  clone.style['height'] = '10px';
  (parent_0 = this$static.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).appendChild(clone);
  this$static.extraHorizontalPixels = (parseInt(clone['offsetWidth']) || 0) - 10;
  this$static.extraVerticalPixels = (parseInt(clone['offsetHeight']) || 0) - 10;
  (parent_1 = this$static.element_0.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1).removeChild(clone);
}

function $getExtraVerticalPixels(this$static){
  this$static.extraVerticalPixels < 0 && $detectExtraSizes_0(this$static);
  return this$static.extraVerticalPixels;
}

function $getShortcutHandlerOwner(this$static){
  var parent_0;
  if (!this$static.hasShortcutActionHandler) {
    parent_0 = this$static.parent_0;
    while (parent_0) {
      if (parent_0 != null && parent_0.castableTypeMap$ && !!parent_0.castableTypeMap$[29]) {
        break;
      }
      parent_0 = parent_0.getParent();
    }
    this$static.hasShortcutActionHandler = dynamicCast(parent_0, 29);
  }
  return this$static.hasShortcutActionHandler;
}

function $setEnabled_3(this$static, enabled){
  if (this$static.enabled != enabled) {
    $swapEditableArea(this$static);
    this$static.enabled = enabled;
  }
}

function $setReadOnly_1(this$static, b){
  if (this$static.readOnly != b) {
    $swapEditableArea(this$static);
    this$static.readOnly = b;
  }
  this$static.formatter.element_0.style.display = !this$static.readOnly?'':'none';
}

function $swapEditableArea(this$static){
  if (this$static.html.attached) {
    $remove_2(this$static.fp, this$static.html);
    if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isWebKit) {
      $remove_2(this$static.fp, this$static.formatter);
      $createRTAComponents(this$static);
      $add_4(this$static.fp, this$static.formatter);
    }
    $setHTML_1(this$static.rta.impl, this$static.currentValue);
    $add_4(this$static.fp, this$static.rta);
  }
   else {
    $setTextOrHtml(this$static.html.directionalTextHelper, this$static.currentValue, true);
    $remove_2(this$static.fp, this$static.rta);
    $add_4(this$static.fp, this$static.html);
  }
}

function VRichTextArea_0(){
  this.html = new HTML_0;
  this.fp = new FlowPanel_0;
  $createRTAComponents(this);
  $add_4(this.fp, this.formatter);
  $add_4(this.fp, this.rta);
  $initWidget(this, this.fp);
  this.element_0['className'] = 'v-richtextarea';
}

function VRichTextArea(){
}

_ = VRichTextArea_0.prototype = VRichTextArea.prototype = new Composite;
_.getClass$ = function getClass_841(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea_2_classLit;
}
;
_.onBeforeShortcutAction = function onBeforeShortcutAction_1(e){
  $synchronizeContentToServer(this);
}
;
_.onBlur = function onBlur_12(event_0){
  $synchronizeContentToServer(this);
}
;
_.onChange = function onChange_5(event_0){
  $synchronizeContentToServer(this);
}
;
_.onKeyDown = function onKeyDown_9(event_0){
  var shortcutHandler;
  shortcutHandler = $getShortcutHandlerOwner(this).getShortcutActionHandler();
  !!shortcutHandler && $handleKeyboardEvent(shortcutHandler, event_0.nativeEvent, this);
}
;
_.onKeyPress = function onKeyPress_4(event_0){
  this.maxLength >= 0 && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VRichTextArea$3_0(this));
}
;
_.setFocus = function setFocus_6(focused){
  $schedule(new VRichTextArea$4_0(this), 300);
}
;
_.setHeight = function setHeight_25(height){
  var h_0;
  if (height.lastIndexOf('px') != -1 && height.lastIndexOf('px') == height.length - 'px'.length) {
    h_0 = __parseAndValidateInt(height.substr(0, height.length - 2 - 0));
    h_0 -= (this.extraVerticalPixels < 0 && $detectExtraSizes_0(this) , this.extraVerticalPixels);
    h_0 < 0 && (h_0 = 0);
    this.element_0.style['height'] = h_0 + 'px';
  }
   else {
    this.element_0.style['height'] = height;
  }
  height == null || $equals_2(height, '')?(this.rta.element_0.style['height'] = '' , undefined):$scheduleDeferred_0(($clinit_1() , INSTANCE), new VRichTextArea$2_0(this));
}
;
_.setTabIndex = function setTabIndex_11(index){
  this.rta.element_0.tabIndex = index;
}
;
_.setWidth = function setWidth_35(width){
  var w;
  if (width.lastIndexOf('px') != -1 && width.lastIndexOf('px') == width.length - 'px'.length) {
    w = __parseAndValidateInt(width.substr(0, width.length - 2 - 0));
    w -= (this.extraHorizontalPixels < 0 && $detectExtraSizes_0(this) , this.extraHorizontalPixels);
    w < 0 && (w = 0);
    this.element_0.style['width'] = w + 'px';
  }
   else 
    $equals_2(width, '')?(this.element_0.style['width'] = '500px' , undefined):(this.element_0.style['width'] = width , undefined);
}
;
_.updateFromUIDL = function updateFromUIDL_57(uidl, client){
  var newMaxLength;
  this.client = client;
  this.id_0 = uidl[1]['id'];
  if (Boolean(uidl[1]['v']) && 'text' in uidl[1]['v']) {
    this.currentValue = uidl[1]['v']['text'];
    this.rta.attached?($setHTML_1(this.rta.impl, this.currentValue) , undefined):($setTextOrHtml(this.html.directionalTextHelper, this.currentValue, true) , undefined);
  }
  'cached' in uidl[1] || $setEnabled_3(this, !Boolean(uidl[1]['disabled']));
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  $setReadOnly_1(this, Boolean(uidl[1]['readonly']));
  this.immediate = Boolean(uidl[1]['immediate']);
  newMaxLength = 'maxLength' in uidl[1]?uidl[1]['maxLength']:-1;
  if (newMaxLength >= 0) {
    this.maxLength == -1 && (this.keyPressHandler = $addDomHandler(this.rta, this, ($clinit_20() , $clinit_20() , TYPE_6)));
    this.maxLength = newMaxLength;
  }
   else if (this.maxLength != -1) {
    this.element_0.setAttribute('maxlength', '');
    this.maxLength = -1;
    $removeHandler(this.keyPressHandler.real);
  }
  'selectAll' in uidl[1] && $schedule(new VRichTextArea$1_0(this), 320);
}
;
_.castableTypeMap$ = {5:1, 7:1, 10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 28:1, 38:1, 43:1, 69:1, 70:1, 122:1, 124:1, 162:1};
_.client = null;
_.currentValue = '';
_.enabled = true;
_.extraHorizontalPixels = -1;
_.extraVerticalPixels = -1;
_.formatter = null;
_.hasShortcutActionHandler = null;
_.id_0 = null;
_.immediate = false;
_.keyPressHandler = null;
_.maxLength = -1;
_.readOnly = false;
_.rta = null;
function VRichTextArea$1_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VRichTextArea$1(){
}

_ = VRichTextArea$1_0.prototype = VRichTextArea$1.prototype = new Timer;
_.getClass$ = function getClass_842(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$1_2_classLit;
}
;
_.run = function run_39(){
  $execCommand($getFormatter(this.this$0.rta), 'SelectAll', null);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function VRichTextArea$2_0(this$0){
  this.this$0 = this$0;
}

function VRichTextArea$2(){
}

_ = VRichTextArea$2_0.prototype = VRichTextArea$2.prototype = new Object_0;
_.execute_0 = function execute_82(){
  var editorHeight;
  editorHeight = (parseInt(this.this$0.element_0['offsetHeight']) || 0) - $getExtraVerticalPixels(this.this$0) - (parseInt(this.this$0.formatter.element_0['offsetHeight']) || 0);
  editorHeight < 0 && (editorHeight = 0);
  this.this$0.rta.element_0.style['height'] = editorHeight + 'px';
}
;
_.getClass$ = function getClass_843(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VRichTextArea$3_0(this$0){
  this.this$0 = this$0;
}

function VRichTextArea$3(){
}

_ = VRichTextArea$3_0.prototype = VRichTextArea$3.prototype = new Object_0;
_.execute_0 = function execute_83(){
  $getHTML(this.this$0.rta.impl).length > this.this$0.maxLength && $setHTML_0(this.this$0.rta, $getHTML(this.this$0.rta.impl).substr(0, this.this$0.maxLength - 0));
}
;
_.getClass$ = function getClass_844(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VRichTextArea$4_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VRichTextArea$4(){
}

_ = VRichTextArea$4_0.prototype = VRichTextArea$4.prototype = new Timer;
_.getClass$ = function getClass_845(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$4_2_classLit;
}
;
_.run = function run_40(){
  $setFocus_0(this.this$0.rta, true);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function $clinit_76(){
  $clinit_76 = nullMethod;
  fontSizesConstants = initValues(_3Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit, {30:1, 35:1}, 99, [($clinit_48() , XX_SMALL), X_SMALL, SMALL, MEDIUM, LARGE, X_LARGE, XX_LARGE]);
}

function $createColorList(this$static, caption){
  var lb;
  lb = new ListBox_0;
  $addDomHandler(lb, this$static.handler, ($clinit_14() , $clinit_14() , TYPE_0));
  lb.element_0.size = 1;
  $insertItem(lb, caption, caption, -1);
  $insertItem(lb, 'White', 'white', -1);
  $insertItem(lb, 'Black', 'black', -1);
  $insertItem(lb, 'Red', 'red', -1);
  $insertItem(lb, 'Green', 'green', -1);
  $insertItem(lb, 'Yellow', 'yellow', -1);
  $insertItem(lb, 'Blue', 'blue', -1);
  lb.element_0.tabIndex = -1;
  return lb;
}

function $createPushButton(this$static, img, tip){
  var pb;
  pb = new PushButton_0(new Image_2(img));
  $addDomHandler(pb, this$static.handler, ($clinit_15() , $clinit_15() , TYPE_1));
  tip == null || tip.length == 0?(pb.element_0.removeAttribute('title') , undefined):(pb.element_0.setAttribute('title', tip) , undefined);
  ($clinit_43() , pb.element_0).tabIndex = -1;
  return pb;
}

function $createToggleButton(this$static, img, tip){
  var tb;
  tb = new ToggleButton_0(new Image_2(img));
  $addDomHandler(tb, this$static.handler, ($clinit_15() , $clinit_15() , TYPE_1));
  tip == null || tip.length == 0?(tb.element_0.removeAttribute('title') , undefined):(tb.element_0.setAttribute('title', tip) , undefined);
  ($clinit_43() , tb.element_0).tabIndex = -1;
  return tb;
}

function $updateStatus(this$static){
  if (this$static.basic) {
    $setDown(this$static.bold, $queryCommandState(this$static.basic, 'Bold'));
    $setDown(this$static.italic, $queryCommandState(this$static.basic, 'Italic'));
    $setDown(this$static.underline, $queryCommandState(this$static.basic, 'Underline'));
    $setDown(this$static.subscript, $queryCommandState(this$static.basic, 'Subscript'));
    $setDown(this$static.superscript, $queryCommandState(this$static.basic, 'Superscript'));
  }
  !!this$static.extended && $setDown(this$static.strikethrough, $queryCommandState(this$static.extended, 'Strikethrough'));
}

function VRichTextToolbar_0(richText){
  var lb, lb_0;
  $clinit_76();
  this.handler = new VRichTextToolbar$EventHandler_0(this);
  this.outer = new FlowPanel_0;
  this.topPanel = new FlowPanel_0;
  this.bottomPanel = new FlowPanel_0;
  this.richText = richText;
  this.basic = $getFormatter(richText);
  this.extended = $getFormatter(richText);
  $add_4(this.outer, this.topPanel);
  $add_4(this.outer, this.bottomPanel);
  this.topPanel.setStyleName('gwt-RichTextToolbar-top');
  this.bottomPanel.setStyleName('gwt-RichTextToolbar-bottom');
  $initWidget(this, this.outer);
  this.element_0['className'] = 'gwt-RichTextToolbar';
  if (this.basic) {
    $add_4(this.topPanel, this.bold = $createToggleButton(this, ($clinit_77() , bold), 'Toggle Bold'));
    $add_4(this.topPanel, this.italic = $createToggleButton(this, ($clinit_82() , italic), 'Toggle Italic'));
    $add_4(this.topPanel, this.underline = $createToggleButton(this, ($clinit_94() , underline), 'Toggle Underline'));
    $add_4(this.topPanel, this.subscript = $createToggleButton(this, ($clinit_91() , subscript), 'Toggle Subscript'));
    $add_4(this.topPanel, this.superscript = $createToggleButton(this, ($clinit_92() , superscript), 'Toggle Superscript'));
    $add_4(this.topPanel, this.justifyLeft = $createPushButton(this, ($clinit_84() , justifyLeft), 'Left Justify'));
    $add_4(this.topPanel, this.justifyCenter = $createPushButton(this, ($clinit_83() , justifyCenter), 'Center'));
    $add_4(this.topPanel, this.justifyRight = $createPushButton(this, ($clinit_85() , justifyRight), 'Right Justify'));
  }
  if (this.extended) {
    $add_4(this.topPanel, this.strikethrough = $createToggleButton(this, ($clinit_90() , strikeThrough), 'Toggle Strikethrough'));
    $add_4(this.topPanel, this.indent = $createPushButton(this, ($clinit_80() , indent), 'Indent Right'));
    $add_4(this.topPanel, this.outdent = $createPushButton(this, ($clinit_87() , outdent), 'Indent Left'));
    $add_4(this.topPanel, this.hr = $createPushButton(this, ($clinit_79() , hr), 'Insert Horizontal Rule'));
    $add_4(this.topPanel, this.ol = $createPushButton(this, ($clinit_86() , ol), 'Insert Ordered List'));
    $add_4(this.topPanel, this.ul = $createPushButton(this, ($clinit_93() , ul), 'Insert Unordered List'));
    $add_4(this.topPanel, this.insertImage = $createPushButton(this, ($clinit_81() , insertImage), 'Insert Image'));
    $add_4(this.topPanel, this.createLink = $createPushButton(this, ($clinit_78() , createLink), 'Create Link'));
    $add_4(this.topPanel, this.removeLink = $createPushButton(this, ($clinit_89() , removeLink), 'Remove Link'));
    $add_4(this.topPanel, this.removeFormat = $createPushButton(this, ($clinit_88() , removeFormat), 'Remove Formatting'));
  }
  if (this.basic) {
    $add_4(this.bottomPanel, this.backColors = $createColorList(this, 'Background'));
    $add_4(this.bottomPanel, this.foreColors = $createColorList(this, 'Foreground'));
    $add_4(this.bottomPanel, this.fonts = (lb = new ListBox_0 , $addDomHandler(lb, this.handler, ($clinit_14() , $clinit_14() , TYPE_0)) , lb.element_0.size = 1 , $insertItem(lb, 'Font', '', -1) , $insertItem(lb, 'Normal', 'inherit', -1) , $insertItem(lb, 'Times New Roman', 'Times New Roman', -1) , $insertItem(lb, 'Arial', 'Arial', -1) , $insertItem(lb, 'Courier New', 'Courier New', -1) , $insertItem(lb, 'Georgia', 'Georgia', -1) , $insertItem(lb, 'Trebuchet', 'Trebuchet', -1) , $insertItem(lb, 'Verdana', 'Verdana', -1) , lb.element_0.tabIndex = -1 , lb));
    $add_4(this.bottomPanel, this.fontSizes = (lb_0 = new ListBox_0 , $addDomHandler(lb_0, this.handler, TYPE_0) , lb_0.element_0.size = 1 , $insertItem(lb_0, 'Size', 'Size', -1) , $insertItem(lb_0, 'XX-Small', 'XX-Small', -1) , $insertItem(lb_0, 'X-Small', 'X-Small', -1) , $insertItem(lb_0, 'Small', 'Small', -1) , $insertItem(lb_0, 'Medium', 'Medium', -1) , $insertItem(lb_0, 'Large', 'Large', -1) , $insertItem(lb_0, 'X-Large', 'X-Large', -1) , $insertItem(lb_0, 'XX-Large', 'XX-Large', -1) , lb_0.element_0.tabIndex = -1 , lb_0));
    $addDomHandler(richText, this.handler, ($clinit_21() , $clinit_21() , TYPE_7));
    $addDomHandler(richText, this.handler, ($clinit_15() , $clinit_15() , TYPE_1));
  }
}

function VRichTextToolbar(){
}

_ = VRichTextToolbar_0.prototype = VRichTextToolbar.prototype = new Composite;
_.getClass$ = function getClass_846(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextToolbar_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
_.backColors = null;
_.basic = null;
_.bold = null;
_.createLink = null;
_.extended = null;
_.fontSizes = null;
_.fonts = null;
_.foreColors = null;
_.hr = null;
_.indent = null;
_.insertImage = null;
_.italic = null;
_.justifyCenter = null;
_.justifyLeft = null;
_.justifyRight = null;
_.ol = null;
_.outdent = null;
_.removeFormat = null;
_.removeLink = null;
_.richText = null;
_.strikethrough = null;
_.subscript = null;
_.superscript = null;
_.ul = null;
_.underline = null;
var fontSizesConstants;
function VRichTextToolbar$EventHandler_0(this$0){
  this.this$0 = this$0;
}

function VRichTextToolbar$EventHandler(){
}

_ = VRichTextToolbar$EventHandler_0.prototype = VRichTextToolbar$EventHandler.prototype = new Object_0;
_.getClass$ = function getClass_847(){
  return Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextToolbar$EventHandler_2_classLit;
}
;
_.onChange = function onChange_6(event_0){
  var sender;
  sender = event_0.source;
  if ((sender == null?null:sender) === maskUndefined(this.this$0.backColors)) {
    $execCommand(this.this$0.basic, 'HiliteColor', $getValue_0(this.this$0.backColors, this.this$0.backColors.element_0.selectedIndex));
    this.this$0.backColors.element_0.selectedIndex = 0;
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.foreColors)) {
    $execCommand(this.this$0.basic, 'ForeColor', $getValue_0(this.this$0.foreColors, this.this$0.foreColors.element_0.selectedIndex));
    this.this$0.foreColors.element_0.selectedIndex = 0;
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.fonts)) {
    $execCommand(this.this$0.basic, 'FontName', $getValue_0(this.this$0.fonts, this.this$0.fonts.element_0.selectedIndex));
    this.this$0.fonts.element_0.selectedIndex = 0;
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.fontSizes)) {
    $execCommand(this.this$0.basic, 'FontSize', '' + ($clinit_76() , fontSizesConstants)[this.this$0.fontSizes.element_0.selectedIndex - 1].number);
    this.this$0.fontSizes.element_0.selectedIndex = 0;
  }
}
;
_.onClick = function onClick_29(event_0){
  var sender, url;
  sender = event_0.source;
  if ((sender == null?null:sender) === maskUndefined(this.this$0.bold)) {
    $execCommand(this.this$0.basic, 'Bold', 'false');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.italic)) {
    $execCommand(this.this$0.basic, 'Italic', 'false');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.underline)) {
    $execCommand(this.this$0.basic, 'Underline', 'False');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.subscript)) {
    $execCommand(this.this$0.basic, 'Subscript', 'false');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.superscript)) {
    $execCommand(this.this$0.basic, 'Superscript', 'false');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.strikethrough)) {
    $execCommand(this.this$0.extended, 'Strikethrough', 'false');
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.indent)) {
    $execCommand(this.this$0.extended, 'Indent', null);
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.outdent)) {
    $execCommand(this.this$0.extended, 'Outdent', null);
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.justifyLeft)) {
    $setJustification(this.this$0.basic, ($clinit_49() , LEFT_0));
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.justifyCenter)) {
    $setJustification(this.this$0.basic, ($clinit_49() , CENTER));
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.justifyRight)) {
    $setJustification(this.this$0.basic, ($clinit_49() , RIGHT_0));
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.insertImage)) {
    url = $wnd.prompt('Enter an image URL:', 'http://');
    url != null && $execCommand(this.this$0.extended, 'InsertImage', url);
  }
   else if ((sender == null?null:sender) === maskUndefined(this.this$0.createLink)) {
    url = $wnd.prompt('Enter a link URL:', 'http://');
    url != null && $execCommand(this.this$0.extended, 'CreateLink', url);
  }
   else 
    (sender == null?null:sender) === maskUndefined(this.this$0.removeLink)?$execCommand(this.this$0.extended, 'Unlink', 'false'):(sender == null?null:sender) === maskUndefined(this.this$0.hr)?$execCommand(this.this$0.extended, 'InsertHorizontalRule', null):(sender == null?null:sender) === maskUndefined(this.this$0.ol)?$execCommand(this.this$0.extended, 'InsertOrderedList', null):(sender == null?null:sender) === maskUndefined(this.this$0.ul)?$execCommand(this.this$0.extended, 'InsertUnorderedList', null):(sender == null?null:sender) === maskUndefined(this.this$0.removeFormat)?$execCommand(this.this$0.extended, 'RemoveFormat', null):(sender == null?null:sender) === maskUndefined(this.this$0.richText) && $updateStatus(this.this$0);
}
;
_.onKeyUp = function onKeyUp_3(event_0){
  maskUndefined(event_0.source) === maskUndefined(this.this$0.richText) && $updateStatus(this.this$0);
}
;
_.castableTypeMap$ = {12:1, 38:1, 39:1, 44:1};
_.this$0 = null;
var bold = null, createLink = null, hr = null, indent = null, insertImage = null, italic = null, justifyCenter = null, justifyLeft = null, justifyRight = null, ol = null, outdent = null, removeFormat = null, removeLink = null, strikeThrough = null, subscript = null, superscript = null, ul = null, underline = null;
function $clinit_77(){
  $clinit_77 = nullMethod;
  bold = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAlUlEQVR42mNgGAVDA1y5cuW/kpISBtbX1/8/derU/xQZmJ+f/7+mpuZ/aGgomK+np/cfJE+2gXv27Pn/6NGj/9euXYOL7d69m3wDYZrXrVtHHQPRsY2Nzf+HDx/+p1oYgvDChQspD0MQBsUySAxkAVXDsKOjg7phePXqVdIMBAU6yFvY8OPHj0mPFBCAhRs6Hi1HaA8AD8fXoS3VmQIAAAAASUVORK5CYII=', 20, 20);
}

function $clinit_78(){
  $clinit_78 = nullMethod;
  createLink = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABR0lEQVR42u2TMauCYBSG+y0SiEMODaGDtEmLizXk0CCIa38gaHMIavUHNAtCUIsQgtDYkqVYVPpD3ss5cF1vOtzl3hcO33eG8/Ce75yv0/nXr2mz2WA4HKLX68G2bZzPZ7SGLRYLCILAIUkSn4Zh4Pl8Noc+Hg+G9Pt9RFGE+/0OXdcZut/vmwPjOMZ6vcbpdML7/eZwHIeBYRh+DrxcLphOp3WrsizjeDyC3pJyVVVRFAU+ho1GIy7UNA2z2Qzz+Ryr1ap+x8PhwG5/hF2v1xpmmia22y3nlmXVsN1u9xmMRE6+YXmeYzKZ1G0PBoNmMBJNk3aNYFRIU10ulwiCALfbrRmMpCgKRFFEkiTIsgzj8Zjd+b7fHEbyPI8B3W6XndKd9o7ctfoVr9eLW6S1oFVxXRdpmrZzR6LCsixRVRUH3VvD/oa+AM1PByaIU6qdAAAAAElFTkSuQmCC', 20, 20);
}

function $clinit_79(){
  $clinit_79 = nullMethod;
  hr = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAJUlEQVR42mNgGAWjYLgDfX39/+Rg+hn4+PHj/+Tg0bgdBYMNAACnrl6B8Up0UwAAAABJRU5ErkJggg==', 20, 20);
}

function $clinit_80(){
  $clinit_80 = nullMethod;
  indent = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAIABADg4OOHh4SH5BAEAAAEALAAAAAAUABQAAAIjjI+py+0Po5wIHICzVphqa3xZ9UllKIIkFV5px8byTNd2UAAAOw==', 20, 20);
}

function $clinit_81(){
  $clinit_81 = nullMethod;
  insertImage = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABEElEQVR42u2UvYqDQBRG8yyCPoD4U4hNuqCNYiHYKohF0EKwt5BUkpCUYmFhZ2FjoU8i2OiDfMsMrMWywTWk2CIXTjPDnLnfHZjD4VP/u/q+x+12A8MwFM/zQNa2eCr8FimKgtPpBFEUV/lvGIYBnue3hVmW4fF4IAzD9bDv+yjLEkVRwHVdunY+n6Gq6rbwJ/f7HZfLhXZOBHme43q9rvu7hJqmoa5ryLKMqqpolyRm0zQ4Ho/7hSR2FEVI0xTzPFOSJEEcxwiCYL/QcRwa0bIsTNOEcRyh6zqNbNv2fiHHcei6DqZpQhAEGpdc0rYtWJbdLyRIkkRnNwwDhcySyF96lL/wVLgsC17h88e8t74AONtCWuZ7tWsAAAAASUVORK5CYII=', 20, 20);
}

function $clinit_82(){
  $clinit_82 = nullMethod;
  italic = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAMQRAOPj4+Li4oiIiFVVVS8vL6+vr5WVlWJiYuHh4W9vb25ubq6uromJibu7uzw8PElJSSIiIuHh4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABEALAAAAAAUABQAAAU7YCSOZGmeaKqubOuOCiRDjRsc0AMg7wAJLxEBUgguIIRAUAAZBCMJCOPp+L0MM2srAOgClM+weExmhQAAOw==', 20, 20);
}

function $clinit_83(){
  $clinit_83 = nullMethod;
  justifyCenter = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAIABADg4OOHh4SH5BAEAAAEALAAAAAAUABQAAAIdjI+py+0PE5i01oiDtTnuD3QQOIkPyZkNqrbuCxcAOw==', 20, 20);
}

function $clinit_84(){
  $clinit_84 = nullMethod;
  justifyLeft = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAIABADg4OOHh4SH5BAEAAAEALAAAAAAUABQAAAIejI+py+0PE5i01hitxTzoD3QOOIkZeZkLqrbuCxsFADs=', 20, 20);
}

function $clinit_85(){
  $clinit_85 = nullMethod;
  justifyRight = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAIABADg4OOHh4SH5BAEAAAEALAAAAAAUABQAAAIdjI+py+0PE5i01oiPtfntD3QYOIkNyZkeqbbu6xYAOw==', 20, 20);
}

function $clinit_86(){
  $clinit_86 = nullMethod;
  ol = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAMQQAL+/vzk5OVpaWoeHhy4uLnFxcbS0tJKSkk9PT6mpqXx8fERERNbW1svLy56eni8vL+Hh4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAUABQAAAVJICSOZGmeKAo0KaoEQ3sCSCw+eI6fgi2XvZ8JICwNAoHi6AAgECE63TBQUIoQAcGzaOgyrAmBwwpZFAijaI6XtAoSTuuBSq7bQwA7', 20, 20);
}

function $clinit_87(){
  $clinit_87 = nullMethod;
  outdent = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAIABADg4OOHh4SH5BAEAAAEALAAAAAAUABQAAAIjjI+py+0Po5wJGICzVpgGbX1gd4wTeI0hQnqhmnnyTNf2bRQAOw==', 20, 20);
}

function $clinit_88(){
  $clinit_88 = nullMethod;
  removeFormat = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABaklEQVR42u2TMYvCQBCF/S2xTidIECwtgoWBYGGTVgN22igETasWSkBtUliorSLEIk0aQdOJGgiCqD/kySysHFccbu7KezAsG8jHmzezqdS/uG63G+icTCao1+uwbRuJYa1WC71eD5fLhcF4JQYGQYBMJoMoimBZFtrtNgMej8dk0Pv9DsMw0O/3sdvtMBwOUa1WoaoqNE3DdDoVA1+vV3CXcRxjvV4jn89DkiRWwnkul0uEYchcDgYDzOfzN4yKXH4Mo5wajQZr0/d9ZLNZHA4HpNNpmKbJgIVC4XMgX5PFYgHKslKpYDQagSZPU+cuPwY+Hg88n0/QSfftdgtFUXA6ndDpdN7A/X4vPvFutwvXdVEul+E4DprN5hu4Wq3EgOfzGbIsM3ebzQa5XA70eorFIgPSsISAtVqN/UiDoCx1Xcd4PAZtQKLV+Z4ltchdfv2eWAQolUrir+QneZ6H2Wz2d0DK8tetiuoFw3AoaFEhG7UAAAAASUVORK5CYII=', 20, 20);
}

function $clinit_89(){
  $clinit_89 = nullMethod;
  removeLink = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABkklEQVR42tWUzcsBURTG/S1SsqBMysjCTjZqfBUrKVmp2UrKzoZsLGSrlIWFjyKaEtnKBkM+hz/k0TlF73Lum41bp7nTdH7znOecey2Wn1632w1fgxWLRVSr1e8BF4sFPB4PDocDQ+v1OgKBAJxOJzKZDDabjdjPDMNAOp1GrVZDqVSC1WrlcDgc/AyHwxC25K2SIG63G5qm4Xw+IxgMMnQ8Hv9PpaqqWK/XoHeKbDbLwH6/Lwa8XC7odrvwer1c3nK5BHlJMJ/Ph9PpZB643W6RTCaRz+eRSqXQaDTQ6XQ+Pk4mE1ZrGhYKhTi51+thNpuxokgkwrDRaGQett/vP7BCoQAqm5ITiQRDB4OBeRgtagDBotEoe/ROHg6HDHw8HmKNkCSJh/d4PDLser1iOp1iPp8jHo+j2WyKAWVZht1ux2q14lMSi8VYMYGoXL/fLzbQlUqFATabjZXSngZZ13UuV1EUtFot88D7/Y5yucx+uVwu5HI57Ha7j5c0Lu12G0Kng5Q8n08O2v/t6vv7717KL3dXWEoSwZjwAAAAAElFTkSuQmCC', 20, 20);
}

function $clinit_90(){
  $clinit_90 = nullMethod;
  strikeThrough = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAx0lEQVR42u2TQQ2FQAxE0bICwMYaAAErAAQsAkAAAjCwcMcACIA7IGR+pkk5w3L6CU3mQtLHTNtNkq/+q6ZpgnMOxhiRtRYhBEQD0zQFVdc12rZFlmUCnuf5OZRO2EzQcRyiYRiQ5zm6rkNUXALpynsvURVM3YKwOUa3XdLJsiwSu6qqa4ZlWcbNsGkaWYDG3LZNgEVRPAdyAXoqfd9Df6CLegykIzbqDap4l+u6xt0ioed5YhxHEefJb/u+49WL0Rm+Bn11q36OOs0wQn7BWgAAAABJRU5ErkJggg==', 20, 20);
}

function $clinit_91(){
  $clinit_91 = nullMethod;
  subscript = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA6ElEQVR42u2T0Q1EUBBF1aIBBVAABSiAAiiAAihD/FMABfBPAShkNmeSJ7t/y5P92klucjMvuZm5d57j/OvxappG4jiWqqrE9OD0eLssuO+7BEEgnufJsiwyTZPyKIqEt1tT9n0vrutKlmUKOL3bazNJmqYqBPI8vz+dqXEcT8F5nsU6nCRJTkG4lVjXdSrE2mVZKr+VMEWyJmVWXddVue/7mvplwaIodKK6rmXbNgWcHm/DMOjkAP5VwsdxfKT63sPPtm0V1t4accAp4a+1IGuGYag2WN+mOSdC42/j6SMrGz8fmfDn9QJsOt6R4yQ5uwAAAABJRU5ErkJggg==', 20, 20);
}

function $clinit_92(){
  $clinit_92 = nullMethod;
  superscript = new ImageResourcePrototype_0('data:image/gif;base64,R0lGODlhFAAUAMQcAGFhYWJiYi8vL9TU1OPj41VVVTw8PHt7e7u7u4mJiaGhoYiIiG9vb3x8fK+vr25ubqOjo8nJyeHh4by8vElJSTs7O8jIyK6urtXV1UhISCIiIuLi4uHh4QAAAAAAAAAAACH5BAEAABwALAAAAAAUABQAAAVlICeOZGmeaKqubNsqxSIuhYIEAYJuhjBYAsoGAIEAUg7N46FxcDYbRiO1CWg0jA0HkUloU5NrRAQwFA4qwPX4JEBTF02goVG0Br0IRlAZsA4aCRISCRpoKxtuIolfLo6PkJGSJyEAOw==', 20, 20);
}

function $clinit_93(){
  $clinit_93 = nullMethod;
  ul = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAASklEQVR42mNgGNlg3rx5/ydNmvSfKobt37//v56eHhiDDEaW09fX/48PYzXw2rVr/11cXP5bWlr+P3369P/RSBmNlNFIGY2UwQ0Ap1RwQtOGNrEAAAAASUVORK5CYII=', 20, 20);
}

function $clinit_94(){
  $clinit_94 = nullMethod;
  underline = new ImageResourcePrototype_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAnklEQVR42u2SwQnEIBBFU4sNpBYFG7ABC7ABG1CwCUkZehfvaiGzzECWkMvGnDaQgYfw4b9RcFneec5YawE5ZjFGyvCcFjLGADkvwey86BU+VbiuK5VLKd+yMea+UGtNZaUU/TvnHOxLUkrzwlorSClhfzqCQu89tNbmhVjqvUPOGbZtI8YYlE3LOOdwRAhBHLMQwnUx3uQXt276F/MBpIXHS892nDIAAAAASUVORK5CYII=', 20, 20);
}

var Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader4'), Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton'), Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$Face'), Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CustomButton$2'), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState'), Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PushButton'), Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea'), Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$FontSize'), Lcom_google_gwt_user_client_ui_RichTextArea$Justification_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RichTextArea$Justification'), Lcom_google_gwt_user_client_ui_ToggleButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ToggleButton'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImpl'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplStandard'), Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'RichTextAreaImplSafari'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$5$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$5$1'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextArea$1'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextArea$2'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextArea$3'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextArea$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextArea$4'), _3Lcom_google_gwt_user_client_ui_RichTextArea$FontSize_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'RichTextArea$FontSize;'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextToolbar_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextToolbar'), Lcom_vaadin_terminal_gwt_client_ui_richtextarea_VRichTextToolbar$EventHandler_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.richtextarea.', 'VRichTextToolbar$EventHandler');
$entry(onLoad_32)();
