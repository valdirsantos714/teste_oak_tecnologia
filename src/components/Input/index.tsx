type InputProps = {
    textLabel?: string,
    placeholder: string,
    typeInput: string,
    idInput?: string,
    radioOption1?: string,
    radioOption2?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({textLabel,typeInput, placeholder, idInput, radioOption1, radioOption2, onChange}: InputProps) => {

    return (
        <>
            <label htmlFor={idInput} className="label_style">{textLabel}</label>

            {typeInput != "radio" ? (
                <input type={typeInput} placeholder={placeholder} id={idInput} className="input_style" onChange={onChange}/>
            ): (
                <>

                    <div className="flex gap-[1rem] pt-[0.3rem]">
                        <label htmlFor="opcao1">
                            <input type="radio" name="opcao" id="opcao1" value={radioOption1} className="mr-[0.2rem]"/> 
                        {radioOption1}
                        </label>
                        <label htmlFor="opcao2">
                            <input type="radio" name="opcao" id="opcao2" value={radioOption2} className="mr-[0.2rem]"/>
                        {radioOption2}
                        </label>
                    </div>
                </>
            )}
            
        </>
    )

}