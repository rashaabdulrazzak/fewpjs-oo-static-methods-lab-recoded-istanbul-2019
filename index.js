class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitizes(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }
  static titleize(string){
    let arr = ['a', 'an','and','but','of','for','at','by','from']
    let a = string.split(" " )
    return a.map(ele => arr.includes(ele) ? ele : Formatter.capitalize(ele.toLowerCase())).join(' ')
}
  
}