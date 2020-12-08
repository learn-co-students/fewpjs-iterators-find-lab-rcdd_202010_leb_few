const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
if(result){return result.year}
return undefined
}