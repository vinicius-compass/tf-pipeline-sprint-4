
(async () => {
    try {
        let response = await fetch("/");
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        let data = await response.json();
        console.log(data)

    } catch (error) {
        console.log("Catch error");
        console.error(error);
    }
})();