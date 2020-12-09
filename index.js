const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (record){
  
let win= record.find( elem => elem.result === "W")
  if(win !== undefined)
  return win.year
  else return undefined
} 