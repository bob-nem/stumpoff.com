import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import NEXT_PUBLIC_API_URL from '../../.env.local'

import style from '../../styles/ContactForm.module.css'

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter();
    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: `${NEXT_PUBLIC_API_URL}/api/contact`,
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
        <div className={style.Container}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className={style.Row}>
                    <input
                        type="text"
                        name="name"
                        {...register("name", { required: { value: true, message: 'You must enter you name' } })}
                        placeholder="Name"
                    />
                    <span style={{ color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em" }}>{errors?.name?.message}</span>
                </div>
                <div className={style.Row}>
                    <input
                        type="text"
                        name="email"
                        {...register("email", {
                            required: { value: false, message: 'You must enter you email address' },
                            minLength: { value: 7, message: 'This is not long enough to be an email' },
                            maxLength: { value: 120, message: 'This is too long' },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'This needs to be a valid email address' }
                        })}
                        placeholder="E-mail"
                    />
                    <span style={{ color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em" }}>{errors?.email?.message}</span>
                </div>
                <div className={style.Row}>
                    <input                        
                        type="number"
                        name="phone"
                        {...register("phone", { required: true })}
                        placeholder="Phone"
                    />
                </div>
                <div className={style.Row}>
                    <textarea
                        type="text"
                        name="message"
                        rows="5"
                        {...register("message", {
                            required: { value: false, message: "You need to enter your message" },
                            maxLength: { value: 1618, message: "Your message can't be more than 1618 characters" },
                            minLength: { value: 16, message: "Your message must be longer than this" }
                        })}
                        placeholder="Message"></textarea>
                    <span style={{ color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em" }}>{errors?.Message?.message}</span>
                </div>
                <div className={style.RowButtonChoose}>
                    <button className="primary">choose a file</button>
                </div>
                <div className={style.RowButtonSend}>
                    <button className="primary">Send request</button>
                </div>
            </form>
        </div>
    )
}