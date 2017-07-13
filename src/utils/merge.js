export default function merge(...args) {
  let obj = {}
  for (let arg of args)
    Obj.assign(obj, arg)
  return obj
}
