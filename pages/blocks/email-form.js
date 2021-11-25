import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import API_KEY from '../../apikey'

import style from '../../styles/ContactForm.module.css'

export default function EmailForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter();
    
    async function onSubmitForm(values) {
        
        let config = {
            method: 'post',
            url: `${API_KEY.url}/api/contact`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            console.log(response);
            if (response.data.status == 200) {
                reset();
                toast(
                    'success',
                    'Thank you for contacting us, we will be in touch soon.'
                );
            }
        } catch (err) { console.log(err); }
    }
    return (
        <div className={style.Container} style={{marginTop: ".5rem"}}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className={style.Row}>
                    <input
                        type="text"
                        name="email"
                        {...register("email", {
                            required: { value: true, message: 'You must enter you email address' },
                            minLength: { value: 7, message: 'This is not long enough to be an email' },
                            maxLength: { value: 120, message: 'This is too long' },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'This needs to be a valid email address' }
                        })}
                        placeholder="E-mail"
                        style={{background: "white"}}
                    />
                    <span>{errors?.email?.message}</span>
                </div>
                <div className={style.RowButtonSend}>
                    <button className="primary">Get a quote today</button>
                </div>
            </form>
        </div>
    )
}