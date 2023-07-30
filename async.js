async function bar() {
    await new Promise((resolve, rejected) => setTimeout(()=> {
        console.log("setTimeout 종료!")
        resolve()
    }, 3000))
    console.log("bar 종료")
    return
}


async function foo() {
    await bar()
    // bar()
    console.log("foo 종료!")
}

async function init() {
    // await foo()
    foo()
    console.log("init종료!")    
}

init()
