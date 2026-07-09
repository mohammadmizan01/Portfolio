import { useEffect, useState } from "react"

const useActiveSection = ((sectionIds = []) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if(visible){
                    setActiveSection(visible.target.id);
                }
            },
            {
                rootMargin:"-40% 0px -40% 0px",
                threshold:0,
            }
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);

            if(section){
                observer.observe(section);
            }
        });
        return() => observer.disconnect();
    },[sectionIds]);
    return activeSection;
});

export default useActiveSection;