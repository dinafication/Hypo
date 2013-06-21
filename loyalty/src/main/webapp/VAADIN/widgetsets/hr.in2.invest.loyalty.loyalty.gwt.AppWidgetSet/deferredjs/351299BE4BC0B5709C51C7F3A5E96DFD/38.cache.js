function $replace(this$static, end){
  this$static.string = this$static.string.substr(0, 0 - 0) + '' + $substring(this$static.string, end);
}

function DateTimeConstantsAdapter_0(){
}

function DateTimeConstantsAdapter(){
}

_ = DateTimeConstantsAdapter_0.prototype = DateTimeConstantsAdapter.prototype = new Object_0;
_.getClass$ = function getClass_144(){
  return Lcom_google_gwt_i18n_client_DateTimeConstantsAdapter_2_classLit;
}
;
_.castableTypeMap$ = {};
function $clinit_33(){
  $clinit_33 = nullMethod;
  cache = new HashMap_0;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.impl.string.length > 0) {
    $add_12(this$static.patternParts, new DateTimeFormat$PatternPart_0(buf.impl.string, count));
    oldLength = buf.impl.string.length;
    0 < oldLength?($replace(buf.impl, oldLength) , buf):0 > oldLength && $append(buf, initDim(_3C_classLit, {30:1}, -1, -oldLength, 1));
  }
}

function $format(this$static, date, timeZone){
  var ch, diff, i, j_0, keepDate, keepTime, n, toAppendTo, trailQuote;
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_3(add_0(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  }
  toAppendTo = new StringBuffer_1;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = this$static.pattern.charCodeAt(i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j_0 = i + 1; j_0 < n && this$static.pattern.charCodeAt(j_0) == ch; ++j_0) {
      }
      $subFormat(toAppendTo, ch, j_0 - i, keepDate, keepTime, timeZone);
      i = j_0;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && this$static.pattern.charCodeAt(i) == 39) {
        toAppendTo.impl.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j_0 = i;
        while (j_0 < n && this$static.pattern.charCodeAt(j_0) != 39) {
          ++j_0;
        }
        if (j_0 >= n) {
          throw new IllegalArgumentException_1("Missing trailing '");
        }
        j_0 + 1 < n && this$static.pattern.charCodeAt(j_0 + 1) == 39?++j_0:(trailQuote = true);
        $append_0(toAppendTo, $substring_0(this$static.pattern, i, j_0));
        i = j_0 + 1;
      }
    }
     else {
      toAppendTo.impl.string += String.fromCharCode(ch);
      ++i;
    }
  }
  return toAppendTo.impl.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value;
  time = fromDouble(date.jsdate.getTime());
  if (!gte_0(time, P0_longLit)) {
    value = 1000 - toInt((divMod(neg(time), P3e8_longLit, true) , remainder));
    value == 1000 && (value = 0);
  }
   else {
    value = toInt((divMod(time, P3e8_longLit, true) , remainder));
  }
  if (count == 1) {
    value = ~~((value + 50) / 100) < 9?~~((value + 50) / 100):9;
    buf.impl.string += String.fromCharCode(48 + value & 65535);
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10) < 99?~~((value + 5) / 10):99;
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value;
  value = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value]);
      break;
    case 4:
      $append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value]);
      break;
    case 3:
      $append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value;
  value = date.jsdate.getFullYear() - 1900 + 1900;
  value < 0 && (value = -value);
  switch (count) {
    case 1:
      buf.impl.string += value;
      break;
    case 2:
      $zeroPaddingNumber(buf, value % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value, count);
  }
}

function $getNextCharCountInPattern(pattern, start){
  var ch, next;
  ch = pattern.charCodeAt(start);
  next = start + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.size_0;
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_4(this$static.patternParts, i), 62))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_4(this$static.patternParts, i + 1), 62))) {
        abut = true;
        dynamicCast($get_4(this$static.patternParts, i), 62).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = 'MLydhHmsSDkK'.indexOf(fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text, start, data, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = text.substr(start, text.length - start).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data[i].length;
    if (length_0 > bestMatchLength && textInLowerCase.indexOf(data[i].toLowerCase()) == 0) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text, strict){
  var charsConsumed, curDate, date;
  curDate = new Date_1;
  date = new Date_2(curDate.jsdate.getFullYear() - 1900, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse_0(this$static, text, date, strict);
  if (charsConsumed == 0 || charsConsumed < text.length) {
    throw new IllegalArgumentException_1(text);
  }
  return date;
}

function $parse_0(this$static, text, date, strict){
  var abutPass, abutPat, cal, count, i, parsePos, part, s;
  cal = new DateRecord_0;
  parsePos = initValues(_3I_classLit, {30:1}, -1, [0]);
  abutPat = -1;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.size_0; ++i) {
    part = dynamicCast($get_4(this$static.patternParts, i), 62);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = 0;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith(text, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date, strict)) {
    return 0;
  }
  return parsePos[0];
}

function $parseInt(text, pos){
  var ch, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text.length) {
    return -1;
  }
  ch = text.charCodeAt(ind);
  while (ch >= 48 && ch <= 57) {
    ret = ret * 10 + (ch - 48);
    ++ind;
    if (ind >= text.length) {
      break;
    }
    ch = text.charCodeAt(ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = new StringBuffer_1;
  inQuote = false;
  for (i = 0; i < pattern.length; ++i) {
    ch = pattern.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      buf.impl.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.impl.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.impl.string += String.fromCharCode(ch);
      }
      continue;
    }
    if ('GyMLdkHmsSEcDahKzZv'.indexOf(fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      buf.impl.string += String.fromCharCode(ch);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.impl.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.impl.string += String.fromCharCode(ch);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text, pos, cal){
  var offset, sign, st, value;
  if (pos[0] >= text.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value = $parseInt(text, pos);
  if (value == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text.length && text.charCodeAt(pos[0]) == 58) {
    offset = value * 60;
    ++pos[0];
    st = pos[0];
    value = $parseInt(text, pos);
    if (value == 0 && pos[0] == st) {
      return false;
    }
    offset += value;
  }
   else {
    offset = value;
    value < 24 && pos[0] - st <= 2?(offset *= 60):(offset = value % 100 + ~~(value / 100) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text, pos){
  while (pos[0] < text.length && ' \t\r\n'.indexOf(fromCodePoint(text.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(buf, ch, count, adjustedDate, adjustedTime, timezone){
  var value, value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10;
  switch (ch) {
    case 71:
      value = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Before Christ', 'Anno Domini'])[value]):$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['BC', 'AD'])[value]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value_0 = adjustedTime.jsdate.getHours();
      value_0 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_0, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_1 = adjustedDate.jsdate.getDay();
      count == 5?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_1]):count == 4?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_1]):$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_1]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['AM', 'PM'])[1]):$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['AM', 'PM'])[0]);
      break;
    case 104:
      value_2 = adjustedTime.jsdate.getHours() % 12;
      value_2 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_2, count);
      break;
    case 75:
      value_3 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value_3, count);
      break;
    case 72:
      value_4 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 99:
      value_5 = adjustedDate.jsdate.getDay();
      count == 5?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_5]):count == 4?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_5]):count == 3?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_5]):$zeroPaddingNumber(buf, value_5, 1);
      break;
    case 76:
      value_6 = adjustedDate.jsdate.getMonth();
      count == 5?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_6]):count == 4?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_6]):count == 3?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_6]):$zeroPaddingNumber(buf, value_6 + 1, count);
      break;
    case 81:
      value_7 = ~~(adjustedDate.jsdate.getMonth() / 3);
      count < 4?$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Q1', 'Q2', 'Q3', 'Q4'])[value_7]):$append_0(buf, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_7]);
      break;
    case 100:
      value_8 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value_8, count);
      break;
    case 109:
      value_9 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 115:
      value_10 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 122:
      count < 4?$append_0(buf, timezone.tzNames[0]):$append_0(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_0(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_0(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_0(buf, $getISOTimeZoneString(timezone)):$append_0(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $subParse(text, pos, part, digitCount, cal){
  var ch, start, value;
  $skipSpace(text, pos);
  start = pos[0];
  ch = part.text_0.charCodeAt(0);
  value = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start + digitCount > text.length) {
        return false;
      }
      value = $parseInt(text.substr(0, start + digitCount - 0), pos);
    }
     else {
      value = $parseInt(text, pos);
    }
  }
  switch (ch) {
    case 71:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value;
      return true;
    case 77:
      return $subParseMonth(text, pos, cal, value, start);
    case 76:
      return $subParseStandaloneMonth(text, pos, cal, value, start);
    case 69:
      return $subParseDayOfWeek(text, pos, start, cal);
    case 99:
      return $subParseStandaloneDay(text, pos, start, cal);
    case 97:
      value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['AM', 'PM']), pos);
      cal.ampm = value;
      return true;
    case 121:
      return $subParseYear(text, pos, start, value, part, cal);
    case 100:
      if (value <= 0) {
        return false;
      }

      cal.dayOfMonth = value;
      return true;
    case 83:
      if (value < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value, start, pos[0], cal);
    case 104:
      value == 12 && (value = 0);
    case 75:
    case 107:
    case 72:
      if (value < 0) {
        return false;
      }

      cal.hours = value;
      return true;
    case 109:
      if (value < 0) {
        return false;
      }

      cal.minutes = value;
      return true;
    case 115:
      if (value < 0) {
        return false;
      }

      cal.seconds = value;
      return true;
    case 122:
    case 90:
    case 118:
      return $subParseTimeZoneInGMT(text, start, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseFractionalSeconds(value, start, end, cal){
  var a_0, i;
  i = end - start;
  if (i < 3) {
    while (i < 3) {
      value *= 10;
      ++i;
    }
  }
   else {
    a_0 = 1;
    while (i > 3) {
      a_0 *= 10;
      --i;
    }
    value = ~~((value + (~~a_0 >> 1)) / a_0);
  }
  cal.milliseconds = value;
  return true;
}

function $subParseMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text, pos, start, cal){
  var value;
  value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value < 0) {
    return false;
  }
  cal.dayOfWeek = value;
  return true;
}

function $subParseStandaloneMonth(text, pos, cal, value, start){
  if (value < 0) {
    value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value < 0 && (value = $matchString(text, start, initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value < 0) {
      return false;
    }
    cal.month = value;
    return true;
  }
   else if (value > 0) {
    cal.month = value - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text, start, pos, cal){
  if (!(start < 0 || start >= text.length) && text.indexOf('GMT', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  if (!(start < 0 || start >= text.length) && text.indexOf('UTC', start) == start) {
    pos[0] = start + 3;
    return $parseTimeZoneOffset(text, pos, cal);
  }
  return $parseTimeZoneOffset(text, pos, cal);
}

function $subParseYear(text, pos, start, value, part, cal){
  var ambiguousTwoDigitYear, ch, date, defaultCenturyStartYear;
  ch = 32;
  if (value < 0) {
    if (pos[0] >= text.length) {
      return false;
    }
    ch = text.charCodeAt(pos[0]);
    if (ch != 43 && ch != 45) {
      return false;
    }
    ++pos[0];
    value = $parseInt(text, pos);
    if (value < 0) {
      return false;
    }
    ch == 45 && (value = -value);
  }
  if (ch == 32 && pos[0] - start == 2 && part.count == 2) {
    date = new Date_1;
    defaultCenturyStartYear = date.jsdate.getFullYear() - 1900 + 1900 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value == ambiguousTwoDigitYear;
    value += ~~(defaultCenturyStartYear / 100) * 100 + (value < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value;
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    value < b && (buf.impl.string += '0' , buf);
    b *= 10;
  }
  buf.impl.string += value;
}

function DateTimeFormat_0(pattern){
  this.patternParts = new ArrayList_0;
  this.pattern = pattern;
  $parsePattern(this, pattern);
}

function getFormat(pattern, dtfi){
  $clinit_33();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_35() , $clinit_35() , instance));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast(cache.get_0(pattern), 61));
  if (!dtf) {
    dtf = new DateTimeFormat_0(pattern);
    dtfi == defaultDtfi && cache.put(pattern, dtf);
  }
  return dtf;
}

function DateTimeFormat(){
}

_ = DateTimeFormat_0.prototype = DateTimeFormat.prototype = new Object_0;
_.getClass$ = function getClass_145(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit;
}
;
_.castableTypeMap$ = {61:1};
_.pattern = null;
var cache = null;
function DateTimeFormat$PatternPart_0(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

function DateTimeFormat$PatternPart(){
}

_ = DateTimeFormat$PatternPart_0.prototype = DateTimeFormat$PatternPart.prototype = new Object_0;
_.getClass$ = function getClass_146(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit;
}
;
_.castableTypeMap$ = {62:1};
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function DefaultDateTimeFormatInfo(){
}

_ = DefaultDateTimeFormatInfo.prototype = new Object_0;
_.getClass$ = function getClass_147(){
  return Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit;
}
;
_.castableTypeMap$ = {};
function $ensureDateTimeConstants(this$static){
  if (!this$static.dateTimeConstants) {
    !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl_0);
    this$static.dateTimeConstants = new DateTimeConstantsAdapter_0;
  }
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl_0);
  return this$static.dateTimeFormatInfo;
}

function $getISOTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, {30:1}, -1, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[4] = data[4] + ~~(offset % 60 / 10) & 65535;
  data[5] = data[5] + offset % 10 & 65535;
  return String.fromCharCode.apply(null, data);
}

function $getRFCTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, {30:1}, -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] = data[1] + ~~(~~(offset / 60) / 10) & 65535;
  data[2] = data[2] + ~~(offset / 60) % 10 & 65535;
  data[3] = data[3] + ~~(offset % 60 / 10) & 65535;
  data[4] = data[4] + offset % 10 & 65535;
  return String.fromCharCode.apply(null, data);
}

function TimeZone_0(){
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, {30:1}, -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] = data[4] + ~~(~~(offset / 60) / 10) & 65535;
  data[5] = data[5] + ~~(offset / 60) % 10 & 65535;
  data[7] = data[7] + ~~(offset % 60 / 10) & 65535;
  data[8] = data[8] + offset % 10 & 65535;
  return String.fromCharCode.apply(null, data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone_0;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + mins;
}

function TimeZone(){
}

_ = TimeZone_0.prototype = TimeZone.prototype = new Object_0;
_.getClass$ = function getClass_150(){
  return Lcom_google_gwt_i18n_client_TimeZone_2_classLit;
}
;
_.castableTypeMap$ = {};
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function $calcDate(this$static, date, strict){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp, hours, hours_0, hours_1;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > -2147483648 && date.setYear(this$static.year - 1900);
  orgDayOfMonth = date.jsdate.getDate();
  hours = date.jsdate.getHours();
  date.jsdate.setDate(1);
  $fixDaylightSavings(date, hours);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  if (this$static.dayOfMonth >= 0) {
    $setDate(date, this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_2(date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 35);
    daysInCurrentMonth = 35 - tmp.jsdate.getDate();
    hours_0 = date.jsdate.getHours();
    date.jsdate.setDate(daysInCurrentMonth < orgDayOfMonth?daysInCurrentMonth:orgDayOfMonth);
    $fixDaylightSavings(date, hours_0);
  }
   else {
    hours_1 = date.jsdate.getHours();
    date.jsdate.setDate(orgDayOfMonth);
    $fixDaylightSavings(date, hours_1);
  }
  this$static.hours < 0 && (this$static.hours = date.jsdate.getHours());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && $setTime(date, add_0(mul(divMod(fromDouble(date.jsdate.getTime()), P3e8_longLit, false), P3e8_longLit), fromInt(this$static.milliseconds)));
  if (strict) {
    if (this$static.year > -2147483648 && this$static.year - 1900 != date.jsdate.getFullYear() - 1900) {
      return false;
    }
    if (this$static.month >= 0 && this$static.month != date.jsdate.getMonth()) {
      return false;
    }
    if (this$static.dayOfMonth >= 0 && this$static.dayOfMonth != date.jsdate.getDate()) {
      return false;
    }
    if (this$static.hours >= 24) {
      return false;
    }
    if (this$static.minutes >= 60) {
      return false;
    }
    if (this$static.seconds >= 60) {
      return false;
    }
    if (this$static.milliseconds >= 1000) {
      return false;
    }
  }
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_1;
    defaultCenturyStart.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 - 80);
    !gte_0(fromDouble(date.jsdate.getTime()), fromDouble(defaultCenturyStart.jsdate.getTime())) && date.setYear(defaultCenturyStart.jsdate.getFullYear() - 1900 + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.jsdate.getMonth();
      $setDate(date, date.jsdate.getDate() + adjustment);
      date.jsdate.getMonth() != orgMonth && $setDate(date, date.jsdate.getDate() + (adjustment > 0?-7:7));
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > -2147483648) {
    offset = date.jsdate.getTimezoneOffset();
    $setTime(date, add_0(fromDouble(date.jsdate.getTime()), fromInt((this$static.tzOffset - offset) * 60 * 1000)));
  }
  return true;
}

function DateRecord_0(){
  this.jsdate = new Date;
  this.era = -1;
  this.ambiguousYear = false;
  this.year = -2147483648;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = -2147483648;
}

function DateRecord(){
}

_ = DateRecord_0.prototype = DateRecord.prototype = new Date_0;
_.getClass$ = function getClass_152(){
  return Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit;
}
;
_.setHours_0 = function setHours_0(hours){
  this.hours = hours;
}
;
_.setMinutes_0 = function setMinutes_0(minutes){
  this.minutes = minutes;
}
;
_.setMonth_0 = function setMonth_0(month){
  this.month = month;
}
;
_.setSeconds_0 = function setSeconds_0(seconds){
  this.seconds = seconds;
}
;
_.setYear = function setYear_0(value){
  this.year = value;
}
;
_.castableTypeMap$ = {30:1, 32:1, 184:1};
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
function DateTimeFormatInfoImpl_0(){
}

function DateTimeFormatInfoImpl(){
}

_ = DateTimeFormatInfoImpl_0.prototype = DateTimeFormatInfoImpl.prototype = new DefaultDateTimeFormatInfo;
_.getClass$ = function getClass_153(){
  return Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
function $runCallbacks_30(){
  var $e0, e, handler;
  while (callbacksHead_30) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_30 = callbacksHead_30.next;
    !callbacksHead_30 && (callbacksTail_30 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar_2_classLit, new WidgetMapImpl$53$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar_2_classLit, new WidgetMapImpl$53$1_0);
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

function AsyncLoader38_0(){
}

function onLoad_30(){
  instance_31 = new AsyncLoader38_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 38);
  !!$stats && $stats($createStatsEvent('runCallbacks38', 'begin', -1, -1));
  instance_31.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks38', 'end', -1, -1));
}

function AsyncLoader38(){
}

_ = AsyncLoader38_0.prototype = AsyncLoader38.prototype = new Object_0;
_.getClass$ = function getClass_248(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader38_2_classLit;
}
;
_.runCallbacks = function runCallbacks_30(){
  $runCallbacks_30();
}
;
_.castableTypeMap$ = {};
_ = ButtonBase.prototype;
_.setText = function setText(text){
  this.element_0.textContent = text || '';
}
;
_ = CustomButton.prototype;
_.setText = function setText_1(text){
  $setText((!this.curFace && $setCurrentFace(this, this.up) , this.curFace), text);
}
;
function $setText(this$static, text){
  this$static.face = $doc.createElement('div');
  setStyleName(this$static.face, 'html-face', true);
  this$static.face.textContent = text || '';
  !!this$static.this$0.curFace && $getFace(this$static.this$0.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$0, this$static.face);
}

function $formatDate(this$static, date, formatStr){
  var format, result, timeZone;
  formatStr = $formatMonthNames(this$static, date, formatStr);
  format = ($clinit_33() , getFormat(formatStr, $getDateTimeFormatInfo(($clinit_35() , $clinit_35() , instance))));
  result = (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()) , $format(format, date, timeZone));
  return result;
}

function $formatMonthNames(this$static, date, formatStr){
  var monthName;
  if (formatStr.indexOf('MMMM') != -1) {
    monthName = $getMonth(this$static, date.jsdate.getMonth());
    if (monthName != null) {
      formatStr = $replaceAll(formatStr, "'([M]{4,})'", monthName);
      formatStr = $replaceAll(formatStr, "([M]{4,})'", "'" + monthName);
      formatStr = $replaceAll(formatStr, "'([M]{4,})", monthName + "'");
      formatStr = $replaceAll(formatStr, '[M]{4,}', "'" + monthName + "'");
    }
  }
  if (formatStr.indexOf('MMM') != -1) {
    monthName = $getShortMonth(this$static, date.jsdate.getMonth());
    if (monthName != null) {
      formatStr = $replaceAll(formatStr, "'([M]{3,})'", monthName);
      formatStr = $replaceAll(formatStr, "([M]{3,})'", "'" + monthName);
      formatStr = $replaceAll(formatStr, "'([M]{3,})", monthName + "'");
      formatStr = $replaceAll(formatStr, '[M]{3,}', "'" + monthName + "'");
    }
  }
  return formatStr;
}

function $getShortMonth(this$static, month){
  var $e0, e;
  try {
    return getShortMonthNames(this$static.currentLocale)[month];
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return null;
    }
     else 
      throw $e0;
  }
}

function $parseDate(this$static, dateString, formatString, lenient){
  var date, format;
  format = ($clinit_33() , getFormat(formatString, $getDateTimeFormatInfo(($clinit_35() , $clinit_35() , instance))));
  dateString = $parseMonthName(this$static, dateString, formatString);
  lenient?(date = $parse(format, dateString, false)):(date = $parse(format, dateString, true));
  if (!!date && eq(fromDouble(date.jsdate.getTime()), P0_longLit)) {
    throw new IllegalArgumentException_1("Parsing of '" + dateString + "' failed");
  }
  return date;
}

function $parseMonthName(this$static, enteredDate, formatString){
  var browserLocale, browserMonthNames, browserShortMonthNames, i;
  browserLocale = ($clinit_35() , $clinit_35() , instance);
  if ($equals_2('default', this$static.currentLocale)) {
    return enteredDate;
  }
  browserMonthNames = ($ensureDateTimeConstants(browserLocale) , initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
  browserShortMonthNames = ($ensureDateTimeConstants(browserLocale) , initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  if (formatString.indexOf('MMMM') != -1) {
    for (i = 0; i < 12; ++i) {
      enteredDate = $replaceAll(enteredDate, $getMonth(this$static, i), browserMonthNames[i]);
    }
  }
  if (formatString.indexOf('MMM') != -1) {
    for (i = 0; i < 12; ++i) {
      enteredDate = $replaceAll(enteredDate, $getShortMonth(this$static, i), browserShortMonthNames[i]);
    }
  }
  return enteredDate;
}

function getDateFormat(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return l_0['df'];
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function getShortMonthNames(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return $getStringArray(l_0, 'smn');
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

_ = NullConsole.prototype;
_.log_1 = function log_0(e){
  e.getMessage();
}
;
function $log_0(this$static, e){
  var t, t$iterator, ue;
  if (e != null && e.castableTypeMap$ && !!e.castableTypeMap$[136]) {
    ue = dynamicCast(e, 136);
    for (t$iterator = ue.causes.iterator_0(); t$iterator.hasNext();) {
      t = dynamicCast(t$iterator.next_0(), 37);
      $log_0(this$static, t);
    }
    return;
  }
  $log(this$static, getSimpleName(e) + ': ' + e.getMessage());
  e.getMessage();
}

_ = VDebugConsole.prototype;
_.log_1 = function log_2(e){
  $log_0(this, e);
}
;
function WidgetMapImpl$53$1_0(){
}

function WidgetMapImpl$53$1(){
}

_ = WidgetMapImpl$53$1_0.prototype = WidgetMapImpl$53$1.prototype = new Object_0;
_.get = function get_48(){
  return new VPopupCalendar_0;
}
;
_.getClass$ = function getClass_546(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$53$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
_ = VNativeButton.prototype;
_.setText = function setText_5(text){
  this.captionElement.textContent = text || '';
}
;
function $buildDate(this$static){
  var currentDate, dateText;
  setStyleName(this$static.element_0, 'v-datefield-parseerror', false);
  currentDate = $getDate(this$static);
  currentDate?(dateText = $formatDate(this$static.dts, currentDate, $getFormatString(this$static))):(dateText = '');
  $setText_2(this$static, dateText);
  this$static.text_0.element_0['disabled'] = !this$static.enabled;
  $setReadOnly(this$static.text_0, this$static.readonly);
  this$static.readonly?(setStyleName(this$static.text_0.getStyleElement(), 'v-readonly', true) , undefined):(setStyleName(this$static.text_0.getStyleElement(), 'v-readonly', false) , undefined);
}

function $cleanFormat(this$static, format){
  this$static.currentResolution < 4 && (format = $replaceAll(format, 'd', ''));
  this$static.currentResolution < 2 && (format = $replaceAll(format, 'M', ''));
  format = $replaceAll(format, '[GzZwWkK]', '');
  while (format.indexOf('/') == 0 || format.indexOf('.') == 0 || format.indexOf('-') == 0) {
    format = format.substr(1, format.length - 1);
  }
  while (format.lastIndexOf('/') != -1 && format.lastIndexOf('/') == format.length - '/'.length || format.lastIndexOf('.') != -1 && format.lastIndexOf('.') == format.length - '.'.length || format.lastIndexOf('-') != -1 && format.lastIndexOf('-') == format.length - '-'.length) {
    format = format.substr(0, format.length - 1 - 0);
  }
  format = $replaceAll(format, '//', '/');
  format = $replaceAll(format, '\\.\\.', '.');
  format = $replaceAll(format, '--', '-');
  return $trim(format);
}

function $getFieldExtraWidth(this$static){
  if (this$static.fieldExtraWidth < 0) {
    this$static.text_0.element_0.style['width'] = '0';
    this$static.fieldExtraWidth = parseInt(this$static.text_0.element_0['offsetWidth']) || 0;
    $isFF3(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this$static.fieldExtraWidth -= 2);
  }
  return this$static.fieldExtraWidth;
}

function $getFormatString(this$static){
  var $e0, e, frmString;
  if (this$static.formatStr == null) {
    if (this$static.currentResolution == 1) {
      this$static.formatStr = 'yyyy';
    }
     else {
      try {
        frmString = getDateFormat(this$static.currentLocale);
        frmString = $cleanFormat(this$static, frmString);
        if (this$static.currentResolution >= 8) {
          $isTwelveHourClock(this$static.dts)?(frmString += ' hh'):(frmString += ' HH');
          if (this$static.currentResolution >= 16) {
            frmString += ':mm';
            if (this$static.currentResolution >= 32) {
              frmString += ':ss';
              this$static.currentResolution >= 64 && (frmString += '.SSS');
            }
          }
          $isTwelveHourClock(this$static.dts) && (frmString += ' aaa');
        }
        this$static.formatStr = frmString;
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 130)) {
          e = $e0;
          impl_2.error_0(e);
        }
         else 
          throw $e0;
      }
    }
  }
  return this$static.formatStr;
}

function $getSubPartElement(this$static, subPart){
  if ($equals_2(subPart, 'field')) {
    return this$static.text_0.element_0;
  }
  return null;
}

function $getSubPartName(this$static, subElement){
  if ($isOrHasChild(this$static.text_0.element_0, subElement)) {
    return 'field';
  }
  return null;
}

function $getText(this$static){
  if (this$static.prompting) {
    return '';
  }
  return $getPropertyString(this$static.text_0.element_0, 'value');
}

function $iLayout_1(this$static, force){
  var textFieldWidth;
  if (this$static.needLayout || force) {
    textFieldWidth = (parseInt(this$static.element_0['offsetWidth']) || 0) - this$static.getFieldExtraWidth();
    textFieldWidth < 0 && (textFieldWidth = 0);
    this$static.text_0.element_0.style['width'] = textFieldWidth + 'px';
  }
}

function $setPrompting(this$static, prompting){
  this$static.prompting = prompting;
  prompting?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', true):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', false);
}

function $setText_2(this$static, text){
  if (this$static.inputPrompt != null && (text == null || $equals_2('', text))) {
    text = this$static.readonly?'':this$static.inputPrompt;
    this$static.prompting = true;
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', true);
  }
   else {
    this$static.prompting = false;
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', false);
  }
  $setText_0(this$static.text_0, text);
}

function $updateFromUIDL_17(this$static, uidl, client){
  var oldLocale, origRes;
  origRes = this$static.currentResolution;
  oldLocale = this$static.currentLocale;
  $updateFromUIDL_12(this$static, uidl, client);
  (origRes != this$static.currentResolution || oldLocale != this$static.currentLocale) && (this$static.formatStr = null);
  'format' in uidl[1] && (this$static.formatStr = uidl[1]['format']);
  this$static.inputPrompt = uidl[1]['prompt'];
  this$static.lenient = !Boolean(uidl[1]['strict']);
  this$static.buildDate();
  'tabindex' in uidl[1] && (this$static.text_0.element_0.tabIndex = uidl[1]['tabindex'] , undefined);
  this$static.readonly?$addStyleDependentName(this$static.text_0, 'readonly'):$removeStyleDependentName(this$static.text_0, 'readonly');
}

function $updateWidth(this$static){
  if (this$static.width_0 == null || $equals_2('', this$static.width_0)) {
    return;
  }
  this$static.needLayout = true;
  this$static.fieldExtraWidth = -1;
  $iLayout_1(this$static, true);
}

function VTextualDate(){
}

_ = VTextualDate.prototype = new VDateField;
_.buildDate = function buildDate(){
  $buildDate(this);
}
;
_.focus_0 = function focus_15(){
  $setFocus(this.text_0, true);
}
;
_.getClass$ = function getClass_674(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTextualDate_2_classLit;
}
;
_.getFieldExtraWidth = function getFieldExtraWidth(){
  return $getFieldExtraWidth(this);
}
;
_.getSubPartElement = function getSubPartElement_3(subPart){
  return $getSubPartElement(this, subPart);
}
;
_.getSubPartName = function getSubPartName_3(subElement){
  return $getSubPartName(this, subElement);
}
;
_.iLayout = function iLayout_2(){
  $iLayout_1(this, false);
}
;
_.onChange = function onChange_4(event_0){
  var $e0, currentDate, e, enteredDate;
  if ($equals_2($getPropertyString(this.text_0.element_0, 'value'), '')) {
    this.date = null;
    setStyleName(this.element_0, 'v-datefield-parseerror', false);
  }
   else {
    try {
      enteredDate = $getPropertyString(this.text_0.element_0, 'value');
      this.date = $parseDate(this.dts, enteredDate, $getFormatString(this), this.lenient);
      this.lenient && $setValue_0(this.text_0, $formatDate(this.dts, $getDate(this), $getFormatString(this)));
      setStyleName(this.element_0, 'v-datefield-parseerror', false);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 112)) {
        e = $e0;
        impl_2.log_1(e);
        setStyleName(this.element_0, 'v-datefield-parseerror', true);
        $addVariableToQueue(this.client, this.id_0, 'lastInvalidDateString', $escapeVariableValue($getPropertyString(this.text_0.element_0, 'value')), false, 115);
        this.date = null;
      }
       else 
        throw $e0;
    }
  }
  $addVariableToQueue(this.client, this.id_0, 'dateString', $escapeVariableValue($getPropertyString(this.text_0.element_0, 'value')), false, 115);
  currentDate = $getDate(this);
  $addVariableToQueue(this.client, this.id_0, 'year', '' + (currentDate?currentDate.jsdate.getFullYear() - 1900 + 1900:-1), this.currentResolution == 1 && this.immediate, 105);
  this.currentResolution >= 2 && $addVariableToQueue(this.client, this.id_0, 'month', '' + (currentDate?currentDate.jsdate.getMonth() + 1:-1), this.currentResolution == 2 && this.immediate, 105);
  this.currentResolution >= 4 && $addVariableToQueue(this.client, this.id_0, 'day', '' + (currentDate?currentDate.jsdate.getDate():-1), this.currentResolution == 4 && this.immediate, 105);
  this.currentResolution >= 8 && $addVariableToQueue(this.client, this.id_0, 'hour', '' + (currentDate?currentDate.jsdate.getHours():-1), this.currentResolution == 8 && this.immediate, 105);
  this.currentResolution >= 16 && $addVariableToQueue(this.client, this.id_0, 'min', '' + (currentDate?currentDate.jsdate.getMinutes():-1), this.currentResolution == 16 && this.immediate, 105);
  this.currentResolution >= 32 && $addVariableToQueue(this.client, this.id_0, 'sec', '' + (currentDate?currentDate.jsdate.getSeconds():-1), this.currentResolution == 32 && this.immediate, 105);
  this.currentResolution == 64 && $addVariableToQueue(this.client, this.id_0, 'msec', '' + (currentDate?getMilliseconds(this.date):-1), this.immediate, 105);
}
;
_.setWidth = function setWidth_29(newWidth){
  if (!$equals_2('', newWidth) && (this.width_0 == null || $equals_2('', this.width_0) || !$equals_2(newWidth, this.width_0))) {
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this.text_0.element_0['size'] = '1' , undefined);
    this.needLayout = true;
    this.width_0 = newWidth;
    this.element_0.style['width'] = this.width_0;
    $iLayout_1(this, false);
    newWidth.indexOf('%') < 0 && (this.needLayout = false);
  }
   else {
    if ($equals_2('', newWidth) && !(this.width_0 == null || $equals_2('', this.width_0))) {
      $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (this.text_0.element_0['size'] = '' , undefined);
      this.element_0.style['width'] = '';
      $iLayout_1(this, true);
      this.width_0 = null;
    }
  }
}
;
_.updateFromUIDL = function updateFromUIDL_40(uidl, client){
  $updateFromUIDL_17(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 26:1, 33:1, 38:1, 69:1, 70:1, 75:1, 115:1, 124:1, 126:1, 128:1};
_.fieldExtraWidth = -1;
_.formatStr = null;
_.inputPrompt = '';
_.lenient = false;
_.needLayout = false;
_.prompting = false;
_.text_0 = null;
_.width_0 = null;
function $buildDate_0(this$static){
  var previousValue;
  previousValue = $getText(this$static);
  $buildDate(this$static);
  this$static.parsable || $setText_2(this$static, previousValue);
}

function $buildDate_1(this$static){
  this$static.parsable = true;
  $buildDate_0(this$static);
}

function $closeCalendarPanel(this$static){
  this$static.open_0 && this$static.popup.hide_0(true);
}

function $openCalendarPanel(this$static){
  if (!this$static.open_0 && !this$static.readonly) {
    this$static.open_0 = true;
    this$static.date?$setDate_0(this$static.calendar, new Date_3(fromDouble(this$static.date.jsdate.getTime()))):$setDate_0(this$static.calendar, new Date_1);
    this$static.popup.setWidth('');
    this$static.popup.setHeight('');
    $setPopupPositionAndShow(this$static.popup, new VPopupCalendar$5_0(this$static));
  }
   else {
    impl_2.error_1('Cannot reopen popup, it is already open!');
  }
}

function $updateValue(this$static, newDate){
  var currentDate;
  currentDate = this$static.date;
  if (!currentDate || neq(fromDouble(newDate.jsdate.getTime()), fromDouble(currentDate.jsdate.getTime()))) {
    this$static.date = new Date_3(fromDouble(newDate.jsdate.getTime()));
    $addVariableToQueue(this$static.client, this$static.id_0, 'year', '' + (newDate.jsdate.getFullYear() - 1900 + 1900), false, 105);
    if (this$static.currentResolution > 1) {
      $addVariableToQueue(this$static.client, this$static.id_0, 'month', '' + (newDate.jsdate.getMonth() + 1), false, 105);
      if (this$static.currentResolution > 2) {
        $addVariableToQueue(this$static.client, this$static.id_0, 'day', '' + newDate.jsdate.getDate(), false, 105);
        if (this$static.currentResolution > 4) {
          $addVariableToQueue(this$static.client, this$static.id_0, 'hour', '' + newDate.jsdate.getHours(), false, 105);
          if (this$static.currentResolution > 8) {
            $addVariableToQueue(this$static.client, this$static.id_0, 'min', '' + newDate.jsdate.getMinutes(), false, 105);
            if (this$static.currentResolution > 16) {
              $addVariableToQueue(this$static.client, this$static.id_0, 'sec', '' + newDate.jsdate.getSeconds(), false, 105);
              this$static.currentResolution == 64 && $addVariableToQueue(this$static.client, this$static.id_0, 'msec', '' + getMilliseconds(newDate), false, 105);
            }
          }
        }
      }
    }
    this$static.immediate && $sendPendingVariableChanges(this$static.client);
  }
}

function VPopupCalendar_0(){
  VDateField_0.call(this);
  this.text_0 = new TextBox_0;
  this.text_0.getStyleElement()['className'] = 'v-textfield';
  setStyleName(this.text_0.getStyleElement(), 'v-datefield-textfield', true);
  $addDomHandler(this.text_0, this, ($clinit_14() , $clinit_14() , TYPE_0));
  $addDomHandler(this.text_0, new VTextualDate$1_0(this), ($clinit_18() , $clinit_18() , TYPE_4));
  $addDomHandler(this.text_0, new VTextualDate$2_0(this), ($clinit_13() , $clinit_13() , TYPE));
  $add_0(this, this.text_0, this.element_0);
  this.calendarToggle = new Button_0;
  this.calendarToggle.getStyleElement()['className'] = 'v-datefield-button';
  this.calendarToggle.setText('');
  $addDomHandler(this.calendarToggle, this, ($clinit_15() , $clinit_15() , TYPE_1));
  this.calendarToggle.element_0.tabIndex = -2;
  $add_0(this, this.calendarToggle, this.element_0);
  this.calendar = new VCalendarPanel_0;
  this.calendar.focusOutListener = new VPopupCalendar$1_0(this);
  this.calendar.submitListener = new VPopupCalendar$2_0(this);
  this.popup = new VOverlay_1(true, true);
  this.popup.setStyleName('v-datefield-popup');
  $setWidget_0(this.popup, this.calendar);
  $addHandler(this.popup, this, TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
  this.calendar.element_0['id'] = 'PID_VAADIN_POPUPCAL';
  this.eventsToSink == -1?sinkEvents(this.element_0, 128 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 128);
}

function VPopupCalendar(){
}

_ = VPopupCalendar_0.prototype = VPopupCalendar.prototype = new VTextualDate;
_.buildDate = function buildDate_0(){
  $buildDate_0(this);
}
;
_.getClass$ = function getClass_675(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar_2_classLit;
}
;
_.getFieldExtraWidth = function getFieldExtraWidth_0(){
  if (this.fieldExtraWidth < 0) {
    this.fieldExtraWidth = $getFieldExtraWidth(this);
    this.fieldExtraWidth += parseInt(this.calendarToggle.element_0['offsetWidth']) || 0;
  }
  return this.fieldExtraWidth;
}
;
_.getSubPartElement = function getSubPartElement_4(subPart){
  if ($equals_2(subPart, 'popupButton')) {
    return this.calendarToggle.element_0;
  }
  return $getSubPartElement(this, subPart);
}
;
_.getSubPartName = function getSubPartName_4(subElement){
  if ($isOrHasChild(this.calendarToggle.element_0, subElement)) {
    return 'popupButton';
  }
  return $getSubPartName(this, subElement);
}
;
_.onBrowserEvent = function onBrowserEvent_34(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
  if ($eventGetTypeInt(event_0.type) == 128 && (event_0.keyCode || 0) == 40) {
    $openCalendarPanel(this);
    event_0.preventDefault();
  }
}
;
_.onClick = function onClick_24(event_0){
  maskUndefined(event_0.source) === maskUndefined(this.calendarToggle) && this.enabled && $openCalendarPanel(this);
}
;
_.onClose = function onClose_5(event_0){
  var t;
  if (maskUndefined(event_0.source) === maskUndefined(this.popup)) {
    $buildDate_0(this);
    ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).touchDevice || $setFocus(this.text_0, true);
    t = new VPopupCalendar$6_0(this);
    $schedule(t, 100);
  }
}
;
_.setStyleName = function setStyleName_7(style){
  this.element_0['className'] = style + ' v-datefield-popupcalendar';
}
;
_.updateFromUIDL = function updateFromUIDL_41(uidl, client){
  var lastEnabledState, lastReadOnlyState, popupStyleNames;
  lastReadOnlyState = this.readonly;
  lastEnabledState = this.enabled;
  this.parsable = Boolean(uidl[1]['parsable']);
  $updateFromUIDL_17(this, uidl, client);
  popupStyleNames = getStyleName('v-datefield-popup', uidl, false);
  popupStyleNames += ' v-datefield-' + resolutionToString(this.currentResolution);
  this.popup.setStyleName(popupStyleNames);
  this.calendar.dateTimeService = this.dts;
  this.calendar.showISOWeekNumbers = this.showISOWeekNumbers;
  if (this.calendar.resolution != this.currentResolution) {
    $setResolution(this.calendar, this.currentResolution);
    if (this.calendar.value_0) {
      $setDate_0(this.calendar, new Date_3(fromDouble(this.date.jsdate.getTime())));
      $renderCalendar(this.calendar);
    }
  }
  this.calendarToggle.setEnabled(this.enabled);
  this.currentResolution <= 2?(this.calendar.focusChangeListener = new VPopupCalendar$3_0(this) , undefined):(this.calendar.focusChangeListener = null , undefined);
  this.currentResolution > 4 && (this.calendar.timeChangeListener = new VPopupCalendar$4_0(this) , undefined);
  this.readonly?(setStyleName(this.calendarToggle.getStyleElement(), 'v-datefield-button-readonly', true) , undefined):(setStyleName(this.calendarToggle.getStyleElement(), 'v-datefield-button-readonly', false) , undefined);
  (lastReadOnlyState != this.readonly || lastEnabledState != this.enabled) && $updateWidth(this);
  this.calendarToggle.setEnabled(true);
}
;
_.castableTypeMap$ = {9:1, 10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 26:1, 33:1, 38:1, 39:1, 69:1, 70:1, 75:1, 115:1, 124:1, 126:1, 128:1};
_.calendar = null;
_.calendarToggle = null;
_.open_0 = false;
_.parsable = true;
_.popup = null;
function VPopupCalendar$1_0(this$0){
  this.this$0 = this$0;
}

function VPopupCalendar$1(){
}

_ = VPopupCalendar$1_0.prototype = VPopupCalendar$1.prototype = new Object_0;
_.getClass$ = function getClass_676(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$1_2_classLit;
}
;
_.onFocusOut = function onFocusOut_0(event_0){
  event_0.nativeEvent.preventDefault();
  $closeCalendarPanel(this.this$0);
  return true;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VPopupCalendar$2_0(this$0){
  this.this$0 = this$0;
}

function VPopupCalendar$2(){
}

_ = VPopupCalendar$2_0.prototype = VPopupCalendar$2.prototype = new Object_0;
_.getClass$ = function getClass_677(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$2_2_classLit;
}
;
_.onCancel = function onCancel_2(){
  $closeCalendarPanel(this.this$0);
}
;
_.onSubmit = function onSubmit_0(){
  $updateValue(this.this$0, this.this$0.calendar.value_0);
  $buildDate_1(this.this$0);
  $closeCalendarPanel(this.this$0);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VPopupCalendar$3_0(this$0){
  this.this$0 = this$0;
}

function VPopupCalendar$3(){
}

_ = VPopupCalendar$3_0.prototype = VPopupCalendar$3.prototype = new Object_0;
_.focusChanged = function focusChanged_0(date){
  var date2;
  $updateValue(this.this$0, date);
  $buildDate_0(this.this$0);
  date2 = this.this$0.calendar.value_0;
  date2.setYear(date.jsdate.getFullYear() - 1900);
  date2.setMonth_0(date.jsdate.getMonth());
}
;
_.getClass$ = function getClass_678(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$3_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VPopupCalendar$4_0(this$0){
  this.this$0 = this$0;
}

function VPopupCalendar$4(){
}

_ = VPopupCalendar$4_0.prototype = VPopupCalendar$4.prototype = new Object_0;
_.changed = function changed_1(hour, min, sec, msec){
  var d;
  d = $getDate(this.this$0);
  !d && (d = new Date_3(fromDouble(this.this$0.calendar.value_0.jsdate.getTime())));
  d.setHours_0(hour);
  d.setMinutes_0(min);
  d.setSeconds_0(sec);
  $clinit_65();
  $setTime(d, add_0(mul(divMod(fromDouble(d.jsdate.getTime()), P3e8_longLit, false), P3e8_longLit), fromInt(msec)));
  $updateValue(this.this$0, d);
  $buildDate_0(this.this$0);
}
;
_.getClass$ = function getClass_679(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$4_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VPopupCalendar$5_0(this$0){
  this.this$0 = this$0;
}

function VPopupCalendar$5(){
}

_ = VPopupCalendar$5_0.prototype = VPopupCalendar$5.prototype = new Object_0;
_.getClass$ = function getClass_680(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$5_2_classLit;
}
;
_.setPosition = function setPosition_3(offsetWidth, offsetHeight){
  var browserWindowHeight, browserWindowWidth, focusTimer, l_0, overflowRight, t;
  browserWindowWidth = $getClientWidth($doc) + $getScrollLeft($doc.body);
  browserWindowHeight = $getClientHeight($doc) + ($doc.body.scrollTop || 0);
  t = $getAbsoluteTop(this.this$0.calendarToggle.element_0) | 0;
  l_0 = $getAbsoluteLeft(this.this$0.calendarToggle.element_0) | 0;
  overflowRight = false;
  if (l_0 + offsetWidth + 30 > browserWindowWidth) {
    overflowRight = true;
    l_0 = browserWindowWidth - offsetWidth - 30;
  }
  if (t + offsetHeight + (parseInt(this.this$0.calendarToggle.element_0['offsetHeight']) || 0) + 30 > browserWindowHeight) {
    t = browserWindowHeight - offsetHeight - (parseInt(this.this$0.calendarToggle.element_0['offsetHeight']) || 0) - 30;
    overflowRight || (l_0 += parseInt(this.this$0.calendarToggle.element_0['offsetWidth']) || 0);
  }
  this.this$0.popup.setWidth(offsetWidth + 'px');
  this.this$0.popup.setHeight(offsetHeight + 'px');
  this.this$0.popup.setPopupPosition(l_0, t + (parseInt(this.this$0.calendarToggle.element_0['offsetHeight']) || 0) + 2);
  focusTimer = new VPopupCalendar$5$1_0(this);
  $schedule(focusTimer, 100);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VPopupCalendar$5$1_0(this$1){
  $clinit();
  this.this$1 = this$1;
}

function VPopupCalendar$5$1(){
}

_ = VPopupCalendar$5$1_0.prototype = VPopupCalendar$5$1.prototype = new Timer;
_.getClass$ = function getClass_681(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$5$1_2_classLit;
}
;
_.run = function run_28(){
  $clinit_53();
  $focus(this.this$1.this$0.calendar.element_0);
}
;
_.castableTypeMap$ = {65:1};
_.this$1 = null;
function VPopupCalendar$6_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VPopupCalendar$6(){
}

_ = VPopupCalendar$6_0.prototype = VPopupCalendar$6.prototype = new Timer;
_.getClass$ = function getClass_682(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$6_2_classLit;
}
;
_.run = function run_29(){
  this.this$0.open_0 = false;
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function VTextualDate$1_0(this$0){
  this.this$0 = this$0;
}

function VTextualDate$1(){
}

_ = VTextualDate$1_0.prototype = VTextualDate$1.prototype = new Object_0;
_.getClass$ = function getClass_760(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTextualDate$1_2_classLit;
}
;
_.onFocus = function onFocus_10(event_0){
  setStyleName(this.this$0.text_0.getStyleElement(), 'v-textfield-focus', true);
  if (this.this$0.prompting) {
    this.this$0.text_0.element_0['value'] = '';
    $setPrompting(this.this$0, false);
  }
  !!this.this$0.client && $hasEventListeners_0(this.this$0.client.idToPaintableDetail[dynamicCast(this.this$0, 70).element_0.tkPid], 'focus') && ($addVariableToQueue(this.this$0.client, this.this$0.id_0, 'focus', $escapeVariableValue(''), true, 115) , undefined);
}
;
_.castableTypeMap$ = {6:1, 12:1};
_.this$0 = null;
function VTextualDate$2_0(this$0){
  this.this$0 = this$0;
}

function VTextualDate$2(){
}

_ = VTextualDate$2_0.prototype = VTextualDate$2.prototype = new Object_0;
_.getClass$ = function getClass_761(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTextualDate$2_2_classLit;
}
;
_.onBlur = function onBlur_10(event_0){
  var value;
  setStyleName(this.this$0.text_0.getStyleElement(), 'v-textfield-focus', false);
  value = $getText(this.this$0);
  $setPrompting(this.this$0, this.this$0.inputPrompt != null && (value == null || $equals_2('', value)));
  this.this$0.prompting && $setText_0(this.this$0.text_0, this.this$0.readonly?'':this.this$0.inputPrompt);
  !!this.this$0.client && $hasEventListeners_0(this.this$0.client.idToPaintableDetail[dynamicCast(this.this$0, 70).element_0.tkPid], 'blur') && ($addVariableToQueue(this.this$0.client, this.this$0.id_0, 'blur', $escapeVariableValue(''), true, 115) , undefined);
}
;
_.castableTypeMap$ = {5:1, 12:1};
_.this$0 = null;
function $startsWith(this$static, prefix, toffset){
  return !(toffset < 0 || toffset >= this$static.length) && this$static.indexOf(prefix, toffset) == toffset;
}

function $append(this$static, x){
  this$static.impl.string += String.fromCharCode.apply(null, x);
  return this$static;
}

function StringBuffer_1(){
  this.impl = new StringBufferImplAppend_0;
}

_ = StringBuffer_1.prototype = StringBuffer.prototype;
var Lcom_google_gwt_i18n_client_DateTimeConstantsAdapter_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeConstantsAdapter'), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat'), Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat$PatternPart'), Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DefaultDateTimeFormatInfo'), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone'), Lcom_google_gwt_i18n_client_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'DateRecord'), Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr.', 'DateTimeFormatInfoImpl'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader38_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader38'), Lcom_vaadin_terminal_gwt_client_ui_VTextualDate_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTextualDate'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$53$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$53$1'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$1'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$2'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$3'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$4'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$5_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$5'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$5$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$5$1'), Lcom_vaadin_terminal_gwt_client_ui_VPopupCalendar$6_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VPopupCalendar$6'), Lcom_vaadin_terminal_gwt_client_ui_VTextualDate$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTextualDate$1'), Lcom_vaadin_terminal_gwt_client_ui_VTextualDate$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTextualDate$2');
$entry(onLoad_30)();
