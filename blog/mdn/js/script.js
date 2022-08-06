const prevWinOnload = window.onload;
window.onload = () => {
    prevWinOnload && prevWinOnload();

    const theme = localStorage.getItem("theme");
    const themeButtons = document.querySelectorAll(".select-theme+ul a");
    if (theme) {
        document.documentElement.className = theme;
        themeButtons.forEach(b => b.classList.remove("selected"));
        if (theme === "light") {
            themeButtons[1].classList.add("selected");
        } else {
            themeButtons[2].classList.add("selected");
        }
    }
    // 0默认 1浅色 2深色
    themeButtons[0].onclick = ()=>{
        document.documentElement.className = "theme";
        localStorage.removeItem("theme");
        themeButtons.forEach(b => b.classList.remove("selected"));
        themeButtons[0].classList.add("selected");
    };
    themeButtons[1].onclick = ()=>{
        document.documentElement.className = "light";
        localStorage.setItem("theme", "light");
        themeButtons.forEach(b => b.classList.remove("selected"));
        themeButtons[1].classList.add("selected");
    };
    themeButtons[2].onclick = ()=>{
        document.documentElement.className = "dark";
        localStorage.setItem("theme", "dark");
        themeButtons.forEach(b => b.classList.remove("selected"));
        themeButtons[2].classList.add("selected");
    };
    /* else {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        matchMedia.addEventListener("change", (self)=>{
            if (self.matches) {
                html.classList.remove("light");
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
                html.classList.add("light");
            }
        });
    }*/
};