var ReactNative = require('react-native')
  , Dimensions  = ReactNative.Dimensions
  , { width, height } = Dimensions.get('window')

export function sf(f) {
  return Math.sqrt((height * height) + (width * width)) * (f / 650)
}

export function sw(w, offset = 0) {
  return w * (width / 100) + offset
}

export function sh(h, offset = 0) {
  return h * (height / 100) + offset
}
