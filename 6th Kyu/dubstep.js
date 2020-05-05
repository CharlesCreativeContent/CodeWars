!ans

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

//Or//


function songDecoder(song){
return song.split('WUB').filter(x=>x!=='').join(' ')
}
