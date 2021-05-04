/* eslint-disable */

export const isUndefined = (value) => {
  return value === undefined || value === 'undefined'
}

export const isNull = value => {
  return ((value == null) || (value === '') || (value === 'null') || isUndefined(value))
}

export const isNotNull = value => {
  return !isNull(value)
}

export const isValidateEmail = emailValue => {
  let mailRegex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
  if( !mailRegex.test(emailValue)){
    return "Please provide a valid Email."
  }
}

export const checkURL = urlValue => {
  let urlRegex = new RegExp(/^([\w\-\.]+\:\/\/)([\w\-\.]+\@)?(([A-Za-z0-9]+((\-|\.)[A-Za-z0-9]+)+)|([a-fA-F0-9]{4}\:){5}[a-fA-F0-9]{4})(\:\d{1,5})?([\?\/\#][\w\"\'\-\_\=\%\~\!\*\(\)\[\]\<\>\{\}\.\,\$\&\@\+\:\^\`\|]*)*$/)
  if (urlRegex.test(urlValue)) {
    return true
  }
  return false
}

export const checkHost = hostValue => {
  let hostRegex = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+(([A-Za-z]|[A-Za-z][A-Za-z0-9-])+([A-Za-z0-9]))$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/)
  if (hostRegex.test(hostValue)) {
    return true
  }
  return false
}

export const Trim = string => {
  string = LTrim(string)
  return RTrim(string)
}

export const LTrim = string => {
  while (string.charAt(0) === ' ') {
    string = string.replace(string.charAt(0), '')
  }
  return string
}

export const RTrim = string => {
  while (string.charAt((string.length - 1)) === ' ') {
    string = string.substring(0, string.length - 1)
  }
  return string
}

export const checkDomain = dName => {
  let reg = /^[A-Za-z0-9.-]+$/
  if (reg.test(dName) === false) {
    return false
  }

  let domainArray = dName.split('.')
  if (domainArray.length < 2) {
    return false
  } else {
    for (let i = 0; i < domainArray.length; i++) {
      let sName = domainArray[i]
      if (reg.test(sName) === false || sName.charAt(0) === '-' || sName.slice(-1) === '-') {
        return false
      }
    }
  }
  return true
}

export const isValidLetterOrNumber = value => {
  return ((value.match(/[a-z]/)) || (value.match(/[A-Z]/)) || (value.match(/[0-9]/)))
}

export const isValidUserId = value => {
  let reg = /^([A-Za-z0-9_\-\.])+$/
  return reg.test(value)
}

export const isValidClaasUserId = value => {
  let reg = /^([A-Za-z0-9_\-\.\@])+$/
  return reg.test(value)
}

/**
 * The password must contain uppercase, lowercase and numbers,
 * and It can contain special characters
 * @param value
 * @returns boolean
 *
 */
export const subscriberPasswordRule = value => {
  if (value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$_\-!#%*?&])?[A-Za-z\d(@$!#_\-%*?&)?]{8,20}$/)) {
    return true
  }
  return false
}

//No 4 consecutive Numbers (forward or backwards), ex 1234, 1111, 4321
export const subscriberPinRules = pin => {
  if (/0123|1234|2345|3456|4567|5678|6789|7890/.test(pin)
    || /0987|9876|8765|7654|6543|5432|4321|3210/.test(pin)) {
    return true
  }
  return false
}


//No 6 consecutive Numbers (forward or backwards), ex 123456, 111111, 654321
//Etisalat customization
export const subscriberPinRulesForSixDigits = pin => {
  if (/012345|123456|234567|345678|456789|567890|678901|789012/.test(pin)
    || /098765|987654|876543|765432|654321|543210|432109|321098/.test(pin)) {
    return true
  }
  return false

}

export const isNumber = value => {
  let NumExp = /^[0-9]+$/
  if (value.match(NumExp)) {
    return true
  }
  return false

}

/**
 * Check the given value has acceptable characters.
 * The destination should contain only numbers and letters.
 * The destination is not acceptable if its all digits ZERO(000000000).
 *
 * @param string value
 *
 * @return bool
 */
export const isDestinationFormatValid = value => {
  return value.match(/^(?!0+$)([\d]*[A-Za-z0-9]+[\d]*)$/)
}

export const isNumeric = value => {
  let pattern = new RegExp('^[0-9]+$')
  return pattern.test(value)
}

export const isValidatePassword = password => {
  let patternUpperCase = new RegExp('[A-Z]')
  let patternLowerCase = new RegExp('[a-z]')
  let patternNonLetter = new RegExp('[^A-Za-z]')
  if (isNull(password) || password.length < 8 || !password.match(patternUpperCase) || !password.match(patternLowerCase) || !password.match(patternNonLetter)) {
    return false
  }
  return true
}

export const isValidatePortalpassword = password => {
  let patternUpperCase = new RegExp('[A-Z]')
  let patternLowerCase = new RegExp('[a-z]')
  let patternNumber = new RegExp('[0-9]')
  let patternSpecial = new RegExp(/[\!\@\#\$\%\^\&\?\_\~\-\*]/)
  let patternNotAllow = new RegExp(/[^\!\@\#\$\%\^\&\?\_\~\-\*A-Za-z0-9]/)

  let accept_number = 0
  if (password.match(patternUpperCase)) {
    accept_number++
  }
  if (password.match(patternLowerCase)) {
    accept_number++
  }
  if (password.match(patternNumber)) {
    accept_number++
  }
  if (password.match(patternSpecial)) {
    accept_number++
  }

  if (isNull(password) || password.length < 8 || accept_number < 3 || password.match(patternNotAllow)) {
    return false
  }
  return true
}

export const validateIpv4Address = ipaddress => {
  if (/^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(ipaddress)) {
    return true
  }
  return "This is not a valid IP Address."
}

export const validateHostName = domainName => {
  if (/^((http|https|ftp):\/\/)?((([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-])*[a-zA-Z0-9])*\.)+(([A-Za-z]|[A-Za-z][A-Za-z0-9-])+([A-Za-z0-9]))$/.test(domainName)) {
    return true
  }
  return false
}

export const validateURL = domainName => {
  if (/^((http|https):\/\/)?((([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-])*[a-zA-Z0-9])*\.)+(([A-Za-z]|[A-Za-z][A-Za-z0-9-])+([A-Za-z0-9]))$/.test(domainName)) {
    return true
  }
  return false
}

export const isValidPort = port => {
  if (isNotNull(port) && isNumber(port) && port > 0 && port <= 65535) {
    return true
  }
  return false
}

export const isValidPath = path => {
  if (/^(\/[^\/]+)+\/{0,1}$/.test(path)) {
    return true
  }
  return false
}

export const validateEmail = (email) => {
  let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

export const validateListEmail = (arrayEmail) => {
  let emails = arrayEmail.split(',')
  let invalidEmails = []
  for (let i = 0; i < emails.length; i++) {
    if (!validateEmail(emails[i].trim())) {
      invalidEmails.push(emails[i].trim())
    }
  }
  return invalidEmails
}

export const isValidateVmAlphaNumericPin = (pin) => {
  let patternUpperCase = new RegExp('[A-Z]')
  let patternLowerCase = new RegExp('[a-z]')
  let patternNonLetter = new RegExp('[^A-Za-z]')
  let patternNonNumeric = new RegExp('[0-9]')
  let patternNonSpecialCharacters = new RegExp('[\-|`|\~|!|@|#|$|%|\^|\&|\*|(|)|_|+|=|;|:|"|\'|<|,|>|.|?|/|\||{|}|\[|\]|\\]')
  let pattern_space = new RegExp('[ ]')
  if (isNull(pin) || !pin.match(patternUpperCase) || !pin.match(patternLowerCase) || !pin.match(patternNonLetter) || !pin.match(patternNonNumeric) || !pin.match(patternNonSpecialCharacters) || pin.match(pattern_space)) {
    return false
  }
  return true
}

//No 3 consecutive Numbers (forward or backwards), ex 123, 111, 321
export const subscriberAlphaNumericPinRules = pin => {
  if (/012|123|234|345|456|567|678|789|890/.test(pin)
    || /098|987|876|765|654|543|432|321|210/.test(pin)) {
    return true
  }
  return false
}

export const isValidBrandingDnsName = value => {
  let pattern = /^[0-9a-zA-Z\!\@\$\^\&\*\(\)\-\_\=\{\}\;\:\'\{\[\}\]\|\<\,\.\>\/ ]+$/
  if (value.match(pattern)) {
    return true
  }
  return false


}

export const isValidFQDN = value => {
  let pattern = /^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/
  return pattern.test(value)
}

export const isValidPSTN = urlValue => {
  let urlRegex = new RegExp(/^\+?[0-9]\d{1,14}$/)
  if (urlRegex.test(urlValue)) {
    return true
  }
  return false
}

export const isValidSSL = urlValue => {
  let regex = new RegExp(/^((https:\/\/)[^./]+(?:\.[^./]+)+(?:\/.*)?)$/);
  if (regex.test(urlValue)) {
    return true
  }
  return false

}