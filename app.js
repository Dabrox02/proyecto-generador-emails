export const app = (e) => {
    let path = window.location.pathname.split(".")[0];
    if (path === "/index") {
        document.title = "JTV Premium - Inicio";
    }

}