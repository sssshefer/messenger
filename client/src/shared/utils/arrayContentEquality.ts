export function arrayContentEquality(a: any[], b: any[]) {
    if(!a||!b) return false
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}