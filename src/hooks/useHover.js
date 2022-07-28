import { useEffect, useRef, useState } from "react"

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const mouseIsOverElement = () => setHovered(true)
    const mouseIsNotOverElement = () => setHovered(false)

    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener("mouseenter", mouseIsOverElement)
            node.addEventListener("mouseleave", mouseIsNotOverElement)
            return () => {
                node.addEventListener("mouseenter", mouseIsOverElement)
                node.addEventListener("mouseleave", mouseIsNotOverElement)
            }
        }
    }, [])
    return [hovered, ref]
}

export default useHover