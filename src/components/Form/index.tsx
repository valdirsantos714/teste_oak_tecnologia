type FormProps = {
    h2Text: string,
    children?: React.ReactNode
}

export const Form = ({h2Text, children}: FormProps) =>  {


    const noUpdate = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
        <div className="container">
            <form className="div_form" onSubmit={noUpdate}>
                <h2 className="h2_style">{h2Text}</h2>
                {children}
            </form>
        </div>
        
        </>
    )
}