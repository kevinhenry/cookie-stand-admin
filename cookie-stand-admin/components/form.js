import { useState } from "react";
import useResource from "../hooks/useResource";

export default function CreateForm() {
    const [formItems, setFormItems] = useState({});
    const { createResource } = useResource();

    function handleChange(event) {
        const newFormItems = {
            ...formItems,
            [event.target.name]: event.target.value,
        };
        setFormItems(newFormItems);
    }

    function handleSubmit(event) {
        event.preventDefault();
        createResource(formItems);
    }

    return (
        <div className="m-8 w-5/6 h-auto rounded-md bg-green-300">
            <h2 className='text-left text-3xl font-bold m-4'>Cookie Stand Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 place-items-center'>
                    <label className='block'>ADD LOCATION</label>
                    <input name='location' className='block w-11/12' type="text" placeholder='Cookie Stand Location' onChange={handleChange} />
                    <button className="block font-medium text-xl bg-green-500 w-52 h-16 rounded-md hover:bg-blue-500">CREATE STAND</button>
                </div>
                <div className="grid grid-cols-3 font-bold place-items-center mt-4 mb-4">
                    <section>
                        <label className="block">MINIMUM CUSTOMERS PER HOUR:</label>
                        <input
                            name="minimum_customers_per_hour" className='block w-72'
                            type="number"
                            onChange={handleChange}
                            placeholder='0'
                        />
                    </section>
                    <section>
                        <label className="block">MAXIMUM CUSTOMERS PER HOUR:</label>
                        <input
                            name="maximum_customers_per_hour" className='block w-72'
                            type="number"
                            onChange={handleChange}
                            placeholder='0'
                        />
                    </section>
                    <section>
                        <label className="block">AVERAGE COOKIES PER SALE</label>
                        <input
                            name="average_cookies_per_sale" className='block w-72'
                            type="number"
                            onChange={handleChange}
                            placeholder='0'
                        />
                    </section>
                    {/* <button className="font-medium text-xl bg-green-500 w-52 h-16 rounded-md hover:bg-blue-500">Create</button> */}
                </div>
            </form>
        </div>
    )
}
