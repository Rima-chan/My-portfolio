import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./Alert";
import Spinner from "./Loader";

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [ isLoading, setIsLoading ] = useState(false);
    const [data, setData ] = useState({});
    const [error, setError ] = useState(null);
    const success = 'Message bien envoyé ! ';
    const fail = 'Oups, il y a eu un problème...';
    const onSubmit = data => {
        console.log(data);
        fetchData(data);
        reset();
    };
    const fetchData = async(data) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5500/contact', data);
            setData(response);
        } catch(e) {
            console.log(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }
    return(
        <>
        <div className="flex flex-col items-center pb-12" id="contact">
            <h2 className="uppercase md:text-4xl text-3xl tracking-widest text-center font-bold my-8 sm:mt-10 sm:mb-12">Contact</h2>
            <div className="flex flex-col flex-shrink-0 justify-center bg-white bg-opacity-60 shadow-md sm:items-center mx-4 px-4">
                <form className="w-full flex flex-col py-4 md:px-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative flex w-full flex-wrap items-stretch my-2">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-red-400 aboslute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-3">
                            <i className="fas fa-user"></i>
                        </span>
                        <label className="sr-only" htmlFor="name">Prénom et nom</label>
                        <input 
                            {...register('name', {required:true})}
                          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative text-sm bg-transparent border-b border-red-400 outline-none focus:outline-none focus:bg-gray-100 w-full pl-10" 
                          type="text" 
                          id="name"
                          placeholder="Nom / Prénom"></input>
                          <span className="text-sm text-red-500 italic pt-1">
                            {errors.name?.type === 'required' && 'Champs requis'}
                          </span>
                    </div>
                    <div className="relative flex w-full flex-wrap items-stretch my-2">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-red-400 aboslute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-3">
                            <i className="fas fa-at"></i>
                        </span>
                        <label className="sr-only" htmlFor="email">Adresse email</label>
                        <input 
                          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative text-sm bg-transparent border-b border-red-400 outline-none focus:outline-none focus:bg-gray-100 w-full pl-10" 
                          type="text" 
                          id="email" 
                          {...register('email', {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                          placeholder="Email"></input>
                        <span className="text-sm text-red-500 italic pt-1">
                            {errors.email?.type === 'required' && 'Champs requis'}
                            {errors.email?.type === 'pattern' && 'Email non valide'}
                        </span>
                    </div>
                    <div className="pt-3">
                        <label htmlFor="message" className="sr-only">Votre message</label>
                        <textarea 
                          {...register('message', {required: true})}
                          id="message"
                          rows="5" 
                          cols="40" 
                          placeholder="Message" 
                          className="px-3 py-3 placeholder-gray-400 text-gray-600 text-sm bg-transparent border-b border-red-400 outline-none focus:outline-none focus:bg-gray-100 w-full"
                        ></textarea>
                        <span className="text-sm text-red-500 italic pt-1">
                            {errors.message?.type === 'required' && 'Champs requis'}
                        </span>
                    </div>
                    <button 
                      type="submit" 
                      className="disabled:opacity-50 disabled:cursor-not-allowed sm:w-1/3 sm:self-center uppercase bg-red-400 text-white font-semibold text-sm rounded py-2 px-3 mt-5 hover:scale-110"
                    >
                        Envoyer</button>
                </form>
                { error ? (<Alert classes={'bg-gray-600 border-gray-600 text-green-gray font-semibold'} icon={'fas fa-exclamation-triangle'} content={fail}></Alert>) : null}
                { data.status === 201 ? (<Alert classes={'bg-green-600 border-green-600 text-green-600 font-semibold'} icon={'far fa-check-circle'} content={success}></Alert>) : null}
                { isLoading ? (<Spinner></Spinner>) : null}
                <div className="w-full pb-8 text-center">
                    <ul>
                        <li className="text-gray-700 py-1"><i className="fas fa-envelope pr-3 text-red-400"></i>contact.mbeaujeu@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;