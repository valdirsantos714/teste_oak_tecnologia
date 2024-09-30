type InputProps = {
    textLabel?: string;
    placeholder: string;
    typeInput: string;
    idInput?: string;
    value: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    required: boolean
}

export const Input = ({textLabel,typeInput, placeholder, idInput, value,onChange, required}: InputProps) => {

    return (
        <>
            <label htmlFor={idInput} className="label_style">{textLabel}</label>

            {required == true ? (
                <input type={typeInput} placeholder={placeholder} id={idInput} className="input_style" onChange={onChange} value={value} required/>
                
            ): (
                <input type={typeInput} placeholder={placeholder} id={idInput} className="input_style" onChange={onChange} value={value}/>
            )}
            
            
        </>
    )

}