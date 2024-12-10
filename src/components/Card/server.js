async function getData(data) {
    try {
        let response = await fetch(`http://localhost:4000/api/doors/all?${data}`);
        if (response.ok) {
            return await response.json();
        } else {
            return [];
        }
    } catch (e) {
        console.log(e.message);
    }

}

export {getData};