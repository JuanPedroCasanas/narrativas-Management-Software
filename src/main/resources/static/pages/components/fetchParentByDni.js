export async function fetchParentByDni(dni) {
    try {
        const response = await fetch(`/getParent/${dni}`);
        if (response.ok) {
            return response.json(); // Parse JSON here
        } else {
            throw new Error("Fallo en la conexión");
        }
    } catch (error) {
        console.error("Fallo buscando el registro del padre:", error.message);
        throw error; // Rethrow the error to propagate it further if needed
    }
}
