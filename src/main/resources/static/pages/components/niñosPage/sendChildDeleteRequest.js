export function sendChildDeleteRequest(dni) {
    const requestOptions = {
        method: "DELETE",
    };

    fetch(`/deleteChild/${dni}`, requestOptions)
        .then(response => {
            if (response.ok) {
                console.log("Objeto eliminado");
            } else {
                return Promise.reject(new Error("Fallo en la conexión"));
            }
        })
        .catch(error => console.error("Fallo en el borrado del registro:", error.message));
}