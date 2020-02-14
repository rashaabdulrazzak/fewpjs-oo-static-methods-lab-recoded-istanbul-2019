class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitizes(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }
  static titleize(string){
  let a = s.split(" " )
   return a.map(ele => arr.includes(ele) ? ele : capitalize(ele.toLowerCase())).join(' ')
}
  
}