async function getData() {
    try {
        let response = await fetch('http://localhost:4000/api/doors/all');
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