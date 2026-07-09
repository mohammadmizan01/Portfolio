const Container = ({children}) => {
    return(
        <div className="mx-auto w-full px-6"
            style={{maxWidth:"var(--container-width)"}}
        >
            {children}

        </div>
    )
}

export default Container;