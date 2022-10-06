const rejectedPromise = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject({'Error': 'Rejected Promise!'});
        }, 500)
    })
}

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'Message': 'Resolved Promise!'});
        },500)
    })
}

resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(error => console.log(error))