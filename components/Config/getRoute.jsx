
export const getRoute = (pathname) => {
    if (pathname.startswith("/projects")) {
    return{
        title: "Projects",
        Subhead: "My Work",
};
}
if (pathname.startswith("/skills")) {
    return{
        title: "skills",
        Subhead: "My Work",
};
}
if (pathname.startswith("/education")) {
    return{
        title: "Projects",
        Subhead: "My Work",
};
}
if (pathname.startswith("/experience")) {
    return{
        title: "Professional Experience",
        Subhead: "Career Journey and Roles",
};
}
if (pathname.startswith("/contact")) {
    return{
        title: "contact",
        Subhead: "Get In Touch",
};
}
  return {
    title: "DashBoard",
    Subhead: "Overview",
  }
};
