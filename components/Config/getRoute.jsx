
export const getRoute = (pathname) => {
    if (pathname.startsWith("/projects")) {
  return {
    title: "Projects",
    subhead: "A Showcase of My Work and Practical Implementations",
  };
}

if (pathname.startsWith("/skills")) {
  return {
    title: "Skills",
    subhead: "Technologies and Tools I Use to Build Solutions",
  };
}

if (pathname.startsWith("/education")) {
  return {
    title: "Education",
    subhead: "Academic Background and Continuous Learning Journey",
  };
}

if (pathname.startsWith("/experience")) {
  return {
    title: "Professional Experience",
    subhead: "Career Journey, Roles, and Real-World Impact",
  };
}

if (pathname.startsWith("/contact")) {
  return {
    title: "Contact",
    subhead: "Let’s Connect and Collaborate",
  };
}

return {
  title: "Dashboard",
  subhead: "Overview of My Portfolio and Activities",
};
}