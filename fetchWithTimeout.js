// Here the task is to fetch data via an API within given time, else abort the API request due to timeout

function fetchWithTimer(call, duration) {
    return new Promise((resolve, reject) => {

        // The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
        const controller = new AbortController()
        const signal = controller.signal
        let timer = null

        fetch(call, { signal }).then((resp) => resp.json().then((res) => {

            // Clear timeout if request completes within time
            clearTimeout(timer)
            resolve(res)
        })
        .catch((err) => reject(err))).catch((err) => reject(err))

        // timer starting simultaneously as the request
        timer = setTimeout(() => {
            controller.abort()
        },duration)
    })
}

async function fetchData() {
    try {
        const result = await fetchWithTimer('https://jsonplaceholder.typicode.com/todos/1', 10)
        console.log(result)
    }
    catch(err) {
        console.log(err)
    }
}

fetchData()