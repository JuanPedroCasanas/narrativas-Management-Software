export function fetchParentByDni(dni) { //TODO CHECK THIS FUNC OUT, i think the problem is that it is returning an unfullfilled promis to the sendChildPostRequest func

    return fetch(`/getParent/${dni}`)
        .then(response => {
            if (response.ok) {
                response.text();
            } else {
                return Promise.reject(new Error("Fallo en la conexión"));
            }
        })
        .then(responseText => JSON.parse(responseText))
        .catch(error => console.error("Fallo buscando el registro del padre:", error.message));
}