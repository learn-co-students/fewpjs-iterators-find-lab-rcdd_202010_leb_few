const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let r=record.find(record=>record.result==="W")
  return r ? r.year: undefined
}