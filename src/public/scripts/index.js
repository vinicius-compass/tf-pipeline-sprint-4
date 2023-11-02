

(async () => {
    try {
        let response = await fetch("/");
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        let data = await response.json();
        console.log(data)

        let responseJokes = await fetch("/api/piadas");
        if (!responseJokes.ok) {
            throw new Error(`${responseJokes.status} ${responseJokes.statusText}`);
        }
        let dataJokes = await responseJokes.json();
        console.log(dataJokes)

    } catch (error) {
        console.log("Catch error");
        console.error(error);
    }
})();