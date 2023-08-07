module.exports = function check(str, bracketsConfig) {
  const t = Object.fromEntries(bracketsConfig)
  res = []
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(t).includes(str[i]) && t[str[i]] !== res[res.length -1]) {
      res.push(str[i])
    } else {
      if (t[res[res.length -1]] === str[i]){
        res.pop();
      } else {
        return false
      }
    }
  }
  if (res.length == 0) {
    return true
  } else {
    return false
  }
}
