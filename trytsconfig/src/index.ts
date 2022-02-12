import { helloworld } from './sub'
import * as settings from './settings.json'

console.log(settings)

class JonDo {
  name?: `jon` | 'do'

  setup() {}
}

class KonDo extends JonDo {
  // error: noImplicitOverride = true. not write override
  // setup() {}
  override setup() {}
}

interface Settings {
  name: string
  [key: string]: string
}

// error: noUnusedParameters = true. not used argument
// function hello(name?: string) {
function hello() {
  console.log(helloworld)

  // error: noUnusedLocals true. not used in below code
  // const a = 'b'

  // error: allowUnreachableCode = false
  return
  // return
}

export function sampleClass() {
  var jon = new KonDo()
  // error: exactOptionalPropertyTypes = true
  // jon.name = undefined
  // jon.name = 'jon'
  console.log(jon.name)
  console.log(jon['name'])

  var i: number = 1
  switch (i) {
    case 1:
      console.log(1)
      // error: noFallthroughCasesInSwitch = true if not write break
      break
    default:
      console.log(999)
  }
}

export function sampleInterface() {
  const setting: Settings = {
    name: 'name',
    myProperty: 'myProperty'
  }
  console.log(setting.name)

  // error: noPropertyAccessFromIndexSignature = true
  // console.log(setting.myProperty)
  console.log(setting['myPropertya'])
}

export function sampleArray(a?: string[]) {
  // error: strictNullChecks = true. if use nullable value without check
  // console.log(a.length)
  if (a) {
    console.log(a.length)
  }
}

hello()
sampleClass()
sampleInterface()
sampleArray()
