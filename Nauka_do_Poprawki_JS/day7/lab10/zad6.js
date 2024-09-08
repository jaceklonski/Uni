function executeAfterDelay(mili, cb) {
    setTimeout(cb, mili)}

executeAfterDelay(1000, () => console.log("aaa"))

