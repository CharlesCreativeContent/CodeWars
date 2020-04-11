/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
*/

//Answer//

function removeUrlAnchor(url){
return (url.indexOf('#')!==-1?url.slice(0,url.indexOf('#')):url)
}
